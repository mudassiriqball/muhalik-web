(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"7xGa":function(t,e,n){"use strict";var r,o=n("wx14"),i=n("zLVn"),u=n("TSYQ"),a=n.n(u),l=n("YECM"),c=n("q1tI"),s=n.n(c),f=n("dRu9"),p=n("z+q/"),d=((r={})[f.b]="show",r[f.a]="show",r),v=s.a.forwardRef((function(t,e){var n=t.className,r=t.children,u=Object(i.a)(t,["className","children"]),v=Object(c.useCallback)((function(t){Object(p.a)(t),u.onEnter&&u.onEnter(t)}),[u]);return s.a.createElement(f.e,Object(o.a)({ref:e,addEndListener:l.a},u,{onEnter:v}),(function(t,e){return s.a.cloneElement(r,Object(o.a)({},e,{className:a()("fade",n,r.props.className,d[t])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",e.a=v},ILyh:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n("q1tI"),o=n.n(r).a.createContext(),i=function(t,e){return null!=t?String(t):e||null};e.a=o},JCAc:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("wx14"),o=n("zLVn"),i=n("q1tI");n("QLaP");function u(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function a(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}function l(t,e){return Object.keys(e).reduce((function(n,l){var c,s=n,f=s[u(l)],p=s[l],d=Object(o.a)(s,[u(l),l].map(a)),v=e[l],y=function(t,e,n){var r=Object(i.useRef)(void 0!==t),o=Object(i.useState)(e),u=o[0],a=o[1],l=void 0!==t,c=r.current;return r.current=l,!l&&c&&u!==e&&a(e),[l?t:u,Object(i.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),a(t)}),[n])]}(p,f,t[v]),b=y[0],m=y[1];return Object(r.a)({},d,((c={})[l]=b,c[v]=m,c))}),t)}n("dI71"),n("VCL8")},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},K9S6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.default)((function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=null;return e.forEach((function(t){if(null==o){var e=t.apply(void 0,n);null!=e&&(o=e)}})),o}))};var r,o=n("pvIh"),i=(r=o)&&r.__esModule?r:{default:r};t.exports=e.default},L0tY:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("Jz+W"),u=n("KD6P"),a=n("MwrM"),l=n("xZEg"),c=n("Wx9U"),s=n("VrQ6"),f=o.a.createElement;e.default=function(){return f("div",{style:{width:"100%",margin:"2%"}},f(i.a,{defaultActiveKey:"overall",transition:!1,id:"reports_tab",justify:!0,fill:!0},f(u.a,{eventKey:"overall",title:"Overall"},f(s.default,null)),f(u.a,{eventKey:"yearly",title:"Yearly"},f(c.default,null)),f(u.a,{eventKey:"monthly",title:"Monthly"},f(l.default,null)),f(u.a,{eventKey:"weekly",title:"Weekly"},f(a.default,null))))}},MBJH:function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),i=n("TSYQ"),u=n.n(i),a=n("q1tI"),l=n.n(a),c=n("vUet"),s=l.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.className,a=t.striped,s=t.bordered,f=t.borderless,p=t.hover,d=t.size,v=t.variant,y=t.responsive,b=Object(o.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(c.b)(n,"table"),h=u()(i,m,v&&m+"-"+v,d&&m+"-"+d,a&&m+"-striped",s&&m+"-bordered",f&&m+"-borderless",p&&m+"-hover"),w=l.a.createElement("table",Object(r.a)({},b,{className:h,ref:e}));if(y){var g=m+"-responsive";return"string"===typeof y&&(g=g+"-"+y),l.a.createElement("div",{className:g},w)}return w}));e.a=s},MwrM:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),u=n("md7G"),a=n("foSv"),l=n("q1tI"),c=n.n(l),s=n("MBJH"),f=c.a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=function(t){Object(i.a)(l,t);var e,n=(e=l,function(){var t,n=Object(a.a)(e);if(p()){var r=Object(a.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function l(t){var e;return Object(r.a)(this,l),(e=n.call(this,t)).state={},e}return Object(o.a)(l,[{key:"render",value:function(){return f(s.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},f("thead",null,f("tr",null,f("th",null,"#"),f("th",null,"First Name"),f("th",null,"Last Name"),f("th",null,"Username"))),f("tbody",null,f("tr",null,f("td",null,"1"),f("td",null,"Mark"),f("td",null,"Otto"),f("td",null,"@mdo")),f("tr",null,f("td",null,"2"),f("td",null,"Jacob"),f("td",null,"Thornton"),f("td",null,"@fat")),f("tr",null,f("td",null,"3"),f("td",{colSpan:"2"},"Larry the Bird"),f("td",null,"@twitter"))))}}]),l}(l.Component);e.default=d},Nu9w:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/reports",function(){return n("L0tY")}])},QA0p:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n=void 0===e?{}:e,r=n.propTypes,i=n.defaultProps,u=n.allowFallback,a=void 0!==u&&u,l=n.displayName,c=void 0===l?t.name||t.displayName:l,s=function(e,n){return t(e,n)};return Object.assign(o.default.forwardRef||!a?o.default.forwardRef(s):function(t){return s(t,null)},{displayName:c,propTypes:r,defaultProps:i})};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i,u,a){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,u,a],s=0;(l=new Error(e.replace(/%s/g,(function(){return c[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},Qg85:function(t,e,n){"use strict";e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(this,r),e.apply(this,r)}}),null)}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return o}))},VCL8:function(t,e,n){"use strict";function r(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function o(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function i(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function u(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof t.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return t;var n=null,u=null,a=null;if("function"===typeof e.componentWillMount?n="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?u="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(u="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?a="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==u||null!==a){var l=t.displayName||t.name,c="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==u?"\n  "+u:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof t.getDerivedStateFromProps&&(e.componentWillMount=r,e.componentWillReceiveProps=o),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var s=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,t,e,r)}}return t}n.d(e,"a",(function(){return u})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},VrQ6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},Wx9U:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},Wzyw:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=o.a.createContext(null)},ZCiN:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI");var o=function(t){var e=Object(r.useRef)(t);return Object(r.useEffect)((function(){e.current=t}),[t]),e};function i(t){var e=o(t);return Object(r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},Zeqi:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,e){return r(t.querySelectorAll(e))}},dbZe:function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),i=n("q1tI"),u=n.n(i),a=n("Qg85");function l(t){return!t||"#"===t.trim()}var c=u.a.forwardRef((function(t,e){var n=t.as,i=void 0===n?"a":n,c=t.disabled,s=t.onKeyDown,f=Object(o.a)(t,["as","disabled","onKeyDown"]),p=function(t){var e=f.href,n=f.onClick;(c||l(e))&&t.preventDefault(),c?t.stopPropagation():n&&n(t)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),u.a.createElement(i,Object(r.a)({ref:e},f,{onClick:p,onKeyDown:Object(a.a)((function(t){" "===t.key&&(t.preventDefault(),p(t))}),s)}))}));c.displayName="SafeAnchor",e.a=c},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("U8pU"),o=n("JX7q");function i(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},pvIh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(e,n,r,o,i,u){var a=o||"<<anonymous>>",l=u||r;if(null==n[r])return e?new Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,s=Array(c>6?c-6:0),f=6;f<c;f++)s[f-6]=arguments[f];return t.apply(void 0,[n,r,a,i,l].concat(s))}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n},t.exports=e.default},qUpC:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=o.a.createContext(null)},vUet:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n("wx14"),o=n("QA0p"),i=n.n(o),u=n("q1tI"),a=n.n(u),l=a.a.createContext({});l.Consumer,l.Provider;function c(t,e){var n=Object(u.useContext)(l);return t||n[e]||e}function s(t,e){"string"===typeof e&&(e={prefix:e});var n=t.prototype&&t.prototype.isReactComponent,o=e,u=o.prefix,l=o.forwardRefAs,s=void 0===l?n?"ref":"innerRef":l;return i()((function(e,n){var o=Object(r.a)({},e);o[s]=n;var i=c(o.bsPrefix,u);return a.a.createElement(t,Object(r.a)({},o,{bsPrefix:i}))}),{displayName:"Bootstrap("+(t.displayName||t.name)+")"})}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},xZEg:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r).a.createElement;e.default=function(){return o("div",null,"This is overall")}},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}},[["Nu9w",0,1,3,14]]]);