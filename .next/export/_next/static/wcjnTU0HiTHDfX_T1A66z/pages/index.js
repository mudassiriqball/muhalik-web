(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"1cNw":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=(n("8Kt/"),n("X0yb")),i=n("po6/"),u=o.a.createElement;e.default=function(t){return u(o.a.Fragment,null,u(a.default,{token:t.token,logout:t.logoutClickHandler}),t.children,u(i.default,null))}},"7vrA":function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("TSYQ"),i=n.n(a),u=n("q1tI"),c=n.n(u),l=n("vUet"),f=c.a.forwardRef((function(t,e){var n=t.bsPrefix,a=t.fluid,u=t.as,f=void 0===u?"div":u,s=t.className,d=Object(o.a)(t,["bsPrefix","fluid","as","className"]),p=Object(l.b)(n,"container"),y="string"===typeof a?"-"+a:"-fluid";return c.a.createElement(f,Object(r.a)({ref:e},d,{className:i()(s,a?""+p+y:p)}))}));f.displayName="Container",f.defaultProps={fluid:!1},e.a=f},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;d.has(f)?a=!1:(d.add(f),r[l]=d)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var p=a.default();function y(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}y.rewind=p.rewind,e.default=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||a()}},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("1OyB"),i=n("vuIU"),u=n("Ji7U"),c=n("md7G"),l=n("foSv"),f=n("q1tI"),s=n.n(f),d=n("8Kt/"),p=n.n(d),y=(n("YFqc"),n("1cNw")),m=(n("nOHt"),n("vvUq"));n("bWZ2");async function h(t,...e){for(const n of e)switch(typeof n){case"string":await v(t,n);break;case"number":await b(n);break;case"function":await n(t,...e);break;default:await n}}async function v(t,e){const n=function(t,[...e]){return[...t,NaN].findIndex((t,n)=>e[n]!==t)}(t.textContent,e);await async function(t,e,n=60){for(const r of function*(t){for(const e of t)yield t=>requestAnimationFrame(()=>t.textContent=e)}(e))r(t),await b(n+n*(Math.random()-.5))}(t,[..._(t.textContent,n),...w(e,n)])}async function b(t){await new Promise(e=>setTimeout(e,t))}function*w([...t],e=0,n=t.length){for(;e<n;)yield t.slice(0,++e).join("")}function*_([...t],e=0,n=t.length){for(;n>e;)yield t.slice(0,--n).join("")}var g="styles_typicalWrapper__1_Uvh";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var S=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},O=Object(f.memo)((function(t){var e=t.steps,n=t.loop,r=t.className,o=t.wrapper,a=void 0===o?"p":o,i=Object(f.useRef)(null),u=a,c=[g];return r&&c.unshift(r),Object(f.useEffect)((function(){n===1/0?h.apply(void 0,[i.current].concat(S(e),[h])):"number"===typeof n?h.apply(void 0,[i.current].concat(S(Array(n).fill(e).flat()))):h.apply(void 0,[i.current].concat(S(e)))})),s.a.createElement(u,{ref:i,className:c.join(" ")})})),k=n("7vrA"),j=n("3Z9Z"),x=n("JI6e"),C=s.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var A=C(k.a,null,C(j.a,{className:"justify-content-md-center",style:{display:"flex",alignItems:"center",minHeight:"83vh"}},C(x.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto",style:{background:"#46d267",padding:"5%"}},C("h1",null,C(O,{steps:["This website is under development",1e3,"Comming Soon...!",1e3,"Be Ready to Shop online...",1e3],loop:1/0,wrapper:"p"}))))),E=function(t){Object(u.a)(n,t);var e=P(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={jwt_token:""},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(Object(m.b)());case 2:null!==(t=e.sent)&&this.setState({jwt_token:t.role});case 4:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"logout",value:function(){Object(m.d)(),this.setState({jwt_token:""})}},{key:"render",value:function(){return C("div",{style:I.body},C(p.a,null,C("title",null,"Muhalik"),C("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),C("meta",{charSet:"utf-8"}),C("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),C("link",{rel:"shortcut icon",href:""})),C(y.default,{token:this.state.jwt_token,logoutClickHandler:this.logout},A))}}]),n}(f.Component),I={body:{background:"#f1f3f4",position:"absolute",top:"0",left:"0",right:"0",minHeight:"100vh"}};e.default=E},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){i(l,u);var c=f(l);function l(t){var a;return r(this,l),a=c.call(this,t),d&&(e.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},"m0L+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return i}));var a=n("JX7q");function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(a.a)(t):e}},"po6/":function(t,e,n){"use strict";n.r(e),n.d(e,"FooterStyleSheet",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("bWZ2"),i=o.a.createElement,u=a.a.primry_color,c=a.a.primary_text_color,l={footer:{background:"".concat(u),position:"absolute",left:"0",bottom:"0",right:"0"},fooeter_text:{margin:"10px",fontSize:"smaller",color:"".concat(c)}};e.default=function(){return i("div",null,i("div",{style:l.footer},i("p",{className:"text-center",style:l.fooeter_text},"Copyright@ 2020",i("span",{style:{fontSize:"medium",fontWeight:"bold"}}," Muhalik "),"- Online Shopping Website")))}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["m0L+",0,1,4,17,2,3,5,6,7,9,10,12,14,16,21,22]]]);