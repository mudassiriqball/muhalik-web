(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"BO/t":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,n,r,o,a){var u=r||"<<anonymous>>",i=a||n;if(null==e[n])return new Error("The "+o+" `"+i+"` is required to make `"+u+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),s=5;s<l;s++)c[s-5]=arguments[s];return t.apply(void 0,[e,n,r,o,a].concat(c))}},t.exports=e.default},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},"Jz+W":function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),u=n.n(a),i=(n("BO/t"),n("JCAc")),l=n("+YzT"),c=n("iKII"),s=n("Mj5q"),f=n("gpSn"),d=n("bxoZ"),p=n("Cz4+");function v(t,e){var n=0;return u.a.Children.map(t,(function(t){return u.a.isValidElement(t)?e(t,n++):t}))}function y(t){var e;return function(t,e){var n=0;u.a.Children.forEach(t,(function(t){u.a.isValidElement(t)&&e(t,n++)}))}(t,(function(t){null==e&&(e=t.props.eventKey)})),e}function b(t){var e=t.props,n=e.title,r=e.eventKey,o=e.disabled,a=e.tabClassName;return null==n?null:u.a.createElement(s.a,{as:c.a,eventKey:r,disabled:o,className:a},n)}var m=u.a.forwardRef((function(t,e){var n=Object(i.a)(t,{activeKey:"onSelect"}),a=n.id,c=n.onSelect,s=n.transition,m=n.mountOnEnter,h=n.unmountOnExit,O=n.children,w=n.activeKey,j=void 0===w?y(O):w,x=Object(o.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return u.a.createElement(f.a,{ref:e,id:a,activeKey:j,onSelect:c,transition:s,mountOnEnter:m,unmountOnExit:h},u.a.createElement(l.a,Object(r.a)({},x,{role:"tablist",as:"nav"}),v(O,b)),u.a.createElement(d.a,null,v(O,(function(t){var e=Object(r.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,u.a.createElement(p.a,e)}))))}));m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs";e.a=m},L0tY:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("Jz+W"),u=n("KD6P"),i=n("MwrM"),l=n("xZEg"),c=n("Wx9U"),s=n("VrQ6"),f=o.a.createElement;e.default=function(){return f("div",{style:{width:"100%",margin:"2%"}},f(a.a,{defaultActiveKey:"overall",transition:!1,id:"reports_tab",justify:!0,fill:!0},f(u.a,{eventKey:"overall",title:"Overall"},f(s.default,null)),f(u.a,{eventKey:"yearly",title:"Yearly"},f(c.default,null)),f(u.a,{eventKey:"monthly",title:"Monthly"},f(l.default,null)),f(u.a,{eventKey:"weekly",title:"Weekly"},f(i.default,null))))}},MwrM:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),u=n("md7G"),i=n("foSv"),l=n("q1tI"),c=n.n(l),s=n("wx14"),f=n("zLVn"),d=n("TSYQ"),p=n.n(d),v=n("vUet"),y=c.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,o=t.striped,a=t.bordered,u=t.borderless,i=t.hover,l=t.size,d=t.variant,y=t.responsive,b=Object(f.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(v.b)(n,"table"),h=p()(r,m,d&&m+"-"+d,l&&m+"-"+l,o&&m+"-striped",a&&m+"-bordered",u&&m+"-borderless",i&&m+"-hover"),O=c.a.createElement("table",Object(s.a)({},b,{className:h,ref:e}));if(y){var w=m+"-responsive";return"string"===typeof y&&(w=w+"-"+y),c.a.createElement("div",{className:w},O)}return O})),b=c.a.createElement;function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var h=function(t){Object(a.a)(l,t);var e,n=(e=l,function(){var t,n=Object(i.a)(e);if(m()){var r=Object(i.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function l(t){var e;return Object(r.a)(this,l),(e=n.call(this,t)).state={},e}return Object(o.a)(l,[{key:"render",value:function(){return b(y,{striped:!0,bordered:!0,hover:!0,responsive:!0},b("thead",null,b("tr",null,b("th",null,"#"),b("th",null,"First Name"),b("th",null,"Last Name"),b("th",null,"Username"))),b("tbody",null,b("tr",null,b("td",null,"1"),b("td",null,"Mark"),b("td",null,"Otto"),b("td",null,"@mdo")),b("tr",null,b("td",null,"2"),b("td",null,"Jacob"),b("td",null,"Thornton"),b("td",null,"@fat")),b("tr",null,b("td",null,"3"),b("td",{colSpan:"2"},"Larry the Bird"),b("td",null,"@twitter"))))}}]),l}(l.Component);e.default=h},Nu9w:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/reports",function(){return n("L0tY")}])},QA0p:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n=void 0===e?{}:e,r=n.propTypes,a=n.defaultProps,u=n.allowFallback,i=void 0!==u&&u,l=n.displayName,c=void 0===l?t.name||t.displayName:l,s=function(e,n){return t(e,n)};return Object.assign(o.default.forwardRef||!i?o.default.forwardRef(s):function(t){return s(t,null)},{displayName:c,propTypes:r,defaultProps:a})};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return o}))},VrQ6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},Wx9U:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},Wzyw:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=o.a.createContext(null)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("U8pU"),o=n("JX7q");function a(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},vUet:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n("wx14"),o=n("QA0p"),a=n.n(o),u=n("q1tI"),i=n.n(u),l=i.a.createContext({});l.Consumer,l.Provider;function c(t,e){var n=Object(u.useContext)(l);return t||n[e]||e}function s(t,e){"string"===typeof e&&(e={prefix:e});var n=t.prototype&&t.prototype.isReactComponent,o=e,u=o.prefix,l=o.forwardRefAs,s=void 0===l?n?"ref":"innerRef":l;return a()((function(e,n){var o=Object(r.a)({},e);o[s]=n;var a=c(o.bsPrefix,u);return i.a.createElement(t,Object(r.a)({},o,{bsPrefix:a}))}),{displayName:"Bootstrap("+(t.displayName||t.name)+")"})}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},xZEg:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}},[["Nu9w",0,1,4,5,12]]]);