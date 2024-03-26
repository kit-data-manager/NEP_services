let typea = {
    'template': '<input type="search" autocomplete="off"' +
        'class=\'form-control search <%= (fieldHtmlClass ? " " + fieldHtmlClass : "") %>\'' +
        'name="<%= node.name %>" value="<%= escape(value) %>" id="<%= id %>"' +
        ' aria-label="<%= node.title ? escape(node.title) : node.name %>"' +
        '<%= (node.disabled? " disabled" : "")%>' +
        '<%= (node.readOnly ? " readonly=\'readonly\'" : "") %>' +
        '<%= (node.schemaElement && (node.schemaElement.step > 0 || node.schemaElement.step == "any") ? " step=\'" + node.schemaElement.step + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.minLength ? " minlength=\'" + node.schemaElement.minLength + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.maxLength ? " maxlength=\'" + node.schemaElement.maxLength + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.required && (node.schemaElement.type !== "boolean") ? " required=\'required\'" : "") %>' +
        '<%= (node.placeholder? " placeholder=" + \'"\' + escape(node.placeholder) + \'"\' : "")%>' +
        ' />',
    inputfield: true,
    fieldtemplate: true,

    onInsert: function (evt, node) {

        let resources = [];
        let loggedIn = localStorage.getItem("userLoggedIn");
        let token = localStorage.getItem("token");
        $.ajax({
            url: node.formElement.url,
            type: 'GET',
            dataType: 'json',
            async: false,
            headers: {
                "Accept": 'application/json; charset=utf-8',
                "Authorization": "Bearer " + token
            },
            success: function (json) {
                let arrayLength = json.length;
                for (let i = 0; i < arrayLength; i++) {
                    //if (!resources.includes(eval("json[i]" + node.formElement.selector))) {
                    resources.push(json[i]);//eval("json[i]" + node.formElement.selector));
                    //}
                }
                return resources;
            }
        });

        let reducedResources = [];
        for(let i=0;i<resources.length;i++){
            let res = {};
            res.id = resources[i].id;
            res.pid = resources[i].identifier.value;
            res.title = resources[i].titles[0].value;
            res.publisher = resources[i].publisher;
            res.publicationYear = resources[i].publicationYear;
            reducedResources.push(res);
        }

        typeahead({
            input: document.querySelector('.search'),
            source: {
                local: reducedResources,
                 identifier: 'title', // default identifier -> 'label'
                // dataTokens: ["code"],
                groupIdentifier: 'publicationYear'
            },
            highlight: true,
            className: 'typeahead-example',
            minLength: 1,
            limit: 5,
            hint: false,
            autoSelect: false,
            diacritics: false,
            /* display: (selectedItem, event) => {
              return `${selectedItem.label}, ${selectedItem.code}`;
            }, */
            onSubmit: (e, selectedSuggestion) => {
                alert(`Submitted value -> ${e.target.value}`);
            },
            templates: {
                suggestion: (item, resultSet) => (
                    `<span class="preview""></span><div class="text">${item.title} - ${item.publisher}</div>`
                ),
                group: (name, resultSet) => {
                    const count = resultSet.items.filter((i) => i.publicationYear === name).length;
                    return `<div class="custom-group">${name} (${count})</div>`;
                },
                header: (resultSet) => `Colors Found - ${resultSet.count}`,
                footer: (resultSet) => `${resultSet.count > resultSet.limit ? `<a href="#">See ${resultSet.count - resultSet.limit} more...</a>` : ''}`,
                notFound: (resultSet) => `Oops...No matching color for "${resultSet.query}" 😪`,
            },
        });

        /* Local Data-Source */
        function getColors() {
            return [
                { label: 'Red', code: 'RD', hash: 'red' },
                { label: 'Blue', code: 'BL', hash: 'blue', group: 'Shades of Blue' },
                { label: 'Blue Dark', code: 'DBL', hash: 'darkblue', group: 'Shades of Blue' },
                { label: 'Blue Darker', code: 'DBL', hash: 'midnightblue', group: 'Shades of Blue' },
                { label: 'Blue Light', code: 'LBL', hash: 'cadetblue', group: 'Shades of Blue' },
                { label: 'Blue Extra Light', code: 'XLBL', hash: 'aliceblue', group: 'Shades of Blue' },
                { label: 'Yellow', code: 'YW', hash: 'yellow' },
                { label: 'Gold', code: 'GD', hash: 'gold' },
                { label: 'Silver', code: 'SV', hash: 'silver' },
                { label: 'Orange', code: 'OR', hash: 'orange' },
                { label: 'Green', code: 'GR', hash: 'green' },
                { label: 'White', code: 'WH', hash: 'white' },
                { label: 'Pink', code: 'PI', hash: 'pink' },
                { label: 'Purple', code: 'PR', hash: 'purple' },
                { label: 'Grey', code: 'GR', hash: 'grey' },
                { label: 'Brown', code: 'BR', hash: 'brown' },
                { label: 'Black', code: 'BK', hash: 'black', group: 'Shades of Black' },
                { label: 'Black Light', code: 'LBK', hash: '#352e2e', group: 'Shades of Black' },
            ]
        };
    }
};
