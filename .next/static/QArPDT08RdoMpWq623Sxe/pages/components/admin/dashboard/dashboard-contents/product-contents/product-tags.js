(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/JS1":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("DZHF"),i=n("3Z9Z"),c=n("6xyR"),l=n("QojX"),s=n("bWZ2"),u=n("IP2g"),d=n("wHSu"),f=a.a.createElement,p={card:{width:"100%",border:"1px solid lightgray"},card_header:{display:"flex",alignItems:"center",fontSize:"".concat(s.a.card_header_fontsize),background:"".concat(s.a.card_header_background)},slider_fontawesome:{color:"".concat(s.a.admin_primry_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=function(e){return f(a.a.Fragment,null,f(o.a,{as:i.a,defaultActiveKey:"0",noGutters:!0,style:{margin:"2%"}},f(c.a,{style:p.card},f(c.a.Header,{style:p.card_header},f(l.a.Label,null,e.title),f("div",{className:"mr-auto"}),f(o.a.Toggle,{eventKey:"0",style:{background:"none"}},f(u.a,{size:"xs",icon:d.C,style:p.slider_fontawesome}))),f(o.a.Collapse,{eventKey:"0"},f(c.a.Body,null,e.children)))))}},BOF4:function(e,t,n){"use strict";var r=n("evrj");function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!==typeof e)throw new a("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[n]))}catch(o){throw new a("Invalid token specified: "+o.message)}},e.exports.InvalidTokenError=a},DZHF:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("JCAc"),u=n("vUet"),d=n("ILyh"),f=l.a.createContext(null);var p=l.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"button":n,i=e.children,s=e.eventKey,u=e.onClick,p=Object(a.a)(e,["as","children","eventKey","onClick"]),m=function(e,t){var n=Object(c.useContext)(f),r=Object(c.useContext)(d.a);return function(a){r(e===n?null:e,a),t&&t(a)}}(s,u);return"button"===o&&(p.type="button"),l.a.createElement(o,Object(r.a)({ref:t,onClick:m},p),i)})),m=n("vYJ8"),b=l.a.forwardRef((function(e,t){var n=e.children,o=e.eventKey,i=Object(a.a)(e,["children","eventKey"]),s=Object(c.useContext)(f);return l.a.createElement(m.a,Object(r.a)({ref:t,in:s===o},i),l.a.createElement("div",null,l.a.Children.only(n)))}));b.displayName="AccordionCollapse";var g=b,h=l.a.forwardRef((function(e,t){var n=Object(s.a)(e,{activeKey:"onSelect"}),o=n.as,c=void 0===o?"div":o,p=n.activeKey,m=n.bsPrefix,b=n.children,g=n.className,h=n.onSelect,v=Object(a.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]);return m=Object(u.b)(m,"accordion"),l.a.createElement(f.Provider,{value:p},l.a.createElement(d.a.Provider,{value:h},l.a.createElement(c,Object(r.a)({ref:t},v,{className:i()(g,m)}),b)))}));h.Toggle=p,h.Collapse=g;t.a=h},KVCq:function(e,t){t.reactLocalStorage={set:function(e,t){return localStorage[e]=t,localStorage[e]},get:function(e,t,n=!0){var r=localStorage[e]||t;if(!n&&!r)throw e+" not found in localStorage";return r},setObject:function(e,t){return localStorage[e]=JSON.stringify(t),localStorage[e]},getObject:function(e,t={},n=!0){value=this.get(e,JSON.stringify(t),n);try{return JSON.parse(value)}catch(r){if(!n)throw"Error in parsing value"}},clear:function(){return localStorage.clear()},remove:function(e){return localStorage.removeItem(e)}}},"T/rR":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("vUet"),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.animation,u=e.size,d=e.children,f=e.as,p=void 0===f?"div":f,m=e.className,b=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),g=(n=Object(s.b)(n,"spinner"))+"-"+c;return l.a.createElement(p,Object(r.a)({ref:t},b,{className:i()(m,g,u&&g+"-"+u,o&&"text-"+o)}),d)}));u.displayName="Spinner",t.a=u},VbX6:function(e,t,n){"use strict";var r={PATH:"https://muhalikweb.herokuapp.com"};t.a=r},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},bWZ2:function(e,t,n){"use strict";var r=n("rePB");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={primry_color:"#28A745",admin_primry_color:"#373948",primary_text_color:"white",body_color:"#F1F1F1",form_label_fontsize:"13px",card_header_fontsize:"14px",card_header_background:"lightgray",react_select_styles:{control:function(e){return o({},e,{fontSize:"13px"})},dropdownIndicator:function(e){return o({},e,{paddingTop:0,paddingBottom:0,fontSize:"13px"})},clearIndicator:function(e){return o({},e,{paddingTop:0,paddingBottom:0,fontSize:"13px"})},option:function(e){return o({},e,{fontSize:"13px",display:"absolute",zIndex:"1000"})}}};t.a=i},cWnB:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("vUet"),u=n("dbZe"),d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.size,d=e.active,f=e.className,p=e.block,m=e.type,b=e.as,g=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(s.b)(n,"btn"),v=i()(f,h,d&&"active",h+"-"+o,p&&h+"-block",c&&h+"-"+c);if(g.href)return l.a.createElement(u.a,Object(r.a)({},g,{as:b,ref:t,className:i()(v,g.disabled&&"disabled")}));t&&(g.ref=t),b||(g.type=m);var y=b||"button";return(l.a.createElement(y,Object(r.a)({},g,{className:v})))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("Qg85");function l(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,s=e.disabled,u=e.onKeyDown,d=Object(a.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(s||l(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),s&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},evrj:function(e,t,n){var r=n("m4GZ");e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(n){return r(t)}}},f6Jz:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),a=n("q1tI"),o=n.n(a),i=n("zM5D"),c=n("QojX"),l=n("cWnB"),s=n("IP2g"),u=o.a.createElement;t.default=function(e){return u(i.a,Object(r.a)({},e,{size:"md","aria-labelledby":"alert-modal",centered:!0}),u("div",{style:{border:"1px solid ".concat(e.color),borderRadius:"5px"}},u(i.a.Header,{closeButton:!0,style:{color:"".concat(e.color),borderBottom:"1px solid ".concat(e.color)}},u(s.a,{icon:e.iconName,style:{color:"".concat(e.color),marginRight:"10px",width:"35px",height:"35px",maxHeight:"35px",maxWidth:"35px"}}),u(i.a.Title,{id:"alert-modal"},e.header)),u(i.a.Body,null,u(c.a.Label,{style:{fontSize:"14px",padding:"0%",margin:"0%"}},e.message)),u(i.a.Footer,null,u(l.a,{size:"sm",onClick:e.onHide},"Close"))))}},m4GZ:function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError",e.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,o,i=0,c=0,l="";o=t.charAt(c++);~o&&(a=i%4?64*a+o:o,i++%4)?l+=String.fromCharCode(255&a>>(-2*i&6)):0)o=n.indexOf(o);return l}},oDRg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-contents/product-contents/product-tags",function(){return n("QdS8")}])},qTQu:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("3Z9Z"),i=n("IP2g"),c=a.a.createElement,l={title_row:{borderBottom:"1px solid lightgray",padding:"1% 2.5%",display:"flex",alignItems:"center"},title_fontawesome:{color:"gray",marginRight:"3%",width:"22px",height:"22px",maxHeight:"22px",maxWidth:"22px"},title:{color:"gray",fontSize:"14px"}};t.default=function(e){return c(o.a,{style:l.title_row,noGutters:!0},c(i.a,{icon:e.icon,style:l.title_fontawesome}),c("div",{className:"mr-auto",style:l.title}," Muhalik / ",e.title," "))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vYJ8:function(e,t,n){"use strict";var r,a=n("wx14"),o=n("zLVn"),i=n("dI71"),c=n("TSYQ"),l=n.n(c),s=n("7j6X"),u=n("YECM"),d=n("q1tI"),f=n.n(d),p=n("dRu9"),m=n("Qg85"),b=n("z+q/"),g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var h=((r={})[p.c]="collapse",r[p.d]="collapsing",r[p.b]="collapsing",r[p.a]="collapse show",r),v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=g[e];return n+parseInt(Object(s.a)(t,r[0]),10)+parseInt(Object(s.a)(t,r[1]),10)}},y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(b.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(i.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,i=t.onEntered,c=t.onExit,s=t.onExiting,d=t.className,b=t.children,g=Object(o.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete g.dimension,delete g.getDimensionValue;var v=Object(m.a)(this.handleEnter,n),y=Object(m.a)(this.handleEntering,r),x=Object(m.a)(this.handleEntered,i),O=Object(m.a)(this.handleExit,c),w=Object(m.a)(this.handleExiting,s);return f.a.createElement(p.e,Object(a.a)({addEndListener:u.a},g,{"aria-expanded":g.role?g.in:null,onEnter:v,onEntering:y,onEntered:x,onExit:O,onExiting:w}),(function(t,n){return f.a.cloneElement(b,Object(a.a)({},n,{className:l()(d,b.props.className,h[t],"width"===e.getDimension()&&"width")}))}))},t}(f.a.Component);y.defaultProps=v,t.a=y},vvUq:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return b}));var r=n("o0o1"),a=n.n(r),o=n("q1tI"),i=n.n(o),c=n("KVCq"),l=n("BOF4"),s=n("nOHt"),u=n.n(s);i.a.createElement;function d(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(c.reactLocalStorage.set("token",e));case 2:case"end":return t.stop()}}),null,null,null,Promise)}function f(){try{var e=c.reactLocalStorage.get("token");return l(e).data}catch(t){return null}}function p(){return c.reactLocalStorage.get("token")}function m(){try{c.reactLocalStorage.remove("token"),u.a.replace("/index"),u.a.reload("/index")}catch(e){console.log("error:",e)}}function b(e){try{var t=c.reactLocalStorage.get("token"),n=l(t);if("admin"==n.data.role)return n.data.fullName;if(n.data.role===e)return n.data.fullName;u.a.replace("/index")}catch(r){return null}}},zUrK:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("YdCC"),u=n("vUet"),d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,c=e.className,s=e.as,d=void 0===s?"div":s,f=Object(a.a)(e,["bsPrefix","size","className","as"]);return n=Object(u.b)(n,"input-group"),l.a.createElement(d,Object(r.a)({ref:t},f,{className:i()(c,n,o&&n+"-"+o)}))})),f=Object(s.a)("input-group-append"),p=Object(s.a)("input-group-prepend"),m=Object(s.a)("input-group-text",{Component:"span"});d.displayName="InputGroup",d.Text=m,d.Radio=function(e){return l.a.createElement(m,null,l.a.createElement("input",Object(r.a)({type:"radio"},e)))},d.Checkbox=function(e){return l.a.createElement(m,null,l.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},d.Append=f,d.Prepend=p,t.a=d}},[["oDRg",0,1,4,2,3,5,7,8,9,10,11,13,25]]]);