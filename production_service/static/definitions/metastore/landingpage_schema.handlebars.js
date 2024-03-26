(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['landingpage_schema'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <i>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1), depth0))
    + "</i>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                                <i>No definition available</i>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <i>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"comment") : stack1), depth0))
    + "</i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <i>No comment available</i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--html>\n<head>\n    <script src=\"../../js/semantic-ui/transition.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dimmer.min.js\"></script>\n    <script src=\"../../js/semantic-ui/tab.min.js\"></script>\n    <script src=\"../../js/semantic-ui/modal.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dropdown.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"../../css/semantic.min.css\">\n</head>\n<body class=\"ui\"-->\n<div class=\"ui grid container\">\n    <div class=\"ui padded grid\" style=\"width:100%\">\n        <!--left side (details and content)-->\n        <div class=\"ten wide column\">\n            <div class=\"ui padded grid\">\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"eleven wide column\">\n                        <h3 class=\"ui header\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + "</h3>\n                    </div>\n                    <div class=\"five wide right floated column\">\n                        <span class=\"ui tiny fluid blue label\">\n                            SchemaId: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"schemaId") : stack1), depth0))
    + "<br/>\n                            <div class=\"detail\">Version: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"schemaVersion") : stack1), depth0))
    + "</div>\n                         </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <i class=\"info icon\"  title=\"Definition\"></i>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":32,"column":24},"end":{"line":36,"column":35}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <i class=\"comment icon\"  title=\"Comment\"></i>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"comment") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":43,"column":24},"end":{"line":47,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <i class=\"linkify icon\" title=\"Related Resource\"></i>\n                        <a href='"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1), depth0))
    + "'\n                           target='_blank'>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1), depth0))
    + "</a></div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <div class=\"ui segment\">\n                            <h5 class=\"ui header\">Metadata Document</h5>\n                            <a class=\"ui right corner label\"  title=\"Viewer\">\n                                <i class=\"file icon\"></i>\n                            </a>\n                            <!--div id=\"json-viewer-document\"></div-->\n                            <pre><code id=\"test\" class=\"language-json\">...</code></pre>\n                        </div>\n                        <div class=\"ui segment\">\n                            <h5 class=\"ui header\">Downloads</h5>\n                            <a class=\"ui right corner label\"  title=\"Downloads\">\n                                <i class=\"download icon\"></i>\n                            </a>\n                            <div class=\"ui fluid list\" style=\"margin-left: 10px\">\n                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <div class=\"header\">\n                                            <a href='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"metadataDocumentUri") : stack1), depth0))
    + "' target='_blank'>Download Metadata</a></div>\n                                        <div class=\"description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"documentHash") : stack1), depth0))
    + "</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"ui fluid list\" style=\"margin-left: 10px\">\n                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <div class=\"header\">\n                                            <a href='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"schemaDocumentUri") : stack1), depth0))
    + "' target='_blank'>Download Schema</a></div>\n                                        <div class=\"description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"schemaHash") : stack1), depth0))
    + "</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--right side (metadata)-->\n        <div class=\"six wide column\">\n            <div class=\"ui grid container\" style=\"margin-top:10px;height:calc(100% - 10px)\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Metadata</h3>\n                    <b>Type:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "</span><br/>\n                    <b>MimeType:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema_record") : depth0)) != null ? lookupProperty(stack1,"mimeType") : stack1), depth0))
    + "</span><br/>\n                    <b>Created at:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"createdAt") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":106,"column":41},"end":{"line":106,"column":75}}}))
    + "</span><br/>\n                    <b>Last Modified:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"md_record") : depth0)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":108,"column":41},"end":{"line":108,"column":76}}}))
    + "</span><br/>\n                </div>\n            </div>\n            <!--row-->\n            <!--div class=\"ui row\" style=\"margin-top: 20px\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Downloads</h3>\n                    <div id=\"download_json\" class=\"ui label download\">\n                        JSON\n                    </div>\n                    <div id=\"download_zip\" class=\"ui label download\">\n                        ZIP\n                    </div>\n                </div>\n            </div-->\n        </div>\n    </div>\n</div>\n<!--/body>\n</html-->\n";
},"useData":true});
})();