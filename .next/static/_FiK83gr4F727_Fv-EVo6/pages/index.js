(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"7bm4":function(e,t,n){"use strict";var r=n("B4CS"),o=n("H8ru");e.exports=n("8vat")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},Jh6M:function(e,t,n){n("AS96")("Map")},LX0d:function(e,t,n){e.exports=n("s0dr")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=n("ILKo"),f=o.a.createElement;t.default=function(){return f("div",null,f(a.default,null,f(s.a,{href:"./admin"},"Admin dashboard")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),f=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var c,p=u(n("LX0d")),l=n("QmWs"),h=f(n("q1tI")),v=u(n("nOHt")),d=n("g/15");function w(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new p.default,g=window.IntersectionObserver,y={};function M(){return c||(g?c=new g((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:w(e),as:t?w(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,l.parse)(e,!1,!0),n=(0,l.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var f=window.location.pathname;s=(0,l.resolve)(f,s),a=a?(0,l.resolve)(f,a):s,e.preventDefault();var u=n.props.scroll;null==u&&(u=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,l.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=y[this.getHref()];this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=M();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();v.default.prefetch(e),y[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),t}(h.Component);t.default=k},h0es:function(e,t,n){var r=n("0T/a");r(r.P+r.R,"Map",{toJSON:n("A0wl")("Map")})},ineT:function(e,t,n){n("ER9p")("Map")},s0dr:function(e,t,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("7bm4"),n("h0es"),n("ineT"),n("Jh6M"),e.exports=n("p9MR").Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,37,38,40,44,43]]]);