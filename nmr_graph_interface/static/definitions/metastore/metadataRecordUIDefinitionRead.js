let uiDefinitionRead = {
    "type": "fieldset",
    "items": [
        {
            "key": "id",
            "readonly": true
        },
        {
            "title": "Related Resource Identifier",
            "key": "relatedResource.identifier",
            "readonly": true
        },
        {
            "title": "Related Resource Identifier Type",
            "key": "relatedResource.identifierType",
            "type": "text",
            "readonly": true
        },
        {
            "title": "Schema Identifier",
            "key": "schema.identifier",
            "readonly": true
        },
        {
            "key": "schemaVersion",
            "readonly": true
        },
        {
            "key": "createdAt",
            "readonly": true
        },
        {
            "key": "lastUpdate",
            "readonly": true
        },
        {
            "type": "array",
            "title": "ACL",
            "htmlClass": "acl",
            "readonly": true,
            "items":{
                "type": "section",
                "items": [
                    {"key":"acl[].sid","readonly": true},
                    {"key":"acl[].permission","readonly": true, "type":"text"}
                ]
            }
        },
        {
            "key": "metadataDocumentUri",
            "readonly": true
        },
        {
            "key": "documentHash",
            "readonly": true
        }
    ]
};
