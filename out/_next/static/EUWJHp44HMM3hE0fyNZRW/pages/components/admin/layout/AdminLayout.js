(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),i=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery;return r||o&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=s},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),i=n(r("Xuae")),s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var l=o.props[c],d=n[c]||new Set;d.has(l)?i=!1:(d.add(l),n[c]=d)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}var p=i.default();function h(e){var t=e.children;return o.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:r,inAmpMode:u.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},"BO/t":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,n,o,i){var s=n||"<<anonymous>>",a=i||r;if(null==t[r])return new Error("The "+o+" `"+a+"` is required to make `"+s+"` accessible for users of assistive technologies such as screen readers.");for(var u=arguments.length,c=Array(u>5?u-5:0),l=5;l<u;l++)c[l-5]=arguments[l];return e.apply(void 0,[t,r,n,o,i].concat(c))}},e.exports=t.default},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},DJqG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/layout/AdminLayout",function(){return r("Q52/")}])},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},F9IU:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n).a.createContext(null);t.a=o},FYa8:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},ImaE:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),o=r.n(n),i=r("q1tI"),s=r.n(i),a=r("bWZ2"),u=s.a.createElement;t.default=function(){return u("div",{className:o.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])},u("div",{className:o.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])+" footer"},u("p",{className:o.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])+" fooeter_text text-center"},"Copyright@ 2020",u("span",{className:o.a.dynamic([["2300049164",[a.a.primry_color,a.a.primary_text_color]]])}," Muhalik "),"- Online Shopping Website")),u(o.a,{id:"2300049164",dynamic:[a.a.primry_color,a.a.primary_text_color]},[".footer.__jsx-style-dynamic-selector{background:".concat(a.a.primry_color,";position:absolute;left:0;bottom:0;right:0;}"),".fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:".concat(a.a.primary_text_color,";}"),"span.__jsx-style-dynamic-selector{font-weight:bold;}"]))}},MX0m:function(e,t,r){e.exports=r("3niX")},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"Q52/":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=(r("8Kt/"),r("lplY")),s=r("ImaE"),a=o.a.createElement;t.default=function(e){return a("div",null,a(i.default,null),e.children,a(s.default,null))}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("Bnag");e.exports=function(e){return n(e)||o(e)||i()}},RjgW:function(e,t,r){"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}r.d(t,"a",(function(){return n}))},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},UT2A:function(e,t,r){"use strict";var n=r("i8i4"),o=r.n(n),i=r("dZvc");t.a=function(e){return Object(i.a)(o.a.findDOMNode(e))}},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},Xuae:function(e,t,r){"use strict";var n=r("lwsE"),o=r("PJYZ"),i=r("W8MJ"),s=r("7W2i"),a=r("a1gu"),u=r("Nsbk"),c=r("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=r("q1tI"),d=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(c(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(c){s(h,c);var f,p=(f=h,function(){var e,t=u(f);if(l()){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function h(e){var i;return n(this,h),i=p.call(this,e),d&&(t.add(o(i)),r(o(i))),i}return i(h,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),i(h,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},YGJp:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");function o(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI");var o=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return n(e.querySelectorAll(t))}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},cDf5:function(e,t){function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},cWnB:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),i=r("TSYQ"),s=r.n(i),a=r("q1tI"),u=r.n(a),c=r("vUet"),l=r("dbZe"),f=u.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.variant,a=e.size,f=e.active,d=e.className,p=e.block,h=e.type,m=e.as,y=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),_=Object(c.b)(r,"btn"),v=s()(d,_,f&&"active",_+"-"+i,p&&_+"-block",a&&_+"-"+a);if(y.href)return u.a.createElement(l.a,Object(n.a)({},y,{as:m,ref:t,className:s()(v,y.disabled&&"disabled")}));t&&(y.ref=t),m||(y.type=h);var b=m||"button";return u.a.createElement(b,Object(n.a)({},y,{className:v}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f},dbZe:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),i=r("q1tI"),s=r.n(i),a=r("Qg85");function u(e){return!e||"#"===e.trim()}var c=s.a.forwardRef((function(e,t){var r=e.as,i=void 0===r?"a":r,c=e.disabled,l=e.onKeyDown,f=Object(o.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,r=f.onClick;(c||u(t))&&e.preventDefault(),c?e.stopPropagation():r&&r(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),s.a.createElement(i,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(a.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),l)}))}));c.displayName="SafeAnchor",t.a=c},lcWJ:function(e,t,r){"use strict";var n=r("q1tI"),o=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(n.useMemo)((function(){return function(e,t){var r=o(e),n=o(t);return function(e){r&&r(e),n&&n(e)}}(e,t)}),[e,t])}},lplY:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("6ctO"),s=r("QojX"),a=r("cWnB"),u=r("97+O"),c=r("pJDg"),l=r("bWZ2"),f=r("IP2g"),d=r("wHSu"),p=o.a.createElement,h={background:{background:"".concat(l.a.primry_color)},brand:{color:"".concat(l.a.primary_text_color),fontSize:"medium"},form:{border:"2px solid ".concat(l.a.primry_color),width:"60%",borderRadius:"25px",padding:"0px 5px"},search_btn:{background:"".concat(l.a.admin_primry_color),border:"none"},search_fontawesome:{color:"".concat(l.a.body_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=function(){return p("div",null,p(i.a,{collapseOnSelect:!0,expand:"lg",style:h.background,variant:"dark"},p(i.a.Brand,{href:"/",className:"mr-auto",style:h.brand},"Muhalik"),p(s.a.Row,{style:{margin:"5px"}},p(s.a.Control,{style:{flex:"3"},type:"text",placeholder:"Search here","aria-describedby":"searchBtn",name:"searchBtn"}),p(a.a,{id:"searchBtn",style:h.search_btn},p(f.a,{icon:d.C,style:h.search_fontawesome}))),p(u.a,{as:c.a,alignRight:!0},p(u.a.Toggle,{size:"sm",split:!0,variant:"dark",id:"dropdown-split",style:{background:"none",border:"none"}}),p(u.a.Menu,null,p(u.a.Item,{href:"#/action-1"},"Acount"),p(u.a.Item,{href:"#/action-2"},"Feedback"),p(u.a.Item,{href:"#/action-3"},"Help?"),p(u.a.Divider,null),p(u.a.Item,{href:"#/action-3"},"Signout")))))}},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qUpC:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n);t.a=o.a.createContext(null)}},[["DJqG",0,1,4,2,3,5,6,16]]]);