(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var a=o(n("q1tI")),u=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(u.AmpStateContext))}},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=a(n("q1tI")),i=a(n("Xuae")),c=n("lwAK"),l=n("FYa8"),f=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(a){var u=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?u=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?u=!1:e.add(a.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var f=p[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var s=a.props[f],d=o[f]||new r;d.has(s)?u=!1:(d.add(s),o[f]=d)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var h=i.default();function m(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},CPHa:function(t,e,n){"use strict";var r=n("B4CS"),o=n("H8ru");t.exports=n("8vat")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.HeadManagerContext=a.createContext(null)},GDVm:function(t,e,n){n("ER9p")("Set")},ILKo:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),u=n.n(a),i=n("zwR7"),c=n("vpgN"),l=o.a.createElement;e.default=function(t){return l("div",null,l(u.a,null,l("title",null,"Muhalik"),l("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l("meta",{charSet:"utf-8"}),l("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),l(i.default,null),t.children,l(c.default,null))}},IrWQ:function(t,e,n){var r=n("0T/a");r(r.P+r.R,"Set",{toJSON:n("A0wl")("Set")})},OuPC:function(t,e,n){n("AS96")("Set")},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");t.exports=function(t){return r(t)||o(t)||a()}},"V/f9":function(t,e,n){n("k8Q4"),n("YQlv"),t.exports=n("p9MR").Array.from},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),u=n("K47E"),i=n("WaGi"),c=n("N9n2"),l=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){function f(t){var i;return r(this,f),i=o(this,a(f).call(this,t)),d&&(e.add(u(i)),n(u(i))),i}return c(f,l),i(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},YQlv:function(t,e,n){"use strict";var r=n("vCXk"),o=n("0T/a"),a=n("AYVP"),u=n("nJOo"),i=n("widk"),c=n("pasi"),l=n("s+zB"),f=n("8Vlj");o(o.S+o.F*!n("Q2zc")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,s,d=a(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&i(w))for(n=new p(e=c(d.length));e>y;y++)l(n,y,m?h(d[y],y):d[y]);else for(s=w.call(d),n=new p;!(o=s.next()).done;y++)l(n,y,m?u(s,h,[o.value,y],!0):o.value);return n.length=y,n}})},d04V:function(t,e,n){t.exports=n("V/f9")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},fHQ6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("ILKo"),u=o.a.createElement;e.default=function(){return u(a.default,null,u("h3",{className:"text-center"},"Muhalik's Privacy Policy"))}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.AmpStateContext=a.createContext({})},prQ5:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help/privacy-statement",function(){return n("fHQ6")}])},"s+zB":function(t,e,n){"use strict";var r=n("OtwA"),o=n("+EWW");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},ttDY:function(t,e,n){t.exports=n("vjmV")},vjmV:function(t,e,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("CPHa"),n("IrWQ"),n("GDVm"),n("OuPC"),t.exports=n("p9MR").Set},vpgN:function(t,e,n){"use strict";n.r(e),n.d(e,"FooterStyleSheet",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("vkTu"),u=o.a.createElement,i=a.a.primry_color,c=a.a.primary_text_color,l={footer:{background:"".concat(i),position:"absolute",left:"0",bottom:"0",right:"0"},fooeter_text:{margin:"10px",fontSize:"smaller",color:"".concat(c)}};e.default=function(){return u("div",null,u("div",{style:l.footer},u("p",{className:"text-center",style:l.fooeter_text},"Copyright@ 2020",u("span",{style:{fontSize:"medium",fontWeight:"bold"}}," Muhalik "),"- Online Shopping Website")))}}},[["prQ5",0,1,45,46,48,50,53]]]);