(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2mvg":function(t,e,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),u=n("vUet"),s=c.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,l=t.fluid,s=t.rounded,f=t.roundedCircle,d=t.thumbnail,p=Object(a.a)(t,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(u.a)(n,"img");var v=i()(l&&n+"-fluid",s&&"rounded",f&&"rounded-circle",d&&n+"-thumbnail");return c.a.createElement("img",Object(r.a)({ref:e},p,{className:i()(o,v)}))}));s.displayName="Image",s.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=s},"73vd":function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),l=n("md7G"),c=n("foSv"),u=n("rePB"),s=n("q1tI"),f=n.n(s),d=n("Cs6D"),p=f.a.createElement;function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var h=[{value:"chocolat",label:"Chocolat"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],m=function(t){Object(i.a)(s,t);var e,n=(e=s,function(){var t,n=Object(c.a)(e);if(v()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(l.a)(this,t)});function s(){var t;Object(r.a)(this,s);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return t=n.call.apply(n,[this].concat(a)),Object(u.a)(Object(o.a)(t),"state",{}),t}return Object(a.a)(s,[{key:"render",value:function(){return p(d.a,{isMulti:!0,name:"colors",options:h,className:"basic-multi-select",classNamePrefix:"select"})}}]),s}(s.Component);e.default=m},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},Cs6D:function(t,e,n){"use strict";n("Ff2n"),n("wx14"),n("KQm4"),n("vpQ4");var r=n("1OyB"),a=n("vuIU"),o=n("md7G"),i=n("foSv"),l=n("Ji7U"),c=n("JX7q"),u=n("rePB"),s=n("q1tI"),f=n.n(s),d=n("Wwog"),p=n("qKvR"),v=(n("i8i4"),n("17x9"),n("U8pU"),n("YD8z")),h=(n("iYmT"),n("h4VS"),n("FUBA"),n("ItZv")),m=n("TqVZ"),y=(s.Component,Object(h.a)(v.a));e.a=y},"Jz+W":function(t,e,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),l=(n("BO/t"),n("JCAc")),c=n("+YzT"),u=n("iKII"),s=n("Mj5q"),f=n("gpSn"),d=n("bxoZ"),p=n("Cz4+");function v(t,e){var n=0;return i.a.Children.map(t,(function(t){return i.a.isValidElement(t)?e(t,n++):t}))}function h(t){var e;return function(t,e){var n=0;i.a.Children.forEach(t,(function(t){i.a.isValidElement(t)&&e(t,n++)}))}(t,(function(t){null==e&&(e=t.props.eventKey)})),e}function m(t){var e=t.props,n=e.title,r=e.eventKey,a=e.disabled,o=e.tabClassName;return null==n?null:i.a.createElement(s.a,{as:u.a,eventKey:r,disabled:a,className:o},n)}var y=i.a.forwardRef((function(t,e){var n=Object(l.a)(t,{activeKey:"onSelect"}),o=n.id,u=n.onSelect,s=n.transition,y=n.mountOnEnter,b=n.unmountOnExit,O=n.children,w=n.activeKey,j=void 0===w?h(O):w,x=Object(a.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.a.createElement(f.a,{ref:e,id:o,activeKey:j,onSelect:u,transition:s,mountOnEnter:y,unmountOnExit:b},i.a.createElement(c.a,Object(r.a)({},x,{role:"tablist",as:"nav"}),v(O,m)),i.a.createElement(d.a,null,v(O,(function(t){var e=Object(r.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,i.a.createElement(p.a,e)}))))}));y.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},y.displayName="Tabs";e.a=y},"L0/n":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),o=n("1OyB"),i=n("vuIU"),l=n("JX7q"),c=n("Ji7U"),u=n("md7G"),s=n("foSv"),f=n("rePB"),d=n("q1tI"),p=n.n(d),v=n("vcXL"),h=n.n(v),m=n("YFqc"),y=n.n(m),b=n("3Z9Z"),O=n("6xyR"),w=n("cWnB"),j=n("IP2g"),x=n("wHSu"),g=n("vDqi"),E=n.n(g),k=(n("bWZ2"),n("VbX6")),U=p.a.createElement;function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var C=function(t){Object(c.a)(r,t);var e,n=(e=r,function(){var t,n=Object(s.a)(e);if(R()){var r=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(o.a)(this,r),e=n.call(this,t),Object(f.a)(Object(l.a)(e),"downloadBulkUploadTemplete",(function(){h()("/excel.xlsx").then((function(t){t.blob().then((function(t){var e=window.URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download="muhalik bulk-upload templete.xlsx",n.click()}))}))})),e.state={file:null},e.onFormSubmit=e.onFormSubmit.bind(Object(l.a)(e)),e.onChange=e.onChange.bind(Object(l.a)(e)),e.fileUpload=e.fileUpload.bind(Object(l.a)(e)),e}return Object(i.a)(r,[{key:"onFormSubmit",value:function(t){t.preventDefault(),this.fileUpload(this.state.file).then((function(t){console.log(t.data)}))}},{key:"onChange",value:function(t){this.setState({file:t.target.files[0]})}},{key:"fileUpload",value:function(t){var e,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=k.a.PATH+"/api/products/bulk-upload",(n=new FormData).append("file",t),E.a.post(e,n,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}).then((function(t){return t})).catch((function(t){console.log(t)})),r.abrupt("return","fuck");case 6:case"end":return r.stop()}}),null,null,null,Promise)}},{key:"render",value:function(){return U("div",null,U(b.a,{style:P.row},U("h6",{className:"mr-auto"},"Products Bulk Upload"),U(y.a,{href:"/index"},U("a",null,"Home"))),U(b.a,{style:P.row},U(O.a,{style:P.card},U(O.a.Header,{style:{background:"skyblue"}},"Download Templete"),U(O.a.Body,null,U(w.a,{variant:"primary",size:"md",active:!0,onClick:this.downloadBulkUploadTemplete},U(j.a,{icon:x.j,style:P.fontawesome}),"Download")))),U(b.a,{style:P.row},U(O.a,{style:P.card},U(O.a.Header,{style:{background:"skyblue"}},"Upload File"),U(O.a.Body,null,U("form",{onSubmit:this.onFormSubmit},U("div",{style:P.browseBtnDiv},U("input",{type:"file",onChange:this.onChange})),U("div",{style:{width:"100%"}},U(w.a,{variant:"primary",size:"md",active:!0,type:"submit"},U(j.a,{icon:x.I,style:P.fontawesome}),"Upload")))))))}}]),r}(p.a.Component),P={row:{margin:"2%",padding:"0px"},card:{width:"100%"},browseBtnDiv:{width:"100%",padding:"0px 0px 10px 0px"},fontawesome:{color:"white",marginRight:"10px",width:"14px",height:"14px",maxHeight:"14px",maxWidth:"14px"}};e.default=C},L0tY:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Jz+W"),i=n("KD6P"),l=n("MwrM"),c=n("xZEg"),u=n("Wx9U"),s=n("VrQ6"),f=a.a.createElement;e.default=function(){return f("div",{style:{width:"100%",margin:"2%"}},f(o.a,{defaultActiveKey:"overall",transition:!1,id:"reports_tab",justify:!0,fill:!0},f(i.a,{eventKey:"overall",title:"Overall"},f(s.default,null)),f(i.a,{eventKey:"yearly",title:"Yearly"},f(u.default,null)),f(i.a,{eventKey:"monthly",title:"Monthly"},f(c.default,null)),f(i.a,{eventKey:"weekly",title:"Weekly"},f(l.default,null))))}},MwrM:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),s=n("wx14"),f=n("zLVn"),d=n("TSYQ"),p=n.n(d),v=n("vUet"),h=u.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,a=t.striped,o=t.bordered,i=t.borderless,l=t.hover,c=t.size,d=t.variant,h=t.responsive,m=Object(f.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(v.a)(n,"table"),b=p()(r,y,d&&y+"-"+d,c&&y+"-"+c,a&&y+"-striped",o&&y+"-bordered",i&&y+"-borderless",l&&y+"-hover"),O=u.a.createElement("table",Object(s.a)({},m,{className:b,ref:e}));if(h){var w=y+"-responsive";return"string"===typeof h&&(w=w+"-"+h),u.a.createElement("div",{className:w},O)}return O})),m=u.a.createElement;function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(o.a)(c,t);var e,n=(e=c,function(){var t,n=Object(l.a)(e);if(y()){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function c(t){var e;return Object(r.a)(this,c),(e=n.call(this,t)).state={},e}return Object(a.a)(c,[{key:"render",value:function(){return m(h,{striped:!0,bordered:!0,hover:!0,responsive:!0},m("thead",null,m("tr",null,m("th",null,"#"),m("th",null,"First Name"),m("th",null,"Last Name"),m("th",null,"Username"))),m("tbody",null,m("tr",null,m("td",null,"1"),m("td",null,"Mark"),m("td",null,"Otto"),m("td",null,"@mdo")),m("tr",null,m("td",null,"2"),m("td",null,"Jacob"),m("td",null,"Thornton"),m("td",null,"@fat")),m("tr",null,m("td",null,"3"),m("td",{colSpan:"2"},"Larry the Bird"),m("td",null,"@twitter"))))}}]),c}(c.Component);e.default=b},NJrv:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("h1",null,"Vriables")}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},ODXe:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},UJaG:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("div",null,a("p",null,"This is Discount page"))}},VrQ6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("div",null,"This is overall")}},Wx9U:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("div",null,"This is overall")}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?a(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),l=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var u=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var f,d=s(n("q1tI")),p=n("QmWs"),v=n("g/15"),h=u(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var y=new Map,b=window.IntersectionObserver,O={};function w(){return f||(b?f=new b((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var j=function(t){o(u,t);var e,n=(e=u,function(){var t,n=l(e);if(c()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function u(t){var e;return r(this,u),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:m(t),as:e?m(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),l=l?(0,p.resolve)(c,l):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return a(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,p.resolve)(t,n);return[a,r?(0,p.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),O[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),d.default.cloneElement(o,i)}}]),u}(d.Component);e.default=j},sUJQ:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("h1",null,"Vriables")}},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},wY5l:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),l=n("foSv"),c=n("MX0m"),u=n.n(c),s=n("q1tI"),f=n.n(s),d=(n("vcXL"),n("3Z9Z")),p=n("Jz+W"),v=n("KD6P"),h=(n("IP2g"),n("bWZ2"),f.a.createElement);function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(o.a)(c,t);var e,n=(e=c,function(){var t,n=Object(l.a)(e);if(m()){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return h("div",{className:"jsx-750656228"},h(d.a,null,h(p.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example"},h(v.a,{eventKey:"home",title:"Home"},h("p",{className:"jsx-750656228"},"Fuck")),h(v.a,{eventKey:"profile",title:"Profile"},h("p",{className:"jsx-750656228"},"Fuck")),h(v.a,{eventKey:"contact",title:"Contact",disabled:!0},h("p",{className:"jsx-750656228"},"Fuck")))),h(u.a,{id:"750656228"},[]))}}]),c}(f.a.Component);e.default=y},xZEg:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r).a.createElement;e.default=function(){return a("div",null,"This is overall")}}}]);