(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3R2T":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("wx14"),c=a("zLVn"),s=a("TSYQ"),u=a.n(s);function i(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}var l=Math.pow(2,31)-1;function f(){var e=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(n.useRef)();return i((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=l?t.current=setTimeout(n,r):function e(t,a,n){var r=n-Date.now();t.current=r<=l?setTimeout(a,r):setTimeout((function(){return e(t,a,n)}),l)}(t,n,Date.now()+r))},clear:a}}),[])}var d=a("7xGa"),m=a("ZCiN"),b=a("vUet"),p=a("XQC9"),v=r.a.createContext({onClose:function(){}}),O=r.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.closeLabel,i=e.closeButton,l=e.className,f=e.children,d=Object(c.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(b.b)(a,"toast-header");var O=Object(n.useContext)(v),j=Object(m.a)((function(){O&&O.onClose()}));return r.a.createElement("div",Object(o.a)({ref:t},d,{className:u()(a,l)}),f,i&&r.a.createElement(p.a,{label:s,onClick:j,className:"ml-2 mb-1","data-dismiss":"toast"}))}));O.displayName="ToastHeader",O.defaultProps={closeLabel:"Close",closeButton:!0};var j=O,h=a("YdCC"),w=Object(h.a)("toast-body"),C={animation:!0,autohide:!1,delay:3e3,show:!0,transition:d.a},N=r.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.children,l=e.transition,d=e.show,m=e.animation,p=e.delay,O=e.autohide,j=e.onClose,h=Object(c.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(b.b)("toast");var w=Object(n.useRef)(p),C=Object(n.useRef)(j);Object(n.useEffect)((function(){w.current=p,C.current=j}),[p,j]);var N=f(),x=Object(n.useCallback)((function(){O&&d&&C.current()}),[O,d]);N.set(x,w.current);var y=Object(n.useMemo)((function(){return l&&m}),[l,m]),E=r.a.createElement("div",Object(o.a)({},h,{ref:t,className:u()(a,s,!y&&d&&"show"),role:"alert","aria-live":"assertive","aria-atomic":"true"}),i),P={onClose:j};return r.a.createElement(v.Provider,{value:P},y?r.a.createElement(l,{in:d},E):E)}));N.defaultProps=C,N.displayName="Toast",N.Body=w,N.Header=j;var x=N,y=a("IP2g"),E=r.a.createElement,P=(t.default=function(e){return E("div",{style:{position:"absolute",top:"40%",right:"40%",zIndex:"100"}},E(x,{onClose:e.onCloseHandler,show:e.show,delay:1e4,autohide:!0,style:{display:"absolute",background:"#e6ffe6",width:"300px",border:"0.5px solid ".concat(e.color)}},E(x.Header,null,E(y.a,{icon:e.iconName,style:{color:"".concat(e.color),width:"35px",height:"35px",maxHeight:"35px",maxWidth:"35px"},className:"mr-auto"}),E("span",{style:{marginLeft:"20px",fontSize:"18px",color:"".concat(e.color),fontWeight:"bold"},className:"mr-auto"},e.header)),E(x.Body,{style:P.toastBody},E("p",{style:{textAlign:"center"}},E("span",{className:"mr-auto"},e.message)))))},{toastBody:{fontSize:"16px",padding:"10px"}})},"4W+m":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast",function(){return a("3R2T")}])},"7xGa":function(e,t,a){"use strict";var n,r=a("wx14"),o=a("zLVn"),c=a("TSYQ"),s=a.n(c),u=a("YECM"),i=a("q1tI"),l=a.n(i),f=a("dRu9"),d=a("z+q/"),m=((n={})[f.b]="show",n[f.a]="show",n),b=l.a.forwardRef((function(e,t){var a=e.className,n=e.children,c=Object(o.a)(e,["className","children"]),b=Object(i.useCallback)((function(e){Object(d.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return l.a.createElement(f.e,Object(r.a)({ref:t,addEndListener:u.a},c,{onEnter:b}),(function(e,t){return l.a.cloneElement(n,Object(r.a)({},t,{className:s()("fade",a,n.props.className,m[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},XQC9:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("17x9"),c=a.n(o),s=a("q1tI"),u=a.n(s),i=a("TSYQ"),l=a.n(i),f={label:c.a.string.isRequired,onClick:c.a.func},d=u.a.forwardRef((function(e,t){var a=e.label,o=e.onClick,c=e.className,s=Object(r.a)(e,["label","onClick","className"]);return u.a.createElement("button",Object(n.a)({ref:t,type:"button",className:l()("close",c),onClick:o},s),u.a.createElement("span",{"aria-hidden":"true"},"\xd7"),u.a.createElement("span",{className:"sr-only"},a))}));d.displayName="CloseButton",d.propTypes=f,d.defaultProps={label:"Close"},t.a=d},YdCC:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),s=/-(.)/g;var u=a("q1tI"),i=a.n(u),l=a("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var a=void 0===t?{}:t,o=a.displayName,s=void 0===o?f(e):o,u=a.Component,d=void 0===u?"div":u,m=a.defaultProps,b=i.a.forwardRef((function(t,a){var o=t.className,s=t.bsPrefix,u=t.as,f=void 0===u?d:u,m=Object(r.a)(t,["className","bsPrefix","as"]),b=Object(l.b)(s,e);return i.a.createElement(f,Object(n.a)({ref:a,className:c()(o,b)},m))}));return b.defaultProps=m,b.displayName=s,b}},ZCiN:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}}},[["4W+m",0,1,2,3]]]);