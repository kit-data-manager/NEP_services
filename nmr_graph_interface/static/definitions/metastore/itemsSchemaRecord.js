let tableItems = [
    {
    formatter:"responsiveCollapse",
    width: 30,
    minWidth: 30,
    hozAlign: "center",
    resizable: false,
    headerSort: false
    },
    {
        "title": "Identifier",
        "field": "schemaId",
        "minWidth": 200
    },  
    {
        "title": "Version",
        "field": "schemaVersion",
        "minWidth": 100
    },
    {
        "title": "Type",
        "field": "type",
        "minWidth": 100
    },
    {
        "title": "Label",
        "field": "label",
        "minWidth":200
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
