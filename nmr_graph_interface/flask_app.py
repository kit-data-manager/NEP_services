from flask import Flask, render_template, request, send_file, send_from_directory, redirect, session, jsonify, url_for
import os
from sparql_service import SPARQLService
from functools import wraps
from datetime import datetime, timedelta
import redis
from redis import Redis
from flask_session import Session

import pydicom
import torch
import numpy as np
from torchvision import transforms
from PIL import Image
import matplotlib.pyplot as plt
from model import build_unet
import time
import requests
import json

app = Flask(__name__)
redis_client = Redis(host='localhost', port=6379, db=0, decode_responses=True)

current_dir = os.path.dirname(__file__)

app.secret_key = os.environ.get('SECRET_KEY', 'default-secret-key-for-development-only')  # you should set SECRET_KEY environment variable in production
#app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', 'default_key_for_development')

# Configure Redis for storing the session data on the server-side
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_REDIS'] = redis.from_url('redis://127.0.0.1:6379')

# Create and initialize the Flask-Session object AFTER `app` has been configured
server_session = Session(app)

sparql_service = sparql_service = SPARQLService("http://localhost:3030/fdo_graph/query")


def monitoring(token):
    url = 'https://be.nffa.eu/api/v2/monitoring/access/'
    # Headers as a dictionary
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
    }

    # Payload as a dictionary
    payload = {
        "virtual_service_id": "my_operation",
        "payload": {}
    }

    # Make the POST request
    response = requests.post(url, headers=headers, data=json.dumps(payload))

    # Check the response
    if response.status_code == 200:
        print("Success:", response.json())
    else:
        print("Error:", response.status_code, response.text)

def token_required_nmr_graph(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'keycloak_token_nmr_graph' in session:
            token_info = session.get('keycloak_token_nmr_graph')
            if token_info and datetime.now().timestamp() < token_info['expires_at']:
                print("token still valid")
                token = 'Bearer ' + token_info['value']
                monitoring(token)
            else:
                print("token expired")
                return redirect('/login_nmr_graph')
        elif 'keycloak_token_nmr_graph' not in session:
            print("no token found")
            # Token is not present in session, redirect to login page
            return redirect('/login_nmr_graph')
        return f(*args, **kwargs)
    return decorated_function

def token_required_mri_pred(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'keycloak_token_mri_pred' in session:
            token_info = session.get('keycloak_token_mri_pred')
            if token_info and datetime.now().timestamp() < token_info['expires_at']:
                print("token still valid")
                token = 'Bearer ' + token_info['value']
                monitoring(token)
            else:
                print("token expired")
                return redirect('/login_mri_pred')
        elif 'keycloak_token_mri_pred' not in session:
            print("no token found")
            # Token is not present in session, redirect to login page
            return redirect('/login_mri_pred')
        return f(*args, **kwargs)
    return decorated_function

@app.route('/execute_query', methods=['GET', 'POST'])
@token_required_nmr_graph
def execute_query():
    """
    Execute the SPARQL query.

    :return: The rendered template or a redirect.
    """
    
    if request.method == 'POST':
        attribute = request.form.get('record_attribute')
        value = request.form.get('attribute_value')
        pid = request.form.get('pid')
        if attribute:
            sparql_query = sparql_service.construct_query_1(attribute, value)
            # Execute SPARQL query and get PIDs
            query_result = sparql_service.execute_query(sparql_query)
            # Extract 'attributeValue_np' and 'pid' from the results
            results_list = [
                {
                    'attributeValue_np': result['attributeValue_np']['value'],
                    'pid': result['pid']['value']
                }
                for result in query_result['results']['bindings']
            ]
            session['attribute_search_results'] = results_list
            session['attribute'] = attribute
            return redirect(url_for('render_results_nmr_graph', request_type="attribute_and_value"))
        elif pid:
            sparql_query = sparql_service.construct_query_2(pid)
            # Execute SPARQL query and get PIDs
            query_result = sparql_service.execute_query(sparql_query)
            # Extract 'attributeValue_np' and 'pid' from the results
            results_list = [
                {
                    'attribute': result['attribute_np']['value'],
                    'attributeValue_np': result['attributeValue_np']['value']
                }
                for result in query_result['results']['bindings']
            ]
            session['fdo_search_results'] = results_list
            session['pid'] = pid
            return redirect(url_for('render_results_nmr_graph', request_type="pid"))
    # For GET request, display the form for SPARQL query submission
    return render_template('start_query.html')

@app.route('/')
def index():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    #return redirect('/login')
    #should lead to dashboard


@app.route('/render_results_nmr_graph')
@token_required_nmr_graph
def render_results_nmr_graph():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    request_type=request.args.get('request_type', default=None)
    
    if request_type=="pid":
        pid = session.get('pid')
        fdo_search_results = session.get('fdo_search_results')
        return render_template('results_pids.html', pid=pid, results=fdo_search_results)
    if request_type=="attribute_and_value":
        attribute = session.get('attribute')
        attribute_search_results = session.get('attribute_search_results')
        return render_template('results_attributes_values.html', attribute=attribute, results=attribute_search_results)


@app.route('/render_results_mri_pred')
@token_required_mri_pred
def render_results_mri_pred():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    print("test")
    dicom_data_url = session.get('dicom_data_url')
    prediction_image_url = session.get('prediction_image_url')
    orig_image_url = session.get('orig_image_url')
    return render_template('return_pred_image.html', dicom_file_path=dicom_data_url, predicted_image_path=prediction_image_url, original_image_path=orig_image_url, time=int(time.time()))

@app.route('/login_nmr_graph')
def login_nmr_graph():
    if request.method == 'POST':
        # Here you would handle the login logic, authenticate the user,
        # and set something like session['authenticated'] = True on success
        return redirect(url_for('execute_query'))
    # For a GET request, just render the login page
    return render_template('login_nmr_graph.html')

@app.route('/login_mri_pred')
def login_mri_pred():
    if request.method == 'POST':
        # Here you would handle the login logic, authenticate the user,
        # and set something like session['authenticated'] = True on success
        return redirect(url_for('prediction'))
    # For a GET request, just render the login page
    return render_template('login_mri_pred.html')

@app.route('/receive_token_nmr_graph', methods=['POST'])
def receive_token_nmr_graph():
    token = request.json.get('token')
    # You should also verify the token's validity here before storing it
    token_expiration = datetime.now() + timedelta(minutes=5)
    session['keycloak_token_nmr_graph'] = {'value': token, 'expires_at': token_expiration.timestamp()}
    print("Received token for nmr graph:", token)
    return jsonify({"status": "Token received successfully"})

@app.route('/receive_token_mri_pred', methods=['POST'])
def receive_token_mri_pred():
    token = request.json.get('token')
    # You should also verify the token's validity here before storing it
    token_expiration = datetime.now() + timedelta(minutes=5)
    session['keycloak_token_mri_pred'] = {'value': token, 'expires_at': token_expiration.timestamp()}
    print("Received token for mri prediction:", token)
    return jsonify({"status": "Token received successfully"})

@app.route('/prediction', methods=['GET', 'POST'])
@token_required_mri_pred
def prediction():
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

            session['dicom_data_url'] = dicom_data_url
            session['prediction_image_url'] = prediction_image_url
            session['orig_image_url'] = orig_image_url

            return redirect(url_for('render_results_mri_pred'))

        else:
            render_template('error.html', error_msg='Invalid file format. Please upload a DICOM file.')

    return render_template('prediction.html')

@app.route('/download')
@token_required_mri_pred
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
@token_required_mri_pred
def serve_image(filename):
    return send_from_directory("temporary/", filename)

@app.route('/temp-files/<filename>')
@token_required_mri_pred
def serve_temp_file(filename):
    return send_from_directory("temporary/", filename)

def scale(array):
    array = (array / 127.5) - 1
    return array

def rescale(array):
    array = (array + 1) * 127.5
    return array
if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)