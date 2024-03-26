let uiDefinitionUpdate= {
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
            "title": "Identifier Type",
            "key": "schema.identifierType",
            "type": "text",
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
            "items":{
                "type": "section",
                "items": [
                    {"key":"acl[].sid"},
                    {"key":"acl[].permission"}
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
        },
        {
            "key": "metadataDocument",
            "id": "metadataDocument",
            "type": "file",
            "onChange": function (evt) {
                metadataDocumentChange(evt);
            }
        }
    ]
};
