let uiDefinitionCreate = {
    "type": "fieldset",
    "items": [
        {
            "type": "array",
            "title": "Titles",
            "required": true,
            "items":{
                "type": "section",
                "items": [
                    {"title":"Language", "key":"titles[].lang", "description":"The title language."},
                    {"title":"Type", "key":"titles[].titleType", "description":"The type of the title."},
                    {"title":"Value", "key":"titles[].value", "description":"The title value."}
                ]
            }
        },
        {
            "title": "Publisher",
            "key": "publisher",
            "description":"The publisher of the resource.",
            "required": true
        },
        {
            "title": "Publication Year",
            "key": "publicationYear",
            "description":"The year when the resource was published.",
            "required": true
        },
        {
            "title": "Language",
            "key": "language",
            "description":"The language of the resource, if applicable."
        },
        {
            "title": "General Resource Type",
            "key": "resourceType.typeGeneral",
            "description":"The general type of the resource.",
            "required": true
        },
        {
            "title": "Specific Resource Type",
            "key": "resourceType.value",
            "description":"A more specific type of the resource.",
            "required": true
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
                                    "description": "The date until when the resource is under embargo."
                                },
                                {
                                    "type": "array",
                                    "title": "License",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier", "key":"rights[].schemeId", "description":"The license identifier."},
                                            {"title": "URI","key":"rights[].schemeUri", "description":"The URI where license information is available."}
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
                                            {"title":"SID", "key":"acls[].sid", "description":"The subject id, i.e., a user or group id."},
                                            {"title":"Permission", "key":"acls[].permission", "description":"The permission granted for the subject."}
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
                                            {"title": "Family Name", "key":"creators[].familyName", "description":"The creator's last name."},
                                            {"title": "Given Name","key":"creators[].givenName", "description":"The creator's first name." },
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"title":"Affiliation", "key":"creators[].affiliations[]", "description":"The creator affiliation's name." },
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
                                            {"title": "Contribution Type","key":"contributors[].contributionType", "description":"The type of contribution."},
                                            {"title": "Family Name", "key":"contributors[].user.familyName", "description":"The contributor's last name."},
                                            {"title": "Given Name","key":"contributors[].user.givenName", "description":"The contributor's first name."},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"title":"Affiliation", "key":"contributors[].user.affiliations[]", "description":"The contributor affiliation."},
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
                                {"title": "Identifier Type", "key":"identifier.identifierType", "description":"The type if the primary identifier."},
                                {"title": "Identifier","key":"identifier.value", "description":"The value of the primary identifier."},
                                {
                                    "type": "array",
                                    "title": "Alternate Identifiers",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier Type", "key":"alternateIdentifiers[].identifierType", "description":"The type of the alternate identifier."},
                                            {"title": "Identifier","key":"alternateIdentifiers[].value", "description":"The value of the alternate identifier." },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Related Resources",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Relation Type", "key":"relatedIdentifiers[].relationType", "description":"The relation type of the related resource."},
                                            {"title": "Identifier Type", "key":"relatedIdentifiers[].identifierType", "description":"The type of the related resource's identifier."},
                                            {"title": "Identifier","key":"relatedIdentifiers[].value", "description":"The value of the related resource's identifier." },
                                            {"title": "Scheme Id","key":"relatedIdentifiers[].scheme.schemeId", "description":"The related resource's schema id (applicable for relation types hasMetadata/isMetadataFor)."},
                                            {"title": "Scheme URI","key":"relatedIdentifiers[].scheme.schemeUri", "description": "The related resource's schema URI (applicable for relation types hasMetadata/isMetadataFor)."},
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
                                            {"title": "Date Type", "key":"dates[].type", "description": "The type of the date." },
                                            {"title": "Date","key":"dates[].value", "description":"The value of the date." },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Subjects",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Term", "key":"subjects[].value", "description":"The subject term, e.g., keyword, classification code, or key phrase describing the resource."},
                                            {"title": "Term URI", "key":"subjects[].valueUri", "description":"The URI of the subject term."},
                                            {"title": "Scheme Id", "key":"subjects[].scheme.schemeId", "description":"The id of the subject identifier scheme."},
                                            {"title": "Scheme URI", "key":"subjects[].scheme.schemeUri", "description":"The URI of the subject identifier scheme."},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Descriptions",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Type", "key":"descriptions[].type", "type": "text", "description":"The type of the description."},
                                            {"title": "Language", "key":"descriptions[].lang", "description":"The language of the description."},
                                            {"title": "Description", "key":"descriptions[].description", "description":"The description text."}
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
                                            {"title":"Format Value", "key":"formats[]", "type": "text", "description":"A technical format, e.g., mime type or file extension."}
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
                                            {"title": "Award Number", "key":"fundingReferences[].awardNumber.schemeId", "description":"The award number."},
                                            {"title": "Award Title", "key":"fundingReferences[].awardTitle", "description":"The funding award title."},
                                            {"title": "Award URI", "key":"fundingReferences[].awardUri", "description":"The funding award URI."},
                                            {"title": "Funder Name", "key":"fundingReferences[].funderName", "description":"The name of the funder."},
                                            {"title": "Funder Identifier", "key":"fundingReferences[].funderIdentifier.identifierType", "description":"The funder identifier type."},
                                            {"title": "Funder Identifier Type", "key":"fundingReferences[].funderIdentifier.type", "description":"Type of the funder identifier." },
                                            {"title": "Funder", "key":"fundingReferences[].funderIdentifier.value", "description":"The funder identifier"}
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
