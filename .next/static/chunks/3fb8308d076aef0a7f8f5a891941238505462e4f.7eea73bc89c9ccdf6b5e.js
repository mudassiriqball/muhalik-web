(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,n){"use strict";var a=n("hfKm"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(i.AmpStateContext))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"6ctO":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("JCAc"),u=n("YdCC"),d=n("vUet"),f=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.as,s=Object(r.a)(e,["bsPrefix","className","as"]);n=Object(d.a)(n,"navbar-brand");var u=c||(s.href?"a":"span");return l.a.createElement(u,Object(a.a)({},s,{ref:t,className:i()(o,n)}))}));f.displayName="NavbarBrand";var p,v=f,m=n("dI71"),h=n("7j6X"),b=n("YECM"),g=n("dRu9"),y=n("Qg85"),x=n("z+q/"),O={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var E=((p={})[g.c]="collapse",p[g.d]="collapsing",p[g.b]="collapsing",p[g.a]="collapse show",p),_={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=O[e];return n+parseInt(Object(h.a)(t,a[0]),10)+parseInt(Object(h.a)(t,a[1]),10)}},j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(x.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(m.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,o=t.onEntering,c=t.onEntered,s=t.onExit,u=t.onExiting,d=t.className,f=t.children,p=Object(r.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=Object(y.a)(this.handleEnter,n),m=Object(y.a)(this.handleEntering,o),h=Object(y.a)(this.handleEntered,c),x=Object(y.a)(this.handleExit,s),O=Object(y.a)(this.handleExiting,u);return l.a.createElement(g.e,Object(a.a)({addEndListener:b.a},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:m,onEntered:h,onExit:x,onExiting:O}),(function(t,n){return l.a.cloneElement(f,Object(a.a)({},n,{className:i()(d,f.props.className,E[t],"width"===e.getDimension()&&"width")}))}))},t}(l.a.Component);j.defaultProps=_;var w=j,C=n("qUpC"),k=l.a.forwardRef((function(e,t){var n=e.children,o=e.bsPrefix,i=Object(r.a)(e,["children","bsPrefix"]);return o=Object(d.a)(o,"navbar-collapse"),l.a.createElement(C.a.Consumer,null,(function(e){return l.a.createElement(w,Object(a.a)({in:!(!e||!e.expanded)},i),l.a.createElement("div",{ref:t,className:o},n))}))}));k.displayName="NavbarCollapse";var S=k,N=n("ZCiN"),P=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.children,u=e.label,f=e.as,p=void 0===f?"button":f,v=e.onClick,m=Object(r.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(d.a)(n,"navbar-toggler");var h=Object(c.useContext)(C.a)||{},b=h.onToggle,g=h.expanded,y=Object(N.a)((function(e){v&&v(e),b&&b()}));return"button"===p&&(m.type="button"),l.a.createElement(p,Object(a.a)({},m,{ref:t,onClick:y,"aria-label":u,className:i()(o,n,!g&&"collapsed")}),s||l.a.createElement("span",{className:n+"-icon"}))}));P.displayName="NavbarToggle",P.defaultProps={label:"Toggle navigation"};var A=P,T=n("ILyh"),D=l.a.forwardRef((function(e,t){var n=Object(s.a)(e,{expanded:"onToggle"}),o=n.bsPrefix,u=n.expand,f=n.variant,p=n.bg,v=n.fixed,m=n.sticky,h=n.className,b=n.children,g=n.as,y=void 0===g?"nav":g,x=n.expanded,O=n.onToggle,E=n.onSelect,_=n.collapseOnSelect,j=Object(r.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);o=Object(d.a)(o,"navbar");var w=Object(c.useCallback)((function(){E&&E.apply(void 0,arguments),_&&x&&O(!1)}),[E,_,x,O]);void 0===j.role&&"nav"!==y&&(j.role="navigation");var k=o+"-expand";"string"===typeof u&&(k=k+"-"+u);var S=Object(c.useMemo)((function(){return{onToggle:function(){return O(!x)},bsPrefix:o,expanded:x}}),[o,x,O]);return l.a.createElement(C.a.Provider,{value:S},l.a.createElement(T.a.Provider,{value:w},l.a.createElement(y,Object(a.a)({ref:t},j,{className:i()(h,o,u&&k,f&&o+"-"+f,p&&"bg-"+p,m&&"sticky-"+m,v&&"fixed-"+v)}),b)))}));D.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},D.displayName="Navbar",D.Brand=v,D.Toggle=A,D.Collapse=S,D.Text=Object(u.a)("navbar-text",{Component:"span"});t.a=D},"8Kt/":function(e,t,n){"use strict";var a=n("ttDY"),r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=o(n("q1tI")),c=o(n("Xuae")),l=n("lwAK"),s=n("FYa8"),u=n("/0+H");function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=d;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new a,t=new a,n=new a,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var l=0,s=p.length;l<s;l++){var u=p[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=o.props[u],f=r[u]||new a;f.has(d)?i=!1:(f.add(d),r[u]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var m=c.default();function h(e){var t=e.children;return i.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(m,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}h.rewind=m.rewind,t.default=h},A0wl:function(e,t,n){var a=n("fYqa"),r=n("rfP5");e.exports=function(e){return function(){if(a(this)!=e)throw TypeError(e+"#toJSON isn't generic");return r(this)}}},B4CS:function(e,t,n){"use strict";var a=n("OtwA").f,r=n("cQhG"),o=n("OQSD"),i=n("vCXk"),c=n("sLxe"),l=n("VgtN"),s=n("5Kld"),u=n("JFuE"),d=n("G+Sp"),f=n("fZVS"),p=n("YndH").fastKey,v=n("H8ru"),m=f?"_s":"size",h=function(e,t){var n,a=p(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){c(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=a&&l(a,n,e[s],e)}));return o(u.prototype,{clear:function(){for(var e=v(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var n=v(this,t),a=h(n,e);if(a){var r=a.n,o=a.p;delete n._i[a.i],a.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==a&&(n._f=r),n._l==a&&(n._l=o),n[m]--}return!!a},forEach:function(e){v(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(v(this,t),e)}}),f&&a(u.prototype,"size",{get:function(){return v(this,t)[m]}}),u},def:function(e,t,n){var a,r,o=h(e,t);return o?o.v=n:(e._l=o={i:r=p(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=o),a&&(a.n=o),e[m]++,"F"!==r&&(e._i[r]=o)),e},getEntry:h,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=v(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),d(t)}}},CPHa:function(e,t,n){"use strict";var a=n("B4CS"),r=n("H8ru");e.exports=n("8vat")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},GDVm:function(e,t,n){n("ER9p")("Set")},ILKo:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("zwR7"),l=n("vpgN"),s=r.a.createElement;t.default=function(e){return s("div",null,s(i.a,null,s("title",null,"Muhalik"),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s("meta",{charSet:"utf-8"}),s("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),s(c.default,null),e.children,s("br",null),s(l.default,null))}},IrWQ:function(e,t,n){var a=n("0T/a");a(a.P+a.R,"Set",{toJSON:n("A0wl")("Set")})},OuPC:function(e,t,n){n("AS96")("Set")},PQJW:function(e,t,n){var a=n("d04V"),r=n("yLu3");e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a(e)}},TbGu:function(e,t,n){var a=n("fGSI"),r=n("PQJW"),o=n("2PDY");e.exports=function(e){return a(e)||r(e)||o()}},"V/f9":function(e,t,n){n("k8Q4"),n("YQlv"),e.exports=n("p9MR").Array.from},Xuae:function(e,t,n){"use strict";var a=n("/HRN"),r=n("ZDA2"),o=n("/+P4"),i=n("K47E"),c=n("WaGi"),l=n("N9n2"),s=n("TbGu"),u=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new u;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){function u(e){var c;return a(this,u),c=r(this,o(u).call(this,e)),f&&(t.add(i(c)),n(i(c))),c}return l(u,s),c(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),c(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(d.Component)}},YQlv:function(e,t,n){"use strict";var a=n("vCXk"),r=n("0T/a"),o=n("AYVP"),i=n("nJOo"),c=n("widk"),l=n("pasi"),s=n("s+zB"),u=n("8Vlj");r(r.S+r.F*!n("Q2zc")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,f=o(e),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,b=0,g=u(f);if(h&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&c(g))for(n=new p(t=l(f.length));t>b;b++)s(n,b,h?m(f[b],b):f[b]);else for(d=g.call(f),n=new p;!(r=d.next()).done;b++)s(n,b,h?i(d,m,[r.value,b],!0):r.value);return n.length=b,n}})},d04V:function(e,t,n){e.exports=n("V/f9")},fGSI:function(e,t,n){var a=n("p0XB");e.exports=function(e){if(a(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var a=n("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};a(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},rfP5:function(e,t,n){var a=n("VgtN");e.exports=function(e,t){var n=[];return a(e,!1,n.push,n,t),n}},"s+zB":function(e,t,n){"use strict";var a=n("OtwA"),r=n("+EWW");e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},ttDY:function(e,t,n){e.exports=n("vjmV")},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("hfKm"),r=n.n(a);function o(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vjmV:function(e,t,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("CPHa"),n("IrWQ"),n("GDVm"),n("OuPC"),e.exports=n("p9MR").Set},vpgN:function(e,t,n){"use strict";n.r(t),n.d(t,"FooterStyleSheet",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("vkTu"),i=r.a.createElement,c=o.a.primry_color,l=o.a.primary_text_color,s={footer:{background:"".concat(c),position:"absolute",left:"0",bottom:"0",right:"0"},fooeter_text:{margin:"10px",fontSize:"smaller",color:"".concat(l)}};t.default=function(){return i("div",null,i("div",{style:s.footer},i("p",{className:"text-center",style:s.fooeter_text},"Copyright@ 2020",i("span",{style:{fontSize:"medium",fontWeight:"bold"}}," Muhalik "),"- Online Shopping Website")))}},zwR7:function(e,t,n){"use strict";n.r(t);var a=n("vYYK"),r=n("q1tI"),o=n.n(r),i=n("wx14"),c=n("zLVn"),l=n("TSYQ"),s=n.n(l),u=n("vUet"),d=n("YdCC"),f=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(i.a)({},t,{ref:n,className:s()(t.className,e)}))}))},p=n("Wzyw"),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.variant,l=e.as,d=void 0===l?"img":l,f=Object(c.a)(e,["bsPrefix","className","variant","as"]),p=Object(u.a)(n,"card-img");return o.a.createElement(d,Object(i.a)({ref:t,className:s()(r?p+"-"+r:p,a)},f))}));v.displayName="CardImg",v.defaultProps={variant:null};var m=v,h=f("h5"),b=f("h6"),g=Object(d.a)("card-body"),y=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.bg,d=e.text,f=e.border,v=e.body,m=e.children,h=e.as,b=void 0===h?"div":h,y=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(u.a)(n,"card"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(p.a.Provider,{value:O},o.a.createElement(b,Object(i.a)({ref:t},y,{className:s()(a,x,l&&"bg-"+l,d&&"text-"+d,f&&"border-"+f)}),v?o.a.createElement(g,null,m):m))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=m,y.Title=Object(d.a)("card-title",{Component:h}),y.Subtitle=Object(d.a)("card-subtitle",{Component:b}),y.Body=g,y.Link=Object(d.a)("card-link",{Component:"a"}),y.Text=Object(d.a)("card-text",{Component:"p"}),y.Header=Object(d.a)("card-header"),y.Footer=Object(d.a)("card-footer"),y.ImgOverlay=Object(d.a)("card-img-overlay");var x=y,O=n("6ctO"),E=n("+YzT"),_=n("QojX"),j=n("jDKy"),w=n("cWnB"),C=n("vkTu"),k=o.a.createElement,S={background:{background:"".concat(C.a.primry_color)},brand:{color:"".concat(C.a.primry_color),fontSize:"medium"},form:{border:"2px solid ".concat(C.a.primry_color),width:"60%",borderRadius:"25px",padding:"0px 5px"}};t.default=function(){return k("div",null,k(x,null,k(x.Body,null,k(O.a,{collapseOnSelect:!0,expand:"lg"},k(O.a.Brand,{href:"#home",style:S.brand},"Muhalik"),k(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),k(O.a.Collapse,{id:"responsive-navbar-nav"},k(E.a,{className:"mr-auto"}),k(_.a,{inline:!0,style:S.form,className:"mr-auto"},k("label",{className:"mr-auto"},"Fuck"),k(j.a,Object(a.a)({type:"text",placeholder:"Search",className:"mr-sm-2",style:{width:"80%"}},"className","mr-auto")),k(w.a,{style:{background:"none",border:"none"}},"Search")),k(E.a,{className:!0},k(E.a.Link,{href:"#home"},"Login/Signup"),k(E.a.Link,{href:"#features"},"Orders"),k(E.a.Link,{href:"#pricing"},"Cart")))))))}}}]);