(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fdoresult'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ui divider\"></div>\n<div class=\"ui padded grid\">\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"twelve wide column\">\n            <h3 class=\"ui header\" style=\"margin-left:40px\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"pid") : stack1), depth0))
    + "</h3>\n        </div>\n        <div class=\"four wide  right floated column\">\n            <span class=\"ui fluid blue label\">\n                DataType: "
    + alias2((lookupProperty(helpers,"dataTypeFromPid")||(depth0 && lookupProperty(depth0,"dataTypeFromPid"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"attributes") : stack1)) != null ? lookupProperty(stack1,"21.T11148/1c699a5d1b4ad3ba4956") : stack1),{"name":"dataTypeFromPid","hash":{},"data":data,"loc":{"start":{"line":10,"column":26},"end":{"line":10,"column":97}}}))
    + "<br/>\n            </span>\n        </div>\n    </div>\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"column\">\n            <b>Digital Object Location: </b><a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"attributes") : stack1)) != null ? lookupProperty(stack1,"21.T11148/b8457812905b83046284") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2((lookupProperty(helpers,"shortenLocation")||(depth0 && lookupProperty(depth0,"shortenLocation"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"attributes") : stack1)) != null ? lookupProperty(stack1,"21.T11148/b8457812905b83046284") : stack1),{"name":"shortenLocation","hash":{},"data":data,"loc":{"start":{"line":17,"column":126},"end":{"line":17,"column":197}}}))
    + "</a>\n        </div>\n    </div>\n    <!--row-->\n    <div class=\"ui row\">\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Created at:<br/>\n                <div class=\"detail\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"created") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":25,"column":36},"end":{"line":25,"column":66}}}))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Last Modified:<br/>\n                <div class=\"detail\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":31,"column":36},"end":{"line":31,"column":69}}}))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide column\">\n            <div class=\"ui fluid label\">\n                Version:<br/>\n                <div class=\"detail\">"
    + alias2((lookupProperty(helpers,"formatVersion")||(depth0 && lookupProperty(depth0,"formatVersion"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"attributes") : stack1)) != null ? lookupProperty(stack1,"21.T11148/c692273deb2772da307f") : stack1),{"name":"formatVersion","hash":{},"data":data,"loc":{"start":{"line":37,"column":36},"end":{"line":37,"column":105}}}))
    + "</div>\n            </div>\n        </div>\n        <div class=\"four wide right floated column\">\n            <a class=\"ui fluid white label\">\n                Show<br/>\n                <div class=\"detail more\" data=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"pid") : stack1), depth0))
    + "\">more...</div>\n            </a>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});
})();