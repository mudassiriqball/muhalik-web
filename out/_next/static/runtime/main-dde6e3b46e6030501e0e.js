(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+oT+":function(e,t,r){var n=r("eVuF");function o(e,t,r,o,a,i,u){try{var c=e[i](u),s=c.value}catch(f){return void r(f)}c.done?t(s):n.resolve(s).then(o,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new n((function(n,a){var i=e.apply(t,r);function u(e){o(i,n,a,u,c,"next",e)}function c(e){o(i,n,a,u,c,"throw",e)}u(void 0)}))}}},"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"04/V":function(e,t,r){var n=r("fYqa"),o=r("G1Wo")("iterator"),a=r("sipE");e.exports=r("p9MR").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(n(t))}},"1gQu":function(e,t,r){r("GTiD"),e.exports=r("p9MR").Array.isArray},"60ZH":function(e,t,r){var n=r("vCXk"),o=r("i6sE"),a=r("AYVP"),i=r("pasi"),u=r("vwY1");e.exports=function(e,t){var r=1==e,c=2==e,s=3==e,f=4==e,p=6==e,l=5==e||p,d=t||u;return function(t,u,v){for(var h,m,y=a(t),g=o(y),x=n(u,v,3),w=i(g.length),E=0,_=r?d(t,w):c?d(t,0):void 0;w>E;E++)if((l||E in g)&&(m=x(h=g[E],E,y),e))if(r)_[E]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return E;case 2:_.push(h)}else if(f)return!1;return p?-1:s||f?f:_}}},"8Vlj":function(e,t,r){var n=r("fYqa"),o=r("G1Wo")("iterator"),a=r("sipE");e.exports=r("p9MR").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||a[n(e)]}},"8vat":function(e,t,r){"use strict";var n=r("2jw7"),o=r("0T/a"),a=r("YndH"),i=r("14Ie"),u=r("jOCL"),c=r("OQSD"),s=r("VgtN"),f=r("sLxe"),p=r("b4pn"),l=r("wNhr"),d=r("OtwA").f,v=r("60ZH")(0),h=r("fZVS");e.exports=function(e,t,r,m,y,g){var x=n[e],w=x,E=y?"set":"add",_=w&&w.prototype,b={};return h&&"function"==typeof w&&(g||_.forEach&&!i((function(){(new w).entries().next()})))?(w=t((function(t,r){f(t,w,e,"_c"),t._c=new x,void 0!=r&&s(r,y,t[E],t)})),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),(function(e){var t="add"==e||"set"==e;e in _&&(!g||"clear"!=e)&&u(w.prototype,e,(function(r,n){if(f(this,w,e),!t&&g&&!p(r))return"get"==e&&void 0;var o=this._c[e](0===r?0:r,n);return t?this:o}))})),g||d(w.prototype,"size",{get:function(){return this._c.size}})):(w=m.getConstructor(t,e,y,E),c(w.prototype,r),a.NEED=!0),l(w,e),b[e]=w,o(o.G+o.W+o.F,b),g||m.setStrong(w,e,y),w}},AS96:function(e,t,r){"use strict";var n=r("0T/a"),o=r("8v5W"),a=r("vCXk"),i=r("VgtN");e.exports=function(e){n(n.S,e,{from:function(e){var t,r,n,u,c=arguments[1];return o(this),(t=void 0!==c)&&o(c),void 0==e?new this:(r=[],t?(n=0,u=a(c,arguments[2],2),i(e,!1,(function(e){r.push(u(e,n++))}))):i(e,!1,r.push,r),new this(r))}})}},Atf5:function(e,t,r){var n=r("b4pn"),o=r("taoM"),a=r("G1Wo")("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},BMP1:function(e,t,r){"use strict";var n=r("5Uuq")(r("IKlv"));window.next=n,(0,n.default)().catch((function(e){console.error(e.message+"\n"+e.stack)}))},DqTX:function(e,t,r){"use strict";var n=r("/HRN"),o=r("WaGi"),a=r("KI45");t.__esModule=!0,t.default=void 0;var i=a(r("eVuF")),u={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},c=function(){function e(){var t=this;n(this,e),this.updateHead=function(e){var r=t.updatePromise=i.default.resolve().then((function(){r===t.updatePromise&&(t.updatePromise=null,t.doUpdateHead(e))}))},this.updatePromise=null}return o(e,[{key:"doUpdateHead",value:function(e){var t=this,r={};e.forEach((function(e){var t=r[e.type]||[];t.push(e),r[e.type]=t})),this.updateTitle(r.title?r.title[0]:null);["meta","base","link","style","script"].forEach((function(e){t.updateElements(e,r[e]||[])}))}},{key:"updateTitle",value:function(e){var t="";if(e){var r=e.props.children;t="string"===typeof r?r:r.join("")}t!==document.title&&(document.title=t)}},{key:"updateElements",value:function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");for(var o=Number(n.content),a=[],i=0,u=n.previousElementSibling;i<o;i++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&a.push(u);var c=t.map(s).filter((function(e){for(var t=0,r=a.length;t<r;t++){if(a[t].isEqualNode(e))return a.splice(t,1),!1}return!0}));a.forEach((function(e){return e.parentNode.removeChild(e)})),c.forEach((function(e){return r.insertBefore(e,n)})),n.content=(o-a.length+c.length).toString()}}]),e}();function s(e){var t=e.type,r=e.props,n=document.createElement(t);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o){var a=u[o]||o.toLowerCase();n.setAttribute(a,r[o])}var i=r.children,c=r.dangerouslySetInnerHTML;return c?n.innerHTML=c.__html||"":i&&(n.textContent="string"===typeof i?i:i.join("")),n}t.default=c},ER9p:function(e,t,r){"use strict";var n=r("0T/a");e.exports=function(e){n(n.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},FYa8:function(e,t,r){"use strict";var n=r("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var a=o(r("q1tI"));t.HeadManagerContext=a.createContext(null)},"G+Sp":function(e,t,r){"use strict";var n=r("2jw7"),o=r("p9MR"),a=r("OtwA"),i=r("fZVS"),u=r("G1Wo")("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];i&&t&&!t[u]&&a.f(t,u,{configurable:!0,get:function(){return this}})}},GTiD:function(e,t,r){var n=r("0T/a");n(n.S,"Array",{isArray:r("taoM")})},H8ru:function(e,t,r){var n=r("b4pn");e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},IKlv:function(e,t,r){"use strict";var n=r("ln6h"),o=r("/HRN"),a=r("WaGi"),i=r("ZDA2"),u=r("/+P4"),c=r("N9n2"),s=r("8+Nu"),f=r("5Uuq"),p=r("KI45");t.__esModule=!0,t.render=J,t.renderError=$,t.default=t.emitter=t.router=t.version=void 0;var l=p(r("+oT+")),d=p(r("htGi")),v=(p(r("5Uuq")),p(r("eVuF"))),h=p(r("q1tI")),m=p(r("i8i4")),y=p(r("DqTX")),g=r("nOHt"),x=p(r("dZ6Y")),w=r("g/15"),E=p(r("zmvN")),_=f(r("yLiY")),b=r("FYa8"),R=r("qOIg"),T=r("s4NR"),N=r("/jkW");window.Promise||(window.Promise=v.default);var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="9.2.0";var C=k.props,P=k.err,A=k.page,S=k.query,I=k.buildId,D=k.assetPrefix,j=k.runtimeConfig,M=k.dynamicIds,q=D||"";r.p=q+"/_next/",_.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:j||{}});var O=(0,w.getURL)(),H=new E.default(I,q),B=function(e){var t=s(e,2),r=t[0],n=t[1];return H.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map(B),window.__NEXT_P=[],window.__NEXT_P.push=B;var L,G,U,V,X,Y,W=new y.default,Z=document.getElementById("__next");t.router=G;var F=function(e){function t(){return o(this,t),i(this,u(t).apply(this,arguments))}return c(t,e),a(t,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),(k.nextExport&&((0,N.isDynamicRoute)(G.pathname)||location.search)||V&&V.__N_SSG&&location.search)&&G.replace(G.pathname+"?"+(0,T.stringify)((0,d.default)({},G.query,{},(0,T.parse)(location.search.substr(1)))),O,{_h:1,shallow:!0})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.default.Component),K=(0,x.default)();t.emitter=K;var z=function(){var e=(0,l.default)(n.mark((function e(r){var o,a,i,u;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(void 0===r?{}:r).webpackHMR,e.next=4,H.loadPageScript("/_app");case 4:return o=e.sent,a=o.page,i=o.mod,X=a,i&&i.unstable_onPerformanceData&&(Y=function(e){var t=e.name,r=e.startTime,n=e.value,o=e.duration;i.unstable_onPerformanceData({name:t,startTime:r,value:n,duration:o})}),u=P,e.prev=10,e.next=13,H.loadPage(A);case 13:V=e.sent,e.next=18;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),u=e.t0;case 23:if(!window.__NEXT_PRELOADREADY){e.next=26;break}return e.next=26,window.__NEXT_PRELOADREADY(M);case 26:return t.router=G=(0,g.createRouter)(A,S,O,{initialProps:C,pageLoader:H,App:X,Component:V,wrapApp:ue,err:u,subscription:function(e,t){J({App:t,Component:e.Component,props:e.props,err:e.err})}}),J({App:X,Component:V,props:C,err:u}),e.abrupt("return",K);case 31:case"end":return e.stop()}}),e,null,[[10,20]])})));return function(t){return e.apply(this,arguments)}}();function J(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,l.default)(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,$(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ce(t);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=13,$((0,d.default)({},t,{err:e.t0}));case 13:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=(0,l.default)(n.mark((function e(t){var r,o,a,i,u;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.App,o=t.err,e.next=3;break;case 3:return console.error(o),e.next=7,H.loadPage("/_error");case 7:if(U=e.sent,a=ue(r),i={Component:U,AppTree:a,router:G,ctx:{err:o,pathname:A,query:S,asPath:O,AppTree:a}},!t.props){e.next=14;break}e.t0=t.props,e.next=17;break;case 14:return e.next=16,(0,w.loadGetInitialProps)(r,i);case 16:e.t0=e.sent;case 17:return u=e.t0,e.next=20,ce((0,d.default)({},t,{err:o,Component:U,props:u}));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=z;var te="function"===typeof m.default.hydrate;function re(e,t){if(w.ST&&performance.mark("beforeRender"),te?(m.default.hydrate(e,t,ne),te=!1):m.default.render(e,t,oe),Y&&w.ST)try{new PerformanceObserver((function(e){e.getEntries().forEach(Y)})).observe({type:"paint",buffered:!0})}catch(r){window.addEventListener("load",(function(){performance.getEntriesByType("paint").forEach(Y)}))}}function ne(){w.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Y&&(performance.getEntriesByName("Next.js-hydration").forEach(Y),performance.getEntriesByName("beforeRender").forEach(Y)),ae())}function oe(){if(w.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Y&&(performance.getEntriesByName("Next.js-render").forEach(Y),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Y)),ae())}}function ae(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)})),["Next.js-before-hydration","Next.js-hydration","Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)}))}function ie(e){var t=e.children;return h.default.createElement(F,{fn:function(e){return $({App:X,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},h.default.createElement(R.RouterContext.Provider,{value:(0,g.makePublicRouterInstance)(G)},h.default.createElement(b.HeadManagerContext.Provider,{value:W.updateHead},t)))}var ue=function(e){return function(t){var r=(0,d.default)({},t,{Component:V,err:P,router:G});return h.default.createElement(ie,null,h.default.createElement(e,r))}};function ce(e){return se.apply(this,arguments)}function se(){return(se=(0,l.default)(n.mark((function e(t){var r,o,a,i,u,c,s,f,p,l,v;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.App,o=t.Component,a=t.props,i=t.err,a||!o||o===U||L.Component!==U){e.next=8;break}return c=(u=G).pathname,s=u.query,f=u.asPath,p=ue(r),l={router:G,AppTree:p,Component:U,ctx:{err:i,pathname:c,query:s,asPath:f,AppTree:p}},e.next=7,(0,w.loadGetInitialProps)(r,l);case 7:a=e.sent;case 8:o=o||L.Component,a=a||L.props,v=(0,d.default)({},a,{Component:o,err:i,router:G}),L=v,K.emit("before-reactdom-render",{Component:o,ErrorComponent:U,appProps:v}),re(h.default.createElement(ie,null,h.default.createElement(r,v)),Z),K.emit("after-reactdom-render",{Component:o,ErrorComponent:U,appProps:v});case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},OQSD:function(e,t,r){var n=r("jOCL");e.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},Q2zc:function(e,t,r){var n=r("G1Wo")("iterator"),o=!1;try{var a=[7][n]();a.return=function(){o=!0},Array.from(a,(function(){throw 2}))}catch(i){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a=[7],u=a[n]();u.next=function(){return{done:r=!0}},a[n]=function(){return u},e(a)}catch(i){}return r}},VgtN:function(e,t,r){var n=r("vCXk"),o=r("nJOo"),a=r("widk"),i=r("D4ny"),u=r("pasi"),c=r("8Vlj"),s={},f={};(t=e.exports=function(e,t,r,p,l){var d,v,h,m,y=l?function(){return e}:c(e),g=n(r,p,t?2:1),x=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(a(y)){for(d=u(e.length);d>x;x++)if((m=t?g(i(v=e[x])[0],v[1]):g(e[x]))===s||m===f)return m}else for(h=y.call(e);!(v=h.next()).done;)if((m=o(h,g,v.value,t))===s||m===f)return m}).BREAK=s,t.RETURN=f},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},fYqa:function(e,t,r){var n=r("bh8V"),o=r("G1Wo")("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),o))?r:a?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"===typeof o&&"symbol"===typeof n?function(e){return typeof e}:function(e){return e&&"function"===typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function i(t){return"function"===typeof o&&"symbol"===a(n)?e.exports=i=function(e){return a(e)}:e.exports=i=function(e){return e&&"function"===typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},i(t)}e.exports=i},icr7:function(e,t,r){r("tCzM"),r("k8Q4"),e.exports=r("04/V")},nJOo:function(e,t,r){var n=r("D4ny");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var a=e.return;throw void 0!==a&&n(a.call(e)),i}}},p0XB:function(e,t,r){e.exports=r("1gQu")},sLxe:function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vwY1:function(e,t,r){var n=r("Atf5");e.exports=function(e,t){return new(n(e))(t)}},widk:function(e,t,r){var n=r("sipE"),o=r("G1Wo")("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||a[o]===e)}},yLiY:function(e,t,r){"use strict";var n;r("hfKm")(t,"__esModule",{value:!0}),t.default=function(){return n},t.setConfig=function(e){n=e}},yLu3:function(e,t,r){e.exports=r("icr7")},zmvN:function(e,t,r){"use strict";var n=r("/HRN"),o=r("WaGi"),a=r("KI45");t.__esModule=!0,t.default=void 0;var i=a(r("eVuF")),u=a(r("dZ6Y"));function c(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}var s=c("preload")&&!c("prefetch")?"preload":"prefetch";document.createElement("script");function f(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'+e+'"');return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function p(e,t,r){return new i.default((function(n,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,r&&(a.as=r),a.onload=n,a.onerror=o,document.head.appendChild(a)}))}var l=function(){function e(t,r){n(this,e),this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,u.default)(),this.loadingRoutes={},this.promisedBuildManifest=new i.default((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]&&r[e].map((function(e){return t.assetPrefix+"/_next/"+encodeURI(e)}))||[]}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e).then((function(e){return e.page}))}},{key:"loadPageScript",value:function(e){var t=this;return e=f(e),new i.default((function(r,n){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,u=o.mod;a?n(a):r({page:i,mod:u})}else t.pageRegisterEvents.on(e,(function o(a){var i=a.error,u=a.page,c=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?n(i):r({page:u,mod:c})})),document.querySelector('script[data-next-page="'+e+'"]')||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(r){r.forEach((function(r){/\.js$/.test(r)&&!document.querySelector('script[src^="'+r+'"]')&&t.loadScript(r,e,!1),/\.css$/.test(r)&&!document.querySelector('link[rel=stylesheet][href^="'+r+'"]')&&p(r,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=f(e))?"/index.js":e+".js",r=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(t);this.loadScript(r,e,!0)}},{key:"loadScript",value:function(e,t,r){var n=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var r=new Error("Error loading script "+e);r.code="PAGE_LOAD_ERROR",n.pageRegisterEvents.emit(t,{error:r})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var r=this;!function(){try{var n=t(),o={page:n.default||n,mod:n};r.pageCache[e]=o,r.pageRegisterEvents.emit(e,o)}catch(a){r.pageCache[e]={error:a},r.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return i.default.resolve();if(t)n=e;else{var a=("/"===(e=f(e))?"/index":e)+".js";0,n=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(a)}return i.default.all(document.querySelector('link[rel="'+s+'"][href^="'+n+'"], script[data-next-page="'+e+'"]')?[]:[p(n,s,n.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return i.default.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=l}},[["BMP1",0,1,2,10]]]);