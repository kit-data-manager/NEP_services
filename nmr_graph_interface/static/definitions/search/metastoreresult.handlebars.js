(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['metastoreresult'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <a class=\"ui green left corner label\">\n                <i class=\"lock open icon\"></i>\n            </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <a class=\"ui red left corner label\">\n                <i class=\"lock icon\"></i>\n            </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ui divider\"></div>\n<div class=\"ui padded grid\">\n    <div class=\"ui fluid image\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"isOpen")||(depth0 && lookupProperty(depth0,"isOpen"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"read") : stack1),{"name":"isOpen","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":35}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"twelve wide column\">\n            <h3 class=\"ui header\" style=\"margin-left:40px\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "</h3>\n        </div>\n        <!--div class=\"two wide column\">\n            <a class=\"ui fluid orange label\">\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":26}}}) : helper)))
    + "\n            </a>\n        </div-->\n        <div class=\"four wide  right floated column\">\n            <span class=\"ui fluid blue label\">\n                Schema: "
    + alias4((lookupProperty(helpers,"idFromUrl")||(depth0 && lookupProperty(depth0,"idFromUrl"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"schema") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1),{"name":"idFromUrl","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":78}}}))
    + "<br/>\n                <div class=\"detail\">Version: "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"schemaVersion") : stack1), depth0))
    + "</div>\n            </span>\n        </div>\n    </div>\n    <!--row-->\n    <!--div class=\"ui row\">\n        <div class=\"column\">\n             <span>{#creatorsList _source.metadata.creators}\n             {/creatorsList}</span>\n        </div>\n    </div-->\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"column\">\n            <b>Related Resource: </b><a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias4((lookupProperty(helpers,"idFromUrl")||(depth0 && lookupProperty(depth0,"idFromUrl"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1),{"name":"idFromUrl","hash":{},"data":data,"loc":{"start":{"line":41,"column":117},"end":{"line":41,"column":180}}}))
    + "</a>\n        </div>\n    </div>\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Created at:<br/>\n                <div class=\"detail\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"createdAt") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":49,"column":36},"end":{"line":49,"column":83}}}))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Last Modified:<br/>\n                <div class=\"detail\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":55,"column":36},"end":{"line":55,"column":84}}}))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Version:<br/>\n                <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"recordVersion") : stack1), depth0))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide right floated column\">\n            <a class=\"ui fluid white label\">\n                Show<br/>\n                <div class=\"detail more\" data=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadataRecord") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">more...</div>\n            </a>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});
})();