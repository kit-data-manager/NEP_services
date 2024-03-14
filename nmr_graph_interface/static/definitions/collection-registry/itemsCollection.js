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
        "field": "id"
    },  
    {
        "title": "Creation Date",
        "field": "properties.dateCreated",
        "formatter":"datetime",
        "formatterParams":{
            "outputFormat":"YYYY-MM-DD HH:mm"
        }
    },
    {
        "title": "License",
        "field": "properties.license"
    },
    {
        "title": "Model Type",
        "field": "properties.modelType"
    },
    {
        "title": "Ownership",
        "field": "properties.ownership",
    }
];
