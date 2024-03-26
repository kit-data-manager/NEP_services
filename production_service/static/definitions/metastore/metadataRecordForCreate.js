var metadataRecordCreate = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "title": "Identifier"
        },
        "relatedResource": {
            "type": "object",
             "title": "Related Resource",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier",
                    "required": true
                },
                "identifierType": {
                    "type": "string",
                    "default": "INTERNAL",
                    "enum": ["URL", "INTERNAL"],
                    "title": "Identifier Type",
                    "required": true
                }
            },
             "required": ["identifier", "identifierType"]
        },
        "schema": {
            "type": "object",
             "title": "Schema",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier"
                },
                "identifierType": {
                    "type": "string",
                    "enum": ["URL", "INTERNAL"],
                    "title": "Identifier Type"
                }
            },
            "required": ["identifier", "identifierType"]
        },
        "schemaVersion": {
            "type": "integer",
            "title": "Schema Version"
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "items": {
                "type": "object",
                "properties": {
                    "sid": {
                        "type": "string",
                        "title": "Sid",
                        "default": "SELF"
                    },
                    "permission": {
                        "type": "string",
                        "title": "Permission",
                        "default": "ADMINISTRATE",
                        "enum": ["READ", "WRITE", "ADMINISTRATE", "NONE"]
                    }
                }
            }
        },
         "metadataDocument": {
            "type": "string",
            "title": "Metadata Document"
        }
    }
};
