(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},149:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(147),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(149),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ashley Beshir's website"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(154),l=n.n(c),s=n(150),d=n(148);Object(d.c)("body{background-attachment:fixed !important;background-color:black;margin:0;}");var p=function(e){var t=e.children;e.color;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"ashley site"},{name:"keywords",content:"ashley, beshir"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",null,t))},data:a})};p.propTypes={children:u.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-page-2-js-f7528cb6098410cd81ed.js.map