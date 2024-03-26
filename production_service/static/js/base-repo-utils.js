export let config = {};

/**
 * Generates the etag of a data resource.
 * @param {string} idValue represents the identifier of a data resource.
 * @returns {Promise} On success, the ETag is returned, otherwise an error message.
 */
function generateEtag(idValue) {
    let headers = {
        Accept: "application/json"
    };

    if (config.token != null) {
        headers["Authorization"] = "Bearer " + config.token;
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + "dataresources/" + idValue,
            dataType: "json",
            headers: headers,
            success: function (output, status, xhr) {
                resolve(xhr.getResponseHeader("ETag"));
            },

            error: function (result) {
                let message = "Failed generate ETag for resource with id " + idValue + ". (HTTP " + result.status + ")";
                reject(message);
            }
        })
    });
}

/**
 * Generates the etag of a content information element of a data resource.
 * @param {string} idValue represents the identifier of a data resource.
 * @param {string} relativePath The relative path of the content information element.
 * @returns {Promise} On success, the ETag is returned, otherwise an error message.
 */
function generateContentEtag(idValue, relativePath) {
    let headers = {
        Accept: "application/vnd.datamanager.content-information+json"
    };

    if (config.token != null) {
        headers["Authorization"] = "Bearer " + config.token;
    }
    //console.debug("CREATE ETAG FOR " + config.ajaxBaseUrl + "dataresources/" + idValue + "/data/" + relativePath);

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + "dataresources/" + idValue + "/data/" + relativePath,
            dataType: "json",
            headers: headers,
            success: function (output, status, xhr) {
                resolve(xhr.getResponseHeader("ETag"));
            },

            error: function (result) {
                let message = "Failed generate ETag for resource with id " + idValue + " and content path " + relativePath + ". (HTTP " + result.status + ")";
                reject(message);
            }
        })
    });
}

/**
 * Generates the etag of a data resource.
 * @param {string} resourceId Represents the identifier of a data resource.
 * @param {string} relativePath Represents relative path of the content.
 * @returns {Promise} On success, the ETag is returned, otherwise an error message.
 */
function getContentInformation(resourceId, relativePath) {
    let headers = {
        Accept: "application/vnd.datamanager.content-information+json"
    };

    if (config.token != null) {
        headers["Authorization"] = "Bearer " + config.token;
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + "dataresources/" + resourceId + "/data/" + relativePath,
            headers: headers,
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed read content information at path " + relativePath + ". (HTTP " + result.status + ")";
                reject(message);
            }
        })
    });
}

/**
 * Creates a data resource.
 * @param {object} valueRecord JSON value of the data resource.
 * @returns {Promise} Containing a message describing the result.
 */
export function createDataResource(valueRecord) {
        return new Promise(function (resolve, reject) {
            let headers = {
            };

            if (config.token != null) {
                headers["Authorization"] = "Bearer " + config.token;
            }

            $.ajax({
                type: "POST",
                url: config.ajaxBaseUrl + "dataresources/",
                contentType: "application/json",
                processData: false,
                headers: headers,
                data: JSON.stringify(JSON.parse(valueRecord), null, 2),
                success: function () {
                    resolve("Data resource successfully created.");
                },
                error: function (result) {
                    let message = "Failed to create data resource. (HTTP " + result.status + ")";
                    reject(message);
                }
            });
        });
};

/**
 * Updates the data resource.
 * @param {string} valueRecord JSON value of the data resource.
 * @returns {Promise} Containing a message describing the result.
 */
export function updateDataResource(valueRecord) {
    let resourceId = JSON.parse(valueRecord).id;
    //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
    return generateEtag(resourceId).then(function (result) {
        return new Promise(function (resolve, reject) {
            let headers = {
                "If-Match": result,
            };

            if (config.token != null) {
                headers["Authorization"] = "Bearer " + config.token;
            }

            $.ajax({
                type: "PUT",
                url: config.ajaxBaseUrl + "dataresources/" + resourceId,
                contentType: "application/json",
                processData: false,
                headers: headers,
                data: JSON.stringify(JSON.parse(valueRecord), null, 2),
                success: function () {
                    resolve("Data resource successfully updated.");
                },
                error: function (result) {
                    let message = "Failed to update data resource. (HTTP " + result.status + ")";
                    reject(message);
                }
            });
        });
    })
};

/**
 * Patch content information metadata.
 * @param {string} resourceId The resource id of the resource.
 * @param {string} relativePath The relative path of the content element to patch, e.g. myFolder/myFile.txt.
 * @param {string} tag The tag to add/remove.
 * @returns {Promise} Containing a message describing the result.
 */
export function patchContentMetadata(resourceId, relativePath, tag) {
    let patch = null;
    return getContentInformation(resourceId, relativePath).then(success => {
       let idx = -1;
       for(let i=0;i<success.tags.length;i++){
           if(success.tags[i] === tag){
               idx = i;
               break;
           }
       }

        if(idx == -1){
            //add operation
            patch = [
                {
                    "op": "add",
                    "path": "/tags/0",
                    "value": tag
                }
            ];
        }else{
            patch = [
                {
                    "op": "remove",
                    "path": "/tags/" + idx
                }
            ];
        }

        //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
        return generateContentEtag(resourceId, relativePath).then(function (result) {
            return new Promise(function (resolve, reject) {
                let headers = {
                    "If-Match": result,
                };

                if (config.token != null) {
                    headers["Authorization"] = "Bearer " + config.token;
                }

                $.ajax({
                    type: "PATCH",
                    url: config.ajaxBaseUrl + "dataresources/" + resourceId + "/data/" + relativePath,
                    contentType: "application/json-patch+json",
                    processData: false,
                    headers: headers,
                    data: JSON.stringify(patch, null, 2),
                    success: function () {
                        resolve("Content metadata successfully patched.");
                    },
                    error: function (result) {
                        let message = "Failed to patch content metadata. (HTTP " + result.status + ")";
                        reject(message);
                    }
                });
            });
        })
    })
};

/**
 * Upload content to a data resource identified using its identifier. The provided file is stored
 * @param {string} resourceId The id of the data resource.
 * @param {string} relativePath The relative path where to upload the file to.
 * @returns {Promise} Containing a message describing the result.
 */
export function uploadContent(resourceId, relativePath, contentInformationRecord, file) {
    let formData = new FormData();
    if (contentInformationRecord != null) {
        let blobRecord = new Blob([JSON.stringify(JSON.parse(contentInformationRecord), null, 2)], {type: "application/json"});
        const recordFile = new File([blobRecord], 'recordFile.json');
        formData.append("metadata", recordFile);
    }

    return new Promise(function(resolve, reject){
      if(!file){
          reject("No file to upload provided.");
      }

      if(!relativePath){
          reject("No relative path provided.");
      }
      formData.append("file", file);
      resolve(true);
    }).then(success =>{

        //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
        return generateEtag(resourceId).then(function (result) {
            return new Promise(function (resolve, reject) {
                let headers = {
                    "If-Match": result
                };

                if (config.token != null) {
                    headers["Authorization"] = "Bearer " + config.token;
                }

                $.ajax({
                    type: "PUT",
                    url: config.ajaxBaseUrl + "dataresources/" + resourceId + "/data/" + relativePath,
                    contentType: "multipart/form-data",
                    processData: false,
                    headers: headers,
                    data: formData,
                    success: function () {
                        resolve("Metadata record successfully updated.");
                    },
                    error: function (result) {
                        let message = "Failed to update schema record. (HTTP " + result.status + ")";
                        reject(message);
                    }
                });
            });
        })

    });

};
