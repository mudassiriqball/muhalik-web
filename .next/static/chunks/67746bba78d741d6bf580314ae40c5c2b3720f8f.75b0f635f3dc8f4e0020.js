(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/0+H":function(t,e,a){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("q1tI")),i=a("lwAK");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,a=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,i=t.hasQuery;return a||r&&(void 0!==i&&i)}e.isInAmpMode=n,e.useAmp=function(){return n(r.default.useContext(i.AmpStateContext))}},"1cNw":function(t,e,a){"use strict";var o=a("q1tI"),r=a.n(o),i=(a("8Kt/"),a("X0yb")),n=a("po6/"),l=r.a.createElement;e.a=function(t){return l(r.a.Fragment,null,l(i.default,{token:t.token,logout:t.logoutClickHandler}),t.children,l(n.default,null))}},"8Kt/":function(t,e,a){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("q1tI")),i=o(a("Xuae")),n=a("lwAK"),l=a("FYa8"),c=a("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function _(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var m=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var a=r.default.Children.toArray(e.props.children);return t.concat(a)}),[]).reduce(_,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,a=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var n=r.key.slice(r.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var s=m[l];if(r.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?i=!1:a.add(s);else{var _=r.props[s],f=o[s]||new Set;f.has(_)?i=!1:(f.add(_),o[s]=f)}}}return i}}()).reverse().map((function(t,e){var a=t.key||e;return r.default.cloneElement(t,{key:a})}))}var d=i.default();function p(t){var e=t.children;return r.default.createElement(n.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(a){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:a,inAmpMode:c.isInAmpMode(t)},e)}))}))}p.rewind=d.rewind,e.default=p},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,a){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("q1tI"));e.HeadManagerContext=r.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}},RIqP:function(t,e,a){var o=a("Ijbi"),r=a("EbDI"),i=a("Bnag");t.exports=function(t){return o(t)||r(t)||i()}},Xuae:function(t,e,a){"use strict";var o=a("lwsE"),r=a("PJYZ"),i=a("W8MJ"),n=a("7W2i"),l=a("a1gu"),c=a("Nsbk"),s=a("RIqP");function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=c(t);if(e){var r=c(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return l(this,a)}}Object.defineProperty(e,"__esModule",{value:!0});var m=a("q1tI"),f=!1;e.default=function(){var t,e=new Set;function a(a){t=a.props.reduceComponentsToState(s(e),a.props),a.props.handleStateChange&&a.props.handleStateChange(t)}return(function(l){n(s,l);var c=_(s);function s(t){var i;return o(this,s),i=c.call(this,t),f&&(e.add(r(i)),a(r(i))),i}return i(s,null,[{key:"rewind",value:function(){var a=t;return t=void 0,e.clear(),a}}]),i(s,[{key:"componentDidMount",value:function(){e.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),a(this)}},{key:"render",value:function(){return null}}]),s}(m.Component))}},lwAK:function(t,e,a){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("q1tI"));e.AmpStateContext=r.createContext({})},"po6/":function(t,e,a){"use strict";a.r(e);var o=a("MX0m"),r=a.n(o),i=a("q1tI"),n=a.n(i),l=a("bWZ2"),c=a("6xyR"),s=a("3Z9Z"),_=a("IP2g"),m=a("8tEE"),f=n.a.createElement,d={footer:{background:"".concat(l.a.admin_primry_color),padding:"2% 5%"},card:{margin:"0% 5%"},fb_fontawesome:{marginRight:"6%",color:"#3B579D",width:"40px",height:"40px",maxHeight:"40px",maxWidth:"40px"},instagram_fontawesome:{marginRight:"6%",color:"#C9308A",width:"40px",height:"40px",maxHeight:"40px",maxWidth:"40px"},twitter_fontawesome:{marginRight:"6%",color:"#5EAADE",width:"40px",height:"40px",maxHeight:"40px",maxWidth:"40px"},whatsapp_fontawesome:{marginRight:"6%",color:"#4DC759",width:"40px",height:"40px",maxHeight:"40px",maxWidth:"40px"},snapchat_fontawesome:{marginRight:"6%",color:"#e6e600",width:"44px",height:"44px",maxHeight:"44px",maxWidth:"44px"},visa_fontawesome:{marginRight:"6%",color:"#202276",width:"45px",height:"45px",maxHeight:"45px",maxWidth:"45px"},master_card_fontawesome:{marginRight:"6%",color:"#FF5F01",width:"45px",height:"45px",maxHeight:"45px",maxWidth:"45px"},paypal_fontawesome:{marginRight:"6%",color:"#059CDE",width:"45px",height:"45px",maxHeight:"45px",maxWidth:"45px"}};e.default=function(){return f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])},f("div",{style:d.footer,className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])},f("p",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" text-center"},"Copyright@ 2020",f("span",{style:{fontSize:"medium",fontWeight:"bold"},className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])}," Muhalik "),"- Online Shopping Website"),f(c.a,{style:d.card},f(c.a.Body,null,f(s.a,null,f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto"}),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" flex_row"},f("div",{style:{marginBottom:"2%"},className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])},"Follow Muhalik"),f(_.a,{icon:m.d,onClick:function(){window.open("https://www.facebook.com/MUHALIK2020 ","_blank")},style:d.fb_fontawesome}),f(_.a,{icon:m.e,onClick:function(){window.open("https://instagram.com/muhalik2020?igshid=sno76rv9kp60 ","_blank")},style:d.instagram_fontawesome}),f(_.a,{icon:m.h,onClick:function(){window.open("https://twitter.com/muhalik2020?s=09 ","_blank")},style:d.twitter_fontawesome}),f(_.a,{icon:m.i,onClick:function(){window.open("https://www.snapchat.com/add/muhalik2020","_blank")},style:d.whatsapp_fontawesome}),f(_.a,{icon:m.g,onClick:function(){window.open("https://www.snapchat.com/add/muhalik2020","_blank")},style:d.snapchat_fontawesome})),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto width"}),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" flex_row"},f("div",{style:{marginBottom:"1.5%"},className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])},"Payment Methods"),f(_.a,{icon:m.c,style:d.visa_fontawesome}),f(_.a,{icon:m.a,style:d.master_card_fontawesome}),f(_.a,{icon:m.b,style:d.paypal_fontawesome})),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto"})))),f(s.a,{noGutters:!0,style:{padding:"4% 6%"}},f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto"},f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_header"},"Services"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Need Help?"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Contact Us"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Submit Issue")),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto"},f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_header"},"About Us"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Know More About Us"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Muhalik's Team")),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" mr-auto"},f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_header"},"Terms & Conditions"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Terms"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Conditions"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Rules & Regulations")),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])},f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_header"},"Sell With Us"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Be Muhalik's Part"),f("div",{className:r.a.dynamic([["2636053538",[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]]])+" list_text"},"Learn More")))),f(r.a,{id:"2636053538",dynamic:[l.a.primary_text_color,l.a.primary_text_color,l.a.form_label_fontsize,l.a.form_label_fontsize]},[".list_header.__jsx-style-dynamic-selector{background:none;font-weight:bold;white-space:nowrap;color:".concat(l.a.primary_text_color,";font-size:18px;margin-bottom:8%;}"),".list_text.__jsx-style-dynamic-selector{background:none;color:".concat(l.a.primary_text_color,";font-size:").concat(l.a.form_label_fontsize,";margin:3% 0%;white-space:nowrap;}"),"p.__jsx-style-dynamic-selector{color:white;font-size:".concat(l.a.form_label_fontsize,";}"),".flex_row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;f lex-direction:row;}","@media (max-width:768px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}"]))}}}]);