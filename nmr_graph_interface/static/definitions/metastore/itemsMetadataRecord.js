let tableItems = [{
    formatter:"responsiveCollapse",
    width: 30,
    minWidth: 30,
    hozAlign: "center",
    resizable: false,
    headerSort: false
    },
    {
        "title": "Identifier",
        "field": "id",
        "minWidth": 250
    },  
    {
        "title": "Related Resource",
        "field": "relatedResource.identifier",
        "minWidth": 250
    },
    {
        "title": "Schema Identifier",
        "field": "schema.identifier",
        "formatter":"link",
        "formatterParams":{
            "target":"_blank",
                "label":  function(data){
                     let identifier = undefined;
                        if(data._cell){
                           //expanded cell
                           identifier = data._cell.value;
                        }else{
                           //collapsed cell
                           identifier = data.getValue();
                        }
                    let version = identifier.substring(identifier.lastIndexOf('?') + 1);
                    return identifier.substring(identifier.lastIndexOf('/') + 1, identifier.lastIndexOf('?')) + ' (' + version +')' ;
            }
        }
    },
    {
        "title": "Date Updated",
        "field": "lastUpdate",
        "formatter":"datetime",
        "formatterParams":{
            "outputFormat":"YYYY-MM-DD HH:mm"
        }
    }
];
