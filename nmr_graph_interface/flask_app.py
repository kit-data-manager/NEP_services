from flask import Flask, render_template, request, redirect, session
import os
import json
from redis import Redis
import requests
import ast
from sparql_service import SPARQLService

app = Flask(__name__)
redis_client = Redis(host='localhost', port=6379, db=0, decode_responses=True)

current_dir = os.path.dirname(__file__)

app.secret_key = os.environ.get('SECRET_KEY', 'default-secret-key-for-development-only')  # you should set SECRET_KEY environment variable in production

sparql_service = sparql_service = SPARQLService("http://localhost:3030/fdo_graph/query")

@app.route('/execute_query', methods=['GET', 'POST'])
def execute_query():
    """
    Execute the SPARQL query.

    :return: The rendered template or a redirect.
    """
    if request.method == 'POST':
        attribute = request.form.get('record_attribute')
        value = request.form.get('attribute_value')
        sparql_query = sparql_service.construct_query(attribute, value)
        print(sparql_query)
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
        
        return render_template('results.html', results=results_list)
    # For GET request, display the form for SPARQL query submission
    return render_template('start_query.html')

@app.route('/')
def index():
    """
    Redirect to the execute_query route.

    :return: A redirect.
    """
    return redirect('/execute_query')


if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)