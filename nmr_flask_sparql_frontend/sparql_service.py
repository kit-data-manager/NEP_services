import requests

class SPARQLService:
    def __init__(self, endpoint_config):
        """
        Initializes the SPARQLService with the provided endpoint configuration.

        Args:
            endpoint_config (str): The endpoint configuration.
        """
        self.endpoint = endpoint_config

    def execute_query(self, query):
        """
        Executes a SPARQL query.

        Args:
            query (str): The SPARQL query to execute.

        Returns:
            dict or str: The results of the query if successful, or an error message if failed.
        """
        # Set up the headers for the HTTP request
        headers = {
            "Accept": "application/sparql-results+json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }

        # Issue the HTTP POST request to execute the SPARQL query
        response = requests.post(self.endpoint, headers=headers, data={"query": query})

        # Check for a valid response and return the results or error message
        if response.status_code == 200:
            results = response.json()
            return results
        else:
            return f"Failed to execute SPARQL query. Status code: {response.status_code}"

    def construct_query(self, attribute, value):
        """
        Constructs a SPARQL query to retrieve information about profiles and related FDOs.

        Args:
            profile_names (str): Comma-separated names of profiles.

        Returns:
            str: The constructed SPARQL query.
        """

        # Insert the attributes into the SPARQL query template
        sparql_query = f"""
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX fdoo: <https://datamanager.kit.edu/FDO-Graph#>

        SELECT ?attributeValue_np ?pid
        WHERE {{
        fdoo:{attribute} fdoo:hasValue ?attributeValue.
        FILTER regex(str(?attributeValue),  "{value}", "i")
        BIND(REPLACE(STR(?attributeValue), "https://datamanager.kit.edu/FDO-Graph#", "") AS ?attributeValue_np)
        ?attributeValue fdoo:isValueFor ?fdo.
        ?fdo rdfs:label ?pid.
        }}
        """
        return sparql_query

    
