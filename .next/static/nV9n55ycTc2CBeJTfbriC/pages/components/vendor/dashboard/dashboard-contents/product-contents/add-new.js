(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{F9IU:function(n,t,e){"use strict";var i=e("q1tI"),o=e.n(i).a.createContext(null);t.a=o},QKdD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/product-contents/add-new",function(){return e("tz4B")}])},YGJp:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var i=e("q1tI");function o(){return Object(i.useReducer)((function(n){return!n}),!1)[1]}},lcWJ:function(n,t,e){"use strict";var i=e("q1tI"),o=function(n){return n&&"function"!==typeof n?function(t){n.current=t}:n};t.a=function(n,t){return Object(i.useMemo)((function(){return function(n,t){var e=o(n),i=o(t);return function(n){e&&e(n),i&&i(n)}}(n,t)}),[n,t])}},qUpC:function(n,t,e){"use strict";var i=e("q1tI"),o=e.n(i);t.a=o.a.createContext(null)},vYJ8:function(n,t,e){"use strict";var i,o=e("wx14"),r=e("zLVn"),a=e("dI71"),s=e("TSYQ"),c=e.n(s),u=e("7j6X"),l=e("YECM"),d=e("q1tI"),p=e.n(d),h=e("dRu9"),f=e("Qg85"),m=e("z+q/"),g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var E=((i={})[h.c]="collapse",i[h.d]="collapsing",i[h.b]="collapsing",i[h.a]="collapse show",i),b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(n,t){var e=t["offset"+n[0].toUpperCase()+n.slice(1)],i=g[n];return e+parseInt(Object(u.a)(t,i[0]),10)+parseInt(Object(u.a)(t,i[1]),10)}},w=function(n){function t(){for(var t,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=n.call.apply(n,[this].concat(i))||this).handleEnter=function(n){n.style[t.getDimension()]="0"},t.handleEntering=function(n){var e=t.getDimension();n.style[e]=t._getScrollDimensionValue(n,e)},t.handleEntered=function(n){n.style[t.getDimension()]=null},t.handleExit=function(n){var e=t.getDimension();n.style[e]=t.props.getDimensionValue(e,n)+"px",Object(m.a)(n)},t.handleExiting=function(n){n.style[t.getDimension()]=null},t}Object(a.a)(t,n);var e=t.prototype;return e.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},e._getScrollDimensionValue=function(n,t){return n["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},e.render=function(){var n=this,t=this.props,e=t.onEnter,i=t.onEntering,a=t.onEntered,s=t.onExit,u=t.onExiting,d=t.className,m=t.children,g=Object(r.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete g.dimension,delete g.getDimensionValue;var b=Object(f.a)(this.handleEnter,e),w=Object(f.a)(this.handleEntering,i),x=Object(f.a)(this.handleEntered,a),v=Object(f.a)(this.handleExit,s),O=Object(f.a)(this.handleExiting,u);return p.a.createElement(h.e,Object(o.a)({addEndListener:l.a},g,{"aria-expanded":g.role?g.in:null,onEnter:b,onEntering:w,onEntered:x,onExit:v,onExiting:O}),(function(t,e){return p.a.cloneElement(m,Object(o.a)({},e,{className:c()(d,m.props.className,E[t],"width"===n.getDimension()&&"width")}))}))},t}(p.a.Component);w.defaultProps=b,t.a=w}},[["QKdD",0,1,4,2,3,5,6,7,8,9,10,11,12,15,16,17,18]]]);