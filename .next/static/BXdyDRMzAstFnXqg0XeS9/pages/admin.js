(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/0+H":function(e,t,a){"use strict";var n=a("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var r=o(a("q1tI")),i=a("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,r=e.hasQuery;return a||o&&(void 0!==r&&r)}t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(i.AmpStateContext))}},"/fka":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("6ctO"),i=a("QojX"),c=a("cWnB"),l=a("97+O"),s=a("pJDg"),d=a("vkTu"),u=a("IP2g"),m=a("wHSu"),f=o.a.createElement,p={background:{background:"".concat(d.a.primry_color)},brand:{color:"".concat(d.a.primary_text_color),fontSize:"medium"},form:{border:"2px solid ".concat(d.a.primry_color),width:"60%",borderRadius:"25px",padding:"0px 5px"},search_btn:{background:"".concat(d.a.admin_primry_color),border:"none"},search_fontawesome:{color:"".concat(d.a.body_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=function(){return f("div",null,f(r.a,{collapseOnSelect:!0,expand:"lg",style:p.background,variant:"dark"},f(r.a.Brand,{href:"/",className:"mr-auto",style:p.brand},"Muhalik"),f(i.a.Row,{style:{margin:"5px"}},f(i.a.Control,{style:{flex:"3"},type:"text",placeholder:"Search here","aria-describedby":"searchBtn",name:"searchBtn"}),f(c.a,{id:"searchBtn",style:p.search_btn},f(u.a,{icon:m.l,style:p.search_fontawesome}))),f(l.a,{as:s.a,alignRight:!0},f(l.a.Toggle,{size:"sm",split:!0,variant:"dark",id:"dropdown-split",style:{background:"none",border:"none"}}),f(l.a.Menu,null,f(l.a.Item,{href:"#/action-1"},"Acount"),f(l.a.Item,{href:"#/action-2"},"Feedback"),f(l.a.Item,{href:"#/action-3"},"Help?"),f(l.a.Divider,null),f(l.a.Item,{href:"#/action-3"},"Signout")))))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,a){"use strict";var n=a("ttDY"),o=a("hfKm"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=r(a("q1tI")),c=r(a("Xuae")),l=a("lwAK"),s=a("FYa8"),d=a("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var a=i.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(m,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new n,t=new n,a=new n,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var d=f[l];if(r.props.hasOwnProperty(d))if("charSet"===d)a.has(d)?i=!1:a.add(d);else{var u=r.props[d],m=o[d]||new n;m.has(u)?i=!1:(m.add(u),o[d]=m)}}}return i}}()).reverse().map((function(e,t){var a=e.key||t;return i.default.cloneElement(e,{key:a})}))}var y=c.default();function _(e){var t=e.children;return i.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(s.HeadManagerContext.Consumer,null,(function(a){return i.default.createElement(y,{reduceComponentsToState:p,handleStateChange:a,inAmpMode:d.isInAmpMode(e)},t)}))}))}_.rewind=y.rewind,t.default=_},CPHa:function(e,t,a){"use strict";var n=a("B4CS"),o=a("H8ru");e.exports=a("8vat")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(o(this,"Set"),e=0===e?0:e,e)}},n)},ELB5:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("8Kt/"),i=a.n(r),c=a("/fka"),l=a("zFog"),s=o.a.createElement;t.default=function(e){return s("div",null,s(i.a,null,s("title",null,"Muhalik"),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s("meta",{charSet:"utf-8"}),s("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),s(c.default,null),e.children,s(l.default,null))}},FYa8:function(e,t,a){"use strict";var n=a("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};n(t,"__esModule",{value:!0});var r=o(a("q1tI"));t.HeadManagerContext=r.createContext(null)},GDVm:function(e,t,a){a("ER9p")("Set")},Ho3L:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return a("IT5z")}])},IT5z:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),o=a("sLSF"),r=a("MI3g"),i=a("a7VT"),c=a("AT/M"),l=a("Tit0"),s=a("vYYK"),d=a("MX0m"),u=a.n(d),m=a("q1tI"),f=a.n(m),p=a("xv3N"),y=a("oV2t"),_=(a("ELB5"),a("vkTu")),h=f.a.createElement,v=function(e){return h("div",{className:"jsx-3404600223"},h("div",{onClick:e.click,className:"jsx-3404600223"}),h(u.a,{id:"3404600223"},[".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}"]))},b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l))),Object(s.a)(Object(c.a)(a),"state",{sideDrawerOpen:!1,fuck:!0}),Object(s.a)(Object(c.a)(a),"drawerToggleClickHandler",(function(){a.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))})),Object(s.a)(Object(c.a)(a),"fuckClickHandler",(function(){a.setState((function(e){return{fuck:!e.fuck}}))})),Object(s.a)(Object(c.a)(a),"backdropClickHandler",(function(){a.setState({sideDrawerOpen:!1})})),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=h(v,{click:this.backdropClickHandler})),h("div",{style:k.body},h(p.default,{show:this.state.fuck,drawerClickHandler:this.drawerToggleClickHandler,ClickHandler:this.fuckClickHandler}),h(y.default,{show:this.state.sideDrawerOpen,click:this.backdropClickHandler}),e)}}]),t}(m.Component),k={body:{background:"".concat(_.a.body_color),position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}};t.default=b},IrWQ:function(e,t,a){var n=a("0T/a");n(n.P+n.R,"Set",{toJSON:a("A0wl")("Set")})},OuPC:function(e,t,a){a("AS96")("Set")},PQJW:function(e,t,a){var n=a("d04V"),o=a("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},TbGu:function(e,t,a){var n=a("fGSI"),o=a("PQJW"),r=a("2PDY");e.exports=function(e){return n(e)||o(e)||r()}},"V/f9":function(e,t,a){a("k8Q4"),a("YQlv"),e.exports=a("p9MR").Array.from},Xuae:function(e,t,a){"use strict";var n=a("/HRN"),o=a("ZDA2"),r=a("/+P4"),i=a("K47E"),c=a("WaGi"),l=a("N9n2"),s=a("TbGu"),d=a("ttDY");a("hfKm")(t,"__esModule",{value:!0});var u=a("q1tI"),m=!1;t.default=function(){var e,t=new d;function a(a){e=a.props.reduceComponentsToState(s(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return function(s){function d(e){var c;return n(this,d),c=o(this,r(d).call(this,e)),m&&(t.add(i(c)),a(i(c))),c}return l(d,s),c(d,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),c(d,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),d}(u.Component)}},YQlv:function(e,t,a){"use strict";var n=a("vCXk"),o=a("0T/a"),r=a("AYVP"),i=a("nJOo"),c=a("widk"),l=a("pasi"),s=a("s+zB"),d=a("8Vlj");o(o.S+o.F*!a("Q2zc")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,o,u,m=r(e),f="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,_=void 0!==y,h=0,v=d(m);if(_&&(y=n(y,p>2?arguments[2]:void 0,2)),void 0==v||f==Array&&c(v))for(a=new f(t=l(m.length));t>h;h++)s(a,h,_?y(m[h],h):m[h]);else for(u=v.call(m),a=new f;!(o=u.next()).done;h++)s(a,h,_?i(u,y,[o.value,h],!0):o.value);return a.length=h,a}})},d04V:function(e,t,a){e.exports=a("V/f9")},fGSI:function(e,t,a){var n=a("p0XB");e.exports=function(e){if(n(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},lwAK:function(e,t,a){"use strict";var n=a("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};n(t,"__esModule",{value:!0});var r=o(a("q1tI"));t.AmpStateContext=r.createContext({})},oV2t:function(e,t,a){"use strict";a.r(t);var n=a("MX0m"),o=a.n(n),r=a("q1tI"),i=a.n(r),c=a("KD6P"),l=a("+YzT"),s=a("3Z9Z"),d=a("JI6e"),u=a("2mvg"),m=a("IP2g"),f=a("wHSu"),p=a("icUW"),y=a("ukOe"),_=a("D0YP"),h=(a("uVM9"),a("mf3m")),v=a("7WCM"),b=a("CQpV"),k=a("kplv"),w=a("7RBj"),x=a("vkTu"),g=i.a.createElement,C={image_div:{background:"white",marginRight:"1px",padding:"10% 2%"},image:{width:"100%"},muhalik:{color:"".concat(x.a.admin_primry_color),fontSize:"28px",fontWeight:"bold"},tab_link:{color:"#cccccc",fontSize:"14px",paddingTop:"8%",paddingBottom:"8%"},fontawesome:{color:"".concat(x.a.body_color),margin:"0px 8% 0px 5%",width:"17px",height:"17px",maxHeight:"17px",maxWidth:"17px"},forword_fontawesome:{color:"".concat(x.a.body_color),margin:"8px 5% 0px 0px",float:"right",width:"8px",height:"8px",maxHeight:"8px",maxWidth:"8px"}};t.default=function(e){var t="tabs_side_drawer";return e.show&&(t="tabs_side_drawer open"),g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])},g(c.a.Container,{id:"dashboard-tabs",defaultActiveKey:"one"},g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" "+(t||"")},g(l.a,{className:"flex-column",variant:"pills"},g(l.a.Item,null,g(s.a,{style:C.image_div},g(d.a,{sm:5,xs:5},g(u.a,{className:"text-center",src:"/public/a.png",fluid:!0,style:C.image})),g(d.a,{sm:5,xs:5},g(l.a.Link,{href:"/index",style:C.muhalik},"Muhalik")))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"zero",onClick:e.click,style:C.tab_link},g(m.a,{size:"xs",icon:f.m,style:C.fontawesome}),"Dashboard",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"one",onClick:e.click,style:C.tab_link},g(m.a,{size:"xs",icon:f.k,style:C.fontawesome}),"Vendors",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"two",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.q,style:C.fontawesome}),"Customers",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"four",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.g,style:C.fontawesome}),"Categories",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"five",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.r,style:C.fontawesome}),"Inventory",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"six",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.n,style:C.fontawesome}),"Discounts",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"seven",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.j,style:C.fontawesome}),"Commission",g(m.a,{icon:f.c,style:C.forword_fontawesome})))),g(l.a.Item,null,g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" hover"},g(l.a.Link,{eventKey:"eight",onClick:e.click,style:C.tab_link},g(m.a,{icon:f.b,style:C.fontawesome}),"Reports",g(m.a,{icon:f.c,style:C.forword_fontawesome})))))),g("div",{className:o.a.dynamic([["3248124927",[x.a.admin_primry_color,x.a.body_color]]])+" tabs_side_drawer_tab_content"},g(d.a,{sm:"auto",style:{padding:"0px"}},g(c.a.Content,null,g(c.a.Pane,{eventKey:"zero"},g(p.default,null)),g(c.a.Pane,{eventKey:"one"},g(y.default,null)),g(c.a.Pane,{eventKey:"two"},g(_.default,null)),g(c.a.Pane,{eventKey:"four"},g(h.default,null)),g(c.a.Pane,{eventKey:"five"},g(v.default,null)),g(c.a.Pane,{eventKey:"six"},g(b.default,null)),g(c.a.Pane,{eventKey:"seven"},g(k.default,null)),g(c.a.Pane,{eventKey:"eight"},g(w.default,null)))))),g(o.a,{id:"3248124927",dynamic:[x.a.admin_primry_color,x.a.body_color]},[".hover.__jsx-style-dynamic-selector:hover{background:#30313E;}",".tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:".concat(x.a.admin_primry_color,";box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}"),".tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}","p.__jsx-style-dynamic-selector{text-align:center;padding:5% 0px;border-bottom:1px solid gray;}","label.__jsx-style-dynamic-selector{margin-top:4%;color:".concat(x.a.body_color,";}"),"@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}"]))}},"s+zB":function(e,t,a){"use strict";var n=a("OtwA"),o=a("+EWW");e.exports=function(e,t,a){t in e?n.f(e,t,o(0,a)):e[t]=a}},ttDY:function(e,t,a){e.exports=a("vjmV")},vYYK:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("hfKm"),o=a.n(n);function r(e,t,a){return t in e?o()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},vjmV:function(e,t,a){a("Ev2V"),a("k8Q4"),a("tCzM"),a("CPHa"),a("IrWQ"),a("GDVm"),a("OuPC"),e.exports=a("p9MR").Set},zFog:function(e,t,a){"use strict";a.r(t);var n=a("MX0m"),o=a.n(n),r=a("q1tI"),i=a.n(r),c=a("vkTu"),l=i.a.createElement;t.default=function(){return l("div",{className:o.a.dynamic([["2300049164",[c.a.primry_color,c.a.primary_text_color]]])},l("div",{className:o.a.dynamic([["2300049164",[c.a.primry_color,c.a.primary_text_color]]])+" footer"},l("p",{className:o.a.dynamic([["2300049164",[c.a.primry_color,c.a.primary_text_color]]])+" fooeter_text text-center"},"Copyright@ 2020",l("span",{className:o.a.dynamic([["2300049164",[c.a.primry_color,c.a.primary_text_color]]])}," Muhalik "),"- Online Shopping Website")),l(o.a,{id:"2300049164",dynamic:[c.a.primry_color,c.a.primary_text_color]},[".footer.__jsx-style-dynamic-selector{background:".concat(c.a.primry_color,";position:absolute;left:0;bottom:0;right:0;}"),".fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:".concat(c.a.primary_text_color,";}"),"span.__jsx-style-dynamic-selector{font-weight:bold;}"]))}}},[["Ho3L",0,1,5,2,3,4,6,7,8,9,13,14,15]]]);