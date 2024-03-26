let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object",
    "headerTemplate": "Data Resource {{#if self.id}} #{{ self.id }} {{else}} (New) {{/if}}",
    "required": [
        "titles", "publisher", "publicationYear", "resourceType", "alternateIdentifiers"
    ],
    "format": "categories",
    "properties": {
        "id": {
            "type": "string",
            "propertyOrder": 1,
            "readOnly": true,
            "title": "Internal Identifier",
            "options":{
                "infoText": "The internal identifier of the resource."
            }
        },
        "publisher": {
            "type": "string",
            "propertyOrder": 2,
            "title": "Publisher",
            "options":{
                "infoText": "The publisher of the resource."
            }
        },
        "publicationYear": {
            "type": "string",
            "propertyOrder": 3,
            "title": "Publication Year",
            "options": {
                "inputAttributes": {
                    "placeholder": "YYYY"
                },
                "cleave": {
                    "date": true,
                    "datePattern": ['Y']
                },
                "infoText": "The year when the resource has been published."
            }
            //"pattern":"^(19|20)\\d{2}$"
        },
        "embargoDate": {
            "type": "string",
            "title": "Under Embargo Until",
            "propertyOrder": 4,
            "pattern": "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)",
            "options":{
                "infoText": "The date until which the resource or its contents are under embargo."
            }
        },
        "language": {
            "title": "Language",
            "propertyOrder": 5,
            "$ref": "definitions/base-repo/models/language.json",
            "options":{
                "infoText": "The language of the resource."
            }
        },
        "lastUpdate": {
            "type": "string",
            "propertyOrder": 6,
            "title": "Last Update",
            "options":{
                "infoText": "The date of the last update to the resource."
            }
        },
        "state": {
            "type": "string",
            "propertyOrder": 7,
            "title": "Resource State",
            "enum": ["VOLATILE", "FIXED", "REVOKED", "GONE"],
            "options":{
                "infoText": "The state of the resource."
            }
        },

        "titles": {
            "type": "array",
            "title": "Titles",
            "description": "One or more titles of the resource.",
            "minItems": 1,
            "propertyOrder": 1,
            "items": {
                "headerTemplate": " {{#if self.titleType}}\n" +
                    "                    <i>{{self.titleType}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>Other</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/title.json",
                "watch": {
                    "titleType": "self.titleType"
                }
            }
        },
        "descriptions": {
            "type": "array",
            "title": "Descriptions",
            "description": "One or more descriptions of the resource.",
            "format": "grid-strict",
            "propertyOrder": 2,
            "items": {
                "headerTemplate": " {{#if self.type}}\n" +
                    "                    <i>{{self.type}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/description.json",
                "watch": {
                    "titleType": "self.type"
                }
            }
        },
        "resourceType": {
            "description": "Type information for the resource.",
            "$ref": "definitions/base-repo/models/resource_type.json"
        },
        "acls": {
            "type": "array",
            "title": "Access Control Information",
            "description": "Access control information for the resource.",
            "required": true,
            "items": {
                "headerTemplate": " {{#if self.sid}}\n" +
                    "                    <i>{{self.sid}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/acl_entry.json",
                "watch": {
                    "titleType": "self.sid"
                }
            }
        },
        "alternateIdentifiers": {
            "type": "array",
            "title": "Alternate Identifiers",
            "description": "One or more alternate identifiers of the resource.",
            "items": {
                "headerTemplate": " {{#if self.identifierType}}\n" +
                    "                    <i>{{self.identifierType}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/alternate_identifier.json",
                "watch": {
                    "titleType": "self.identifierType"
                }
            }
        },
        "contributors": {
            "type": "array",
            "title":"Contributors",
            "description": "One or more contributors to the resource.",
            "items": {
                "headerTemplate": "{{ self.contributionType }} ( {{ self.user.familyName }},  {{ self.user.givenName }})",
                "$ref": "definitions/base-repo/models/contributor.json"
            }
        },
        "creators": {
            "type": "array",
            "title":"Creators",
            "description": "One or more creators of the resource.",
            "items": {
                "headerTemplate": " {{#if self.familyName }}\n" +
                    "                   {{#if self.givenName }}\n" +
                    "                       <i>{{ self.familyName }}, {{ self.givenName }}</i>\n" +
                    "                   {{else}}\n" +
                    "                       <i>None</i>\n" +
                    "                   {{/if}}" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/agent.json",
                "watch": {
                    "familyName": "self.familyName",
                    "givenName": "self.givenName"

                }
            }
        },
        "dates": {
            "type": "array",
            "title": "Dates",
            "description": "One or more dates where certain events happened to the resource.",
            "items": {
                "headerTemplate": "{{ self.type }}",
                "$ref": "definitions/base-repo/models/date.json"
            }
        },
        "formats": {
            "type": "array",
            "title": "Format Information",
            "description": "One or more format information entries.",
            "items": {
                "headerTemplate": "Format #{{ i1 }} {{#if self}} ({{ self }}) {{else}} (None) {{/if}}",
                "type": "string"
            }
        },
        "fundingReferences": {
            "type": "array",
            "title":"Funding Information",
            "description": "Funding information for the resource.",
            "items": {
                "$ref": "definitions/base-repo/models/funding_reference.json"
            }
        },
        "geoLocations": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "box": {
                        "title": "Box",
                        "type": "object",
                        "properties": {
                            "eastLongitude": {
                                "type": "number"
                            },
                            "id": {
                                "type": "integer"
                            },
                            "northLatitude": {
                                "type": "number"
                            },
                            "southLatitude": {
                                "type": "number"
                            },
                            "westLongitude": {
                                "type": "number"
                            }
                        }
                    },
                    "id": {
                        "type": "integer"
                    },
                    "place": {
                        "title": "Place",
                        "type": "string"
                    },
                    "point": {
                        "$ref": "definitions/base-repo/models/point.json"
                    },
                    "polygon": {
                        "type": "object",
                        "title": "Polygon",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "points": {
                                "type": "array",
                                "items": {
                                    "$ref": "definitions/base-repo/models/point.json"
                                }
                            }
                        }
                    }
                }
            }
        },
        "identifier": {
            "title": "Persistent Identifier",
            "description": "The persistent identifier of the resource.",
            "$ref": "definitions/base-repo/models/identifier.json"
        },
        "relatedIdentifiers": {
            "type": "array",
            "title":"Related Identifiers",
            "description": "One or more related identifiers for the resource.",
            "items": {
                "$ref": "definitions/base-repo/models/related_identifier.json"
            }
        },
        "rights": {
            "type": "array",
            "title":"Rights Information",
            "description": "Rights information for the resource, e.g., access license.",
            "items": {
                "headerTemplate": "Right #{{ i1 }} {{#if self.schemeId}} ({{ self.schemeId }}) {{else}} (None) {{/if}}",
                "$ref": "definitions/base-repo/models/scheme.json"
            }
        },
        "sizes": {
            "type": "array",
            "title": "Size Information",
            "description": "Size information for the resource.",
            "items": {
                "headerTemplate": "Size #{{ i1 }} {{#if self}} ({{ self }}) {{else}} (None) {{/if}}",
                "type": "string"
            }
        },
        "subjects": {
            "type": "array",
            "title": "Subjects",
            "description": "Subject information for the resource.",
            "items": {
                "headerTemplate": "Subject #{{ i1 }} {{#if self.value}} ({{ self.value }}) {{else}} (None) {{/if}}",
                "$ref": "definitions/base-repo/models/subject.json"
            }
        },


        "geoLocationsAsString": {
            "type": "string",
            "options":{
                "hidden":true
            }
        },
    }
};
