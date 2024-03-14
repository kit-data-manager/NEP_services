let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
        "Capabilities": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "isOrdered": {
                    "type": "boolean",
                },
                "appendsToEnd": {
                    "type": "boolean"
                },
                "supportsRoles": {
                    "type": "boolean"
                },
                "membershipIsMutable": {
                    "type": "boolean"
                },
                "propertiesAreMutable": {
                    "type": "boolean"
                },
                "restrictedToType": {
                    "type": "String"
                }
            }
        },
        "Properties": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "dateCreated": {
                    "type": "String",
                },
                "ownership": {
                    "type": "String"
                },
                "license": {
                    "type": "String"
                },
                "modelType": {
                    "type": "String"
                },
                "hasAccessRestrictions": {
                    "type": "boolean"
                },
                "memberOf": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "descriptionOntology": {
                    "type": "boolean"
                },
                "smartRules": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }

            }
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "properties": {
            "$ref": "#/$defs/Properties"
        },
        "capabilities": {
            "$ref": "#/$defs/Capabilities"
        },
        "description": {
            "type": "string"
        }
    }
};
