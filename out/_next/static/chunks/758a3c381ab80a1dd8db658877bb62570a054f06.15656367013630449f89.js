(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=u,e.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),c=n("lwAK"),f=n("FYa8"),l=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(i.type){case"title":case"base":e.has(i.type)?a=!1:e.add(i.type);break;case"meta":for(var c=0,f=p.length;c<f;c++){var l=p[c];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=i.props[l],d=o[l]||new r;d.has(s)?a=!1:(d.add(s),o[l]=d)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var h=u.default();function m(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(f.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},A0wl:function(t,e,n){var r=n("fYqa"),o=n("rfP5");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},B4CS:function(t,e,n){"use strict";var r=n("OtwA").f,o=n("cQhG"),i=n("OQSD"),a=n("vCXk"),u=n("sLxe"),c=n("VgtN"),f=n("5Kld"),l=n("JFuE"),s=n("G+Sp"),d=n("fZVS"),p=n("YndH").fastKey,v=n("H8ru"),h=d?"_s":"size",m=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var l=t((function(t,r){u(t,l,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&c(r,n,t[f],t)}));return i(l.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=m(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(v(this,e),t)}}),d&&r(l.prototype,"size",{get:function(){return v(this,e)[h]}}),l},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,n){f(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),s(e)}}},CPHa:function(t,e,n){"use strict";var r=n("B4CS"),o=n("H8ru");t.exports=n("8vat")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},ELB5:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),u=n("/fka"),c=n("zFog"),f=o.a.createElement;e.default=function(t){return f("div",null,f(a.a,null,f("title",null,"Muhalik"),f("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),f("meta",{charSet:"utf-8"}),f("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),f(u.default,null),t.children,f(c.default,null))}},GDVm:function(t,e,n){n("ER9p")("Set")},IrWQ:function(t,e,n){var r=n("0T/a");r(r.P+r.R,"Set",{toJSON:n("A0wl")("Set")})},OuPC:function(t,e,n){n("AS96")("Set")},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},"V/f9":function(t,e,n){n("k8Q4"),n("YQlv"),t.exports=n("p9MR").Array.from},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),f=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){function l(t){var u;return r(this,l),u=o(this,i(l).call(this,t)),d&&(e.add(a(u)),n(a(u))),u}return c(l,f),u(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component)}},YQlv:function(t,e,n){"use strict";var r=n("vCXk"),o=n("0T/a"),i=n("AYVP"),a=n("nJOo"),u=n("widk"),c=n("pasi"),f=n("s+zB"),l=n("8Vlj");o(o.S+o.F*!n("Q2zc")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,s,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,_=0,y=l(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&u(y))for(n=new p(e=c(d.length));e>_;_++)f(n,_,m?h(d[_],_):d[_]);else for(s=y.call(d),n=new p;!(o=s.next()).done;_++)f(n,_,m?a(s,h,[o.value,_],!0):o.value);return n.length=_,n}})},d04V:function(t,e,n){t.exports=n("V/f9")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},rfP5:function(t,e,n){var r=n("VgtN");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},"s+zB":function(t,e,n){"use strict";var r=n("OtwA"),o=n("+EWW");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},ttDY:function(t,e,n){t.exports=n("vjmV")},vjmV:function(t,e,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("CPHa"),n("IrWQ"),n("GDVm"),n("OuPC"),t.exports=n("p9MR").Set},zFog:function(t,e,n){"use strict";n.r(e);var r=n("MX0m"),o=n.n(r),i=n("q1tI"),a=n.n(i),u=n("YdTC"),c=a.a.createElement;e.default=function(){return c("div",{className:o.a.dynamic([["2300049164",[u.default.primry_color,u.default.primary_text_color]]])},c("div",{className:o.a.dynamic([["2300049164",[u.default.primry_color,u.default.primary_text_color]]])+" footer"},c("p",{className:o.a.dynamic([["2300049164",[u.default.primry_color,u.default.primary_text_color]]])+" fooeter_text text-center"},"Copyright@ 2020",c("span",{className:o.a.dynamic([["2300049164",[u.default.primry_color,u.default.primary_text_color]]])}," Muhalik "),"- Online Shopping Website")),c(o.a,{id:"2300049164",dynamic:[u.default.primry_color,u.default.primary_text_color]},[".footer.__jsx-style-dynamic-selector{background:".concat(u.default.primry_color,";position:absolute;left:0;bottom:0;right:0;}"),".fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:".concat(u.default.primary_text_color,";}"),"span.__jsx-style-dynamic-selector{font-weight:bold;}"]))}}}]);