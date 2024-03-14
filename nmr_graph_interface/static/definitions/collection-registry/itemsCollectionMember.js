let tableItemsMembers = [{
    formatter:"responsiveCollapse",
    width: 30,
    minWidth: 30,
    hozAlign: "center",
    resizable: false,
    headerSort: false
    },
    {
        "title": "Name",
        "field": "filename",
        "minWidth": 200
    },  
    {
        "title": "Media Type",
        "field": "mediaType"
    },
    {
        "title": "Hash",
        "field": "hash",
        "minWidth":200
    },
    {
        "title": "Size",
        "field": "size",
        "minWidth": 100,
        "formatter": function formatBytes(cell, decimals = 2) {
            if (!+cell.getValue()) return '0 Bytes'

            const k = 1024
            const dm = decimals < 0 ? 0 : decimals
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

            const i = Math.floor(Math.log(cell.getValue()) / Math.log(k))

            return `${parseFloat((cell.getValue() / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
        }
    },
    {
        "title": "Uploader",
        "field": "uploader"
    },
    {
        "title": "Tags",
        "field": "tags",
        "minWidth":150,
        "formatter":null
    }
];
