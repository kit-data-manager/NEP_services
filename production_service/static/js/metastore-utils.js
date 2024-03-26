export let config = {};

/**
 * Generates the etag of a metadata record.
 * @param {string} idValue represents the identifier of a metadata record.
 * @param {string} type Target resource type, i.e. schema or metadata
 * @returns {Promise} On success, the ETag is returned, otherwise an error message.
 */
function generateEtag(idValue, type) {
    let accept = (type === "metadata") ? "application/vnd.datamanager.metadata-record+json" : "application/vnd.datamanager.schema-record+json";
    let headers = {
        Accept: accept
    };

    if (config.token !== null) {
        headers["Authorization"] = "Bearer " + config.token;
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + type + "/" + idValue,
            dataType: "json",
            headers: headers,
            success: function (output, status, xhr) {
                resolve(xhr.getResponseHeader("ETag"));
            },

            error: function (result) {
                let message = "Failed generate ETag for resource with id " + idValue + ". (HTTP " + result.status + ")";
                reject(message);
            }
        });
    });
}

/**
 * reads the schema.
 * @param {string} schemaUrl schema document uri.
 * @returns {Promise} On success, the schema is returned, otherwise an error message.
 */
export function readSchema(schemaUrl) {
    return new Promise(function (resolve, reject) {
        let headers = {};

        if (config.token !== null) {
            headers["Authorization"] = "Bearer " + config.token;
        }
        $.ajax({
            type: "GET",
            url: schemaUrl,
            headers: headers,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed to read schema from URL " + schemaUrl + ". (HTTP " + result.status + ")";
                reject(message);
            }
        });
    });
}


export function readSchemaIds() {
    let headers = {
        Accept: "application/vnd.datamanager.schema-record+json"
    };

    if (config.token !== null) {
        headers["Authorization"] = "Bearer " + config.token;
    }

    let result = undefined;
    $.ajax({
        type: "GET",
        url: config.ajaxBaseUrl + "schemas?size=100",
        contentType: "application/json",
        dataType: 'json',
        async: false,
        headers: headers,
        success: function (output, status, xhr) {
            //TODO: send back ETag and use it to check for conflicts later on
            //let res = {};
            //res.etag = xhr.getResponseHeader("etag");
            //res.content = output;
            result = output;
        },
        error: function (result) {
            let message = "Failed to read schema ids from URL " + config.ajaxBaseUrl + "/schemas" + ". (HTTP " + result.status + ")";
            result = message;
        }
    });

    return result;
}

/**
 *  Reads a schema record.
 * @param {string} schemaRecordUrl the value of the JSON schema record.
 * @returns {Promise} On success, the schema record is returned, otherwise an error message.
 */

export function readSchemaRecord(schemaRecordUrl) {
    return new Promise(function (resolve, reject) {
        let headers = {
            Accept: "application/vnd.datamanager.schema-record+json"
        };

        if (config.token !== null) {
            headers["Authorization"] = "Bearer " + config.token;
        }

        $.ajax({
            type: "GET",
            url: schemaRecordUrl,
            contentType: "application/json",
            dataType: 'json',
            headers: headers,
            success: function (output, status, xhr) {
                //TODO: send back ETag and use it to check for conflicts later on
                //let res = {};
                //res.etag = xhr.getResponseHeader("etag");
                //res.content = output;
                resolve(output);
            },
            error: function (result) {
                let message = "Failed to read schema record from URL " + schemaRecordUrl + ". (HTTP " + result.status + ")";
                reject(message);
            }
        });
    });
}

/**
 * updates the metadata record.
 * @param {object} valueRecord JSON value of the metadata record.
 * @param {file} metadataDocumentFile file of the metadata document.
 * @returns {Promise} Containing a message describing the result.
 */
export function updateMetadataRecord(valueRecord, metadataDocumentFile) {
    let formData = new FormData();
    let blobRecord = new Blob([JSON.stringify(JSON.parse(valueRecord), null, 2)], {type: "application/json"});
    const recordFile = new File([blobRecord], 'recordFile.json');

    formData.append("record", recordFile);
    if (metadataDocumentFile !== null) {
        formData.append("document", metadataDocumentFile);
    }

    //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
    return generateEtag(JSON.parse(valueRecord).id, "metadata").then(function (result) {
        return new Promise(function (resolve, reject) {
            let headers = {
                "If-Match": result
            };

            if (config.token !== null) {
                headers["Authorization"] = "Bearer " + config.token;
            }

            $.ajax({
                type: "PUT",
                url: config.ajaxBaseUrl + "metadata/" + JSON.parse(valueRecord).id,
                contentType: false,
                processData: false,
                "headers": headers,
                data: formData,
                success: function () {
                    resolve("Metadata record successfully updated.");
                },
                error: function (result) {
                    var response = JSON.parse(result.responseText);
                    let message = "Failed to update metadata record. (HTTP " + result.status + ") -> " + response.detail;
                    reject(message);
                }
            });
        });
    });
}

/**
 * Updates the schema record.
 * @param {type} valueRecord JSON value of the schema record.
 * @param {type} schemaDocumentFile file of the schema document.
 * @returns {undefined}
 */
export function updateSchemaRecord(valueRecord, schemaDocumentFile) {
    let formData = new FormData();
    let blobRecord = new Blob([JSON.stringify(JSON.parse(valueRecord), null, 2)], {type: "application/json"});
    const recordFile = new File([blobRecord], 'recordFile.json');
    formData.append("record", recordFile);

    if (schemaDocumentFile !== null) {
        formData.append("schema", schemaDocumentFile);
    }

    let schemaId = JSON.parse(valueRecord).schemaId;
    //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
    return generateEtag(schemaId, "schemas").then(function (result) {
        return new Promise(function (resolve, reject) {
            let headers = {
                "If-Match": result
            };

            if (config.token !== null) {
                headers["Authorization"] = "Bearer " + config.token;
            }

            $.ajax({
                type: "PUT",
                url: config.ajaxBaseUrl + "schemas/" + schemaId,
                contentType: false,
                processData: false,
                "headers": headers,
                data: formData,
                success: function () {
                    resolve("Schema record successfully updated.");
                },
                error: function (result) {
                    var response = JSON.parse(result.responseText);
                    let message = "Failed to update schema record. (HTTP " + result.status + ") -> " + response.detail;
                    reject(message);
                }
            });
        });
    });
}

/**
 * Registers a new metadata Record.
 * @param {object} valueMetadataRecord the JSON value of the metadata record.
 * @param {file} metadataDocumentFile the metadata document file.
 * @returns {Promise} Containing a message describing the result.
 */
export function createMetadataRecord(valueMetadataRecord, metadataDocumentFile) {
    let headers = {};

    if (config.token !== null) {
        headers["Authorization"] = "Bearer " + config.token;
    }

    let formData = new FormData();

    let blobRecord = new Blob([JSON.stringify(JSON.parse(valueMetadataRecord), null, 2)], {type: "application/json"});
    const metadataRecordFile = new File([blobRecord], 'metadataRecordFile.json');

    formData.append("document", metadataDocumentFile);
    formData.append("record", metadataRecordFile);

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: config.ajaxBaseUrl + "metadata",
            contentType: false,
            processData: false,
            data: formData,
            headers: headers,
            success: function () {
                resolve("Metadata document successfully created.");
            },
            error: function (result) {
                var response = JSON.parse(result.responseText);
                let message = "Failed to ingest metadata document. (HTTP " + result.status + ") -> " + response.detail;
                reject(message);
            }
        });
    });
}

/**
 * Registers a new schema Record.
 * @param {object} valueSchemaRecord the JSON value of the schema record.
 * @param {file} schemaDocumentFile the schema document file.
 * @returns {Promise} Containing a message describing the result.
 */
export function createSchemaRecord(valueSchemaRecord, schemaDocumentFile) {
    let headers = {};

    if (config.token !== null) {
        headers["Authorization"] = "Bearer " + config.token;
    }

    let formData = new FormData();

    let blobRecord = new Blob([JSON.stringify(JSON.parse(valueSchemaRecord), null, 2)], {type: "application/json"});
    const metadataRecordFile = new File([blobRecord], 'schemaDocumentFile.json');

    formData.append("schema", schemaDocumentFile);
    formData.append("record", metadataRecordFile);

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: config.ajaxBaseUrl + "schemas",
            contentType: false,
            processData: false,
            data: formData,
            headers: headers,
            success: function () {
                resolve("Schema document successfully created.")
            },
            error: function (result) {
                var response = JSON.parse(result.responseText);
                let message = "Failed to create schema record. (HTTP " + result.status + ") -> " + response.detail;
                result.responseText.detail;
                reject(message);
            }
        });
    });
}

/**
 * Reads a metadata document.
 * @param {string} metadataDocumentUri metadata document uri.
 * @returns {Promise} On success, the metadata document is returned, otherwise an error message.
 */
export function readMetadataDocument(metadataDocumentUri) {
    let headers = {};

    if (config.token !== null) {
        headers["Authorization"] = "Bearer " + config.token;
    }

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: metadataDocumentUri,
            dataType: 'text',
            headers: headers,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed to read metadata document from URL " + metadataDocumentUri + " (HTTP " + result.status + ")";
                reject(message);
            }
        });
    });
}
