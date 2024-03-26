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
            url: config.ajaxBaseUrl + "collections/" + idValue,
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
 * Creates a collection.
 * @param {object} valueRecord JSON value of the collection.
 * @returns {Promise} Containing a message describing the result.
 */
export function createCollection(valueRecord) {
        return new Promise(function (resolve, reject) {
            let headers = {
            };

            if (config.token != null) {
                headers["Authorization"] = "Bearer " + config.token;
            }

            $.ajax({
                type: "POST",
                url: config.ajaxBaseUrl + "collections/",
                contentType: "application/json",
                processData: false,
                headers: headers,
                data: JSON.stringify(JSON.parse(valueRecord), null, 2),
                success: function () {
                    resolve("Data resource successfully created.");
                },
                error: function (result) {
                    let message = "Failed to create collection. (HTTP " + result.status + ")";
                    reject(message);
                }
            });
        });
};

/**
 * Updates the collection.
 * @param {string} valueRecord JSON value of the collection.
 * @returns {Promise} Containing a message describing the result.
 */
export function updateCollection(valueRecord) {
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
                url: config.ajaxBaseUrl + "collections/" + resourceId,
                contentType: "application/json",
                processData: false,
                headers: headers,
                data: JSON.stringify(JSON.parse(valueRecord), null, 2),
                success: function () {
                    resolve("Collection successfully updated.");
                },
                error: function (result) {
                    let message = "Failed to update collection. (HTTP " + result.status + ")";
                    reject(message);
                }
            });
        });
    })
};

