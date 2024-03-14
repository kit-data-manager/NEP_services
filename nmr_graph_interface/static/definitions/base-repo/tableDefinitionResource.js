let tableDefinitionResource = {
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    ajaxURL: undefined,
    //ajaxProgressiveLoad:"scroll",
    ajaxProgressiveLoad:"load",
    ajaxProgressiveLoadDelay:100,
    groupBy: function(data){
        //let identifier = data.schema.identifier
        //let version = identifier.substring(identifier.lastIndexOf('?') + 1)
        return [data.publisher, data.publicationYear] ;
    },
    height: "90%",
    paginationSize: 10,
    paginationSizeSelector: [3, 6, 8, 10, 15, 20],
    dataLoading: function(data) {
        for (let i = 0; i < data.length; i++) {
              if (data[i].titles.length === 0) {
                  data[i]["firstTitle"] = "No title provided";
              } else {
                  data[i]["firstTitle"] = data[i].titles[0].value;
              }
          }
    }
};
