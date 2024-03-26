let tableDefinitionCollection = {
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    ajaxURL: undefined,
    ajaxProgressiveLoad:"load",
    //ajaxProgressiveLoadDelay:200,
    /*groupBy: function(data){
        //let identifier = data.schema.identifier
        //let version = identifier.substring(identifier.lastIndexOf('?') + 1)
        return [data.publisher, data.publicationYear] ;
    },*/
    height: 400,
    paginationSize: 10,
    paginationSizeSelector: [3, 6, 8, 10, 15, 20],
    ajaxResponse:function(url, params, response){
        //url - the URL of the request
        //params - the parameters passed with the request
        //response - the JSON object returned in the body of the response.
        return response; //pass the data array into Tabulator
    },
    /*dataLoading:   function(data) {
      for(let i=0;i<data.length;i++){
       if(data[i].titles.length === 0){
           data[i].firstTitle = "No title provided";
       }else{
           data[i].firstTitle = data[i].titles[0].value;
       }
      }
    }*/
};
