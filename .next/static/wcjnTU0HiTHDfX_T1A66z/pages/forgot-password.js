(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"1OyB":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),c=a("q1tI"),s=a.n(c),l=a("vUet"),u=["xl","lg","md","sm","xs"],f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.noGutters,f=e.as,b=void 0===f?"div":f,d=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(l.b)(a,"row"),p=m+"-cols",y=[];return u.forEach((function(e){var t,a=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+p+n+"-"+t)})),s.a.createElement(b,Object(n.a)({ref:t},d,{className:i.a.apply(void 0,[o,m,c&&"no-gutters"].concat(y))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"6ctO":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),c=a("q1tI"),s=a.n(c),l=a("JCAc"),u=a("YdCC"),f=a("vUet"),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.as,l=Object(r.a)(e,["bsPrefix","className","as"]);a=Object(f.b)(a,"navbar-brand");var u=c||(l.href?"a":"span");return(s.a.createElement(u,Object(n.a)({},l,{ref:t,className:i()(o,a)})))}));b.displayName="NavbarBrand";var d=b,m=a("vYJ8"),p=a("qUpC"),y=s.a.forwardRef((function(e,t){var a=e.children,o=e.bsPrefix,i=Object(r.a)(e,["children","bsPrefix"]);return o=Object(f.b)(o,"navbar-collapse"),s.a.createElement(p.a.Consumer,null,(function(e){return s.a.createElement(m.a,Object(n.a)({in:!(!e||!e.expanded)},i),s.a.createElement("div",{ref:t,className:o},a))}))}));y.displayName="NavbarCollapse";var v=y,h=a("ZCiN"),g=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.children,u=e.label,b=e.as,d=void 0===b?"button":b,m=e.onClick,y=Object(r.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(f.b)(a,"navbar-toggler");var v=Object(c.useContext)(p.a)||{},g=v.onToggle,x=v.expanded,w=Object(h.a)((function(e){m&&m(e),g&&g()}));return"button"===d&&(y.type="button"),s.a.createElement(d,Object(n.a)({},y,{ref:t,onClick:w,"aria-label":u,className:i()(o,a,!x&&"collapsed")}),l||s.a.createElement("span",{className:a+"-icon"}))}));g.displayName="NavbarToggle",g.defaultProps={label:"Toggle navigation"};var x=g,w=a("ILyh"),j=s.a.forwardRef((function(e,t){var a=Object(l.a)(e,{expanded:"onToggle"}),o=a.bsPrefix,u=a.expand,b=a.variant,d=a.bg,m=a.fixed,y=a.sticky,v=a.className,h=a.children,g=a.as,x=void 0===g?"nav":g,j=a.expanded,O=a.onToggle,N=a.onSelect,_=a.collapseOnSelect,S=Object(r.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);o=Object(f.b)(o,"navbar");var P=Object(c.useCallback)((function(){N&&N.apply(void 0,arguments),_&&j&&O(!1)}),[N,_,j,O]);void 0===S.role&&"nav"!==x&&(S.role="navigation");var k=o+"-expand";"string"===typeof u&&(k=k+"-"+u);var C=Object(c.useMemo)((function(){return{onToggle:function(){return O(!j)},bsPrefix:o,expanded:j}}),[o,j,O]);return(s.a.createElement(p.a.Provider,{value:C},s.a.createElement(w.a.Provider,{value:P},s.a.createElement(x,Object(n.a)({ref:t},S,{className:i()(v,o,u&&k,b&&o+"-"+b,d&&"bg-"+d,y&&"sticky-"+y,m&&"fixed-"+m)}),h))))}));j.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},j.displayName="Navbar",j.Brand=d,j.Toggle=x,j.Collapse=v,j.Text=Object(u.a)("navbar-text",{Component:"span"});t.a=j},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),c=a("q1tI"),s=a.n(c),l=a("vUet"),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,c=e.as,u=void 0===c?"div":c,f=e.className,b=Object(r.a)(e,["bsPrefix","fluid","as","className"]),d=Object(l.b)(a,"container"),m="string"===typeof o?"-"+o:"-fluid";return s.a.createElement(u,Object(n.a)({ref:t},b,{className:i()(f,o?""+d+m:d)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},"9ftB":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return a("SwsE")}])},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},Ji7U:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},SwsE:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),i=a("Ji7U"),c=a("md7G"),s=a("foSv"),l=a("rePB"),u=a("MX0m"),f=a.n(u),b=a("q1tI"),d=a.n(b),m=a("YFqc"),p=a.n(m),y=a("6ctO"),v=a("7vrA"),h=a("3Z9Z"),g=a("JI6e"),x=a("2mvg"),w=a("QojX"),j=a("zUrK"),O=a("cWnB"),N=a("IP2g"),_=a("wHSu"),S=a("KYPV"),P=a("UGp+"),k=a("bWZ2"),C=d.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var T=P.b({mobile:P.d().required("Enter Mobile Number").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number is not valid"),password:P.d().required("Enter Password").min(8,"Password must have at least 8 characters").max(20,"Password can't be longer than 20 characters")}),R=function(e){Object(i.a)(a,e);var t=E(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(o.a)(e),"state",{hide:!0}),Object(l.a)(Object(o.a)(e),"showPassword",(function(t){e.setState({hide:!e.state.hide})})),e}return Object(r.a)(a,[{key:"render",value:function(){this.state.hide;return this.state.hide?C(N.a,{icon:_.n,style:B.fontawesome}):C(N.a,{icon:_.o,style:B.fontawesome}),C(S.a,{validationSchema:T,initialValues:{mobile:"",password:""},onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;a(!0),n(),a(!1),setTimeout((function(){alert(JSON.stringify(e,null,2)),n(),a(!1)}),500)}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=e.values,r=e.touched,o=(e.isValid,e.errors);e.handleBlur,e.isSubmitting;return C("div",{style:B.body,className:"jsx-1794121765"},C(y.a,{variant:"dark",style:{background:"".concat(k.a.primry_color)}},C(y.a.Brand,{href:"/",className:"mr-auto"}," Muhalik ")),C(v.a,null,C(h.a,null,C(g.a,{lg:3,md:2,sm:1,xs:0,style:B.side_column}),C(g.a,{style:B.center_column},C("p",{className:"jsx-1794121765"},C(x.a,{src:"muhalik.jpg",roundedCircle:!0,thumbnail:!0,fluid:!0,style:{width:"25%",maxWidth:"150px"}})),C("h6",{style:{width:"100%",paddingBottom:"10px"},className:"jsx-1794121765 text-center"},"Forgot Password"),C(w.a,{noValidate:!0,onSubmit:t},console.log("fucking values fffffffffffffffff: ",n),C(w.a.Row,null,C(w.a.Group,{as:g.a,controlId:"validationMobile"},C(w.a.Label,{style:B.label},"Enter Your Mobile Number"),C(j.a,null,C(j.a.Prepend,null,C(O.a,{id:"eyeBtn",style:B.fontawesome_btn},C(N.a,{icon:_.v,style:B.fontawesome}))),C(w.a.Control,{type:"text",placeholder:"+966590911891","aria-describedby":"mobile",name:"mobile",value:n.mobile,onChange:a,isInvalid:r.mobile&&o.mobile}),C(w.a.Control.Feedback,{type:"invalid"},o.mobile)))),C(w.a.Row,null,C(w.a.Label,{className:"text-center",style:B.term_condition_label},C("span",{className:"jsx-1794121765"},C(p.a,{href:"login"}," Login ")),"or",C("span",{className:"jsx-1794121765"},C(p.a,{href:"signup"}," Signup ")))),C(w.a.Row,null,C(O.a,{type:"submit",onSubmit:t,block:!0,style:B.submit_btn},"Continue")),C(w.a.Row,null,C(w.a.Label,{className:"text-center",style:B.term_condition_label},"By continueing, you agree to Muhalik's",C("span",{className:"jsx-1794121765"},C(p.a,{href:"./help/terms-and-conditions"}," Terms & Conditions ")),"and",C("span",{className:"jsx-1794121765"},C(p.a,{href:"./help/privacy-statement"}," Privacy Statement ")))))),C(g.a,{lg:3,md:2,sm:1,xs:0,style:B.side_column}))),C(f.a,{id:"1794121765"},["span.jsx-1794121765{color:red;}","p.jsx-1794121765{text-align:center;margin:0px;}"]))}))}}]),a}(b.Component),B={body:{background:"".concat(k.a.body_color),position:"absolute",top:"0",left:"0",right:"0",bottom:"0"},buttons:{background:"".concat(k.a.primry_color),border:"none",fontSize:"10px"},submit_btn:{background:"".concat(k.a.primry_color)},center_column:{background:"white",padding:"20px 30px",margin:"3% 3%"},side_column:{margin:"0 3%"},label:{width:"100%",fontSize:"".concat(k.a.form_label_fontsize)},term_condition_label:{width:"100%",fontSize:"".concat(k.a.form_label_fontsize),padding:"10px"},fontawesome_btn:{background:"".concat(k.a.primry_color),border:"none"},fontawesome:{color:"".concat(k.a.primary_text_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=R},foSv:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},md7G:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}a.d(t,"a",(function(){return i}));var o=a("JX7q");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},vuIU:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))}},[["9ftB",0,1,4,2,3,5,6,7,8,10,12,15]]]);