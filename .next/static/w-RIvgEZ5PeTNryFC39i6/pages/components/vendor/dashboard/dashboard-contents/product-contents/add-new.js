(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{F9IU:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a).a.createContext(null);n.a=r},QKdD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/product-contents/add-new",function(){return t("tz4B")}])},YGJp:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI");var r=function(e){var n=Object(a.useRef)(e);return Object(a.useEffect)((function(){n.current=e}),[e]),n};function i(e){var n=r(e);return Object(a.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},cWnB:function(e,n,t){"use strict";var a=t("wx14"),r=t("zLVn"),i=t("TSYQ"),o=t.n(i),c=t("q1tI"),s=t.n(c),u=t("vUet"),l=t("dbZe"),d=s.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.variant,c=e.size,d=e.active,p=e.className,f=e.block,b=e.type,m=e.as,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(u.b)(t,"btn"),E=o()(p,v,d&&"active",v+"-"+i,f&&v+"-block",c&&v+"-"+c);if(h.href)return s.a.createElement(l.a,Object(a.a)({},h,{as:m,ref:n,className:o()(E,h.disabled&&"disabled")}));n&&(h.ref=n),m||(h.type=b);var g=m||"button";return(s.a.createElement(g,Object(a.a)({},h,{className:E})))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},n.a=d},dbZe:function(e,n,t){"use strict";var a=t("wx14"),r=t("zLVn"),i=t("q1tI"),o=t.n(i),c=t("Qg85");function s(e){return!e||"#"===e.trim()}var u=o.a.forwardRef((function(e,n){var t=e.as,i=void 0===t?"a":t,u=e.disabled,l=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),p=function(e){var n=d.href,t=d.onClick;(u||s(n))&&e.preventDefault(),u?e.stopPropagation():t&&t(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),u&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.a.createElement(i,Object(a.a)({ref:n},d,{onClick:p,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),l)}))}));u.displayName="SafeAnchor",n.a=u},lcWJ:function(e,n,t){"use strict";var a=t("q1tI"),r=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.a=function(e,n){return Object(a.useMemo)((function(){return function(e,n){var t=r(e),a=r(n);return function(e){t&&t(e),a&&a(e)}}(e,n)}),[e,n])}},qUpC:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a);n.a=r.a.createContext(null)},vYJ8:function(e,n,t){"use strict";var a,r=t("wx14"),i=t("zLVn"),o=t("dI71"),c=t("TSYQ"),s=t.n(c),u=t("7j6X"),l=t("YECM"),d=t("q1tI"),p=t.n(d),f=t("dRu9"),b=t("Qg85"),m=t("z+q/"),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var v=((a={})[f.c]="collapse",a[f.d]="collapsing",a[f.b]="collapsing",a[f.a]="collapse show",a),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,n){var t=n["offset"+e[0].toUpperCase()+e.slice(1)],a=h[e];return t+parseInt(Object(u.a)(n,a[0]),10)+parseInt(Object(u.a)(n,a[1]),10)}},g=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[n.getDimension()]="0"},n.handleEntering=function(e){var t=n.getDimension();e.style[t]=n._getScrollDimensionValue(e,t)},n.handleEntered=function(e){e.style[n.getDimension()]=null},n.handleExit=function(e){var t=n.getDimension();e.style[t]=n.props.getDimensionValue(t,e)+"px",Object(m.a)(e)},n.handleExiting=function(e){e.style[n.getDimension()]=null},n}Object(o.a)(n,e);var t=n.prototype;return t.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},t._getScrollDimensionValue=function(e,n){return e["scroll"+n[0].toUpperCase()+n.slice(1)]+"px"},t.render=function(){var e=this,n=this.props,t=n.onEnter,a=n.onEntering,o=n.onEntered,c=n.onExit,u=n.onExiting,d=n.className,m=n.children,h=Object(i.a)(n,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete h.dimension,delete h.getDimensionValue;var E=Object(b.a)(this.handleEnter,t),g=Object(b.a)(this.handleEntering,a),O=Object(b.a)(this.handleEntered,o),j=Object(b.a)(this.handleExit,c),x=Object(b.a)(this.handleExiting,u);return p.a.createElement(f.e,Object(r.a)({addEndListener:l.a},h,{"aria-expanded":h.role?h.in:null,onEnter:E,onEntering:g,onEntered:O,onExit:j,onExiting:x}),(function(n,t){return p.a.cloneElement(m,Object(r.a)({},t,{className:s()(d,m.props.className,v[n],"width"===e.getDimension()&&"width")}))}))},n}(p.a.Component);g.defaultProps=E,n.a=g},zUrK:function(e,n,t){"use strict";var a=t("wx14"),r=t("zLVn"),i=t("TSYQ"),o=t.n(i),c=t("q1tI"),s=t.n(c),u=t("YdCC"),l=t("vUet"),d=s.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.size,c=e.className,u=e.as,d=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","size","className","as"]);return t=Object(l.b)(t,"input-group"),s.a.createElement(d,Object(a.a)({ref:n},p,{className:o()(c,t,i&&t+"-"+i)}))})),p=Object(u.a)("input-group-append"),f=Object(u.a)("input-group-prepend"),b=Object(u.a)("input-group-text",{Component:"span"});d.displayName="InputGroup",d.Text=b,d.Radio=function(e){return s.a.createElement(b,null,s.a.createElement("input",Object(a.a)({type:"radio"},e)))},d.Checkbox=function(e){return s.a.createElement(b,null,s.a.createElement("input",Object(a.a)({type:"checkbox"},e)))},d.Append=p,d.Prepend=f,n.a=d}},[["QKdD",0,1,4,2,3,5,6,7,8,9,10,11,13,15,17,18,19]]]);