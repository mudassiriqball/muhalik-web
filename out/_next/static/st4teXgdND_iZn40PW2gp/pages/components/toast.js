(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3R2T":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("wx14"),c=n("zLVn"),s=n("TSYQ"),u=n.n(s),i=n("Vhrh"),l=n("7xGa"),f=n("ZCiN"),d=n("vUet"),b=n("XQC9"),m=r.a.createContext({onClose:function(){}}),p=r.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.closeLabel,i=e.closeButton,l=e.className,p=e.children,v=Object(c.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);n=Object(d.b)(n,"toast-header");var O=Object(a.useContext)(m),h=Object(f.a)((function(e){O&&O.onClose&&O.onClose(e)}));return r.a.createElement("div",Object(o.a)({ref:t},v,{className:u()(n,l)}),p,i&&r.a.createElement(b.a,{label:s,onClick:h,className:"ml-2 mb-1","data-dismiss":"toast"}))}));p.displayName="ToastHeader",p.defaultProps={closeLabel:"Close",closeButton:!0};var v=p,O=n("YdCC"),h=Object(O.a)("toast-body"),j={animation:!0,autohide:!1,delay:3e3,show:!0,transition:l.a},x=r.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,l=e.children,f=e.transition,b=e.show,p=e.animation,v=e.delay,O=e.autohide,h=e.onClose,j=Object(c.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);n=Object(d.b)("toast");var x=Object(a.useRef)(v),C=Object(a.useRef)(h);Object(a.useEffect)((function(){x.current=v,C.current=h}),[v,h]);var w=Object(i.a)(),N=Object(a.useCallback)((function(){O&&b&&C.current()}),[O,b]);w.set(N,x.current);var y=Object(a.useMemo)((function(){return f&&p}),[f,p]),E=r.a.createElement("div",Object(o.a)({},j,{ref:t,className:u()(n,s,!y&&(b?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),l),P={onClose:h};return r.a.createElement(m.Provider,{value:P},y?r.a.createElement(f,{in:b,unmountOnExit:!0},E):E)}));x.defaultProps=j,x.displayName="Toast",x.Body=h,x.Header=v;var C=x,w=n("IP2g"),N=r.a.createElement,y=(t.default=function(e){return N("div",{style:{position:"absolute",top:"40%",right:"40%",zIndex:"100"}},N(C,{onClose:e.onCloseHandler,show:e.show,delay:1e4,autohide:!0,style:{display:"absolute",background:"#e6ffe6",width:"300px",border:"0.5px solid ".concat(e.color)}},N(C.Header,null,N(w.a,{icon:e.iconName,style:{color:"".concat(e.color),width:"35px",height:"35px",maxHeight:"35px",maxWidth:"35px"},className:"mr-auto"}),N("span",{style:{marginLeft:"20px",fontSize:"18px",color:"".concat(e.color),fontWeight:"bold"},className:"mr-auto"},e.header)),N(C.Body,{style:y.toastBody},N("p",{style:{textAlign:"center"}},N("span",{className:"mr-auto"},e.message)))))},{toastBody:{fontSize:"16px",padding:"10px"}})},"7xGa":function(e,t,n){"use strict";var a,r=n("wx14"),o=n("zLVn"),c=n("TSYQ"),s=n.n(c),u=n("YECM"),i=n("q1tI"),l=n.n(i),f=n("dRu9"),d=n("z+q/"),b=((a={})[f.b]="show",a[f.a]="show",a),m=l.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(o.a)(e,["className","children"]),m=Object(i.useCallback)((function(e){Object(d.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return l.a.createElement(f.e,Object(r.a)({ref:t,addEndListener:u.a},c,{onEnter:m}),(function(e,t){return l.a.cloneElement(a,Object(r.a)({},t,{className:s()("fade",n,a.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},Vhrh:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n("XcHJ"),o=n("i52p"),c=Math.pow(2,31)-1;function s(){var e=Object(r.a)(),t=Object(a.useRef)();return Object(o.a)((function(){return clearTimeout(t.current)})),Object(a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=c?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=c?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),c)}(t,a,Date.now()+r))},clear:n}}),[])}},XQC9:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("17x9"),c=n.n(o),s=n("q1tI"),u=n.n(s),i=n("TSYQ"),l=n.n(i),f={label:c.a.string.isRequired,onClick:c.a.func},d=u.a.forwardRef((function(e,t){var n=e.label,o=e.onClick,c=e.className,s=Object(r.a)(e,["label","onClick","className"]);return(u.a.createElement("button",Object(a.a)({ref:t,type:"button",className:l()("close",c),onClick:o},s),u.a.createElement("span",{"aria-hidden":"true"},"\xd7"),u.a.createElement("span",{className:"sr-only"},n)))}));d.displayName="CloseButton",d.propTypes=f,d.defaultProps={label:"Close"},t.a=d},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},YWYx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast",function(){return n("3R2T")}])},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),c=n.n(o),s=/-(.)/g;var u=n("q1tI"),i=n.n(u),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,o=n.displayName,s=void 0===o?f(e):o,u=n.Component,d=void 0===u?"div":u,b=n.defaultProps,m=i.a.forwardRef((function(t,n){var o=t.className,s=t.bsPrefix,u=t.as,f=void 0===u?d:u,b=Object(r.a)(t,["className","bsPrefix","as"]),m=Object(l.b)(s,e);return i.a.createElement(f,Object(a.a)({ref:n,className:c()(o,m)},b))}));return m.defaultProps=b,m.displayName=s,m}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}}},[["YWYx",0,1,2,3]]]);