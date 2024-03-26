(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reporesult_detailed'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</i>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i>No description available</i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":28},"end":{"line":64,"column":37}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"ui fluid list\" style=\"margin-left: 10px\">\n                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <div class=\"header\"><a href='"
    + alias3((lookupProperty(helpers,"contentLink")||(depth0 && lookupProperty(depth0,"contentLink"))||alias2).call(alias1,depth0,{"name":"contentLink","hash":{},"data":data,"loc":{"start":{"line":58,"column":69},"end":{"line":58,"column":89}}}))
    + "'\n                                                               target='_blank'>"
    + alias3(((helper = (helper = lookupProperty(helpers,"relativePath") || (depth0 != null ? lookupProperty(depth0,"relativePath") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"relativePath","hash":{},"data":data,"loc":{"start":{"line":59,"column":79},"end":{"line":59,"column":95}}}) : helper)))
    + "</a></div>\n                                        <div class=\"description\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"hash") || (depth0 != null ? lookupProperty(depth0,"hash") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"hash","hash":{},"data":data,"loc":{"start":{"line":60,"column":65},"end":{"line":60,"column":73}}}) : helper)))
    + "</div>\n                                    </div>\n                                </div>\n                            </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                            <i style=\"padding-left: 20px\">No content uploaded, yet.</i>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"indent\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1), depth0))
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"indent\">No license assigned</span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":24},"end":{"line":103,"column":33}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <a class=\"header\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":99,"column":56},"end":{"line":99,"column":65}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":99,"column":67},"end":{"line":99,"column":85}}}))
    + "</a>\n                                <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"relationType") || (depth0 != null ? lookupProperty(depth0,"relationType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relationType","hash":{},"data":data,"loc":{"start":{"line":100,"column":58},"end":{"line":100,"column":74}}}) : helper)))
    + ")</div>\n                            </div>\n                        </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <div class=\"description\">No related identifiers assigned</div>\n                            </div>\n                        </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alternateIdentifiers") : stack1),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":24},"end":{"line":122,"column":33}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <a class=\"header\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":118,"column":56},"end":{"line":118,"column":65}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":118,"column":67},"end":{"line":118,"column":85}}}))
    + "</a>\n                                <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"identifierType") || (depth0 != null ? lookupProperty(depth0,"identifierType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"identifierType","hash":{},"data":data,"loc":{"start":{"line":119,"column":58},"end":{"line":119,"column":76}}}) : helper)))
    + ")</div>\n                            </div>\n                        </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <div class=\"description\">No alternate identifiers assigned</div>\n                            </div>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--html>\n<head>\n    <script src=\"../../js/semantic-ui/transition.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dimmer.min.js\"></script>\n    <script src=\"../../js/semantic-ui/tab.min.js\"></script>\n    <script src=\"../../js/semantic-ui/modal.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dropdown.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"../../css/semantic.min.css\">\n</head>\n<body class=\"ui\"-->\n<div class=\"ui grid container\">\n    <div class=\"ui padded grid\">\n        <!--left side (details and content)-->\n        <div class=\"ten wide column\">\n            <div class=\"ui padded grid\">\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"eleven wide column\">\n                        <h3 class=\"ui header\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"titles") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n                    </div>\n                    <div class=\"five wide right floated column\">\n                     <span class=\"ui tiny fluid blue label\">\n                         "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"typeGeneral") : stack1), depth0))
    + "<br/>\n                        <div class=\"detail\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</div>\n            </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <span style=\"word-wrap: break-word;\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"creatorsList")||(depth0 && lookupProperty(depth0,"creatorsList"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"creators") : stack1),{"name":"creatorsList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":28},"end":{"line":32,"column":88}}})) != null ? stack1 : "")
    + "\n                        </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":39,"column":24},"end":{"line":43,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <div class=\"ui segment\">\n                            <a class=\"ui left corner label\">\n                                <i class=\"file icon\"></i>\n                            </a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"relativePath") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":53,"column":28},"end":{"line":67,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--right side (metadata)-->\n        <div class=\"six wide column\">\n            <div class=\"ui row\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Metadata</h3>\n                    <b>Publisher:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publisher") : stack1), depth0))
    + "</span><br/>\n                    <b>Publication Year:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publicationYear") : stack1), depth0))
    + "</span><br/>\n                    <b>Created at:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"created") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":83,"column":41},"end":{"line":83,"column":71}}}))
    + "</span><br/>\n                    <b>Last Modified:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":85,"column":41},"end":{"line":85,"column":74}}}))
    + "</span><br/>\n                    <b>License:</b><br/>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":87,"column":20},"end":{"line":91,"column":27}}})) != null ? stack1 : "")
    + "                    <br/>\n                    <b>Related Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":95,"column":24},"end":{"line":110,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <b>Alternate Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alternateIdentifiers") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":114,"column":24},"end":{"line":129,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n            <!--row-->\n            <div class=\"ui row\" style=\"margin-top: 20px\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Downloads</h3>\n                    <div id=\"download_json\" class=\"ui label download\">\n                        JSON\n                    </div>\n                    <div id=\"download_zip\" class=\"ui label download\">\n                        ZIP\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/body>\n</html-->\n";
},"useData":true});
})();