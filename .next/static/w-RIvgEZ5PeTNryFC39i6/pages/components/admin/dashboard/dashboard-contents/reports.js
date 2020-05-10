/*! For license information please see reports.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+YzT":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=(n("K9S6"),n("q1tI")),u=n.n(c),l=n("JCAc"),s=n("vUet"),f=n("qUpC"),d=n("Wzyw"),v=n("Zeqi"),b=n("YGJp"),p=n("lcWJ"),m=n("F9IU"),y=n("ILyh"),O=n("Qdst"),E=function(){},x=u.a.forwardRef((function(e,t){var n,o,i=e.as,l=void 0===i?"ul":i,s=e.onSelect,f=e.activeKey,d=e.role,x=e.onKeyDown,j=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(b.a)(),w=Object(c.useRef)(!1),C=Object(c.useContext)(y.a),I=Object(c.useContext)(O.a);I&&(d=d||"tablist",f=I.activeKey,n=I.getControlledId,o=I.getControllerId);var K=Object(c.useRef)(null),N=function(e){if(!K.current)return null;var t=Object(v.a)(K.current,"[data-rb-event-key]:not(.disabled)"),n=K.current.querySelector(".active"),a=t.indexOf(n);if(-1===a)return null;var r=a+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},g=function(e,t){null!=e&&(s&&s(e,t),C&&C(e,t))};Object(c.useEffect)((function(){if(K.current&&w.current){var e=K.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var P=Object(p.a)(t,K);return(u.a.createElement(y.a.Provider,{value:g},u.a.createElement(m.a.Provider,{value:{role:d,activeKey:Object(y.b)(f),getControlledId:n||E,getControllerId:o||E}},u.a.createElement(l,Object(a.a)({},j,{onKeyDown:function(e){var t;switch(x&&x(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),w.current=!0,h())},ref:P,role:d})))))})),j=n("Mj5q"),h=n("iKII"),w=u.a.forwardRef((function(e,t){var n,o,v,b=Object(l.a)(e,{activeKey:"onSelect"}),p=b.as,m=void 0===p?"div":p,y=b.bsPrefix,O=b.variant,E=b.fill,j=b.justify,h=b.navbar,w=b.className,C=b.children,I=b.activeKey,K=Object(r.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);y=Object(s.b)(y,"nav");var N=Object(c.useContext)(f.a),g=Object(c.useContext)(d.a);return N?(o=N.bsPrefix,h=null==h||h):g&&(v=g.cardHeaderBsPrefix),u.a.createElement(x,Object(a.a)({as:m,ref:t,activeKey:I,className:i()(w,(n={},n[y]=!h,n[o+"-nav"]=h,n[v+"-"+O]=!!v,n[y+"-"+O]=!!O,n[y+"-fill"]=E,n[y+"-justified"]=j,n))},K),C)}));w.displayName="Nav",w.defaultProps={justify:!1,fill:!1},w.Item=j.a,w.Link=h.a;t.a=w},"7xGa":function(e,t,n){"use strict";var a,r=n("wx14"),o=n("zLVn"),i=n("TSYQ"),c=n.n(i),u=n("YECM"),l=n("q1tI"),s=n.n(l),f=n("dRu9"),d=n("z+q/"),v=((a={})[f.b]="show",a[f.a]="show",a),b=s.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(o.a)(e,["className","children"]),b=Object(l.useCallback)((function(e){Object(d.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return s.a.createElement(f.e,Object(r.a)({ref:t,addEndListener:u.a},i,{onEnter:b}),(function(e,t){return s.a.cloneElement(a,Object(r.a)({},t,{className:c()("fade",n,a.props.className,v[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,a,r,o){var i=a||"<<anonymous>>",c=o||n;if(null==t[n])return new Error("The "+r+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var u=arguments.length,l=Array(u>5?u-5:0),s=5;s<u;s++)l[s-5]=arguments[s];return e.apply(void 0,[t,n,a,r,o].concat(l))}},e.exports=t.default},"Cz4+":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),u=n.n(c),l=n("vUet"),s=n("Qdst"),f=n("ILyh"),d=n("7xGa");var v=u.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,i=t.getControllerId,u=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),l=!1!==e.transition&&!1!==u.transition,v=Object(f.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=v?Object(f.b)(n)===v:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:l&&(e.transition||u.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:u.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:u.unmountOnExit})}(e),o=n.bsPrefix,v=n.className,b=n.active,p=n.onEnter,m=n.onEntering,y=n.onEntered,O=n.onExit,E=n.onExiting,x=n.onExited,j=n.mountOnEnter,h=n.unmountOnExit,w=n.transition,C=n.as,I=void 0===C?"div":C,K=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),N=Object(l.b)(o,"tab-pane");if(!b&&!w&&h)return null;var g=u.a.createElement(I,Object(a.a)({},K,{ref:t,role:"tabpanel","aria-hidden":!b,className:i()(v,N,{active:b})}));return w&&(g=u.a.createElement(w,{in:b,onEnter:p,onEntering:m,onEntered:y,onExit:O,onExiting:E,onExited:x,mountOnEnter:j,unmountOnExit:h},g)),u.a.createElement(s.a.Provider,{value:null},u.a.createElement(f.a.Provider,{value:null},g))}));v.displayName="TabPane",t.a=v},F9IU:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext(null);t.a=r},Ikbf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-contents/reports",function(){return n("cdSL")}])},"Jz+W":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=(n("BO/t"),n("JCAc")),u=n("+YzT"),l=n("iKII"),s=n("Mj5q"),f=n("gpSn"),d=n("bxoZ"),v=n("Cz4+");function b(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}function p(e){var t;return function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function m(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName,c=t.id;return null==n?null:i.a.createElement(s.a,{as:l.a,eventKey:a,disabled:r,id:c,className:o},n)}var y=i.a.forwardRef((function(e,t){var n=Object(c.a)(e,{activeKey:"onSelect"}),o=n.id,l=n.onSelect,s=n.transition,y=n.mountOnEnter,O=n.unmountOnExit,E=n.children,x=n.activeKey,j=void 0===x?p(E):x,h=Object(r.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return(i.a.createElement(f.a,{ref:t,id:o,activeKey:j,onSelect:l,transition:s,mountOnEnter:y,unmountOnExit:O},i.a.createElement(u.a,Object(a.a)({},h,{role:"tablist",as:"nav"}),b(E,m)),i.a.createElement(d.a,null,b(E,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(v.a,t)})))))}));y.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},y.displayName="Tabs";t.a=y},KD6P:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("gpSn"),c=n("bxoZ"),u=n("Cz4+"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);l.Container=i.a,l.Content=c.a,l.Pane=u.a,t.a=l},Mj5q:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),u=n.n(c),l=n("vUet"),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,s=e.as,f=void 0===s?"div":s,d=Object(r.a)(e,["bsPrefix","className","children","as"]);return n=Object(l.b)(n,"nav-item"),u.a.createElement(f,Object(a.a)({},d,{ref:t,className:i()(o,n)}),c)}));s.displayName="NavItem",t.a=s},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,o=n.defaultProps,i=n.allowFallback,c=void 0!==i&&i,u=n.displayName,l=void 0===u?e.name||e.displayName:u,s=function(t,n){return e(t,n)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(s):function(e){return s(e,null)},{displayName:l,propTypes:a,defaultProps:o})};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a}},Qdst:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext(null);t.a=r},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Wzyw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},bxoZ:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),u=n.n(c),l=n("vUet"),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,c=void 0===o?"div":o,s=e.className,f=Object(r.a)(e,["bsPrefix","as","className"]),d=Object(l.b)(n,"tab-content");return u.a.createElement(c,Object(a.a)({ref:t},f,{className:i()(s,d)}))}));t.a=s},cdSL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Jz+W"),i=n("KD6P"),c=r.a.createElement;t.default=function(){return c("div",{style:{width:"100%",background:"yellow"}},c(o.a,{defaultActiveKey:"daily",transition:!1,id:"reports_tab",style:{padding:"0px",margin:"0px",width:"100%"}},c(i.a,{eventKey:"daily",title:"Daily Reports"},c("p",null,"Daily Reports")),c(i.a,{eventKey:"weekly",title:"Weekly Reports"},c("p",null,"Weekly Reports")),c(i.a,{eventKey:"monthly",title:"Monthly Reports"},c("p",null,"Monthly Reports")),c(i.a,{eventKey:"yearly",title:"Yearly Reports"},c("p",null,"Yearly Reports")),c(i.a,{eventKey:"overall",title:"Overall Reports"},c("p",null,"Overall Reports"))))}},dbZe:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("Qg85");function u(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,l=e.disabled,s=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||u(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(a.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));l.displayName="SafeAnchor",t.a=l},gpSn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("JCAc"),i=n("Qdst"),c=n("ILyh");t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,u=t.generateChildId,l=t.onSelect,s=t.activeKey,f=t.transition,d=t.mountOnEnter,v=t.unmountOnExit,b=t.children,p=Object(a.useMemo)((function(){return u||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,u]),m=Object(a.useMemo)((function(){return{onSelect:l,activeKey:s,transition:f,mountOnEnter:d,unmountOnExit:v,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[l,s,f,d,v,p]);return r.a.createElement(i.a.Provider,{value:m},r.a.createElement(c.a.Provider,{value:l},b))}},iKII:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),u=n.n(c),l=n("dbZe"),s=n("ZCiN"),f=(n("2W6z"),n("F9IU")),d=n("ILyh"),v=u.a.forwardRef((function(e,t){var n=e.active,o=e.className,l=e.tabIndex,v=e.eventKey,b=e.onSelect,p=e.onClick,m=e.as,y=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),O=Object(d.b)(v,y.href),E=Object(c.useContext)(d.a),x=Object(c.useContext)(f.a),j=n;if(x){y.role||"tablist"!==x.role||(y.role="tab");var h=x.getControllerId(O),w=x.getControlledId(O);y["data-rb-event-key"]=O,y.id=h||y.id,y["aria-controls"]=w||y["aria-controls"],j=null==n&&null!=O?x.activeKey===O:n}"tab"===y.role&&(y.tabIndex=j?l:-1,y["aria-selected"]=j);var C=Object(s.a)((function(e){p&&p(e),null!=O&&(b&&b(O,e),E&&E(O,e))}));return(u.a.createElement(m,Object(a.a)({},y,{ref:t,onClick:C,className:i()(o,j&&"active")})))}));v.defaultProps={disabled:!1};var b=v,p=n("vUet"),m={disabled:!1,as:l.a},y=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,c=e.className,l=e.href,s=e.eventKey,f=e.onSelect,d=e.as,v=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.b)(n,"nav-link"),u.a.createElement(b,Object(a.a)({},v,{href:l,ref:t,eventKey:s,as:d,disabled:o,onSelect:f,className:i()(c,n,o&&"disabled")}))}));y.displayName="NavLink",y.defaultProps=m;t.a=y},lcWJ:function(e,t,n){"use strict";var a=n("q1tI"),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},qUpC:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},vUet:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n("wx14"),r=n("QA0p"),o=n.n(r),i=n("q1tI"),c=n.n(i),u=c.a.createContext({});u.Consumer,u.Provider;function l(e,t){var n=Object(i.useContext)(u);return e||n[t]||t}function s(e,t){"string"===typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,r=t,i=r.prefix,u=r.forwardRefAs,s=void 0===u?n?"ref":"innerRef":u;return o()((function(t,n){var r=Object(a.a)({},t);r[s]=n;var o=l(r.bsPrefix,i);return(c.a.createElement(e,Object(a.a)({},r,{bsPrefix:o})))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["Ikbf",0,1,3,5]]]);