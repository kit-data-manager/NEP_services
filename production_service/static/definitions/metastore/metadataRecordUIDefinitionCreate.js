let uiDefinitionCreate= {
    "type": "fieldset",
    "items": [
        {
            "title": "Related Resource",
            "key": "relatedResource.identifier",
            //"type": "typeahead",
            //"type": "orcid",
            //"token": "1f3623db-ae27-4f4e-b714-1d687b72c8e7",
            //"url": "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/dataresources/?page=0&size=100",
            //"selector": "['titles'][0].value",
           // "transformation" : function(resource){
           //     let result = {};
           //     result.id = resource.id;
           //     result.title = resource.titles[0].value;
           //     result.publisher = resource.publisher;
           //     result.publicationYear = resource.publicationYear;
           //     return result;
           // },
            "required": true
        },
        {
            "title": "Related Resource Identifier Type",
            "key": "relatedResource.identifierType",
            "required": true
        },
        {
            "title": "Schema Identifier",
            "key": "schema.identifier"
        },
        {
            "key": "schemaVersion",
            "type":"text",
            /*"onChange": function (evt) {
                var value = $(evt.target).val();
                if (value) alert(value);
            }*/
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
        },{
            "key": "metadataDocument",
            "id": "metadataDocument",
            "type": "file"
        }
    ]
};
