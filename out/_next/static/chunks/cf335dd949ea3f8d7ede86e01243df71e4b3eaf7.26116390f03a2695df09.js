(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+YzT":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=(t("K9S6"),t("q1tI")),i=t.n(l),s=t("JCAc"),u=t("vUet"),d=t("qUpC"),f=t("Wzyw"),b=t("Zeqi"),v=t("YGJp"),m=t("lcWJ"),p=t("F9IU"),y=t("ILyh"),j=t("Qdst"),O=function(){},x=i.a.forwardRef((function(e,a){var t,c,o=e.as,s=void 0===o?"ul":o,u=e.onSelect,d=e.activeKey,f=e.role,x=e.onKeyDown,N=Object(n.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(v.a)(),w=Object(l.useRef)(!1),C=Object(l.useContext)(y.a),I=Object(l.useContext)(j.a);I&&(f=f||"tablist",d=I.activeKey,t=I.getControlledId,c=I.getControllerId);var g=Object(l.useRef)(null),P=function(e){if(!g.current)return null;var a=Object(b.a)(g.current,"[data-rb-event-key]:not(.disabled)"),t=g.current.querySelector(".active"),r=a.indexOf(t);if(-1===r)return null;var n=r+e;return n>=a.length&&(n=0),n<0&&(n=a.length-1),a[n]},k=function(e,a){null!=e&&(u&&u(e,a),C&&C(e,a))};Object(l.useEffect)((function(){if(g.current&&w.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var K=Object(m.a)(a,g);return i.a.createElement(y.a.Provider,{value:k},i.a.createElement(p.a.Provider,{value:{role:f,activeKey:Object(y.b)(d),getControlledId:t||O,getControllerId:c||O}},i.a.createElement(s,Object(r.a)({},N,{onKeyDown:function(e){var a;switch(x&&x(e),e.key){case"ArrowLeft":case"ArrowUp":a=P(-1);break;case"ArrowRight":case"ArrowDown":a=P(1);break;default:return}a&&(e.preventDefault(),k(a.dataset.rbEventKey,e),w.current=!0,h())},ref:K,role:f}))))})),N=t("Mj5q"),h=t("iKII"),w=i.a.forwardRef((function(e,a){var t,c,b,v=Object(s.a)(e,{activeKey:"onSelect"}),m=v.as,p=void 0===m?"div":m,y=v.bsPrefix,j=v.variant,O=v.fill,N=v.justify,h=v.navbar,w=v.className,C=v.children,I=v.activeKey,g=Object(n.a)(v,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);y=Object(u.a)(y,"nav");var P=Object(l.useContext)(d.a),k=Object(l.useContext)(f.a);return P?(c=P.bsPrefix,h=null==h||h):k&&(b=k.cardHeaderBsPrefix),i.a.createElement(x,Object(r.a)({as:p,ref:a,activeKey:I,className:o()(w,(t={},t[y]=!h,t[c+"-nav"]=h,t[b+"-"+j]=!!b,t[y+"-"+j]=!!j,t[y+"-fill"]=O,t[y+"-justified"]=N,t))},g),C)}));w.displayName="Nav",w.defaultProps={justify:!1,fill:!1},w.Item=N.a,w.Link=h.a;a.a=w},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),i=t.n(l),s=t("vUet"),u=t("YdCC"),d=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))},f=t("Wzyw"),b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return i.a.createElement(d,Object(r.a)({ref:a,className:o()(l?b+"-"+l:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,m=d("h5"),p=d("h6"),y=Object(u.a)("card-body"),j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,v=e.body,m=e.children,p=e.as,j=void 0===p?"div":p,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(s.a)(t,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return i.a.createElement(f.a.Provider,{value:N},i.a.createElement(j,Object(r.a)({ref:a},O,{className:o()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),v?i.a.createElement(y,null,m):m))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=v,j.Title=Object(u.a)("card-title",{Component:m}),j.Subtitle=Object(u.a)("card-subtitle",{Component:p}),j.Body=y,j.Link=Object(u.a)("card-link",{Component:"a"}),j.Text=Object(u.a)("card-text",{Component:"p"}),j.Header=Object(u.a)("card-header"),j.Footer=Object(u.a)("card-footer"),j.ImgOverlay=Object(u.a)("card-img-overlay");a.a=j},F9IU:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createContext(null);a.a=n},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),i=t.n(l),s=t("vUet"),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(s.a)(t,"col"),v=[],m=[];return u.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var o="xs"!==e?"-"+e:"";null!=a&&v.push(!0===a?""+b+o:""+b+o+"-"+a),null!=r&&m.push("order"+o+"-"+r),null!=t&&m.push("offset"+o+"-"+t)})),v.length||v.push(b),i.a.createElement(d,Object(r.a)({},f,{ref:a,className:o.a.apply(void 0,[c].concat(v,m))}))}));d.displayName="Col",a.a=d},Mj5q:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),i=t.n(l),s=t("vUet"),u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.children,u=e.as,d=void 0===u?"div":u,f=Object(n.a)(e,["bsPrefix","className","children","as"]);return t=Object(s.a)(t,"nav-item"),i.a.createElement(d,Object(r.a)({},f,{ref:a,className:o()(c,t)}),l)}));u.displayName="NavItem",a.a=u},Qdst:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createContext(null);a.a=n},Wzyw:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r);a.a=n.a.createContext(null)},YGJp:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t("q1tI");function n(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=/-(.)/g;var i=t("q1tI"),s=t.n(i),u=t("vUet");t.d(a,"a",(function(){return f}));var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,c=t.displayName,l=void 0===c?d(e):c,i=t.Component,f=void 0===i?"div":i,b=t.defaultProps,v=s.a.forwardRef((function(a,t){var c=a.className,l=a.bsPrefix,i=a.as,d=void 0===i?f:i,b=Object(n.a)(a,["className","bsPrefix","as"]),v=Object(u.a)(l,e);return s.a.createElement(d,Object(r.a)({ref:t,className:o()(c,v)},b))}));return v.defaultProps=b,v.displayName=l,v}},Zeqi:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function n(e,a){return r(e.querySelectorAll(a))}},iKII:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),i=t.n(l),s=t("dbZe"),u=t("ZCiN"),d=t("F9IU"),f=t("ILyh"),b=i.a.forwardRef((function(e,a){var t=e.active,c=e.className,s=e.tabIndex,b=e.eventKey,v=e.onSelect,m=e.onClick,p=e.as,y=Object(n.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),j=Object(f.b)(b,y.href),O=Object(l.useContext)(f.a),x=Object(l.useContext)(d.a),N=t;x&&(y.role||"tablist"!==x.role||(y.role="tab"),y["data-rb-event-key"]=j,y.id=x.getControllerId(j),y["aria-controls"]=x.getControlledId(j),N=null==t&&null!=j?x.activeKey===j:t),"tab"===y.role&&(y.tabIndex=N?s:-1,y["aria-selected"]=N);var h=Object(u.a)((function(e){m&&m(e),null!=j&&(v&&v(j,e),O&&O(j,e))}));return i.a.createElement(p,Object(r.a)({},y,{ref:a,onClick:h,className:o()(c,N&&"active")}))}));b.defaultProps={disabled:!1};var v=b,m=t("vUet"),p={disabled:!1,as:s.a},y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.disabled,l=e.className,s=e.href,u=e.eventKey,d=e.onSelect,f=e.as,b=Object(n.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(m.a)(t,"nav-link"),i.a.createElement(v,Object(r.a)({},b,{href:s,ref:a,eventKey:u,as:f,disabled:c,onSelect:d,className:o()(l,t,c&&"disabled")}))}));y.displayName="NavLink",y.defaultProps=p;a.a=y},lcWJ:function(e,a,t){"use strict";var r=t("q1tI"),n=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.a=function(e,a){return Object(r.useMemo)((function(){return function(e,a){var t=n(e),r=n(a);return function(e){t&&t(e),r&&r(e)}}(e,a)}),[e,a])}},vYYK:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t("hfKm"),n=t.n(r);function c(e,a,t){return a in e?n()(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},vkTu:function(e,a,t){"use strict";a.a={primry_color:"#28A745",admin_primry_color:"#373948",primary_text_color:"white",body_color:"#DDE1E3",form_label_fontsize:"13px"}},zwR7:function(e,a,t){"use strict";t.r(a);var r=t("vYYK"),n=t("q1tI"),c=t.n(n),o=t("6xyR"),l=t("6ctO"),i=t("+YzT"),s=t("QojX"),u=t("jDKy"),d=t("cWnB"),f=t("vkTu"),b=c.a.createElement,v={background:{background:"".concat(f.a.primry_color)},brand:{color:"".concat(f.a.primry_color),fontSize:"medium"},form:{border:"2px solid ".concat(f.a.primry_color),width:"60%",borderRadius:"25px",padding:"0px 5px"}};a.default=function(){return b("div",null,b(o.a,null,b(o.a.Body,null,b(l.a,{collapseOnSelect:!0,expand:"lg"},b(l.a.Brand,{href:"#home",style:v.brand},"Muhalik"),b(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),b(l.a.Collapse,{id:"responsive-navbar-nav"},b(i.a,{className:"mr-auto"}),b(s.a,{inline:!0,style:v.form,className:"mr-auto"},b("label",{className:"mr-auto"},"Fuck"),b(u.a,Object(r.a)({type:"text",placeholder:"Search",className:"mr-sm-2",style:{width:"80%"}},"className","mr-auto")),b(d.a,{style:{background:"none",border:"none"}},"Search")),b(i.a,{className:!0},b(i.a.Link,{href:"#home"},"Login/Signup"),b(i.a.Link,{href:"#features"},"Orders"),b(i.a.Link,{href:"#pricing"},"Cart")))))))}}}]);