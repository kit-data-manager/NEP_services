/**Transform double quotes in an XML string to single quotes.
 * @param {safe} The string containing double quotes.
 * @return The input string with single quotes instead of double quotes.
 */
function escapeXml(unsafe) {
    return unsafe.replace(/["]/g, function (c) {
        switch (c) {
            case '"':
                return '\'';
        }
    });
};

/**Transform single quotes in an XML string to double quotes.
 * @param {safe} The string containing single quotes.
 * @return The input string with double quotes instead of single quotes.
 */
function unescapeXml(safe) {
    return safe.replace(/[']/g, function (c) {
        switch (c) {
            case '\'':
                return '\"';
        }
    });
};

/**
 * Read a file for the provided input element. If a file was selected, returned promise will resolve to the content as
 * string, otherwise, the promise will be rejected with an error message.
 * @param {node} input input element
 * @returns Promise either resolving to the file content or be rejected with an error message.
 */
function readFile(input) {
    return new Promise(function (resolve, reject) {
        if (input[0].value.length !== 0) {
            //document file is uploaded
            let file = input[0].files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                let documentAsText = reader.result;
                resolve(documentAsText);
            };
        } else {
            reject("No file selected.");
        }
    });
};

/**UUID creation helper for creating unique instances of Ace editor and message elements.*/
function create_UUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export { escapeXml, unescapeXml, readFile, create_UUID };


