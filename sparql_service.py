import requests
import rdflib
 
class SPARQLService:
    def __init__(self):
        """
        Initializes the SPARQLService with the provided endpoint configuration.
 
        Args:
            endpoint_config (str): The endpoint configuration.
        """
        #self.endpoint = endpoint_config
        # Load your Turtle file
        g = rdflib.Graph()
        g.parse("/var/www/html/production_service_latest/final_nmr_graph.ttl", format="turtle")
        self.endpoint = g

    def execute_query(self, query):
        """
        Executes a SPARQL query.
 
        Args:
            query (str): The SPARQL query to execute.
 
        Returns:
            dict or str: The results of the query if successful, or an error message if failed.
        """
        
        rows = self.endpoint.query(query)
        return [row.asdict() for row in rows]
        
    def construct_query_1(self, attribute, value):
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
 
    def construct_query_2(self, pid):
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
 
        SELECT ?attribute_np ?attributeValue_np
        WHERE {{
        ?fdo rdfs:label "{pid}" .
        ?fdo fdoo:hasAttributeValue ?attributeValue.
        ?attributeValue fdoo:hasKey ?attribute.
        BIND(REPLACE(STR(?attributeValue), "https://datamanager.kit.edu/FDO-Graph#", "") AS ?attributeValue_np)
        BIND(REPLACE(STR(?attribute), "https://datamanager.kit.edu/FDO-Graph#", "") AS ?attribute_np)
        }}
        """
        return sparql_query
