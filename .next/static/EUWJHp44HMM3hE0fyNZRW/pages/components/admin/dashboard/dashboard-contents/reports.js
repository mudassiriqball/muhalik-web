(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"7xGa":function(t,e,n){"use strict";var r,o=n("wx14"),a=n("zLVn"),i=n("TSYQ"),u=n.n(i),l=n("YECM"),c=n("q1tI"),s=n.n(c),f=n("dRu9"),p=n("z+q/"),d=((r={})[f.b]="show",r[f.a]="show",r),v=s.a.forwardRef((function(t,e){var n=t.className,r=t.children,i=Object(a.a)(t,["className","children"]),v=Object(c.useCallback)((function(t){Object(p.a)(t),i.onEnter&&i.onEnter(t)}),[i]);return s.a.createElement(f.e,Object(o.a)({ref:e,addEndListener:l.a},i,{onEnter:v}),(function(t,e){return s.a.cloneElement(r,Object(o.a)({},e,{className:u()("fade",n,r.props.className,d[t])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",e.a=v},ILyh:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createContext(),a=function(t,e){return null!=t?String(t):e||null};e.a=o},JCAc:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("wx14"),o=n("zLVn"),a=n("q1tI");n("QLaP");function i(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function u(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}function l(t,e){return Object.keys(e).reduce((function(n,l){var c,s=n,f=s[i(l)],p=s[l],d=Object(o.a)(s,[i(l),l].map(u)),v=e[l],y=function(t,e,n){var r=Object(a.useRef)(void 0!==t),o=Object(a.useState)(e),i=o[0],u=o[1],l=void 0!==t,c=r.current;return r.current=l,!l&&c&&i!==e&&u(e),[l?t:i,Object(a.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),u(t)}),[n])]}(p,f,t[v]),h=y[0],m=y[1];return Object(r.a)({},d,((c={})[l]=h,c[v]=m,c))}),t)}n("dI71"),n("VCL8")},K9S6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,a.default)((function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=null;return e.forEach((function(t){if(null==o){var e=t.apply(void 0,n);null!=e&&(o=e)}})),o}))};var r,o=n("pvIh"),a=(r=o)&&r.__esModule?r:{default:r};t.exports=e.default},MNkq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-contents/reports",function(){return n("cdSL")}])},QA0p:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n=void 0===e?{}:e,r=n.propTypes,a=n.defaultProps,i=n.allowFallback,u=void 0!==i&&i,l=n.displayName,c=void 0===l?t.name||t.displayName:l,s=function(e,n){return t(e,n)};return Object.assign(o.default.forwardRef||!u?o.default.forwardRef(s):function(t){return s(t,null)},{displayName:c,propTypes:r,defaultProps:a})};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,a,i,u){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],s=0;(l=new Error(e.replace(/%s/g,(function(){return c[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},Qg85:function(t,e,n){"use strict";e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(this,r),e.apply(this,r)}}),null)}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},VCL8:function(t,e,n){"use strict";function r(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function o(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function a(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function i(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof t.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return t;var n=null,i=null,u=null;if("function"===typeof e.componentWillMount?n="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?u="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==u){var l=t.displayName||t.name,c="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof t.getDerivedStateFromProps&&(e.componentWillMount=r,e.componentWillReceiveProps=o),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=a;var s=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,t,e,r)}}return t}n.d(e,"a",(function(){return i})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},Wzyw:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=o.a.createContext(null)},ZCiN:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI");var o=function(t){var e=Object(r.useRef)(t);return Object(r.useEffect)((function(){e.current=t}),[t]),e};function a(t){var e=o(t);return Object(r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},Zeqi:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,e){return r(t.querySelectorAll(e))}},cdSL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("Jz+W"),i=n("KD6P"),u=o.a.createElement;e.default=function(){return u("div",{style:{width:"100%",background:"yellow"}},u(a.a,{defaultActiveKey:"daily",transition:!1,id:"reports_tab",style:{padding:"0px",margin:"0px",width:"100%"}},u(i.a,{eventKey:"daily",title:"Daily Reports"},u("p",null,"Daily Reports")),u(i.a,{eventKey:"weekly",title:"Weekly Reports"},u("p",null,"Weekly Reports")),u(i.a,{eventKey:"monthly",title:"Monthly Reports"},u("p",null,"Monthly Reports")),u(i.a,{eventKey:"yearly",title:"Yearly Reports"},u("p",null,"Yearly Reports")),u(i.a,{eventKey:"overall",title:"Overall Reports"},u("p",null,"Overall Reports"))))}},dbZe:function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),u=n("Qg85");function l(t){return!t||"#"===t.trim()}var c=i.a.forwardRef((function(t,e){var n=t.as,a=void 0===n?"a":n,c=t.disabled,s=t.onKeyDown,f=Object(o.a)(t,["as","disabled","onKeyDown"]),p=function(t){var e=f.href,n=f.onClick;(c||l(e))&&t.preventDefault(),c?t.stopPropagation():n&&n(t)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(a,Object(r.a)({ref:e},f,{onClick:p,onKeyDown:Object(u.a)((function(t){" "===t.key&&(t.preventDefault(),p(t))}),s)}))}));c.displayName="SafeAnchor",e.a=c},pvIh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(e,n,r,o,a,i){var u=o||"<<anonymous>>",l=i||r;if(null==n[r])return e?new Error("Required "+a+" `"+l+"` was not specified in `"+u+"`."):null;for(var c=arguments.length,s=Array(c>6?c-6:0),f=6;f<c;f++)s[f-6]=arguments[f];return t.apply(void 0,[n,r,u,a,l].concat(s))}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n},t.exports=e.default},qUpC:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=o.a.createContext(null)},vUet:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n("wx14"),o=n("QA0p"),a=n.n(o),i=n("q1tI"),u=n.n(i),l=u.a.createContext({});l.Consumer,l.Provider;function c(t,e){var n=Object(i.useContext)(l);return t||n[e]||e}function s(t,e){"string"===typeof e&&(e={prefix:e});var n=t.prototype&&t.prototype.isReactComponent,o=e,i=o.prefix,l=o.forwardRefAs,s=void 0===l?n?"ref":"innerRef":l;return a()((function(e,n){var o=Object(r.a)({},e);o[s]=n;var a=c(o.bsPrefix,i);return u.a.createElement(t,Object(r.a)({},o,{bsPrefix:a}))}),{displayName:"Bootstrap("+(t.displayName||t.name)+")"})}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}},[["MNkq",0,1,3,14]]]);