import io
from dotenv import load_dotenv
from flask import Flask, abort, make_response, render_template, request, send_file, send_from_directory, redirect, session, jsonify, url_for
import random
import os
from sparql_service import SPARQLService
from functools import wraps
from datetime import datetime, timedelta
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
import shutil
from werkzeug.exceptions import HTTPException
from urllib.parse import unquote_plus
import redis
import gzip
import base64
from werkzeug.middleware.proxy_fix import ProxyFix

load_dotenv() # This loads the variables from .env into the environment
app = Flask(__name__, template_folder = os.getcwd() + '/templates', static_folder = os.getcwd() + '/static')

app.wsgi_app = ProxyFix(
    app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1
)
REDIS_EXPIRIY_TIME_SECONDS = 60 * 30

redis_db = redis.Redis(host='localhost', port=6379, decode_responses=True)

def copy_dict(d: dict, blacklist: set):
    return {k: v for k, v in d.items() if k not in blacklist}

@app.context_processor
def inject_stage_and_region():
    return { 'copy_dict': copy_dict }

current_dir = os.path.dirname(__file__)
app.secret_key = os.environ.get('SECRET_KEY')

#app.secret_key = os.environ.get('SECRET_KEY', 'default-secret-key-for-development-only')

sparql_service = sparql_service = SPARQLService()

def monitoring(token):
    url = '.../access/'
    # Headers as a dictionary
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
    }

    # Payload as a dictionary
    payload = {
        "virtual_service_id": "my_operation",
        "payload": {}
    }

    # Make the POST request
    response = requests.post(url, headers=headers, data=json.dumps(payload))

    # Check the response
    if response.status_code == 201:
        print("Success:", response.json())
    else:
        print("Error:", response.status_code, response.text)


@app.route('/start_query')
def start_query():
    # display the form for SPARQL query submission
    return render_template('start_query.html')

@app.route('/execute_query')
def execute_query():
    """
    Execute the SPARQL query.

    :return: The rendered template or a redirect.
    """

    args = {**request.args}
    if 'zdata' in args:
        zdata = args['zdata']
        bin_data = base64.b64decode(zdata.replace(' ', '+'))
        str_data = gzip.decompress(bin_data)
        args = json.loads(str_data)

    sparql_request = args.get('sparql_request')

    # Execute SPARQL query and get PIDs
    query_result = sparql_service.execute_query(sparql_request)
    # Extract 'attributeValue_np' and 'pid' from the results
    results_list = [
        {
            'attribute': result['attribute_np'].value,
            'attributeValue': result['attributeValue_np'].value,
            'pid': result['pid'].value
        }
        for result in query_result
    ]

    data_id = ''.join(random.choice('0123456789abcdef') for _ in range(32))
    redis_db.set(data_id, json.dumps(results_list), ex=REDIS_EXPIRIY_TIME_SECONDS)

    print(f'registered for id {data_id}: {json.dumps(results_list)}')

    session['fdo_search_results'] = data_id
    del args['sparql_request']
    return redirect(url_for('render_results_nmr_graph', **args))

@app.route('/')
def index():
    """
    Redirect to the start_query route.

    :return: A redirect.
    """
    return redirect('/start_query')
    #should lead to dashboard


@app.route('/render_results_nmr_graph')
def render_results_nmr_graph():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    args = { **request.args }

    data_id = session.get('fdo_search_results')
    if data_id is None:
        abort(400, "no results found")

    fdo_search_results = json.loads(redis_db.get(data_id))
    if fdo_search_results is None:
        abort(400, "no results found")
    return render_template('results.html', results=fdo_search_results, args=args)

@app.route('/render_results_mri_pred')
def render_results_mri_pred():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    args = { **request.args }
    query_request_url = url_for('prediction', **args)

    dicom_data_url = session.get('dicom_data_url')
    prediction_image_url = session.get('prediction_image_url')
    orig_image_url = session.get('orig_image_url')
    return render_template('return_pred_image.html', dicom_file_path=dicom_data_url, predicted_image_path=prediction_image_url, original_image_path=orig_image_url, time=int(time.time()), query_request_url=query_request_url)

@app.route('/receive_token_nmr_graph', methods=['POST'])
def receive_token_nmr_graph():
    token = request.json.get('token')
    session['keycloak_token_nmr_graph'] = token
    # print("Received token for nmr graph:", token)
    monitoring(token)
    return jsonify({"status": "Token received successfully"})

@app.route('/receive_token_mri_pred', methods=['POST'])
def receive_token_mri_pred():
    token = request.json.get('token')
    session['keycloak_token_mri_pred'] = token
    # print("Received token for mri prediction:", token)
    monitoring(token)
    return jsonify({"status": "Token received successfully"})

@app.route('/prediction', methods=['GET', 'POST'])
def prediction():
    if request.method == 'POST':
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

            #user_id = session['keycloak_token_mri_pred'] if 'keycloak_token_mri_pred' in session else ''.join(random.choice('0123456789abcdef') for n in range(8))
            if 'keycloak_token_mri_pred' in session:
                user_id = session['keycloak_token_mri_pred']
            else:
                user_id = ''.join(random.choice('0123456789abcdef') for n in range(8))
                session['keycloak_token_mri_pred'] = user_id
            print(session['keycloak_token_mri_pred'])
            path = os.path.join(os.getcwd(), "temporary/")
            path = os.path.join(path, user_id[:8])

            # Check if the directory already exists to avoid an error
            if not os.path.exists(path):
                os.makedirs(path)
                print(f"Directory '{user_id[:8]}' created at '{path}'.")
            else:
                print(f"Directory '{user_id[:8]}' already exists at '{path}'.")

            temp_directory = path
            session['temp_directory'] = temp_directory

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
def download_dicom():
   # Retrieve the file path from the query parameters
    dicom_file_path = request.args.get('file_path', '')

   # Use Flask's send_file to send the file for download
    response = send_file(dicom_file_path, as_attachment=True, download_name='downloaded_file.dcm')
    token = session['keycloak_token_mri_pred']
    monitoring(token)

    return response

@app.route('/image/<filename>')
#@token_required_mri_pred
def serve_image(filename):
    print("!!",session['keycloak_token_mri_pred'])
    token = session['keycloak_token_mri_pred']
    monitoring(token)
    temp_directory = session['temp_directory']
    return send_from_directory(temp_directory, filename)

@app.route('/temp-files/<filename>')
#@token_required_mri_pred
def serve_temp_file(filename):
    token = session['keycloak_token_mri_pred']
    monitoring(token)
    temp_directory = session['temp_directory']
    return send_from_directory(temp_directory, filename)

@app.errorhandler(Exception)
def handle_exception(e):
    if isinstance(e, HTTPException):
        print(f'{e.code}: {e.name} {e.description}: {request.url}')
        return render_template('error.html', error_code=e.code, error_title=e.name, error_msg=e.description)
    try:
        import traceback
        etype, value, tb = type(e), e, e.__traceback__
        print(''.join(traceback.format_exception(etype, value, tb)))
    except Exception as ex:
        print(ex)
        pass
    print(f'{type(e).__name__}: {e}')
    return render_template('error.html', error_title=type(e).__name__, error_msg=f'{e}')


def scale(array):
    array = (array / 127.5) - 1
    return array

def rescale(array):
    array = (array + 1) * 127.5
    return array

if __name__ == '__main__':
    app.run(host='metarepo.nffa.eu', port=8000, debug=True)
