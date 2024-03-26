let uiDefinitionRead = {
  "type": "fieldset",
  "items": [
    {
      "key": "schemaId",
      "readonly": true
    },
    {
      "key": "schemaVersion",
      "readonly": true
    },
    {
      "key": "label",
      "readonly": true
    },
    {
      "key": "definition",
      "readonly": true
    },
    {
      "key": "comment",
      "readonly": true
    },
    {
      "key": "type",
      "type": "text",
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
      "readOnly": "true",
      "items": {
        "type": "section",
        "items": [
          {
            "key": "acl[].sid",
            "readOnly": true
          },
          {
            "key": "acl[].permission",
            "type": "text",
            "readOnly": true
          }
        ]
      }
    },
    {
      "key": "schemaDocumentUri",
      "readonly": true
    },
    {
      "key": "schemaHash",
      "readonly": true
    }
  ]
}
