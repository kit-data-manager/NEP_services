let uiDefinitionUpdate = {
    "type": "fieldset",
    "items": [
        {
            "key": "id",
            "readonly": true
        },
        {
            "type": "array",
            "title": "Titles",
            "items":{
                "type": "section",
                "items": [
                    {"title":"Language", "key":"titles[].lang"},
                    {"title":"Type", "key":"titles[].titleType"},
                    {"title":"Value", "key":"titles[].value"}
                ]
            }
        },
        {
            "title": "Publisher",
            "key": "publisher",
        },
        {
            "title": "Publisher",
            "key": "publicationYear",
        },
        {
            "title": "Language",
            "key": "language",
        },
        {
            "title": "Last Update",
            "key": "lastUpdate",
            "readOnly":true
        },
        {
            "title": "General Resource Type",
            "key": "resourceType.typeGeneral",
        },
        {
            "title": "Specific Resource Type",
            "key": "resourceType.value",
        },
        {
            "title": "State",
            "key": "state",
        },
        {
            "title": "Enhanced Metadata",
            "type": "fieldset",
            "items": [
                {
                    "type": "tabs",
                    "id": "navtabs_acl",
                    "items": [
                        {
                            "title": "Access_Control_and_Restrictions",
                            "type": "tab",
                            "items": [
                                {
                                    "title": "Embargo Date",
                                    "key": "embargoDate",
                                },
                                {
                                    "type": "array",
                                    "title": "Rights",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier", "key":"rights[].schemeId"},
                                            {"title": "URI","key":"rights[].schemeUri"}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Access Control List",
                                    "htmlClass": "acl",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"key":"acls[].sid"},
                                            {"key":"acls[].permission"}
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Creators_and_Contributors",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Creators",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Family Name", "key":"creators[].familyName"},
                                            {"title": "Given Name","key":"creators[].givenName" },
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"key":"creators[].affiliations[]" },
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Contributors",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Contribution Type","key":"contributors[].contributionType"},
                                            {"title": "Family Name", "key":"contributors[].user.familyName"},
                                            {"title": "Given Name","key":"contributors[].user.givenName"},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"key":"contributors[].user.affiliations[]"},
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Identifiers",
                            "type": "tab",
                            "items": [
                                {"title": "Identifier Type", "key":"identifier.identifierType"},
                                {"title": "Identifier","key":"identifier.value"},
                                {
                                    "type": "array",
                                    "title": "Alternate Identifiers",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier Type", "key":"alternateIdentifiers[].identifierType"},
                                            {"title": "Identifier","key":"alternateIdentifiers[].value" },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Related Identifiers",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Relation Type", "key":"relatedIdentifiers[].relationType"},
                                            {"title": "Identifier Type", "key":"relatedIdentifiers[].identifierType"},
                                            {"title": "Identifier","key":"relatedIdentifiers[].value" },
                                            {"title": "Scheme Id","key":"relatedIdentifiers[].scheme.schemeId"},
                                            {"title": "Scheme URI","key":"relatedIdentifiers[].scheme.schemeUri"},
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Descriptive",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Dates",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Date Type", "key":"dates[].type", },
                                            {"title": "Date","key":"dates[].value" },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Subjects",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Language", "key":"subjects[].lang"},
                                            {"title": "Subject", "key":"subjects[].value"},
                                            {"title": "Subject URI", "key":"subjects[].valueUri"},
                                            {"title": "Scheme Id", "key":"subjects[].scheme.schemeId"},
                                            {"title": "Scheme URI", "key":"subjects[].scheme.schemeUri"},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Descriptions",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Type", "key":"descriptions[].type", "type": "text"},
                                            {"title": "Language", "key":"descriptions[].lang" },
                                            {"title": "Description", "key":"descriptions[].description"}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Formats",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"key":"formats[]", "type": "text"}
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Geo Information",
                            "type": "tab",
                            "items": [
                                {
                                    "title": "Geo Locations",
                                    "key": "geoLocationsAsString",
                                    "type": "ace",
                                    "aceMode": "json",
                                    "aceTheme": "twilight",
                                    "width": "100%",
                                    "height": "200px"
                                },
                            ]
                        },
                        {
                            "title": "Funding Information",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Funding References",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Award Number", "key":"fundingReferences[].awardNumber.schemeId"},
                                            {"title": "Award URI", "key":"fundingReferences[].awardNumber.schemeUri"},
                                            {"title": "Award Title", "key":"fundingReferences[].awardTitle"},
                                            {"title": "Award URI", "key":"fundingReferences[].awardUri"},
                                            {"title": "Funder Name", "key":"fundingReferences[].funderName"},
                                            {"title": "Funder Identifier", "key":"fundingReferences[].funderIdentifier.identifierType"},
                                            {"title": "Funder Type", "key":"fundingReferences[].funderIdentifier.type" },
                                            {"title": "Funder", "key":"fundingReferences[].funderIdentifier.value"}
                                        ]
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
};
