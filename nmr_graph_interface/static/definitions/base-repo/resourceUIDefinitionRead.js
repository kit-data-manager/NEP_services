let uiDefinitionRead = {
    "type": "fieldset",
    "items": [
        {
            "key": "id",
            "description":"The internal resource identifier.",
            "readonly": true
        },
        {
            "type": "array",
            "title": "Titles",
            "readonly": true,
            "items":{
                "type": "section",
                "items": [
                    {"title":"Language", "key":"titles[].lang", "description":"The title language.","readonly": true},
                    {"title":"Type", "key":"titles[].titleType", "description":"The type of the title.", "type":"text", "readonly": true},
                    {"title":"Value", "key":"titles[].value", "description":"The title value.","readonly": true}
                ]
            }
        },
        {
            "title": "Publisher",
            "key": "publisher",
            "description":"The publisher of the resource.",
            "readonly": true
        },
        {
            "title": "Publication Year",
            "key": "publicationYear",
            "description":"The year when the resource was published.",
            "readonly": true
        },
        {
            "title": "Language",
            "key": "language",
            "description":"The language of the resource, if applicable.",
            "readonly": true
        },
        {
            "title": "Last Update",
            "key": "lastUpdate",
            "description":"The date-time of the last update.",
            "readonly": true
        },
        {
            "title": "General Resource Type",
            "key": "resourceType.typeGeneral",
            "type":"text",
            "description":"The general type of the resource.",
            "readonly": true
        },
        {
            "title": "Specific Resource Type",
            "key": "resourceType.value",
            "description":"A more specific type of the resource.",
            "readonly": true
        },
        {
            "title": "State",
            "key": "state",
            "type": "text",
            "description": "The internal resource state.",
            "readonly": true
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
                                    "description": "The date until when the resource is under embargo.",
                                    "readonly": true
                                },
                                {
                                    "type": "array",
                                    "title": "License",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier", "key":"rights[].schemeId","readonly": true,"description":"The license identifier."},
                                            {"title": "URI","key":"rights[].schemeUri","readonly": true, "type":"text", "description":"The URI where license information is available."}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Access Control List",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title":"SID", "key":"acls[].sid","readonly": true, "description":"The subject id, i.e., a user or group id."},
                                            {"title":"Permission","key":"acls[].permission","readonly": true, "type":"text", "description":"The permission granted for the subject."}
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
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Family Name", "key":"creators[].familyName","readonly": true, "description":"The creator's last name."},
                                            {"title": "Given Name","key":"creators[].givenName","readonly": true, "description":"The creator's first name."},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "readonly": true,
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"title":"Affiliation", "key":"creators[].affiliations[]","readonly": true, "description":"The creator affiliation"},
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Contributors",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Contribution Type","key":"contributors[].contributionType", "type": "text", "readonly": true, "description":"The type of contribution."},
                                            {"title": "Family Name", "key":"contributors[].user.familyName","readonly": true, "description":"The contributor's last name."},
                                            {"title": "Given Name","key":"contributors[].user.givenName","readonly": true, "description":"The contributor's first name."},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "readonly": true,
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"key":"contributors[].user.affiliations[]","readonly": true, "description":"The contributor affiliation."},
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
                                {"title": "Identifier Type", "key":"identifier.identifierType","readonly": true, "description":"The type if the primary identifier."},
                                {"title": "Identifier","key":"identifier.value","readonly": true, "description":"The value of the primary identifier."},
                                {
                                    "type": "array",
                                    "title": "Alternate Identifiers",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier Type", "key":"alternateIdentifiers[].identifierType", "type":"text", "readonly": true, "description":"The type of the alternate identifier."},
                                            {"title": "Identifier","key":"alternateIdentifiers[].value","readonly": true, "description":"The value of the alternate identifier." },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Related Resources",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Relation Type", "key":"relatedIdentifiers[].relationType", "type":"text", "readonly": true, "description":"The relation type of the related resource."},
                                            {"title": "Identifier Type", "key":"relatedIdentifiers[].identifierType", "type":"text", "readonly": true, "description":"The type of the related resource's identifier."},
                                            {"title": "Identifier","key":"relatedIdentifiers[].value","readonly": true, "description":"The value of the related resource's identifier." },
                                            {"title": "Scheme Id","key":"relatedIdentifiers[].scheme.schemeId","readonly": true, "description":"The related resource's schema id (applicable for relation types hasMetadata/isMetadataFor)."},
                                            {"title": "Scheme URI","key":"relatedIdentifiers[].scheme.schemeUri","readonly": true, "description": "The related resource's schema URI (applicable for relation types hasMetadata/isMetadataFor)."},
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
                                            {"title": "Date Type", "key":"dates[].type", "type":"text", "readonly": true, "description": "The type of the date." },
                                            {"title": "Date","key":"dates[].value","readonly": true, "description":"The value of the date." },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Subjects",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Term", "key":"subjects[].value", "readonly": true, "description":"The subject term, e.g., keyword, classification code, or key phrase describing the resource."},
                                            {"title": "Term URI", "key":"subjects[].valueUri", "readonly": true, "description":"The URI of the subject term."},
                                            {"title": "Scheme Id", "key":"subjects[].scheme.schemeId", "readonly": true, "description":"The id of the subject identifier scheme."},
                                            {"title": "Scheme URI", "key":"subjects[].scheme.schemeUri", "readonly": true, "description":"The URI of the subject identifier scheme."},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Descriptions",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Type", "key":"descriptions[].type", "type": "text", "readonly": true, "description":"The type of the description."},
                                            {"title": "Language", "key":"descriptions[].lang", "readonly": true, "description":"The language of the description."},
                                            {"title": "Description", "key":"descriptions[].description", "readonly": true, "description":"The description text."}
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
                                            {"title":"Format Value", "key":"formats[]", "type": "text", "readonly": true, "description":"A technical format, e.g., mime type or file extension."}
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
                                    "height": "200px",
                                    "readonly": true
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
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Award Number", "key":"fundingReferences[].awardNumber.schemeId", "readonly": true, "description":"The award number."},
                                            {"title": "Award Title", "key":"fundingReferences[].awardTitle", "readonly": true, "description":"The funding award title."},
                                            {"title": "Award URI", "key":"fundingReferences[].awardUri", "readonly": true, "description":"The funding award URI."},
                                            {"title": "Funder Name", "key":"fundingReferences[].funderName", "readonly": true, "description":"The name of the funder."},
                                            {"title": "Funder Identifier", "key":"fundingReferences[].funderIdentifier.identifierType", "type":"text", "readonly": true, "description":"The funder identifier type."},
                                            {"title": "Funder Identifier Type", "key":"fundingReferences[].funderIdentifier.type", "type":"text", "readonly": true, "description":"Type of the funder identifier."},
                                            {"title": "Funder", "key":"fundingReferences[].funderIdentifier.value", "readonly": true, "description":"The funder identifier"}
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
