let uiDefinitionUpdate= {
  "type": "fieldset",
  "items": [
    {
      "key": "schemaId",
      "readonly": true
    },
    {
      "key": "label"
    },
    {
      "key": "definition"
    },
    {
      "key": "comment"
    },
    {
      "key": "type",
      "type": "text",
      "readonly": true
    },
    {
      "type": "array",
      "title": "ACL",
      "htmlClass": "acl",
      "items": [
        "acl[]"
      ]
    }
  ]
}

