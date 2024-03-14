let uiDefinitionContentRead = {
    "type": "fieldset",
    "items": [
        {
            "title": "Parent Resource Identifier",
            "key": "parentResource.id",
            "description":"The identifier of the parent resource.",
            "readonly": true
        },
        {
            "title": "Relative Path",
            "key": "relativePath",
            "description":"The content path relative to the data/ endpoint of the parent resource.",
            "readonly": true
        },
        {
            "title": "Metadata Version",
            "key": "version",
            "description":"The version of the content metadata.",
            "readonly": true
        },
        {
            "title": "File Version",
            "key": "fileVersion",
            "description":"The version of the content data.",
            "readonly": true
        },
        {
            "title": "Uploader",
            "key": "uploader",
            "description":"The subject id of the uploader.",
            "readonly": true
        },
        {
            "title": "Media Type",
            "key": "mediaType",
            "description":"The media type of the content data.",
            "readonly": true
        },
        {
            "title": "Checksum",
            "key": "hash",
            "description":"The checksum of the content data.",
            "readonly": true
        },
        {
            "title": "Size [bytes]",
            "key": "size",
            "description":"Size of the content data.",
            "readonly": true
        },
        {
            "type": "array",
            "title": "Tags",
            "htmlClass": "acl",
            "readonly": true,
            "items":{
                "type": "section",
                "items": [
                    {"title": "Tag", "key":"tags[]","readonly": true},
                ]
            }
        }
    ]
};
