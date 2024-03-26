let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
        "Agent": {
            "type": "object",
            "properties": {
                "affiliations": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "familyName": {
                    "type": "string"
                },
                "givenName": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                }
            }
        },
        "IDENTIFIER_TYPE": {
            "type": "string",
            "enum": ["ARK", "AR_XIV", "BIBCODE", "DOI", "EAN_13", "EISSN", "HANDLE", "IGSN", "ISBN", "ISSN", "ISTC", "LISSN", "LSID", "PMID", "PURL", "UPC", "URL", "URN", "W_3_ID", "INTERNAL", "OTHER"],
            "default": "DOI"
        },
        "LANG": {
            "type": "string",
            "allowEmpty": false,
            "enum": ["",
                "aa",
                "ab",
                "af",
                "am",
                "ar",
                "ar-ae",
                "ar-bh",
                "ar-dz",
                "ar-eg",
                "ar-iq",
                "ar-jo",
                "ar-kw",
                "ar-lb",
                "ar-ly",
                "ar-ma",
                "ar-om",
                "ar-qa",
                "ar-sa",
                "ar-sy",
                "ar-tn",
                "ar-ye",
                "as",
                "ay",
                "az",
                "ba",
                "be",
                "bg",
                "bh",
                "bi",
                "bn",
                "bo",
                "br",
                "ca",
                "co",
                "cs",
                "cy",
                "da",
                "de",
                "de-at",
                "de-ch",
                "de-li",
                "de-lu",
                "div",
                "dz",
                "el",
                "en",
                "en-au",
                "en-bz",
                "en-ca",
                "en-gb",
                "en-ie",
                "en-jm",
                "en-nz",
                "en-ph",
                "en-tt",
                "en-us",
                "en-za",
                "en-zw",
                "eo",
                "es",
                "es-ar",
                "es-bo",
                "es-cl",
                "es-co",
                "es-cr",
                "es-do",
                "es-ec",
                "es-es",
                "es-gt",
                "es-hn",
                "es-mx",
                "es-ni",
                "es-pa",
                "es-pe",
                "es-pr",
                "es-py",
                "es-sv",
                "es-us",
                "es-uy",
                "es-ve",
                "et",
                "eu",
                "fa",
                "fi",
                "fj",
                "fo",
                "fr",
                "fr-be",
                "fr-ca",
                "fr-ch",
                "fr-lu",
                "fr-mc",
                "fy",
                "ga",
                "gd",
                "gl",
                "gn",
                "gu",
                "ha",
                "he",
                "hi",
                "hr",
                "hu",
                "hy",
                "ia",
                "id",
                "ie",
                "ik",
                "in",
                "is",
                "it",
                "it-ch",
                "iw",
                "ja",
                "ji",
                "jw",
                "ka",
                "kk",
                "kl",
                "km",
                "kn",
                "ko",
                "kok",
                "ks",
                "ku",
                "ky",
                "kz",
                "la",
                "ln",
                "lo",
                "ls",
                "lt",
                "lv",
                "mg",
                "mi",
                "mk",
                "ml",
                "mn",
                "mo",
                "mr",
                "ms",
                "mt",
                "my",
                "na",
                "nb-no",
                "ne",
                "nl",
                "nl-be",
                "nn-no",
                "no",
                "oc",
                "om",
                "or",
                "pa",
                "pl",
                "ps",
                "pt",
                "pt-br",
                "qu",
                "rm",
                "rn",
                "ro",
                "ro-md",
                "ru",
                "ru-md",
                "rw",
                "sa",
                "sb",
                "sd",
                "sg",
                "sh",
                "si",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sq",
                "sr",
                "ss",
                "st",
                "su",
                "sv",
                "sv-fi",
                "sw",
                "sx",
                "syr",
                "ta",
                "te",
                "tg",
                "th",
                "ti",
                "tk",
                "tl",
                "tn",
                "to",
                "tr",
                "ts",
                "tt",
                "tw",
                "uk",
                "ur",
                "us",
                "uz",
                "vi",
                "vo",
                "wo",
                "xh",
                "yi",
                "yo",
                "zh",
                "zh-cn",
                "zh-hk",
                "zh-mo",
                "zh-sg",
                "zh-tw",
                "zu"],
            "default": "en"
        },
        "Point": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "latitude": {
                    "type": "number"
                },
                "longitude": {
                    "type": "number"
                }
            }
        },
        "Scheme": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "schemeId": {
                    "type": "string"
                },
                "schemeUri": {
                    "type": "string"
                }
            }
        }
    },
    "type": "object",
    "required":[
        "titles", "publisher", "publicationYear", "resourceType"
    ],
    "properties": {
        "acls": {
            "type": "array",
            "title": "Access Control Information",
            "required":true,
            "items": {
                "type": "object",
                "headerTemplate": "{{self.sid}}",
                "properties": {
                    "id": {
                        "type": "integer",
                        "readOnly":true
                    },
                    "permission": {
                        "type": "string",
                        "propertyOrder":2,
                        "enum": ["NONE", "READ", "WRITE", "ADMINISTRATE"]
                    },
                    "sid": {
                        "type": "string",
                        "format": "autocomplete",
                        "propertyOrder":1,
                        "options": {
                            "autocomplete": {
                                "search": "search_keycloak",
                                "getResultValue": "getResultValue_keycloak",
                                "renderResult": "renderResult_keycloak"
                            }
                        }
                    }
                },
                "required":["sid", "permission"]
            }
        },
        "alternateIdentifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "identifierType": {
                        "$ref": "#/$defs/IDENTIFIER_TYPE",
                        "default": "DOI"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "contributors": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "contributionType": {
                        "type": "string",
                        "enum": ["CONTACT_PERSON", "DATA_COLLECTOR", "DATA_CURATOR", "DATA_MANAGER", "DISTRIBUTOR", "EDITOR", "HOSTING_INSTITUTION", "OTHER", "PRODUCER", "PROJECT_LEADER", "PROJECT_MANAGER", "PROJECT_MEMBER", "REGISTRATION_AGENCY", "REGISTRATION_AUTHORITY", "RELATED_PERSON", "RESEARCH_GROUP", "RIGHTS_HOLDER", "RESEARCHER", "SPONSOR", "SUPERVISOR", "WORK_PACKAGE_LEADER"]
                    },
                    "id": {
                        "type": "integer"
                    },
                    "user": {
                        "$ref": "#/$defs/Agent"
                    }
                }
            }
        },
        "creators": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/Agent"
            }
        },
        "dates": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["ACCEPTED", "AVAILABLE", "COLLECTED", "COPYRIGHTED", "CREATED", "ISSUED", "SUBMITTED", "UPDATED", "VALID", "REVOKED"]
                    },
                    "value": {
                        "type": "string",
                        "pattern": "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)"
                    }
                }
            }
        },
        "descriptions": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "description": {
                        "type": "string",
                        "maxLength": 10240
                    },
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "$ref": "#/$defs/LANG"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["ABSTRACT", "METHODS", "SERIES_INFORMATION", "TABLE_OF_CONTENTS", "TECHNICAL_INFO", "OTHER"]
                    }
                }
            }
        },
        "embargoDate": {
            "type": "string",
            "pattern": "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)"
        },
        "formats": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "fundingReferences": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "awardNumber": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "awardTitle": {
                        "type": "string"
                    },
                    "awardUri": {
                        "type": "string"
                    },
                    "funderIdentifier": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "identifierType": {
                                "$ref": "#/$defs/IDENTIFIER_TYPE"
                            },
                            "type": {
                                "type": "string",
                                "enum": ["ISNI", "GRID", "CROSSREF_FUNDER_ID", "OTHER"]
                            },
                            "value": {
                                "type": "string"
                            }
                        }
                    },
                    "funderName": {
                        "type": "string"
                    },
                    "id": {
                        "type": "integer"
                    }
                }
            }
        },
        "geoLocationsAsString": {
            "type": "string"
        },
        "geoLocations": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "box": {
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
                        "type": "string"
                    },
                    "point": {
                        "$ref": "#/$defs/Point"
                    },
                    "polygon": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "points": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/$defs/Point"
                                }
                            }
                        }
                    }
                }
            }
        },
        "id": {
            "type": "string"
        },
        "identifier": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "identifierType": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "language": {
            "$ref": "#/$defs/LANG"
        },
        "lastUpdate": {
            "type": "string"
        },
        "publicationYear": {
            "type": "string",
            "options": {
                "inputAttributes": {
                    "placeholder": "YYYY"
                },
                "cleave": {
                    "date": true,
                    "datePattern": ['Y'],
                }

            }
            //"pattern":"^(19|20)\\d{2}$"
        },
        "publisher": {
            "type": "string"
        },
        "relatedIdentifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "identifierType": {
                        "$ref": "#/$defs/IDENTIFIER_TYPE"
                    },
                    "relatedMetadataScheme": {
                        "type": "string"
                    },
                    "relationType": {
                        "type": "string",
                        "enum": ["IS_CITED_BY", "CITES", "IS_SUPPLEMENT_TO", "IS_SUPPLEMENTED_BY", "IS_CONTINUED_BY", "CONTINUES", "IS_NEW_VERSION_OF", "IS_PREVIOUS_VERSION_OF", "IS_PART_OF", "HAS_PART", "IS_REFERENCED_BY", "REFERENCES", "IS_DOCUMENTED_BY", "DOCUMENTS", "IS_COMPILED_BY", "COMPILES", "IS_VARIANT_FORM_OF", "IS_ORIGINAL_FORM_OF", "IS_IDENTICAL_TO", "HAS_METADATA", "IS_METADATA_FOR", "REVIEWS", "IS_REVIEWED_BY", "IS_DERIVED_FROM", "IS_SOURCE_OF"]
                    },
                    "scheme": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "resourceType": {
            "type": "object",
            "propertyOrder":2,
            "required":["typeGeneral", "value"],
            "properties": {
                "id": {
                    "type": "integer"
                },
                "typeGeneral": {
                    "type": "string",
                    "enum": ["AUDIOVISUAL", "COLLECTION", "DATASET", "EVENT", "IMAGE", "INTERACTIVE_RESOURCE", "MODEL", "PHYSICAL_OBJECT", "SERVICE", "SOFTWARE", "SOUND", "TEXT", "WORKFLOW", "OTHER"],
                    "default": "DATASET"
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "rights": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/Scheme"
            }
        },
        "sizes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "state": {
            "type": "string",
            "enum": ["VOLATILE", "FIXED", "REVOKED", "GONE"]
        },
        "subjects": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "$ref": "#/$defs/LANG"
                    },
                    "scheme": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "value": {
                        "type": "string"
                    },
                    "valueUri": {
                        "type": "string"
                    }
                }
            }
        },
        "titles": {
            "type": "array",
            "minItems": 1,
            "propertyOrder":1,
            "items": {
                "type": "object",
                "title": "Title",
                "properties": {
                    "id": {
                        "type": "integer",
                        "readOnly":true,
                        "propertyOrder":1,
                    },
                    "lang": {
                        "$ref": "#/$defs/LANG",
                        "propertyOrder":4
                    },
                    "titleType": {
                        "type": "string",
                        "title": "Type",
                        "propertyOrder":2,
                        "allowEmpty": false,
                        "enum": ["ALTERNATIVE_TITLE", "SUBTITLE", "TRANSLATED_TITLE", "OTHER", ""],
                        "options": {
                            "enum_titles": [
                                 "Title 1","Title 2","Title 3", "Title 4", "None"
                            ]
                        }
                    },
                    "value": {
                        "type": "string",
                        "title":"Value",
                        "propertyOrder":3

                    }
                },
                "required":["value"]
            }
        }
    }
};
