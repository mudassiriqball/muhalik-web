(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"/0+H":function(e,t,r){"use strict";var n=r("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var o=i(r("q1tI")),s=r("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery;return r||i&&(void 0!==o&&o)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))}},"/fka":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),o=r("6ctO"),s=r("QojX"),a=r("cWnB"),u=r("97+O"),c=r("pJDg"),l=r("vkTu"),d=r("IP2g"),h=r("wHSu"),p=i.a.createElement,f={background:{background:"".concat(l.a.primry_color)},brand:{color:"".concat(l.a.primary_text_color),fontSize:"medium"},form:{border:"2px solid ".concat(l.a.primry_color),width:"60%",borderRadius:"25px",padding:"0px 5px"},search_btn:{background:"".concat(l.a.admin_primry_color),border:"none"},search_fontawesome:{color:"".concat(l.a.body_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=function(){return p("div",null,p(o.a,{collapseOnSelect:!0,expand:"lg",style:f.background,variant:"dark"},p(o.a.Brand,{href:"/",className:"mr-auto",style:f.brand},"Muhalik"),p(s.a.Row,{style:{margin:"5px"}},p(s.a.Control,{style:{flex:"3"},type:"text",placeholder:"Search here","aria-describedby":"searchBtn",name:"searchBtn"}),p(a.a,{id:"searchBtn",style:f.search_btn},p(d.a,{icon:h.l,style:f.search_fontawesome}))),p(u.a,{as:c.a,alignRight:!0},p(u.a.Toggle,{size:"sm",split:!0,variant:"dark",id:"dropdown-split",style:{background:"none",border:"none"}}),p(u.a.Menu,null,p(u.a.Item,{href:"#/action-1"},"Acount"),p(u.a.Item,{href:"#/action-2"},"Feedback"),p(u.a.Item,{href:"#/action-3"},"Help?"),p(u.a.Divider,null),p(u.a.Item,{href:"#/action-3"},"Signout")))))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"8Kt/":function(e,t,r){"use strict";var n=r("ttDY"),i=r("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var s=o(r("q1tI")),a=o(r("Xuae")),u=r("lwAK"),c=r("FYa8"),l=r("/0+H");function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=d;var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(h,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new n,t=new n,r=new n,i={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var d=o.props[l],h=i[l]||new n;h.has(d)?s=!1:(h.add(d),i[l]=h)}}}return s}}()).reverse().map((function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})}))}var m=a.default();function _(e){var t=e.children;return s.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(c.HeadManagerContext.Consumer,null,(function(r){return s.default.createElement(m,{reduceComponentsToState:f,handleStateChange:r,inAmpMode:l.isInAmpMode(e)},t)}))}))}_.rewind=m.rewind,t.default=_},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},CPHa:function(e,t,r){"use strict";var n=r("B4CS"),i=r("H8ru");e.exports=r("8vat")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(i(this,"Set"),e=0===e?0:e,e)}},n)},DJqG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/layout/AdminLayout",function(){return r("ELB5")}])},ELB5:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),o=r("8Kt/"),s=r.n(o),a=r("/fka"),u=r("zFog"),c=i.a.createElement;t.default=function(e){return c("div",null,c(s.a,null,c("title",null,"Muhalik"),c("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c("meta",{charSet:"utf-8"}),c("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),c(a.default,null),e.children,c(u.default,null))}},FYa8:function(e,t,r){"use strict";var n=r("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var o=i(r("q1tI"));t.HeadManagerContext=o.createContext(null)},GDVm:function(e,t,r){r("ER9p")("Set")},IrWQ:function(e,t,r){var n=r("0T/a");n(n.P+n.R,"Set",{toJSON:r("A0wl")("Set")})},MX0m:function(e,t,r){e.exports=r("3niX")},OuPC:function(e,t,r){r("AS96")("Set")},PQJW:function(e,t,r){var n=r("d04V"),i=r("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TbGu:function(e,t,r){var n=r("fGSI"),i=r("PQJW"),o=r("2PDY");e.exports=function(e){return n(e)||i(e)||o()}},"V/f9":function(e,t,r){r("k8Q4"),r("YQlv"),e.exports=r("p9MR").Array.from},Xuae:function(e,t,r){"use strict";var n=r("/HRN"),i=r("ZDA2"),o=r("/+P4"),s=r("K47E"),a=r("WaGi"),u=r("N9n2"),c=r("TbGu"),l=r("ttDY");r("hfKm")(t,"__esModule",{value:!0});var d=r("q1tI"),h=!1;t.default=function(){var e,t=new l;function r(r){e=r.props.reduceComponentsToState(c(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(c){function l(e){var a;return n(this,l),a=i(this,o(l).call(this,e)),h&&(t.add(s(a)),r(s(a))),a}return u(l,c),a(l,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},YQlv:function(e,t,r){"use strict";var n=r("vCXk"),i=r("0T/a"),o=r("AYVP"),s=r("nJOo"),a=r("widk"),u=r("pasi"),c=r("s+zB"),l=r("8Vlj");i(i.S+i.F*!r("Q2zc")((function(e){Array.from(e)})),"Array",{from:function(e){var t,r,i,d,h=o(e),p="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,_=void 0!==m,v=0,y=l(h);if(_&&(m=n(m,f>2?arguments[2]:void 0,2)),void 0==y||p==Array&&a(y))for(r=new p(t=u(h.length));t>v;v++)c(r,v,_?m(h[v],v):h[v]);else for(d=y.call(h),r=new p;!(i=d.next()).done;v++)c(r,v,_?s(d,m,[i.value,v],!0):i.value);return r.length=v,r}})},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},d04V:function(e,t,r){e.exports=r("V/f9")},fGSI:function(e,t,r){var n=r("p0XB");e.exports=function(e){if(n(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},lwAK:function(e,t,r){"use strict";var n=r("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var o=i(r("q1tI"));t.AmpStateContext=o.createContext({})},"s+zB":function(e,t,r){"use strict";var n=r("OtwA"),i=r("+EWW");e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},ttDY:function(e,t,r){e.exports=r("vjmV")},vjmV:function(e,t,r){r("Ev2V"),r("k8Q4"),r("tCzM"),r("CPHa"),r("IrWQ"),r("GDVm"),r("OuPC"),e.exports=r("p9MR").Set},zFog:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),o=r("q1tI"),s=r.n(o),a=r("vkTu"),u=s.a.createElement;t.default=function(){return u("div",{className:i.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])},u("div",{className:i.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])+" footer"},u("p",{className:i.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])+" fooeter_text text-center"},"Copyright@ 2020",u("span",{className:i.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])}," Muhalik "),"- Online Shopping Website")),u(i.a,{id:"2300049164",dynamic:[a.a.primry_color,a.a.primary_text_color]},[".footer.__jsx-style-dynamic-selector{background:".concat(a.a.primry_color,";position:absolute;left:0;bottom:0;right:0;}"),".fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:".concat(a.a.primary_text_color,";}"),"span.__jsx-style-dynamic-selector{font-weight:bold;}"]))}}},[["DJqG",0,1,5,45,46,47,48,50,55]]]);