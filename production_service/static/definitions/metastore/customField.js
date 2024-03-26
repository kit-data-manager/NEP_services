var customField = {
    // The template describes the HTML that the field will generate.
    // It uses Underscore.js templates.
    template: '<div>' +
        '<div id="<%=node.id%>">' +
        //'<%=myvalue%>' +
        '<div class="ui grid">'+
        '<div className="ui right labeled input four wide column">'+
            '<input type="text" placeholder="Enter weight.." value="<%=pro%>">'+
                '<div className="ui basic label">'+
                    'Proposal'+
                '</div>'+
        '</div>'+
        '<div className="ui right labeled input four wide column">'+
        '<input type="text" placeholder="Enter weight.." value="<%=exp%>">'+
        '<div className="ui basic label">'+
        'Measurement'+
        '</div>'+
        '</div>'+
        '<div className="ui right labeled input four wide column">'+
        '<input type="text" placeholder="Enter weight.." value="<%=ana%>">'+
        '<div className="ui basic label">'+
        'Experiment'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>' +
        '</div>',

    // Set the inputfield flag when the field is a real input field
    // that produces a value. Set the array flag when it creates an
    // array of fields. Both flags are mutually exclusive.
    // Do not set any of these flags for containers and other types
    // of fields.
    inputfield: true,
    array: false ,

    // Most real input fields should set this flag that wraps the
    // generated content into the HTML code needed to report errors
    fieldtemplate: true,

    // Return the root element created by the field
    // (el is the DOM element whose id is node.id,
    // this function is only useful when el is not the root
    // element in the field's template)
    getElement: function (el) {
        // Adjust the following based on your template. In this example
        // there is an additional <div> so we need to go one level up.
        return $(el).parent().get(0);
    },

    // This is where you can complete the data that will be used
    // to run the template string
    onBeforeRender: function (data, node) {
        let val = "p1-m1-a1";
        let arr = val.split("-");
        data.pro = arr[0];
        data.exp = arr[1];
        data.ana = arr[2];
    },

    // This is where you can enhance the generated HTML by adding
    // event handlers if needed
    onInsert: function (evt, node) {
    }
};