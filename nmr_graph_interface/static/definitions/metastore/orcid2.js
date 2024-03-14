let orcid2 = {
    'template': '<div>' +
        '<input type="hidden" name="<%= node.name %>" id="<%= node.id %>" value="<%= value %>" />' +
        '<input type="input" id="name">' +
        '<a id="search">Search</a>' +
        '<select id="orcid_select"' +
        'class=\'form-control<%= (fieldHtmlClass ? " " + fieldHtmlClass : "") %>\'' +
        '<%= (node.schemaElement && node.schemaElement.disabled? " disabled" : "")%>' +
        '<%= (node.schemaElement && node.schemaElement.required ? " required=\'required\'" : "") %>' +
        '> ' +
        '<% _.each(node.options, function(key, val) { if(key instanceof Object) { if (value === key.value) { %> <option selected value="<%= key.value %>"><%= key.title %></option> <% } else { %> <option value="<%= key.value %>"><%= key.title %></option> <% }} else { if (value === key) { %> <option selected value="<%= key %>"><%= key %></option> <% } else { %><option value="<%= key %>"><%= key %></option> <% }}}); %> ' +
        '</select>' +
        '</div>',
    'fieldtemplate': true,
    'inputfield': true,
    'onBeforeRender': function (data, node) {
        data.buttonClass = false;
        data.buttonTitle = 'Select...';
    },
    'getElement': function (el) {
        return $(el).parent().get(0);
    },
    'onInsert': function (evt, node) {
        $("#orcid_select").change(function (value) {
            if ($("#orcid_select").val() === "dummy") {
                return;
            }
            $(node.el).find('input').attr('value', $("#orcid_select").val());
        });

        $(node.el).on('click', '#search', function (evt) {
            let name = $("#name").val();
            let elems = name.split(" ");
            let orcids = [];
            let users = [];
            let additionalResults = 0;
            $.ajax({
                url: "https://pub.orcid.org/v3.0/search/?q=family-name:" + elems[1] + "*+AND+given-names:" + elems[0] + "*&qf=given-names%5E1.0%20family-name%5E3.0",
                type: 'GET',
                async: false,
                headers: {
                    "Accept": 'application/json; charset=utf-8',
                },
                success: function (json) {
                    let arrayLength = json.result.length;
                    if (arrayLength > 10) {
                        additionalResults = arrayLength - 10;
                        arrayLength = 10;
                    }
                    for (let i = 0; i < arrayLength; i++) {
                        let orcid = json.result[i]["orcid-identifier"]["path"];
                        orcids.push("https://pub.orcid.org/v3.0/" + orcid);
                    }
                    return orcids;
                }
            });

            for (let i = 0; i < orcids.length; i++) {
                $.ajax({
                    url: orcids[i],
                    type: 'GET',
                    async: false,
                    headers: {
                        "Accept": 'application/json; charset=utf-8'
                    },
                    success: function (orcid_json) {
                        users.push(orcid_json);
                    }
                });
            }

            $("#orcid_select").empty();

            for (let i = 0; i < users.length; i++) {
                let opt = document.createElement("option");
                if (i == 0) {
                    opt.setAttribute("selected", "true");
                }
                opt.setAttribute("value", users[i]["orcid-identifier"].uri);
                let employments = users[i]["activities-summary"].employments;
                let recentEmployment = employments["affiliation-group"][employments["affiliation-group"].length - 1];
                let affiliation = "Affiliation Unknown";
                if (recentEmployment) {
                    affiliation = recentEmployment.summaries[recentEmployment.summaries.length - 1]["employment-summary"].organization.name;
                }

                opt.text = users[i].person.name["given-names"].value + ", " + users[i].person.name["family-name"].value + " (" + affiliation + ")";
                $("#orcid_select").append(opt);
            }

            if (additionalResults > 0) {
                let opt = document.createElement("option");
                opt.setAttribute("value", "dummy");
                opt.setAttribute("disabled", "true");
                opt.text = "---Showing only 10 of " + (additionalResults + 10) + " results---";
                $("#orcid_select").append(opt);
            }
        });
    }
};
