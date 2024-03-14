(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['landingpage'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"descriptions") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</i>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                            <i>No description available</i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":32},"end":{"line":64,"column":41}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class=\"ui fluid list\" style=\"margin-left: 10px\">\n                                        <div class=\"item\">\n                                            <div class=\"content\">\n                                                <div class=\"header\">\n                                                    <a href='"
    + alias3((lookupProperty(helpers,"contentLink")||(depth0 && lookupProperty(depth0,"contentLink"))||alias2).call(alias1,depth0,{"name":"contentLink","hash":{},"data":data,"loc":{"start":{"line":59,"column":61},"end":{"line":59,"column":81}}}))
    + "' target='_blank'>"
    + alias3(((helper = (helper = lookupProperty(helpers,"relativePath") || (depth0 != null ? lookupProperty(depth0,"relativePath") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"relativePath","hash":{},"data":data,"loc":{"start":{"line":59,"column":99},"end":{"line":59,"column":115}}}) : helper)))
    + "</a></div>\n                                                <div class=\"description\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"hash") || (depth0 != null ? lookupProperty(depth0,"hash") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"hash","hash":{},"data":data,"loc":{"start":{"line":60,"column":73},"end":{"line":60,"column":81}}}) : helper)))
    + "</div>\n                                            </div>\n                                        </div>\n                                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                                <i style=\"padding-left: 20px\">No content uploaded, yet.</i>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"rights") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":24},"end":{"line":95,"column":33}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"item\">\n                                <div class=\"content\">\n                                    <a class=\"header\" target=\"_blank\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"schemeUri") || (depth0 != null ? lookupProperty(depth0,"schemeUri") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemeUri","hash":{},"data":data,"loc":{"start":{"line":92,"column":76},"end":{"line":92,"column":89}}}) : helper)))
    + "'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"schemeId") || (depth0 != null ? lookupProperty(depth0,"schemeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemeId","hash":{},"data":data,"loc":{"start":{"line":92,"column":91},"end":{"line":92,"column":103}}}) : helper)))
    + "</a>\n                                </div>\n                            </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <div class=\"description\">No license assigned</div>\n                            </div>\n                        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"relatedIdentifiers") : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":108,"column":28},"end":{"line":115,"column":37}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <a class=\"header\" target=\"_blank\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":111,"column":80},"end":{"line":111,"column":89}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":111,"column":91},"end":{"line":111,"column":109}}}))
    + "</a>\n                                        <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"relationType") || (depth0 != null ? lookupProperty(depth0,"relationType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relationType","hash":{},"data":data,"loc":{"start":{"line":112,"column":66},"end":{"line":112,"column":82}}}) : helper)))
    + ")</div>\n                                    </div>\n                                </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"item\">\n                                <div class=\"content\">\n                                    <div class=\"description\">No related identifiers assigned</div>\n                                </div>\n                            </div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"alternateIdentifiers") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":28},"end":{"line":134,"column":37}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <a class=\"header\" target=\"_blank\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":130,"column":80},"end":{"line":130,"column":89}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":130,"column":91},"end":{"line":130,"column":109}}}))
    + "</a>\n                                        <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"identifierType") || (depth0 != null ? lookupProperty(depth0,"identifierType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"identifierType","hash":{},"data":data,"loc":{"start":{"line":131,"column":66},"end":{"line":131,"column":84}}}) : helper)))
    + ")</div>\n                                    </div>\n                                </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"item\">\n                                <div class=\"content\">\n                                    <div class=\"description\">No alternate identifiers assigned</div>\n                                </div>\n                            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--html>\n<head>\n    <script src=\"../../js/semantic-ui/transition.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dimmer.min.js\"></script>\n    <script src=\"../../js/semantic-ui/tab.min.js\"></script>\n    <script src=\"../../js/semantic-ui/modal.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dropdown.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"../../css/semantic.min.css\">\n</head>\n<body class=\"ui\"-->\n<div class=\"ui grid container\">\n    <div class=\"ui padded grid\">\n        <!--left side (details and content)-->\n        <div class=\"ten wide column\">\n            <div class=\"ui padded grid\">\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"eleven wide column\">\n                        <h3 class=\"ui header\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"titles") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n                    </div>\n                    <div class=\"five wide right floated column\">\n                        <span class=\"ui tiny fluid blue label\">\n                            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"resourceType") : depth0)) != null ? lookupProperty(stack1,"typeGeneral") : stack1), depth0))
    + "<br/>\n                            <div class=\"detail\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"resourceType") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</div>\n                         </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <span style=\"word-wrap: break-word;\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"creatorsList")||(depth0 && lookupProperty(depth0,"creatorsList"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"creators") : depth0),{"name":"creatorsList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":28},"end":{"line":32,"column":71}}})) != null ? stack1 : "")
    + "\n                        </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"descriptions") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":39,"column":24},"end":{"line":43,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <div class=\"ui segment\">\n                            <a class=\"ui left corner label\">\n                                <i class=\"file icon\"></i>\n                            </a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"relativePath") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":53,"column":28},"end":{"line":67,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--right side (metadata)-->\n        <div class=\"six wide column\">\n            <div class=\"ui row\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Metadata</h3>\n                    <b>Publisher:</b><br/>\n                    <span class=\"indent\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"publisher") || (depth0 != null ? lookupProperty(depth0,"publisher") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"publisher","hash":{},"data":data,"loc":{"start":{"line":79,"column":41},"end":{"line":79,"column":54}}}) : helper)))
    + "</span><br/>\n                    <b>Publication Year:</b><br/>\n                    <span class=\"indent\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"publicationYear") || (depth0 != null ? lookupProperty(depth0,"publicationYear") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"publicationYear","hash":{},"data":data,"loc":{"start":{"line":81,"column":41},"end":{"line":81,"column":60}}}) : helper)))
    + "</span><br/>\n                    <b>Created at:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"created") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":83,"column":41},"end":{"line":83,"column":63}}}))
    + "</span><br/>\n                    <b>Last Modified:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"lastUpdate") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":85,"column":41},"end":{"line":85,"column":66}}}))
    + "</span><br/>\n                    <b>License:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"rights") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemeId") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":88,"column":20},"end":{"line":102,"column":27}}})) != null ? stack1 : "")
    + "                    </div>\n                    <br/>\n                    <b>Related Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"relatedIdentifiers") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":107,"column":24},"end":{"line":122,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <b>Alternate Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"alternateIdentifiers") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":126,"column":24},"end":{"line":141,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n            <!--row-->\n            <div class=\"ui row\" style=\"margin-top: 20px\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Downloads</h3>\n                    <div id=\"download_json\" class=\"ui label download\">\n                        JSON\n                    </div>\n                    <div id=\"download_zip\" class=\"ui label download\">\n                        ZIP\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/body>\n</html-->\n";
},"useData":true});
})();