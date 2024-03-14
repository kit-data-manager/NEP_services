let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "title": "Identifier",
            "description":"A unique identifier for the metadata document record."
        },
        "relatedResource": {
            "type": "object",
            "title": "Related Resource",
            "description": "The related resource this metadata document is associated with.",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier",
                    "description": "The identifier of the related resource, i.e., a URL or any internally handled kind of identifier."
                },
                "identifierType": {
                    "type": "string",
                    "title": "Identifier Type",
                    "description": "The type of the identifier, i.e., URL or INTERNAL.",
                    "enum": ["URL", "INTERNAL"]
                }
            }
        },
        "schema": {
            "type": "object",
            "title": "Schema",
            "description": "The schema used for validating the associated metadata document.",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier",
                    "description": "The identifier of the validation schema for the provided metadata document."
                },
                "identifierType": {
                    "type": "string",
                    "enum": ["URL", "INTERNAL"],
                    "description": "Type of the schema identifier, i.e., INTERNAL if the schema is locally available, or URL pointing to another MetaStore installation.",
                    "default":"INTERNAL",
                    "title": "Identifier Type"
                }
            }
        },
        "schemaVersion": {
            "type": "integer",
            "title": "Schema Version",
            "description":"The version of the metadata schema to be used. If not provided, the most recent version will be used."
        },
        "createdAt": {
            "type": "string",
            "title": "Date Created",
            "description": "The date at which the metadata document was initially registered.",
        },
        "lastUpdate": {
            "type": "string",
            "title": "Date Updated",
            "description": "The date at which the metadata document was updated the last time.",
        },
        "recordVersion": {
            "type": "integer",
            "title": "Record Version",
            "description": "The version of this metadata document.",
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "description":"Access Control List for access control.",
            "items": {
                "type": "object",
                "properties": {
                    "sid": {
                        "type": "string",
                        "title": "Sid",
                        "description":"A subject identifier defining to whom a certain kind of access is granted. Typically, this is an email address.",
                        "default": "SELF"
                    },
                    "permission": {
                        "type": "string",
                        "title": "Permission",
                        "description": "The permission granted to the subject with the given identifier.",
                        "default": "ADMINISTRATE",
                        "enum": ["READ", "WRITE", "ADMINISTRATE", "NONE"]
                    }
                }
            }
        },
        "metadataDocumentUri": {
            "type": "string",
            "title": "Metadata Document URI",
            "description": "Direct access URI where the associated metadata document is stored.",
        },
        "documentHash": {
            "type": "string",
            "title": "Document Hash",
            "description":"The hashcode of the associated metadata document.",
        },
        "metadataDocument": {
            "type": "string",
            "title": "Metadata Document File",
            "description":"A local file containing the metadata document."
        }
    }
};
