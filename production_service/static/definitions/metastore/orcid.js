let orcid = {
    'template': '<input type="typeahead" ' +
        'class=\'form-control typeahead <%= (fieldHtmlClass ? " " + fieldHtmlClass : "") %>\'' +
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
  /*  onInput: function (evt, node){
    console.debug("CHANGE " + evt.target.value);
    let val = evt.target.value;

        let orcids = [];
        let users = [];
        $.ajax({
           // url: "https://pub.orcid.org/v3.0/search/?q=family-name:" + evt.target.value + "+AND+given-names:Volker&qf=given-names%5E1.0%20family-name%5E3.0",
            url: "https://pub.orcid.org/v3.0/search/?q=family-name:" + evt.target.value,
            type: 'GET',
            async: false,
            headers: {
                "Accept": 'application/json; charset=utf-8',
            },
            success: function (json) {
                let arrayLength = json.result.length;
                console.log("LEN " + arrayLength);
                for (let i = 0; i < arrayLength; i++) {
                    let orcid = json.result[i]["orcid-identifier"]["path"];
                    orcids.push("https://pub.orcid.org/v3.0/" + orcid);
                    if(i == 30){
                        //limit results
                        break;
                    }
                    console.log(i);
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

        let substringMatcher = function (strs) {
            return function findMatches(q, cb) {
                let matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');

                $.each(strs, function (i, str) {
                    if (substrRegex.test(JSON.stringify(str))) {
                        matches.push(str);
                    }
                });
                cb(matches);
            };
        };

        let renderSelection = function(value){
            return value["orcid-identifier"].uri;
        }

        $(node.el).find('.typeahead').typeahead({
                hint: false,
                highlight: true,
                minLength: 3,
                limit: 20,
                async: true
            },
            {
                name: 'users',
                display: renderSelection,
                source: substringMatcher(users),
                templates: {
                    suggestion: Handlebars.compile('<div>{{person.name.given-names.value}} – {{person.name.family-name.value}}</div>')
                }
            }
        );

    },*/

    onInsert: function (evt, node) {
        var orcidData = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            //prefetch: '../data/films/post_1960.json',
            rateLimitWait: 300,
            remote: {
                url: "https://pub.orcid.org/v3.0/search/?q=family-name:%QUERY",
                wildcard: '%QUERY',
                prepare : function(query, settings){
                    settings.headers = {
                        "Accept": 'application/json; charset=utf-8',
                    };
                    settings.url = settings.url.replace("%QUERY", query);
                    return settings;
                },
                transform : function(response){
                    return response;
                }
            }
        });

       /* let orcids = [];
        let users = [];
        $.ajax({
            url: "https://pub.orcid.org/v3.0/search/?q=family-name:Hartmann+AND+given-names:Volker&qf=given-names%5E1.0%20family-name%5E3.0",
            type: 'GET',
            async: false,
            headers: {
                "Accept": 'application/json; charset=utf-8',
            },
            success: function (json) {
              //  console.log(JSON.stringify(json));
                let arrayLength = json.result.length;
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
*/
        let substringMatcher = function (strs) {
            return function findMatches(q, cb) {
                let matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');

                $.each(strs, function (i, str) {
                    if (substrRegex.test(JSON.stringify(str))) {
                        matches.push(str);
                    }
                });
                cb(matches);
            };
        };

       // console.log("Renderer " + node.renderer);

        let renderSelection = function(value){
            return value["orcid-identifier"].uri;
        }

        $(node.el).find('.typeahead').typeahead({
                hint: false,
                highlight: true,
                minLength: 3
            },
            {
                //name: 'orcidData',
                display: renderSelection,
                source: orcidData,//substringMatcher(users),
                templates: {
                    suggestion: Handlebars.compile('<div>{{person.name.given-names.value}} – {{person.name.family-name.value}}</div>')
                }
            }
        );

    }
};
