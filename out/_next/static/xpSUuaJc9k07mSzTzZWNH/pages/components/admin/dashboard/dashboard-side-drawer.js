(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"BO/t":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t,o,r,n){var l=o||"<<anonymous>>",c=n||t;if(null==e[t])return new Error("The "+r+" `"+c+"` is required to make `"+l+"` accessible for users of assistive technologies such as screen readers.");for(var i=arguments.length,s=Array(i>5?i-5:0),d=5;d<i;d++)s[d-5]=arguments[d];return a.apply(void 0,[e,t,o,r,n].concat(s))}},a.exports=e.default},F9IU:function(a,e,t){"use strict";var o=t("q1tI"),r=t.n(o).a.createContext(null);e.a=r},"Jz+W":function(a,e,t){"use strict";var o=t("wx14"),r=t("zLVn"),n=t("q1tI"),l=t.n(n),c=(t("BO/t"),t("JCAc")),i=t("+YzT"),s=t("iKII"),d=t("Mj5q"),m=t("gpSn"),y=t("bxoZ"),u=t("Cz4+");function _(a,e){var t=0;return l.a.Children.map(a,(function(a){return l.a.isValidElement(a)?e(a,t++):a}))}function f(a){var e;return function(a,e){var t=0;l.a.Children.forEach(a,(function(a){l.a.isValidElement(a)&&e(a,t++)}))}(a,(function(a){null==e&&(e=a.props.eventKey)})),e}function p(a){var e=a.props,t=e.title,o=e.eventKey,r=e.disabled,n=e.tabClassName,c=e.id;return null==t?null:l.a.createElement(d.a,{as:s.a,eventKey:o,disabled:r,id:c,className:n},t)}var x=l.a.forwardRef((function(a,e){var t=Object(c.a)(a,{activeKey:"onSelect"}),n=t.id,s=t.onSelect,d=t.transition,x=t.mountOnEnter,b=t.unmountOnExit,v=t.children,h=t.activeKey,g=void 0===h?f(v):h,w=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return(l.a.createElement(m.a,{ref:e,id:n,activeKey:g,onSelect:s,transition:d,mountOnEnter:x,unmountOnExit:b},l.a.createElement(i.a,Object(o.a)({},w,{role:"tablist",as:"nav"}),_(v,p)),l.a.createElement(y.a,null,_(v,(function(a){var e=Object(o.a)({},a.props);return delete e.title,delete e.disabled,delete e.tabClassName,l.a.createElement(u.a,e)})))))}));x.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},x.displayName="Tabs";e.a=x},NVrM:function(a,e,t){"use strict";t.r(e);var o=t("1OyB"),r=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),i=t("MX0m"),s=t.n(i),d=t("q1tI"),m=t.n(d),y=(t("vcXL"),t("3Z9Z")),u=t("JI6e"),_=t("6xyR"),f=t("MBJH"),p=t("QojX"),x=t("+YzT"),b=t("IP2g"),v=t("wHSu"),h=t("twK/"),g=t("bWZ2"),w=t("qTQu"),k=t("/JS1"),N=m.a.createElement;function j(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,o=Object(c.a)(a);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(l.a)(this,t)}}var z=function(a){Object(n.a)(t,a);var e=j(t);function t(a){var r;return Object(o.a)(this,t),(r=e.call(this,a)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){return N("div",{className:"jsx-3124640742"},N(w.default,{icon:v.O,title:" Admin Dashboard / Vendors"}),N(y.a,{style:T.row},N(u.a,{lg:3,md:3,sm:12,xs:12,style:T.col},N("div",{className:"jsx-3124640742 hover"},N(_.a,{style:{background:"lightgreen"}},N(_.a.Header,{style:T.card_header},"Vendors"),N(_.a.Body,null,N(y.a,null,N(u.a,null,N(_.a.Text,{style:T.card_text},"1234")),N(u.a,null,N(_.a.Text,{style:T.card_text},N(b.a,{icon:v.O,style:T.fontawesome})))))))),N(u.a,{lg:3,md:3,sm:12,xs:12,style:T.col},N("div",{className:"jsx-3124640742 hover"},N(_.a,{style:{background:"lightblue"}},N(_.a.Header,{style:T.card_header},"New Vendors"),N(_.a.Body,null,N(y.a,null,N(u.a,null,N(_.a.Text,{style:T.card_text},"1234")),N(u.a,null,N(_.a.Text,{style:T.card_text},N(b.a,{icon:v.N,style:T.fontawesome})))))))),N(u.a,{lg:3,md:3,sm:12,xs:12,style:T.col},N("div",{className:"jsx-3124640742 hover"},N(_.a,{style:{background:"orange"}},N(_.a.Header,{style:T.card_header}," Top Vendors "),N(_.a.Body,null,N(y.a,null,N(u.a,null,N(_.a.Text,{style:T.card_text},"1234")),N(u.a,null,N(_.a.Text,{style:T.card_text},N(b.a,{icon:h.b,style:T.fontawesome})))))))),N(u.a,{lg:3,md:3,sm:12,xs:12,style:T.col},N("div",{className:"jsx-3124640742 hover"},N(_.a,{style:{background:"pink"}},N(_.a.Header,{style:T.card_header}," Admin Vendors "),N(_.a.Body,null,N(y.a,null,N(u.a,null,N(_.a.Text,{style:T.card_text},"5678")),N(u.a,null,N(_.a.Text,{style:T.card_text},N(b.a,{icon:v.O,style:T.fontawesome}))))))))),N(O,{header:"All Vendors",rank:!0}),N(O,{header:"New Vendors",rank:!1}),N(O,{header:"Top Vendors",rank:!0}),N(O,{header:"Admin Vendors",rank:!0}),N(s.a,{id:"3124640742"},[".hover.jsx-3124640742{margin:5px 15px;}",".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]))}}]),t}(m.a.Component);function O(a){return N(m.a.Fragment,null,N(k.default,{title:a.header},N(f.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},N("thead",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},N("tr",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},N(p.a.Check,{type:"checkbox"})),N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"ID"),N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Name"),N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Name"),N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Location"),a.rank?N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Rank"):null,N("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Date"))),N("tbody",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},N(p.a.Check,{type:"checkbox"})),N("td",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])+" td"},"ID",N("div",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])+" mr-auto"}),N(x.a.Link,{style:T.nav_link}," View "),N(x.a.Link,{style:T.nav_link},"Edit"),N(x.a.Link,{style:T.nav_link},"Delete")),N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Name"),N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Name"),N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Location"),a.rank?N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Rank"):null,N("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},Date.now())))),N(s.a,{id:"2838257374",dynamic:[g.a.form_label_fontsize,g.a.form_label_fontsize]},["th.__jsx-style-dynamic-selector{text-align:center;font-size:14px;}",".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:".concat(g.a.form_label_fontsize,";}"),"td.__jsx-style-dynamic-selector{font-size:".concat(g.a.form_label_fontsize,";}")]))}var T={row:{margin:"2%",padding:"0px"},nav_link:{paddingTop:"0px",paddingBottom:"0px",paddingLeft:"10px",paddingRight:"5px"},col:{padding:"0px",margin:"0px"},card:{width:"100%",marginBottom:"2%",border:"1px solid lightgray"},card_header:{fontSize:"".concat(g.a.card_header_fontsize),border:"none"},table_card_header:{fontSize:"".concat(g.a.card_header_fontsize),background:"".concat(g.a.card_header_background),border:"none"},card_text:{color:"".concat(g.a.admin_primry_color),fontSize:"20px"},label:{fontSize:"".concat(g.a.form_label_fontsize)},fontawesome:{color:"".concat(g.a.admin_primry_color),width:"30px",height:"30px",maxHeight:"30px",maxWidth:"30px",float:"right"},accordin_fontawesome:{color:"".concat(g.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};e.default=z},Oi2e:function(a,e,t){"use strict";t.r(e);var o=t("1OyB"),r=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),i=t("MX0m"),s=t.n(i),d=t("q1tI"),m=t.n(d),y=(t("vcXL"),t("3Z9Z")),u=t("JI6e"),_=t("6xyR"),f=t("IP2g"),p=t("wHSu"),x=t("twK/"),b=t("bWZ2"),v=m.a.createElement;function h(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,o=Object(c.a)(a);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(l.a)(this,t)}}var g=function(a){Object(n.a)(t,a);var e=h(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return v("div",{className:"jsx-3124640742"},v(y.a,{style:w.row},v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header},"Customers"),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.O,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header},"New Customers"),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.N,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header}," Top Customers "),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:x.b,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header}," Header "),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.O,style:w.fontawesome}))))))))),v(s.a,{id:"3124640742"},[".hover.jsx-3124640742{margin:5px 15px;}",".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]))}}]),t}(m.a.Component),w={row:{margin:"2%",padding:"0px"},col:{padding:"0px",margin:"0px"},card:{background:"white",borderRadius:"0px",padding:"0px"},card_header:{background:"white",color:"gray",border:"none"},card_text:{color:"#6A7074",fontSize:"30px"},fontawesome:{color:"".concat(b.a.primry_color),width:"50px",height:"50px",maxHeight:"50px",maxWidth:"50px",float:"right"}};e.default=g},Vmlb:function(a,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t.n(o).a.createElement;e.default=function(){return r("div",null,r("p",null,"This is Commision page"))}},YGJp:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var o=t("q1tI");function r(){return Object(o.useReducer)((function(a){return!a}),!1)[1]}},ZQzV:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-side-drawer",function(){return t("etNe")}])},ZZvJ:function(a,e,t){"use strict";t.r(e);var o=t("1OyB"),r=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),i=t("MX0m"),s=t.n(i),d=t("q1tI"),m=t.n(d),y=(t("vcXL"),t("3Z9Z")),u=t("JI6e"),_=t("6xyR"),f=t("IP2g"),p=t("wHSu"),x=t("twK/"),b=t("bWZ2"),v=t("qTQu"),h=m.a.createElement;function g(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,o=Object(c.a)(a);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(l.a)(this,t)}}var w=function(a){Object(n.a)(t,a);var e=g(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return h("div",{className:"jsx-3124640742"},h(v.default,{icon:p.E,title:" Admin Dashboard"}),h(y.a,{style:k.row},h(u.a,{lg:3,md:3,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header},"Vendoors"),h(_.a.Body,null,h(y.a,null,h(u.a,null,h(_.a.Text,{style:k.card_text},"1234")),h(u.a,null,h(_.a.Text,{style:k.card_text},h(f.a,{icon:p.O,style:k.fontawesome})))))))),h(u.a,{lg:3,md:3,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header},"Customers"),h(_.a.Body,null,h(y.a,null,h(u.a,null,h(_.a.Text,{style:k.card_text},"1234")),h(u.a,null,h(_.a.Text,{style:k.card_text},h(f.a,{icon:p.N,style:k.fontawesome})))))))),h(u.a,{lg:3,md:3,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header}," Product Sold "),h(_.a.Body,null,h(y.a,null,h(u.a,null,h(_.a.Text,{style:k.card_text},"1234")),h(u.a,null,h(_.a.Text,{style:k.card_text},h(f.a,{icon:x.b,style:k.fontawesome})))))))),h(u.a,{lg:3,md:3,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header}," Oredrs "),h(_.a.Body,null,h(y.a,null,h(u.a,null,h(_.a.Text,{style:k.card_text},"5678")),h(u.a,null,h(_.a.Text,{style:k.card_text},h(f.a,{icon:p.O,style:k.fontawesome}))))))))),h(y.a,{style:k.row},h(u.a,{lg:6,md:6,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header},"Vendors"),h(_.a.Body,null)))),h(u.a,{lg:6,md:6,sm:12,xs:12,style:k.col},h("div",{className:"jsx-3124640742 hover"},h(_.a,{style:k.card},h(_.a.Header,{style:k.card_header},"Customers"),h(_.a.Body,null))))),h(s.a,{id:"3124640742"},[".hover.jsx-3124640742{margin:5px 15px;}",".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]))}}]),t}(m.a.Component),k={row:{margin:"2%",padding:"0px"},col:{padding:"0px",margin:"0px"},card:{background:"white",borderRadius:"0px",padding:"0px"},card_header:{background:"white",color:"gray",border:"none"},card_text:{color:"#6A7074",fontSize:"30px"},fontawesome:{color:"".concat(b.a.primry_color),width:"50px",height:"50px",maxHeight:"50px",maxWidth:"50px",float:"right"}};e.default=w},cdSL:function(a,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t.n(o),n=t("Jz+W"),l=t("KD6P"),c=r.a.createElement;e.default=function(){return c("div",{style:{width:"100%",background:"yellow"}},c(n.a,{defaultActiveKey:"daily",transition:!1,id:"reports_tab",style:{padding:"0px",margin:"0px",width:"100%"}},c(l.a,{eventKey:"daily",title:"Daily Reports"},c("p",null,"Daily Reports")),c(l.a,{eventKey:"weekly",title:"Weekly Reports"},c("p",null,"Weekly Reports")),c(l.a,{eventKey:"monthly",title:"Monthly Reports"},c("p",null,"Monthly Reports")),c(l.a,{eventKey:"yearly",title:"Yearly Reports"},c("p",null,"Yearly Reports")),c(l.a,{eventKey:"overall",title:"Overall Reports"},c("p",null,"Overall Reports"))))}},etNe:function(a,e,t){"use strict";t.r(e);var o=t("o0o1"),r=t.n(o),n=t("ODXe"),l=t("MX0m"),c=t.n(l),i=t("q1tI"),s=t.n(i),d=t("KD6P"),m=t("+YzT"),y=t("2mvg"),u=t("JI6e"),_=t("IP2g"),f=t("wHSu"),p=t("8tEE"),x=t("ZZvJ"),b=t("NVrM"),v=t("Oi2e"),h=t("WGuO"),g=t("tz4B"),w=t("G7yv"),k=t("QdS8"),N=t("yXNp"),j=t("y0T3"),z=t("fxnw"),O=t("Vmlb"),T=t("cdSL"),C=t("bWZ2"),P=t("vDqi"),R=t.n(P),I=t("vvUq"),S=t("VbX6"),K=s.a.createElement,H={image_div:{background:"white",width:"100%",borderRight:"0.5px solid gray",padding:"2%"},image:{width:"80px"},muhalik:{color:"".concat(C.a.admin_primry_color),fontSize:"16px",border:"none",cursor:"pointer",background:"none",padding:"0px",margin:"0px"},nav_link:{color:"white",fontSize:"13px",display:"flex",alignItems:"center",height:"45px"},product_submenu_link:{color:"white",fontSize:"11px",display:"flex",alignItems:"center",height:"40px"},fontawesome:{color:"".concat(C.a.body_color),marginRight:"8%",width:"17px",height:"17px",maxHeight:"17px",maxWidth:"17px"},forword_fontawesome:{color:"".concat(C.a.body_color),float:"right",width:"8px",height:"8px",maxHeight:"8px",maxWidth:"8px"}};e.default=function(a){var e="tabs_side_drawer";a.show&&(e="tabs_side_drawer open");var t=s.a.useState(!1),o=Object(n.a)(t,2),l=o[0],i=o[1];return K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])},K(d.a.Container,{id:"dashboard-tabs",defaultActiveKey:"Dashboard"},K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" "+(e||"")},K(m.a,{className:"flex-column",variant:"pills"},K(m.a.Item,{style:H.image_div},K("p",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])},K(y.a,{src:"muhalik.jpg",roundedCircle:!0,thumbnail:!0,fluid:!0,style:H.image}),K(m.a.Link,{href:"/index",style:H.muhalik}," ",a.token," "))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Dashboard",onClick:a.click,style:H.nav_link},K(_.a,{size:"xs",icon:f.E,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Dashboard"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Vendors",onClick:a.click,style:H.nav_link},K(_.a,{size:"xs",icon:f.x,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Vendors"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Customers",onClick:a.click,style:H.nav_link},K(_.a,{icon:f.O,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Customers"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{style:H.nav_link,onClick:function(){return i(!l)}},K(_.a,{size:"xs",icon:p.a,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," Products "),K(_.a,{icon:l?f.h:f.e,style:H.forword_fontawesome})))),l?K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])},K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" product_submenu"},K(m.a.Link,{eventKey:"AllProducts",onClick:a.click,style:H.product_submenu_link},K(_.a,{size:"xs",icon:p.a,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," All Products "),K(_.a,{icon:f.g,style:H.forword_fontawesome}))),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" product_submenu"},K(m.a.Link,{eventKey:"AddProduct",onClick:a.click,style:H.product_submenu_link},K(_.a,{size:"xs",icon:f.z,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," Add Product"),K(_.a,{icon:f.g,style:H.forword_fontawesome}))),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" product_submenu"},K(m.a.Link,{eventKey:"ProducCategories",onClick:a.click,style:H.product_submenu_link},K(_.a,{size:"xs",icon:f.s,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," Product Categories "),K(_.a,{icon:f.g,style:H.forword_fontawesome}))),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" product_submenu"},K(m.a.Link,{eventKey:"ProductTags",onClick:a.click,style:H.product_submenu_link},K(_.a,{size:"xs",icon:f.F,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," Product Tags "),K(_.a,{icon:f.g,style:H.forword_fontawesome}))),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" product_submenu"},K(m.a.Link,{eventKey:"ProductFields",onClick:a.click,style:H.product_submenu_link},K(_.a,{size:"xs",icon:p.a,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"}," Product Fields "),K(_.a,{icon:f.g,style:H.forword_fontawesome})))):null,K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Inventory",onClick:a.click,style:H.nav_link},K(_.a,{icon:f.P,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Inventory"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Discounts",onClick:a.click,style:H.nav_link},K(_.a,{icon:f.F,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Discounts"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Commission",onClick:a.click,style:H.nav_link},K(_.a,{icon:f.w,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Commission"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{eventKey:"Reports",onClick:a.click,style:H.nav_link},K(_.a,{icon:f.c,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Reports"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))),K(m.a.Item,null,K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" nav_link"},K(m.a.Link,{onClick:(a.click,a.logoutClickHandler),style:H.nav_link},K(_.a,{icon:f.c,style:H.fontawesome}),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" mr-auto"},"Logout"),K(_.a,{icon:f.g,style:H.forword_fontawesome})))))),K("div",{className:c.a.dynamic([["3017863662",[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]]])+" tabs_side_drawer_tab_content"},K(u.a,{sm:"auto",style:{padding:"0px"}},K(d.a.Content,null,K(d.a.Pane,{eventKey:"Dashboard"},K(x.default,null)),K(d.a.Pane,{eventKey:"Vendors"},K(b.default,null)),K(d.a.Pane,{eventKey:"Customers"},K(v.default,null)),K(d.a.Pane,{eventKey:"AllProducts"},K(h.default,null)),K(d.a.Pane,{eventKey:"AddProduct"},K(g.default,{upload:function(a){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("da111222333ta: ",a),e=S.a.PATH+"/api/products/add",t.t0=r.a,t.t1=R.a,t.t2=e,t.t3={data:a},t.next=8,r.a.awrap(Object(I.c)());case 8:return t.t4=t.sent,t.t5={authorization:t.t4},t.t6={headers:t.t5},t.t7=t.t1.post.call(t.t1,t.t2,t.t3,t.t6).then((function(a){return!0})).catch((function(a){return!1})),t.next=14,t.t0.awrap.call(t.t0,t.t7);case 14:case"end":return t.stop()}}),null,null,null,Promise)},isUpdateProduct:!1,productCategories:"",productSubCategories:"",productSubSubCategories:"",subCategoryDisabled:!0,subSubCategoryDisabled:!0,productTags:[],warrantyType:"",simple_product_image_link:[],variationsArray:[],dangerousGoodsArray:[]})),K(d.a.Pane,{eventKey:"ProducCategories"},K(w.default,null)),K(d.a.Pane,{eventKey:"ProductTags"},K(k.default,null)),K(d.a.Pane,{eventKey:"ProductFields"},K(N.default,null)),K(d.a.Pane,{eventKey:"Inventory"},K(j.default,null)),K(d.a.Pane,{eventKey:"Discounts"},K(z.default,null)),K(d.a.Pane,{eventKey:"Commision"},K(O.default,null)),K(d.a.Pane,{eventKey:"Reports"},K(T.default,null)))))),K(c.a,{id:"3017863662",dynamic:[C.a.body_color,C.a.admin_primry_color,C.a.admin_primry_color,C.a.body_color]},[".nav_link.__jsx-style-dynamic-selector{color:".concat(C.a.body_color,";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}"),".nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}",".tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:".concat(C.a.admin_primry_color,";box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;overflow-y:auto;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}"),".tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}",".product_submenu.__jsx-style-dynamic-selector{background:".concat(C.a.admin_primry_color,";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}"),"p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}","label.__jsx-style-dynamic-selector{margin-top:4%;color:".concat(C.a.body_color,";}"),"@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}"]))}},fxnw:function(a,e,t){"use strict";t.r(e);var o=t("1OyB"),r=t("vuIU"),n=t("JX7q"),l=t("Ji7U"),c=t("md7G"),i=t("foSv"),s=t("rePB"),d=t("q1tI"),m=t.n(d).a.createElement;function y(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,o=Object(i.a)(a);if(e){var r=Object(i.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(c.a)(this,t)}}var u=function(a){Object(l.a)(t,a);var e=y(t);function t(){var a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return a=e.call.apply(e,[this].concat(l)),Object(s.a)(Object(n.a)(a),"state",{}),a}return Object(r.a)(t,[{key:"render",value:function(){return m("p",null,"cvbnm")}}]),t}(d.Component);e.default=u},lcWJ:function(a,e,t){"use strict";var o=t("q1tI"),r=function(a){return a&&"function"!==typeof a?function(e){a.current=e}:a};e.a=function(a,e){return Object(o.useMemo)((function(){return function(a,e){var t=r(a),o=r(e);return function(a){t&&t(a),o&&o(a)}}(a,e)}),[a,e])}},vcXL:function(a,e,t){"use strict";var o=self.fetch.bind(self);a.exports=o,a.exports.default=a.exports},y0T3:function(a,e,t){"use strict";t.r(e);var o=t("1OyB"),r=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),i=t("MX0m"),s=t.n(i),d=t("q1tI"),m=t.n(d),y=(t("vcXL"),t("3Z9Z")),u=t("JI6e"),_=t("6xyR"),f=t("IP2g"),p=t("wHSu"),x=t("twK/"),b=t("bWZ2"),v=m.a.createElement;function h(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,o=Object(c.a)(a);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(l.a)(this,t)}}var g=function(a){Object(n.a)(t,a);var e=h(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return v("div",{className:"jsx-3124640742"},v(y.a,{style:w.row},v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header},"Product In Stock"),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.O,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header},"Product Sold"),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.N,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header}," Product Categories "),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:x.b,style:w.fontawesome})))))))),v(u.a,{lg:3,md:3,sm:12,xs:12,style:w.col},v("div",{className:"jsx-3124640742 hover"},v(_.a,{style:w.card},v(_.a.Header,{style:w.card_header}," Header "),v(_.a.Body,null,v(y.a,null,v(u.a,null,v(_.a.Text,{style:w.card_text},"1234")),v(u.a,null,v(_.a.Text,{style:w.card_text},v(f.a,{icon:p.O,style:w.fontawesome}))))))))),v(s.a,{id:"3124640742"},[".hover.jsx-3124640742{margin:5px 15px;}",".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]))}}]),t}(m.a.Component),w={row:{margin:"2%",padding:"0px"},col:{padding:"0px",margin:"0px"},card:{background:"white",borderRadius:"0px",padding:"0px"},card_header:{background:"white",color:"gray",border:"none"},card_text:{color:"#6A7074",fontSize:"30px"},fontawesome:{color:"".concat(b.a.primry_color),width:"50px",height:"50px",maxHeight:"50px",maxWidth:"50px",float:"right"}};e.default=g}},[["ZQzV",0,1,4,17,2,3,5,6,7,8,9,10,11,12,13,16,18,19,20,27,24,28,23]]]);