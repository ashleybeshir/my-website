(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=(n(149),n(153)),l=n(148),u=190,s=50,d=500,m=800,h=function(e){var t=e.color,n=e.text,a=e.onMouseEnter,r=e.onClick;return i.a.createElement("a",{onMouseEnter:function(){a(t)},onClick:r},i.a.createElement("div",{className:function(e){return Object(l.a)("border:1px solid ",e,";width:",u,"px;height:",s,"px;border-radius:10px;p{color:",e,";text-align:center;}")}(t)},i.a.createElement("p",null,n)))},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).changeColor=function(e){e!==n.state.color&&n.setState({color:e})},n.state={color:"green"},n}return r()(t,e),t.prototype.render=function(){var e,t=this;return i.a.createElement(c.a,{color:this.state.color},i.a.createElement("div",{className:(e=this.state.color,Object(l.a)("z-index:2;width:20%;min-width:250px;border:2px solid ",e,";border-radius:10px;background-color:black;margin-top:20vh;> div{margin-left:auto;margin-right:auto;width:",u,"px;}div:first-child{margin-top:20px;}div:last-child{margin-bottom:20px;}@media only screen and (max-width:",m,"px){}@media only screen and (max-width:",d,"px){}")),onMouseLeave:function(){t.changeColor("green")}},i.a.createElement("div",null,i.a.createElement(h,{color:"yellow",text:"Button 1",onMouseEnter:this.changeColor,onClick:function(){console.log("hello")}}),i.a.createElement(h,{color:"orange",text:"Button 2",onMouseEnter:this.changeColor}),i.a.createElement(h,{color:"white",text:"Button 3",onMouseEnter:this.changeColor}))))},t}(i.a.Component);t.default=p},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(147),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(150),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ashley Beshir's website"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(49),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,n){"use strict";var a=n(151),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(154),u=n.n(l),s=n(149),d=n(148);Object(d.c)("body{background-attachment:fixed !important;background-color:black;margin:0;}");var m=Object(d.b)("div",{target:"elzx0mq0"})("width:100vw;display:flex;justify-content:center;align-items:center;"),h=(n(48),function(){function e(){}return e.getRandomRange=function(e,t){return Math.random()*(t-e)+e},e.getRandomString=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},e}()),p=Object(d.b)("div",{target:"e1ds9ho10"})("p{z-index:-1;@keyframes scrolldown{from{top:0%;opacity:1;}to{top:80%;opacity:0;}}@keyframes opacity{100%{opacity:0;}}animation:scrolldown 3s infinite;transform:rotate(90deg);position:absolute;font-weight:bold;text-shadow:0 0 3px green;}"),f=function(e){for(var t=e.max,n=e.maxLength,a=e.color,r=[],i=0;i<t;i++){var c=h.getRandomRange(4,n),l=(l=100*i/t)>90?h.getRandomRange(0,90):l;r.push([h.getRandomString(c),l])}return o.a.createElement(p,null,r.map(function(e,t){return o.a.createElement("p",{key:t,className:function(e,t){return Object(d.a)("left:",e,"%;animation-delay:",h.getRandomRange(0,3),"s !important;color:",t,";")}(e[1],a)},e[0])}))},g=function(e){var t=e.children,n=e.color;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"ashley site"},{name:"keywords",content:"ashley, beshir"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(f,{max:20,maxLength:25,color:n}),o.a.createElement(m,null,t),o.a.createElement("div",{className:function(e){return Object(d.a)("width:100%;height:50px;background:linear-gradient(black 10%,",e,");position:fixed;bottom:0;")}(n)}))},data:a})};g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-7ea7c8e53094a5a0b6d6.js.map