from flask import Flask, render_template, request, send_file, send_from_directory, url_for
import os
import pydicom
import torch
import numpy as np
from torchvision import transforms
from PIL import Image
import matplotlib.pyplot as plt
from model import build_unet
import time

app = Flask(__name__)
#app.secret_key = os.environ.get('SECRET_KEY', 'default-secret-key-for-development-only')


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Clean up the temporary directory
        delete_temp_files()
        # Get the uploaded image file
        image = request.files['image']
        
        # Check if the uploaded file is a DICOM file
        if image.filename.endswith('.dcm'):
            # Read the DICOM file using pydicom
            ds = pydicom.dcmread(image)
            
            # Extract the pixel array from the DICOM file
            pixel_array = ds.pixel_array
            pixel_array_norm=scale(pixel_array)
            # Get the values entered by the user
            value1 = request.form['value1']
            value2 = request.form['value2']
            value3 = request.form['value3']
            value4 = request.form['value4']
            
            # Check if the values fall into the specific range
            if int(value1) >= 0 and int(value1) <= 100 and int(value2) >= 0 and int(value2) <= 2000:
                # Transform the values into a PyTorch feature tensor
                feature_tensor = torch.tensor([[float(value1), float(value2), float(value3), float(value4)]])
            else:
                error_msg = 'Invalid value range. Please enter values between 0 and 100 ms for TE and 0 and 2000 ms for TR.'
                return render_template('error.html', error_msg=error_msg)
            
            # Load the model from the .pt file
            current_dir = os.path.dirname(__file__)
            model_path = os.path.join(current_dir, "imt_model_5.pt")
            if torch.cuda.is_available():
                model = build_unet()
                model.load_state_dict(torch.load(model_path))
            else:
                model = build_unet()
                model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
            
            # Set the model to evaluation mode
            model.eval()

            # Loop through all images and predict new arrays
            for idx, image in enumerate(pixel_array_norm):
                # Transform the pixel array into a PyTorch image tensor
                image_tensor=torch.from_numpy(np.array(image))
                # Resize the image tensor to 256x256
                image_tensor = image_tensor.unsqueeze(0).unsqueeze(0)  # Add channel and batch dimensions
                resize_transform = transforms.Resize((256, 256))
                image_tensor = resize_transform(image_tensor)
                # Normalize the pixel values to be between 0 and 1
                image_tensor_normalized = image_tensor.float() / 255.0

                # Perform the prediction using the image tensor and feature tensor
                with torch.no_grad():
                    prediction = model(image_tensor_normalized, feature_tensor)

                # Set the pixel array of the DICOM dataset to the prediction array
                image_tensor_pred = prediction.float() * 255.0
                resize_transform_pred = transforms.Resize((300, 300))
                image_tensor_pred = resize_transform_pred(image_tensor_pred)
                
                image_pred=rescale(image_tensor_pred.squeeze().numpy()).astype(int)
            
                pixel_array[idx]=image_pred

            # Rearrange the DICOM file
            ds.PixelData = pixel_array.tobytes()
            ds.RepetitionTime = int(value4)
            ds.EchoTime = int(value3)

            # Convert the last prediction tensor to a PIL image
            prediction_image = Image.fromarray(prediction.squeeze().numpy())
            orig_image = Image.fromarray(image_tensor_normalized.squeeze().numpy())

            temp_directory = "temporary/"

            # Save the DICOM byte string to a temporary file
            temp_dicom_file_path = os.path.join(temp_directory, "temporary_file.dcm")
            ds.save_as(temp_dicom_file_path)

            # Save the PNG image to a temporary file
            temp_file_path_orig = os.path.join(temp_directory, "temporary_file_orig.png")
            temp_file_path_pred = os.path.join(temp_directory, "temporary_file_pred.png")

            plt.imsave(temp_file_path_pred, prediction_image, cmap='gray')
            plt.imsave(temp_file_path_orig, orig_image, cmap='gray')

            dicom_data_url = url_for('serve_temp_file', filename=os.path.basename(temp_dicom_file_path))
            prediction_image_url = url_for('serve_image', filename=os.path.basename(temp_file_path_pred))
            orig_image_url = url_for('serve_image', filename=os.path.basename(temp_file_path_orig))

            return render_template('return.html', dicom_file_path=dicom_data_url, predicted_image_path=prediction_image_url, original_image_path=orig_image_url, time=int(time.time()))

        else:
            return 'Invalid file format. Please upload a DICOM file.'

    return render_template('interface_template.html')

@app.route('/download')
def download_dicom():
   # Retrieve the file path from the query parameters
    dicom_file_path = request.args.get('file_path', '')

   # Use Flask's send_file to send the file for download
    response = send_file(dicom_file_path, as_attachment=True, download_name='downloaded_file.dcm')

    # Delete the file after it has been sent for download
    os.remove(dicom_file_path)

    return response

def delete_temp_files():
    # Cleanup the temporary files
    print("Running cleanup...")
    try:
        current_dir = os.path.dirname(__file__)
        os.remove(f'{current_dir}/temporary/')
    except Exception as e:
        print(f"Error during cleanup: {e}")

@app.route('/image/<filename>')
def serve_image(filename):
    return send_from_directory("temporary/", filename)

@app.route('/temp-files/<filename>')
def serve_temp_file(filename):
    return send_from_directory("temporary/", filename)

def scale(array):
    array = (array / 127.5) - 1
    return array

def rescale(array):
    array = (array + 1) * 127.5
    return array

if __name__ == '__main__':
    app.run(port=5004, debug=True)