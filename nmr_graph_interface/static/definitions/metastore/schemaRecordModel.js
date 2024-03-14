let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "schemaId": {
            "type": "string",
            "title": "Schema Record Identifier.",
            "description": "A unique identifier for the schema"
        },
        "schemaVersion": {
            "type": "string",
            "title": "Schema Version",
            "description": "The version of the schema. If empty, the most recent version is used.",
            "optional":true
        },
        "mimeType": {
            "type": "string",
            "title": "Mime Type",
            "description": "The mime-type of the schema, i.e., application/xml for XML schemas, application/json for JSON schemas.",
            "default": "application/json",
            "enum": ["application/json", "application/xml"]
        },
        "type": {
            "type": "string",
            "title": "Type",
            "description": "The type of the schema, i.e., XML or JSON.",
            "default": "JSON",
            "enum": ["JSON", "XML"]
        },
        "createdAt": {
            "type": "datetime",
            "title": "Date Created",
            "description": "The date at which the schema was initially registered.",
            "optional":true
        },
        "lastUpdate": {
            "type": "datetime",
            "title": "Date Updated",
            "description": "The date at which the schema was updated the last time.",
            "optional":true
        },
        "label": {
            "type": "string",
            "title": "Label",
            "description": "A human-readable label for the schema.",
            "optional":true
        },
        "definition": {
            "type": "string",
            "title": "Definition",
            "description": "A human-readable definition of the schema.",
            "optional":true
        },
        "comment": {
            "type": "string",
            "title": "Comment",
            "description": "A human-readable comment for the schema.",
            "optional":true
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "description":"Access Control List for access control.",
            "optional":true,
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
                        "enum": ["NONE", "READ", "WRITE", "ADMINISTRATE"]
                    }
                }
            }
        },
        "schemaDocumentUri": {
            "type": "string",
            "title": "Schema Document Uri",
            "description": "Direct access URI where the associated metadata schema document is stored.",
            "optional":true
        },
        "fileSchema": {
            "type": "string",
            "title": "Schema Document",
            "description":"A local file containing the metadata schema document.",
            "optional":true
        },
        "schemaHash": {
            "type": "string",
            "title": "Schema Hash",
            "description":"The hashcode of the associated metadata schema document.",
            "optional":true
        },
        "locked": {
            "type": "boolean",
            "default": false,
            "title": "Locked",
            "description":"Internal flag to enable/disable schema synchronization between different instances.",
            "optional":true
        }
    }
}
