
/**
 * resource type
 * @type resourceType
 */
const ResourceType = {
    SCHEMA : "SCHEMA",
    DOCUMENT : "METADATA"
};

/**
 * status type
 * @type statusType
 */
const StatusType = {
    SUCCESS : "SUCCESS",
    ERROR : "ERROR"
};

function metastore() {

    /*
     * base URL, e.g., https://hostname:port
     */
    this.endpointUrl = null;
    /*
     * bearerToken used for authentication
     */
    this.bearerToken = null;

}

/**
 * obtain an etag for a resource of a certain type, i.e., ResourceType.SCHEMA or ResourceType.Metadata.
 * @param {resourceType} type The resource type, i.e., SCHEMA or DOCUMENT.
 * @param {type} idValue represents the identifier of a metadata record.
 * @returns {Promise} a promise either delivering the etag or the error.
 */
metastore.prototype.getEtag = function(type, idValue) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let contentType = (type === ResourceType.SCHEMA) ? "application/vnd.datamanager.schema-record+json" : "application/vnd.datamanager.metadata-record+json";
            let endpoint = (type === ResourceType.SCHEMA) ? "/api/v1/schemas/" : "/api/v1/metadata/";
            let headers = null;
            let etag = -1;

            if (this.bearerToken) {
                headers = {
                    Accept: contentType,
                    Authorization: 'Bearer ' + this.bearerToken
                }
            } else {
                headers = {
                    Accept: contentType
                }
            }

            $.ajax({
                type: "GET",
                url: this.endpointUrl + endpoint + idValue,
                dataType: "json",
                headers: headers,
                success: function (output, status, xhr) {
                    etag = xhr.getResponseHeader("ETag");
                    resolve({idValue, etag})
                },

                error: function (result) {
                    reject(result);
                }
            });
        }, 1000)
    })
}


/**
 * updates the metadata record.
 * @param {resourceType} type The resource type, i.e., SCHEMA or DOCUMENT
 * @param {type} valueRecord JSON value of the metadata record.
 * @param {type} metadataDocumentFile file of the metadata document.
 * @param {type} callback Callback function to return the status
 * @returns {undefined}
 */
metastore.prototype.updateMetadataRecord = function(type,valueRecord, metadataDocumentFile, callback) {
    let formData = new FormData();
    let recordObject = JSON.parse(valueRecord);
    let endpoint = (type === ResourceType.SCHEMA) ? "/api/v1/schemas/" : "/api/v1/metadata/";
    let blobRecord = new Blob([JSON.stringify(recordObject, null, 2)], {type: "application/json"});
    const recordFile = new File([blobRecord], 'recordFile.json');

    formData.append("record", recordFile);
    if (metadataDocumentFile !== null) {
        formData.append("document", metadataDocumentFile);
    }

    let recordId = recordObject.id;

    this.getEtag(type, recordId).then(({idValue, etag})=>{
        let headers = null;
        if (this.bearerToken) {
            headers = {
                Authorization: 'Bearer ' + this.bearerToken,
                "If-Match": etag
            }
        } else {
            headers = {
                "If-Match": etag
            }
        }

        $.ajax({
            type: "PUT",
            url: this.endpointUrl + endpoint + JSON.parse(valueRecord).id,
            contentType: false,
            processData: false,
            headers: headers,
            data: formData,
            success: function () {
                console.log("ok CALL");
                callback(StatusType.SUCCESS);
            },
            error: function (result) {
                console.log("ERROR CALL");
                console.error("Failed to update metadata record with status " + result.status + " (Response: " + result + ")" );
                callback(StatusType.ERROR);
            }
        });
    });
}

/**
 * reads the schema.
 * @param {type} schemaUrl schema document uri.
 * @param {type} callback cb function returns the schema in case the actual method is coorectly executed.
 * @returns {undefined}
 */
metastore.prototype.readSchema = function(schemaUrl, callback) {
    let headers = null;

    if (this.bearerToken) {
        headers = {
            Authorization: 'Bearer ' + this.bearerToken
        }
    }

    $.ajax({
        type: "GET",
        url: schemaUrl,
        headers: headers,
        success: function (result) {
            callback(StatusType.SUCCESS, result);
        },
        error: function (result) {
            console.error("Failed to read schema with status " + result.status + " (Response: " + result + ")" );
            callback(StatusType.ERROR);
        }
    });

};
