let tableDefinitionCollectionMember = {
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    pagination: "local",
    ajaxURL: undefined,
    selectable: true,
    //pagination:true,
    /*groupBy: function(data){
        //let identifier = data.schema.identifier
        //let version = identifier.substring(identifier.lastIndexOf('?') + 1)

        return [data.publisher, data.publicationDate] ;
    },*/
    minHeight: 300,
    paginationSize: 10,
    paginationSizeSelector: [3, 6, 8, 10, 15, 20],
   /* dataLoading:   function(data) {
      for(let i=0;i<data.length;i++){
       if(data[i].titles.length === 0){
           data[i].firstTitle = "No title provided";
       }else{
           data[i].firstTitle = data[i].titles[0].value;
       }
      }
    }*/
};
