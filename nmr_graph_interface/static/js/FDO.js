class FDO{
    constructor(customName, pid) {
        this.customName = customName;
        this.pid = pid;
        this.properties = [];
    }

    setPid(pid){
        this.pid = pid;
    }

    getPid(){
        return this.pid;
    }

    setCustomName(customName){
        this.customName = customName;
    }

    getCustomName(){
        return this.customName;
    }

    addProperty(key, value){
        this.properties.push({"key": key, "value": value});
    }

    removeProperty(idx){
        this.properties.splice(idx, 1);
    }

    getProperties(){
        return this.properties;
    }

    hasLinkTo(pid){
        for(let i=0;i<this.properties.length;i++){
            if(this.properties[i].value === pid) return true;
        }
        return false;
    }

    fromObject(object){
        let f = new FDO();
        f.setCustomName(object['customName']);
        f.setPid(object['pid']);
        for(let i=0;i<object['properties'].length;i++){
            f.addProperty(object['properties'][i].key, object['properties'][i].value);
        }
        return f;
    }

    fromTypedPidMaker(document){
        let fdoJson = JSON.parse(document);
        this.pid = fdoJson.pid;
        console.log(fdoJson);
        for(let i=0;i<fdoJson.record.length;i++){
            if(fdoJson.record[i].key === "21.T11148/82e2503c49209e987740"){
                this.addProperty(fdoJson.record[i].key, JSON.parse(fdoJson.record[i].value));
            }else{
                this.addProperty(fdoJson.record[i].key, fdoJson.record[i].value);
            }
        }
    }

    toTypedPidMaker(){
        let result = {"record":[]};
        result.pid = this.getPid();
        for(let i=0;i<this.properties.length;i++){
            if(this.properties[i].key === "customName"){
                //ignore
            }else if(this.properties[i].key === "21.T11148/82e2503c49209e987740"){
                let entry = {"key": this.properties[i].key, "value": JSON.stringify(this.properties[i].value)};
                result.record.push(entry);
            }else {
                let entry = {"key": this.properties[i].key, "value": this.properties[i].value};
                result.record.push(entry);
            }
        }
        return result;
    }

    fromJson(formOutput, known_types){
        let result = new FDO();
        result.pid = "(:tba)_" + new Date().getTime();
        let labelMap = known_types.map(a => a.label);
        let formOutputObject = JSON.parse(formOutput);
        let keys = Object.keys(formOutputObject);
        result.setCustomName(formOutputObject["customName"])
        for (let i = 0; i < keys.length; i++) {
            //obtain PID from schema
            let pid = model['properties'][keys[i]]['pid'];
            //check if attribute value is a digitalObjectType label
            if (labelMap.indexOf(formOutputObject[keys[i]]) >= 0) {
                //We have a type label, set final record value to PID for digitalObjectType label
                result.addProperty(pid, known_types.slice(labelMap.indexOf(formOutputObject[keys[i]]), 1).at(0)['pid']);
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
                    result.addProperty(pid, checksumRecordValue);
                }else if(pid == '21.T11148/b415e16fbe4ca40f2270'){
                    //topic
                    result.addProperty(pid, formOutputObject[keys[i]]);
                } else {
                    //we have another attribute value, check if valid and set if true
                    if (formOutputObject[keys[i]]) {
                        result.addProperty(pid, formOutputObject[keys[i]]);
                    }
                }
            }
        }

        return result;
    }

    toNode(){
        let node = {};
        node.id = this.pid;

        let typeProperty = this.properties.find((element) => element.key === "21.T11148/1c699a5d1b4ad3ba4956");
        if( typeProperty){
            node.type =  typeProperty.value;
        }

        node.customName = this.customName;
        let props = [];
        for(let i=0;i<this.properties.length;i++){
            let prop = this.properties[i];
            props.push({"key":prop.key, "value":prop.value});
        }
        node.props = props;
        return node;
    }
};



