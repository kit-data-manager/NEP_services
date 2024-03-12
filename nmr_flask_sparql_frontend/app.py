from dotenv import load_dotenv
load_dotenv()
from flask import Flask, render_template, request, redirect, abort, url_for
import json
from sparql_service import SPARQLService
import keycloak
import os
import urllib.parse
from functools import wraps

KEYCLOAK_TOKEN_KEY = 'keycloak_token'
KEYCLOAK_REFRESH_KEY = 'keycloak_refresh'

DEFAULT_PATH = os.getenv('DEFAULT_PATH')

app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')
app.config['SERVER_NAME'] = os.getenv('FLASK_URL')
app.config['DEBUG'] = os.getenv('DEBUG_MODE', 'false').lower == 'true'

sparql_service = SPARQLService(os.getenv('SPARQL_URL'))
KEYCLOAK_URL = os.getenv('KEYCLOAK_URL')
KEYCLOAK_REALM = os.getenv('KEYCLOAK_REALM')
KEYCLOAK_CLIENT = os.getenv('KEYCLOAK_CLIENT')
keycloak_service = keycloak.KeycloakOpenID(KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT, None)

def get_and_validate_keycloak() -> str | None:
    token = request.cookies.get(KEYCLOAK_TOKEN_KEY)
    if not token:
        return None
    try:
        info = keycloak_service.userinfo(token)
    except Exception as e:
        return None
    return token

def query(keycloak, attribute, value):
    sparql_query = sparql_service.construct_query(attribute, value)
    print(sparql_query)

    query_result = sparql_service.execute_query(sparql_query)

    if isinstance(query_result, str):
        abort(500, query_result) # Internal server error - could be bad arguments

    results_list = [
        {
            'attributeValue_np': result['attributeValue_np']['value'],
            'pid': result['pid']['value']
        }
        for result in query_result['results']['bindings']
    ]
    
    return results_list

@app.route('/authenticate')
def authenticate():
    redirect_url = urllib.parse.unquote(request.args.get('redirect', DEFAULT_PATH))
    refresh = request.cookies.get(KEYCLOAK_REFRESH_KEY)
    if refresh:
        try:
            token = keycloak_service.refresh_token(refresh)
            response = redirect(redirect_url)
            response.set_cookie(KEYCLOAK_TOKEN_KEY, token['access_token'])
            response.set_cookie(KEYCLOAK_REFRESH_KEY, token['refresh_token'])
            print('refresh!')
            return response
        except Exception as e:
            pass # we need to actually log in
    if get_and_validate_keycloak():
        return redirect(auth_url)
    target = url_for('authenticate_return', redirect=urllib.parse.quote(redirect_url), _external=True)
    auth_url = keycloak_service.auth_url(urllib.parse.quote(target), scope='openid')
    return redirect(auth_url)

@app.route('/authenticate_return')
def authenticate_return():
    redirect_url = urllib.parse.unquote(request.args.get('redirect', DEFAULT_PATH))
    if get_and_validate_keycloak():
        return redirect(auth_url)
    code = request.args.get('code')
    if not code:
        abort(400, 'Missing parameters')
    try:
        target = url_for('authenticate_return', redirect=urllib.parse.quote(redirect_url), _external=True)
        token = keycloak_service.token(grant_type='authorization_code', code=code, redirect_uri=target)
    except Exception as e:
        abort(400, 'Invalid auth code ' + str(e))
    response = redirect(redirect_url)
    response.set_cookie(KEYCLOAK_TOKEN_KEY, token['access_token'])
    response.set_cookie(KEYCLOAK_REFRESH_KEY, token['refresh_token'])
    return response

def execute_query(keycloak):
    attribute = request.args.get('record_attribute')
    value = request.args.get('attribute_value')
    if not value or not attribute:
        abort(400, 'Missing parameters') # Bad request
    data = query(keycloak, attribute, value)
    return renderer(data)

def keycloak(function):
    @wraps(function)
    def inner(*args, **kwargs):
        keycloak = get_and_validate_keycloak()
        if keycloak is None:
            return redirect(url_for('authenticate', redirect=urllib.parse.quote(request.url)))
        return function(keycloak, *args, **kwargs)
    return inner

@app.route('/')
@keycloak
def frontend(keycloak):
    data = execute_query(keycloak)
    return render_template('frontend.html', results=data)

@app.route('/api')
@keycloak
def api(keycloak):
    data = execute_query(keycloak)
    if 'User-Agent' in request.headers:
        return render_template('api.html', data=json.dumps(data, indent=2))
    else:
        return json.dumps(data, indent=2)

if __name__ == '__main__':
    app.run(host='localhost', port=8000)