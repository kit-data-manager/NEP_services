let uiDefinitionCreate= {
    "type": "fieldset",
    "items": [
        "schemaId",
        "label",
        "definition",
        "comment",
        "type",
        {
            "type": "array",
            "title": "ACL",
            "htmlClass": "acl",
            "items": [
                "acl[]"
            ]
        },
        {
            "key": "fileSchema",
            "type": "file"
        }
    ]
}

