(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+YzT":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=(n("K9S6"),n("q1tI")),c=n.n(l),u=n("JCAc"),s=n("vUet"),d=n("qUpC"),v=n("Wzyw"),f=n("Zeqi"),b=n("YGJp"),m=n("lcWJ"),y=n("F9IU"),O=n("ILyh"),p=n("Qdst"),E=function(){},j=c.a.forwardRef((function(e,t){var n,o,i=e.as,u=void 0===i?"ul":i,s=e.onSelect,d=e.activeKey,v=e.role,j=e.onKeyDown,x=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(b.a)(),K=Object(l.useRef)(!1),w=Object(l.useContext)(O.a),C=Object(l.useContext)(p.a);C&&(v=v||"tablist",d=C.activeKey,n=C.getControlledId,o=C.getControllerId);var I=Object(l.useRef)(null),N=function(e){if(!I.current)return null;var t=Object(f.a)(I.current,"[data-rb-event-key]:not(.disabled)"),n=I.current.querySelector(".active"),a=t.indexOf(n);if(-1===a)return null;var r=a+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},g=function(e,t){null!=e&&(s&&s(e,t),w&&w(e,t))};Object(l.useEffect)((function(){if(I.current&&K.current){var e=I.current.querySelector("[data-rb-event-key].active");e&&e.focus()}K.current=!1}));var P=Object(m.a)(t,I);return c.a.createElement(O.a.Provider,{value:g},c.a.createElement(y.a.Provider,{value:{role:v,activeKey:Object(O.b)(d),getControlledId:n||E,getControllerId:o||E}},c.a.createElement(u,Object(a.a)({},x,{onKeyDown:function(e){var t;switch(j&&j(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),K.current=!0,h())},ref:P,role:v}))))})),x=n("Mj5q"),h=n("iKII"),K=c.a.forwardRef((function(e,t){var n,o,f,b=Object(u.a)(e,{activeKey:"onSelect"}),m=b.as,y=void 0===m?"div":m,O=b.bsPrefix,p=b.variant,E=b.fill,x=b.justify,h=b.navbar,K=b.className,w=b.children,C=b.activeKey,I=Object(r.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);O=Object(s.a)(O,"nav");var N=Object(l.useContext)(d.a),g=Object(l.useContext)(v.a);return N?(o=N.bsPrefix,h=null==h||h):g&&(f=g.cardHeaderBsPrefix),c.a.createElement(j,Object(a.a)({as:y,ref:t,activeKey:C,className:i()(K,(n={},n[O]=!h,n[o+"-nav"]=h,n[f+"-"+p]=!!f,n[O+"-"+p]=!!p,n[O+"-fill"]=E,n[O+"-justified"]=x,n))},I),w)}));K.displayName="Nav",K.defaultProps={justify:!1,fill:!1},K.Item=x.a,K.Link=h.a;t.a=K},"7RBj":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("wx14"),i=n("zLVn"),l=(n("BO/t"),n("JCAc")),c=n("+YzT"),u=n("iKII"),s=n("Mj5q"),d=n("gpSn"),v=n("bxoZ"),f=n("Cz4+");function b(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function m(e){var t;return function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function y(e){var t=e.props,n=t.title,a=t.eventKey,o=t.disabled,i=t.tabClassName;return null==n?null:r.a.createElement(s.a,{as:u.a,eventKey:a,disabled:o,className:i},n)}var O=r.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),a=n.id,u=n.onSelect,s=n.transition,O=n.mountOnEnter,p=n.unmountOnExit,E=n.children,j=n.activeKey,x=void 0===j?m(E):j,h=Object(i.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return r.a.createElement(d.a,{ref:t,id:a,activeKey:x,onSelect:u,transition:s,mountOnEnter:O,unmountOnExit:p},r.a.createElement(c.a,Object(o.a)({},h,{role:"tablist",as:"nav"}),b(E,y)),r.a.createElement(v.a,null,b(E,(function(e){var t=Object(o.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,r.a.createElement(f.a,t)}))))}));O.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},O.displayName="Tabs";var p=O,E=n("KD6P"),j=r.a.createElement;t.default=function(){return j("div",{style:{width:"100%",background:"yellow"}},j(p,{defaultActiveKey:"daily",transition:!1,id:"reports_tab",style:{padding:"0px",margin:"0px",width:"100%"}},j(E.a,{eventKey:"daily",title:"Daily Reports"},j("p",null,"Daily Reports")),j(E.a,{eventKey:"weekly",title:"Weekly Reports"},j("p",null,"Weekly Reports")),j(E.a,{eventKey:"monthly",title:"Monthly Reports"},j("p",null,"Monthly Reports")),j(E.a,{eventKey:"yearly",title:"Yearly Reports"},j("p",null,"Yearly Reports")),j(E.a,{eventKey:"overall",title:"Overall Reports"},j("p",null,"Overall Reports"))))}},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,a,r,o){var i=a||"<<anonymous>>",l=o||n;if(null==t[n])return new Error("The "+r+" `"+l+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,u=Array(c>5?c-5:0),s=5;s<c;s++)u[s-5]=arguments[s];return e.apply(void 0,[t,n,a,r,o].concat(u))}},e.exports=t.default},"Cz4+":function(e,t,n){"use strict";var a,r=n("wx14"),o=n("zLVn"),i=n("TSYQ"),l=n.n(i),c=n("q1tI"),u=n.n(c),s=n("vUet"),d=n("Qdst"),v=n("ILyh"),f=n("YECM"),b=n("dRu9"),m=n("z+q/"),y=((a={})[b.b]="show",a[b.a]="show",a),O=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(o.a)(e,["className","children"]),s=Object(c.useCallback)((function(e){Object(m.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(b.e,Object(r.a)({ref:t,addEndListener:f.a},i,{onEnter:s}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:l()("fade",n,a.props.className,y[e])}))}))}));O.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},O.displayName="Fade";var p=O;var E=u.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(d.a);if(!t)return e;var n=t.activeKey,a=t.getControlledId,i=t.getControllerId,l=Object(o.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==l.transition,s=Object(v.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=s?Object(v.b)(n)===s:e.active,id:a(e.eventKey),"aria-labelledby":i(e.eventKey),transition:u&&(e.transition||l.transition||p),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),a=n.bsPrefix,i=n.className,f=n.active,b=n.onEnter,m=n.onEntering,y=n.onEntered,O=n.onExit,E=n.onExiting,j=n.onExited,x=n.mountOnEnter,h=n.unmountOnExit,K=n.transition,w=n.as,C=void 0===w?"div":w,I=(n.eventKey,Object(o.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),N=Object(s.a)(a,"tab-pane");if(!f&&h)return null;var g=u.a.createElement(C,Object(r.a)({},I,{ref:t,role:"tabpanel","aria-hidden":!f,className:l()(i,N,{active:f})}));return K&&(g=u.a.createElement(K,{in:f,onEnter:b,onEntering:m,onEntered:y,onExit:O,onExiting:E,onExited:j,mountOnEnter:x,unmountOnExit:h},g)),u.a.createElement(d.a.Provider,{value:null},u.a.createElement(v.a.Provider,{value:null},g))}));E.displayName="TabPane";t.a=E},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}))};var a,r=n("pvIh"),o=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},KD6P:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("gpSn"),l=n("bxoZ"),c=n("Cz4+"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);u.Container=i.a,u.Content=l.a,u.Pane=c.a,t.a=u},Mj5q:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),u=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.children,s=e.as,d=void 0===s?"div":s,v=Object(r.a)(e,["bsPrefix","className","children","as"]);return n=Object(u.a)(n,"nav-item"),c.a.createElement(d,Object(a.a)({},v,{ref:t,className:i()(o,n)}),l)}));s.displayName="NavItem",t.a=s},Qdst:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext(null);t.a=r},Wzyw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},bxoZ:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),u=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,l=void 0===o?"div":o,s=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),v=Object(u.a)(n,"tab-content");return c.a.createElement(l,Object(a.a)({ref:t},d,{className:i()(s,v)}))}));t.a=s},gpSn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("JCAc"),i=n("Qdst"),l=n("ILyh");t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,v=t.mountOnEnter,f=t.unmountOnExit,b=t.children,m=Object(a.useMemo)((function(){return c||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,c]),y=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:v,unmountOnExit:f,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[u,s,d,v,f,m]);return r.a.createElement(i.a.Provider,{value:y},r.a.createElement(l.a.Provider,{value:u},b))}},iKII:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),u=n("dbZe"),s=n("ZCiN"),d=n("F9IU"),v=n("ILyh"),f=c.a.forwardRef((function(e,t){var n=e.active,o=e.className,u=e.tabIndex,f=e.eventKey,b=e.onSelect,m=e.onClick,y=e.as,O=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),p=Object(v.b)(f,O.href),E=Object(l.useContext)(v.a),j=Object(l.useContext)(d.a),x=n;j&&(O.role||"tablist"!==j.role||(O.role="tab"),O["data-rb-event-key"]=p,O.id=j.getControllerId(p),O["aria-controls"]=j.getControlledId(p),x=null==n&&null!=p?j.activeKey===p:n),"tab"===O.role&&(O.tabIndex=x?u:-1,O["aria-selected"]=x);var h=Object(s.a)((function(e){m&&m(e),null!=p&&(b&&b(p,e),E&&E(p,e))}));return c.a.createElement(y,Object(a.a)({},O,{ref:t,onClick:h,className:i()(o,x&&"active")}))}));f.defaultProps={disabled:!1};var b=f,m=n("vUet"),y={disabled:!1,as:u.a},O=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,l=e.className,u=e.href,s=e.eventKey,d=e.onSelect,v=e.as,f=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(m.a)(n,"nav-link"),c.a.createElement(b,Object(a.a)({},f,{href:u,ref:t,eventKey:s,as:v,disabled:o,onSelect:d,className:i()(l,n,o&&"disabled")}))}));O.displayName="NavLink",O.defaultProps=y;t.a=O},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,o,i){var l=r||"<<anonymous>>",c=i||a;if(null==n[a])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,s=Array(u>6?u-6:0),d=6;d<u;d++)s[d-6]=arguments[d];return e.apply(void 0,[n,a,l,o,c].concat(s))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},rSqU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-tabs-content/reports",function(){return n("7RBj")}])}},[["rSqU",0,1,2]]]);