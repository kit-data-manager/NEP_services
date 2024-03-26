var metadataRecordCreateUi = {
  "type": "fieldset",
  "items": [
    {
      "key": "id",
      "required": true,
      //"onInput": function (evt) {
      //  var value = $(evt.target).val();
      //  if (value) {
//
      //  }
    //  }
    },
    {
      "title": "Related Resource Identifier",
      "key": "relatedResource.identifier",
      "required": true
    },
    {
      "title": "Related Resource Identifier Type",
      "key": "relatedResource.identifierType",
      "required": true
    },
    {
      "title": "Schema Identifier",
      "key": "schema.identifier",
      "required": true
    },
    {
      "title": "Schema Identifier Type",
      "key": "schema.identifierType",
      "required": true
    },
    {
      "key": "schemaVersion",
      "required": true
    },
    {
      "type": "array",
      "title": "ACL",
      "htmlClass": "acl",
      "items": [
        "acl[]"
      ]
    },
    {
      "key": "metadataDocument",
      "id": "metadataDocument",
      "type": "file"
    }
  ]
}
