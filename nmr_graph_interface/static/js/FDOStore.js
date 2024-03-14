class FDOStore{

    constructor(resolver){
        this.restore();
        this.resolver = resolver;
    }

    store(){
        localStorage.setItem("fdo_creator_fdos", JSON.stringify(Array.from(this.fdos.entries())));
    }

    restore(){
      let fdoString =localStorage.getItem("fdo_creator_fdos");

      if(fdoString){
          //create map from string
          this.fdos = new Map(JSON.parse(fdoString));
          //convert objects to FDOs
          this.fdos.forEach((fdo, key) => {
             let f = new FDO().fromObject(fdo);
             this.fdos.set(key, f);
          });
      }else{
          this.fdos = new Map();
      }
    }

    reset(){
        localStorage.removeItem("fdo_creator_fdos");
        this.fdos = new Map();
    }

    addFdo(fdo){
        this.fdos.set(fdo.getPid(), fdo);
        this.store();
    }

    removeFdo(pid){
        this.fdos.delete(pid);
        this.store();
    }

    getPids(){
        return Array.from(this.fdos.keys());
    }

    getLinkedFDOs(pid){
        let pids = this.getPids();
        let linkedFdos = []
        let fdo = this.getFdo(pid);
        for(let i=0;i<fdo.getProperties().length;i++){
            let valuePid = fdo.getProperties()[i].value;
            if(pids.includes(valuePid)){
               linkedFdos.push({"pid": valuePid, "relationType": fdo.getProperties()[i].key});
            }
        }
        return linkedFdos;
    }

    unlinkFdo(source, target){
        let fdo = this.getFdo(source);
        for(let i=0;i<fdo.getProperties().length;i++){
            let valuePid = fdo.getProperties()[i].value;
            if(valuePid === target){
                fdo.removeProperty(i);
                break;
            }
        }
        this.store();
    }

    getLinks(node){
        let linkNodes = [];
        linkNodes.push(node);
        for (let i = 0; i < node.sourceLinks.length; i++) {
            linkNodes.push(node.sourceLinks[i].target);
        }
        for (let i = 0; i < node.targetLinks.length; i++) {
            linkNodes.push(node.targetLinks[i].source);
        }
        return linkNodes;
    }

    getFdo(pid){
        return this.fdos.get(pid);
    }

    toData(){
        let data = {"nodes":[], "links":[]};
        let pids = this.getPids();
        this.fdos.forEach((fdo) => {
            let node = fdo.toNode();
            data.nodes.push(node);
            node.props.forEach((entry) => {
                if(pids.includes(entry.value)){
                    let link = {"source":node.id, "target":entry.value, "relationType": this.resolver(entry.key)};
                    data.links.push(link);
                }
            });
        });
        return data;
    }
}

