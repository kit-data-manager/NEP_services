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
        "title": "Title",
        "field": "firstTitle"
    },
    {
        "title": "Publisher",
        "field": "publisher"
    },
    {
        "title": "Publication Year",
        "field": "publicationYear"
    },
    {
        "title": "Resource Type",
        "field": "resourceType.value",
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
