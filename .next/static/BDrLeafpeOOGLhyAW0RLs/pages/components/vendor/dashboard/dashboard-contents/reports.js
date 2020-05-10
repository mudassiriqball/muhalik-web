/*! For license information please see reports.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"+YzT":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=(n("K9S6"),n("q1tI")),c=n.n(u),l=n("JCAc"),s=n("vUet"),f=n("qUpC"),d=n("Wzyw"),v=n("Zeqi"),b=n("YGJp"),p=n("lcWJ"),y=n("F9IU"),m=n("ILyh"),O=n("Qdst"),j=function(){},E=c.a.forwardRef((function(e,t){var n,o,i=e.as,l=void 0===i?"ul":i,s=e.onSelect,f=e.activeKey,d=e.role,E=e.onKeyDown,h=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(b.a)(),w=Object(u.useRef)(!1),I=Object(u.useContext)(m.a),C=Object(u.useContext)(O.a);C&&(d=d||"tablist",f=C.activeKey,n=C.getControlledId,o=C.getControllerId);var N=Object(u.useRef)(null),K=function(e){if(!N.current)return null;var t=Object(v.a)(N.current,"[data-rb-event-key]:not(.disabled)"),n=N.current.querySelector(".active"),r=t.indexOf(n);if(-1===r)return null;var a=r+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},g=function(e,t){null!=e&&(s&&s(e,t),I&&I(e,t))};Object(u.useEffect)((function(){if(N.current&&w.current){var e=N.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var S=Object(p.a)(t,N);return(c.a.createElement(m.a.Provider,{value:g},c.a.createElement(y.a.Provider,{value:{role:d,activeKey:Object(m.b)(f),getControlledId:n||j,getControllerId:o||j}},c.a.createElement(l,Object(r.a)({},h,{onKeyDown:function(e){var t;switch(E&&E(e),e.key){case"ArrowLeft":case"ArrowUp":t=K(-1);break;case"ArrowRight":case"ArrowDown":t=K(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),w.current=!0,x())},ref:S,role:d})))))})),h=n("Mj5q"),x=n("iKII"),w=c.a.forwardRef((function(e,t){var n,o,v,b=Object(l.a)(e,{activeKey:"onSelect"}),p=b.as,y=void 0===p?"div":p,m=b.bsPrefix,O=b.variant,j=b.fill,h=b.justify,x=b.navbar,w=b.className,I=b.children,C=b.activeKey,N=Object(a.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);m=Object(s.b)(m,"nav");var K=Object(u.useContext)(f.a),g=Object(u.useContext)(d.a);return K?(o=K.bsPrefix,x=null==x||x):g&&(v=g.cardHeaderBsPrefix),c.a.createElement(E,Object(r.a)({as:y,ref:t,activeKey:C,className:i()(w,(n={},n[m]=!x,n[o+"-nav"]=x,n[v+"-"+O]=!!v,n[m+"-"+O]=!!O,n[m+"-fill"]=j,n[m+"-justified"]=h,n))},N),I)}));w.displayName="Nav",w.defaultProps={justify:!1,fill:!1},w.Item=h.a,w.Link=x.a;t.a=w},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"7xGa":function(e,t,n){"use strict";var r,a=n("wx14"),o=n("zLVn"),i=n("TSYQ"),u=n.n(i),c=n("YECM"),l=n("q1tI"),s=n.n(l),f=n("dRu9"),d=n("z+q/"),v=((r={})[f.b]="show",r[f.a]="show",r),b=s.a.forwardRef((function(e,t){var n=e.className,r=e.children,i=Object(o.a)(e,["className","children"]),b=Object(l.useCallback)((function(e){Object(d.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return s.a.createElement(f.e,Object(a.a)({ref:t,addEndListener:c.a},i,{onEnter:b}),(function(e,t){return s.a.cloneElement(r,Object(a.a)({},t,{className:u()("fade",n,r.props.className,v[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,a,o){var i=r||"<<anonymous>>",u=o||n;if(null==t[n])return new Error("The "+a+" `"+u+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,l=Array(c>5?c-5:0),s=5;s<c;s++)l[s-5]=arguments[s];return e.apply(void 0,[t,n,r,a,o].concat(l))}},e.exports=t.default},"Cz4+":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),l=n("vUet"),s=n("Qdst"),f=n("ILyh"),d=n("7xGa");var v=c.a.forwardRef((function(e,t){var n=function(e){var t=Object(u.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,i=t.getControllerId,c=Object(a.a)(t,["activeKey","getControlledId","getControllerId"]),l=!1!==e.transition&&!1!==c.transition,v=Object(f.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=v?Object(f.b)(n)===v:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:l&&(e.transition||c.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),o=n.bsPrefix,v=n.className,b=n.active,p=n.onEnter,y=n.onEntering,m=n.onEntered,O=n.onExit,j=n.onExiting,E=n.onExited,h=n.mountOnEnter,x=n.unmountOnExit,w=n.transition,I=n.as,C=void 0===I?"div":I,N=(n.eventKey,Object(a.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),K=Object(l.b)(o,"tab-pane");if(!b&&!w&&x)return null;var g=c.a.createElement(C,Object(r.a)({},N,{ref:t,role:"tabpanel","aria-hidden":!b,className:i()(v,K,{active:b})}));return w&&(g=c.a.createElement(w,{in:b,onEnter:p,onEntering:y,onEntered:m,onExit:O,onExiting:j,onExited:E,mountOnEnter:h,unmountOnExit:x},g)),c.a.createElement(s.a.Provider,{value:null},c.a.createElement(f.a.Provider,{value:null},g))}));v.displayName="TabPane",t.a=v},F9IU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);t.a=a},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},"Jz+W":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),u=(n("BO/t"),n("JCAc")),c=n("+YzT"),l=n("iKII"),s=n("Mj5q"),f=n("gpSn"),d=n("bxoZ"),v=n("Cz4+");function b(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}function p(e){var t;return function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function y(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,o=t.tabClassName,u=t.id;return null==n?null:i.a.createElement(s.a,{as:l.a,eventKey:r,disabled:a,id:u,className:o},n)}var m=i.a.forwardRef((function(e,t){var n=Object(u.a)(e,{activeKey:"onSelect"}),o=n.id,l=n.onSelect,s=n.transition,m=n.mountOnEnter,O=n.unmountOnExit,j=n.children,E=n.activeKey,h=void 0===E?p(j):E,x=Object(a.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return(i.a.createElement(f.a,{ref:t,id:o,activeKey:h,onSelect:l,transition:s,mountOnEnter:m,unmountOnExit:O},i.a.createElement(c.a,Object(r.a)({},x,{role:"tablist",as:"nav"}),b(j,y)),i.a.createElement(d.a,null,b(j,(function(e){var t=Object(r.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(v.a,t)})))))}));m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs";t.a=m},KD6P:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("gpSn"),u=n("bxoZ"),c=n("Cz4+"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);l.Container=i.a,l.Content=u.a,l.Pane=c.a,t.a=l},L0tY:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Jz+W"),i=n("KD6P"),u=n("MwrM"),c=n("xZEg"),l=n("Wx9U"),s=n("VrQ6"),f=a.a.createElement;t.default=function(){return f("div",{style:{width:"100%",margin:"2%"}},f(o.a,{defaultActiveKey:"overall",transition:!1,id:"reports_tab",justify:!0,fill:!0},f(i.a,{eventKey:"overall",title:"Overall"},f(s.default,null)),f(i.a,{eventKey:"yearly",title:"Yearly"},f(l.default,null)),f(i.a,{eventKey:"monthly",title:"Monthly"},f(c.default,null)),f(i.a,{eventKey:"weekly",title:"Weekly"},f(u.default,null))))}},MBJH:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),l=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.striped,s=e.bordered,f=e.borderless,d=e.hover,v=e.size,b=e.variant,p=e.responsive,y=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(l.b)(n,"table"),O=i()(o,m,b&&m+"-"+b,v&&m+"-"+v,u&&m+"-striped",s&&m+"-bordered",f&&m+"-borderless",d&&m+"-hover"),j=c.a.createElement("table",Object(r.a)({},y,{className:O,ref:t}));if(p){var E=m+"-responsive";return"string"===typeof p&&(E=E+"-"+p),c.a.createElement("div",{className:E},j)}return j}));t.a=s},Mj5q:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),l=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.children,s=e.as,f=void 0===s?"div":s,d=Object(a.a)(e,["bsPrefix","className","children","as"]);return n=Object(l.b)(n,"nav-item"),c.a.createElement(f,Object(r.a)({},d,{ref:t,className:i()(o,n)}),u)}));s.displayName="NavItem",t.a=s},MwrM:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),c=n("q1tI"),l=n.n(c),s=n("MBJH"),f=l.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var v=function(e){Object(o.a)(n,e);var t=d(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(a.a)(n,[{key:"render",value:function(){return f(s.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},f("thead",null,f("tr",null,f("th",null,"#"),f("th",null,"First Name"),f("th",null,"Last Name"),f("th",null,"Username"))),f("tbody",null,f("tr",null,f("td",null,"1"),f("td",null,"Mark"),f("td",null,"Otto"),f("td",null,"@mdo")),f("tr",null,f("td",null,"2"),f("td",null,"Jacob"),f("td",null,"Thornton"),f("td",null,"@fat")),f("tr",null,f("td",null,"3"),f("td",{colSpan:"2"},"Larry the Bird"),f("td",null,"@twitter"))))}}]),n}(c.Component);t.default=v},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,i=n.allowFallback,u=void 0!==i&&i,c=n.displayName,l=void 0===c?e.name||e.displayName:c,s=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!u?a.default.forwardRef(s):function(e){return s(e,null)},{displayName:l,propTypes:r,defaultProps:o})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},Qdst:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);t.a=a},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},VrQ6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r).a.createElement;t.default=function(){return a("div",null,"This is overall")}},Wx9U:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r).a.createElement;t.default=function(){return a("div",null,"This is overall")}},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=a.a.createContext(null)},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},bxoZ:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),l=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,u=void 0===o?"div":o,s=e.className,f=Object(a.a)(e,["bsPrefix","as","className"]),d=Object(l.b)(n,"tab-content");return c.a.createElement(u,Object(r.a)({ref:t},f,{className:i()(s,d)}))}));t.a=s},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),u=n("Qg85");function c(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,l=e.disabled,s=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||c(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));l.displayName="SafeAnchor",t.a=l},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},gpSn:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JCAc"),i=n("Qdst"),u=n("ILyh");t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.generateChildId,l=t.onSelect,s=t.activeKey,f=t.transition,d=t.mountOnEnter,v=t.unmountOnExit,b=t.children,p=Object(r.useMemo)((function(){return c||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,c]),y=Object(r.useMemo)((function(){return{onSelect:l,activeKey:s,transition:f,mountOnEnter:d,unmountOnExit:v,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[l,s,f,d,v,p]);return a.a.createElement(i.a.Provider,{value:y},a.a.createElement(u.a.Provider,{value:l},b))}},iKII:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),l=n("dbZe"),s=n("ZCiN"),f=(n("2W6z"),n("F9IU")),d=n("ILyh"),v=c.a.forwardRef((function(e,t){var n=e.active,o=e.className,l=e.tabIndex,v=e.eventKey,b=e.onSelect,p=e.onClick,y=e.as,m=Object(a.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),O=Object(d.b)(v,m.href),j=Object(u.useContext)(d.a),E=Object(u.useContext)(f.a),h=n;if(E){m.role||"tablist"!==E.role||(m.role="tab");var x=E.getControllerId(O),w=E.getControlledId(O);m["data-rb-event-key"]=O,m.id=x||m.id,m["aria-controls"]=w||m["aria-controls"],h=null==n&&null!=O?E.activeKey===O:n}"tab"===m.role&&(m.tabIndex=h?l:-1,m["aria-selected"]=h);var I=Object(s.a)((function(e){p&&p(e),null!=O&&(b&&b(O,e),j&&j(O,e))}));return(c.a.createElement(y,Object(r.a)({},m,{ref:t,onClick:I,className:i()(o,h&&"active")})))}));v.defaultProps={disabled:!1};var b=v,p=n("vUet"),y={disabled:!1,as:l.a},m=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,u=e.className,l=e.href,s=e.eventKey,f=e.onSelect,d=e.as,v=Object(a.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.b)(n,"nav-link"),c.a.createElement(b,Object(r.a)({},v,{href:l,ref:t,eventKey:s,as:d,disabled:o,onSelect:f,className:i()(u,n,o&&"disabled")}))}));m.displayName="NavLink",m.defaultProps=y;t.a=m},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}n.d(t,"a",(function(){return i}));var o=n("JX7q");function i(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(o.a)(e):t}},"nhS+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/reports",function(){return n("L0tY")}])},qUpC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=a.a.createContext(null)},vUet:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r=n("wx14"),a=n("QA0p"),o=n.n(a),i=n("q1tI"),u=n.n(i),c=u.a.createContext({});c.Consumer,c.Provider;function l(e,t){var n=Object(i.useContext)(c);return e||n[t]||t}function s(e,t){"string"===typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,a=t,i=a.prefix,c=a.forwardRefAs,s=void 0===c?n?"ref":"innerRef":c;return o()((function(t,n){var a=Object(r.a)({},t);a[s]=n;var o=l(a.bsPrefix,i);return(u.a.createElement(e,Object(r.a)({},a,{bsPrefix:o})))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xZEg:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r).a.createElement;t.default=function(){return a("div",null,"This is overall")}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["nhS+",0,1,3,5]]]);