export let config = {};

let relation_types = [
    {"pid":"21.T11148/4fe7cde52629b61e3b82", "label":"isMetadataFor"},
    {"pid":"21.T11148/d0773859091aeb451528", "label":"hasMetadata"},
    {"pid":"21.T11148/c6e4c19f294ee6f41b1e", "label":"wasDerivedFrom"},
    {"pid":"21.T11148/2a1cad55473b20407c78", "label":"wasRevisionOf"},
    {"pid":"21.T11148/a753134738da82809fc1", "label":"hadPrimarySource"},
    {"pid":"21.T11148/beaeecebec408908de35", "label":"wasQuotedFrom"},
    {"pid":"21.T11148/432132bdbd946b2baf2b", "label":"alternateOf"},
    {"pid":"21.T11148/ab53242825e85a0a7f76", "label":"specializationOf"},
    {"pid":"21.T11148/c085f1292d7d4a338d96", "label":"wasGeneratedBy"},
    {"pid":"21.T11148/af11e18f83466642c47d", "label":"provenanceGraph"},
];

export function resolveType(pid){
    let existing = relation_types.find((element) => element.pid === pid);
    if(existing){
        return existing.label;
    }

    return pid;
}

export function transformUserInput(formOutput, model, known_types){
    //transform form result to Typed PID Maker record format
    let record = {};
    let labelMap = known_types.map(a => a.label);
    let formOutputObject = JSON.parse(formOutput);
    let keys = Object.keys(formOutputObject);
    for (let i = 0; i < keys.length; i++) {
        //obtain PID from schema
        let pid = model['properties'][keys[i]]['pid'];
        //check if attribute value is a digitalObjectType label
        if (labelMap.indexOf(formOutputObject[keys[i]]) >= 0) {
            //We have a type label, set final record value to PID for digitalObjectType label
            record[pid] = known_types.slice(labelMap.indexOf(formOutputObject[keys[i]]), 1).at(0)['pid'];
        } else {
            //check for checksum
            if (pid == '21.T11148/82e2503c49209e987740') {
                //process checksum
                let checksumValue = formOutputObject[keys[i]];
                let checksumAlg = undefined;
                switch (checksumValue.length){
                    case 32:{
                        //md5
                        checksumAlg = "md5";
                        break;
                    }
                    default:{
                        checksumAlg = "sha" + (4 * checksumValue.length);
                    }
                }
                let checksumRecordValue = {};
                checksumRecordValue[checksumAlg + "sum"] = checksumValue;
                record[pid] = checksumRecordValue;
            }else if(pid == '21.T11148/b415e16fbe4ca40f2270'){
                //topic

            } else {
                //we have another attribute value, check if valid and set if true
                if (formOutputObject[keys[i]]) {
                    record[pid] = formOutputObject[keys[i]];
                }
            }
        }
    }

    return record;
}

/*export async function resolveType(pid){
    let headers = {
        Accept: "application/json"
    };

    return await Promise.resolve(new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: "https://dtr-test.pidconsortium.eu/objects/" + pid,
            headers: headers,
            async: false,
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed read type information. (HTTP " + result.status + ")";
                reject(message);
            }
        })
    }));
}*/

export function createFdo(fdo){
    let headers = {
        "Content-Type": "application/vnd.datamanager.pid.simple+json"
    };

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: config.ajaxBaseUrl + "/api/v1/pit/pid/",
            headers: headers,
            data: JSON.stringify(fdo.toTypedPidMaker(), null, 2),
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed register FDO. (HTTP " + result.status + ")";
                reject(message);
            }
        })
    })
}

export function updateFdo(fdo){
    let headers = {
        "Content-Type": "application/vnd.datamanager.pid.simple+json"
    };

    console.log(JSON.stringify(fdo.toTypedPidMaker(), null, 2));

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "PUT",
            url: config.ajaxBaseUrl + "/api/v1/pit/pid/" + fdo.getPid(),
            headers: headers,
            data: JSON.stringify(fdo.toTypedPidMaker(), null, 2),
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed to update FDO. (HTTP " + result.status + ")";
                reject(message);
            }
        })
    })
}

export function readFdo(pid){
    let headers = {
        "Accept": "application/vnd.datamanager.pid.simple+json"
    };

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + "/api/v1/pit/pid/" + pid,
            headers: headers,
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed to read FDO. (HTTP " + result.status + ")";
                reject(message);
            }
        })
    })
}
