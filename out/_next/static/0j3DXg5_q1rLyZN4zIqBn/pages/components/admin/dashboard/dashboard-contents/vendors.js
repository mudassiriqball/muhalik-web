(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+YzT":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),l=(a("K9S6"),a("q1tI")),c=a.n(l),s=a("JCAc"),d=a("vUet"),f=a("qUpC"),u=a("Wzyw"),m=a("Zeqi"),b=a("YGJp"),v=a("lcWJ"),y=a("F9IU"),p=a("ILyh"),h=a("Qdst"),x=function(){},_=c.a.forwardRef((function(e,t){var a,o,i=e.as,s=void 0===i?"ul":i,d=e.onSelect,f=e.activeKey,u=e.role,_=e.onKeyDown,g=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),j=Object(b.a)(),w=Object(l.useRef)(!1),z=Object(l.useContext)(p.a),N=Object(l.useContext)(h.a);N&&(u=u||"tablist",f=N.activeKey,a=N.getControlledId,o=N.getControllerId);var O=Object(l.useRef)(null),E=function(e){if(!O.current)return null;var t=Object(m.a)(O.current,"[data-rb-event-key]:not(.disabled)"),a=O.current.querySelector(".active"),n=t.indexOf(a);if(-1===n)return null;var r=n+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},k=function(e,t){null!=e&&(d&&d(e,t),z&&z(e,t))};Object(l.useEffect)((function(){if(O.current&&w.current){var e=O.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var I=Object(v.a)(t,O);return(c.a.createElement(p.a.Provider,{value:k},c.a.createElement(y.a.Provider,{value:{role:u,activeKey:Object(p.b)(f),getControlledId:a||x,getControllerId:o||x}},c.a.createElement(s,Object(n.a)({},g,{onKeyDown:function(e){var t;switch(_&&_(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),w.current=!0,j())},ref:I,role:u})))))})),g=a("Mj5q"),j=a("iKII"),w=c.a.forwardRef((function(e,t){var a,o,m,b=Object(s.a)(e,{activeKey:"onSelect"}),v=b.as,y=void 0===v?"div":v,p=b.bsPrefix,h=b.variant,x=b.fill,g=b.justify,j=b.navbar,w=b.className,z=b.children,N=b.activeKey,O=Object(r.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);p=Object(d.b)(p,"nav");var E=Object(l.useContext)(f.a),k=Object(l.useContext)(u.a);return E?(o=E.bsPrefix,j=null==j||j):k&&(m=k.cardHeaderBsPrefix),c.a.createElement(_,Object(n.a)({as:y,ref:t,activeKey:N,className:i()(w,(a={},a[p]=!j,a[o+"-nav"]=j,a[m+"-"+h]=!!m,a[p+"-"+h]=!!h,a[p+"-fill"]=x,a[p+"-justified"]=g,a))},O),z)}));w.displayName="Nav",w.defaultProps={justify:!1,fill:!1},w.Item=g.a,w.Link=j.a;t.a=w},"/JS1":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("DZHF"),i=a("3Z9Z"),l=a("6xyR"),c=a("QojX"),s=a("cWnB"),d=a("wx14"),f=a("zLVn"),u=a("TSYQ"),m=a.n(u),b=a("vUet"),v=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,o=e.pill,i=e.className,l=e.as,c=void 0===l?"span":l,s=Object(f.a)(e,["bsPrefix","variant","pill","className","as"]),u=Object(b.b)(a,"badge");return r.a.createElement(c,Object(d.a)({ref:t},s,{className:m()(i,u,o&&u+"-pill",n&&u+"-"+n)}))}));v.displayName="Badge",v.defaultProps={pill:!1};var y=v,p=a("bWZ2"),h=a("IP2g"),x=a("wHSu"),_=r.a.createElement,g={card:{width:"100%",border:"1px solid lightgray"},card_header:{display:"flex",alignItems:"center",fontSize:"".concat(p.a.card_header_fontsize),background:"".concat(p.a.card_header_background)},slider_fontawesome:{color:"".concat(p.a.admin_primry_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=function(e){return _(r.a.Fragment,null,_(o.a,{as:i.a,defaultActiveKey:"0",style:{margin:"2%"},noGutters:!0},_(l.a,{style:g.card},_(l.a.Header,{style:g.card_header},_(c.a.Label,{className:"p-0 ml-0 mt-0 mb-0 mr-2"},e.title),e.notification?_(s.a,{size:"sm",variant:"primary",style:{fontSize:"12px"}},"New ",_(y,{variant:"light",style:{fontSize:"12px"}},e.badge)):null,_("div",{className:"mr-auto"}),_(o.a.Toggle,{eventKey:"0",style:{background:"none"}},_(h.a,{size:"xs",icon:x.B,style:g.slider_fontawesome}))),_(o.a.Collapse,{eventKey:"0"},_(l.a.Body,null,e.children)))))}},DZHF:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),l=a("q1tI"),c=a.n(l),s=a("JCAc"),d=a("vUet"),f=a("ILyh"),u=c.a.createContext(null);var m=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"button":a,i=e.children,s=e.eventKey,d=e.onClick,m=Object(r.a)(e,["as","children","eventKey","onClick"]),b=function(e,t){var a=Object(l.useContext)(u),n=Object(l.useContext)(f.a);return function(r){n(e===a?null:e,r),t&&t(r)}}(s,d);return"button"===o&&(m.type="button"),c.a.createElement(o,Object(n.a)({ref:t,onClick:b},m),i)})),b=a("vYJ8"),v=c.a.forwardRef((function(e,t){var a=e.children,o=e.eventKey,i=Object(r.a)(e,["children","eventKey"]),s=Object(l.useContext)(u);return c.a.createElement(b.a,Object(n.a)({ref:t,in:s===o},i),c.a.createElement("div",null,c.a.Children.only(a)))}));v.displayName="AccordionCollapse";var y=v,p=c.a.forwardRef((function(e,t){var a=Object(s.a)(e,{activeKey:"onSelect"}),o=a.as,l=void 0===o?"div":o,m=a.activeKey,b=a.bsPrefix,v=a.children,y=a.className,p=a.onSelect,h=Object(r.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return b=Object(d.b)(b,"accordion"),c.a.createElement(u.Provider,{value:m},c.a.createElement(f.a.Provider,{value:p},c.a.createElement(l,Object(n.a)({ref:t},h,{className:i()(y,b)}),v)))}));p.Toggle=m,p.Collapse=y;t.a=p},F9IU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createContext(null);t.a=r},ILyh:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a("q1tI"),r=a.n(n).a.createContext(),o=function(e,t){return null!=e?String(e):t||null};t.a=r},MBJH:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),l=a("q1tI"),c=a.n(l),s=a("vUet"),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.striped,d=e.bordered,f=e.borderless,u=e.hover,m=e.size,b=e.variant,v=e.responsive,y=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(s.b)(a,"table"),h=i()(o,p,b&&p+"-"+b,m&&p+"-"+m,l&&p+"-striped",d&&p+"-bordered",f&&p+"-borderless",u&&p+"-hover"),x=c.a.createElement("table",Object(n.a)({},y,{className:h,ref:t}));if(v){var _=p+"-responsive";return"string"===typeof v&&(_=_+"-"+v),c.a.createElement("div",{className:_},x)}return x}));t.a=d},Mcwl:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/admin/dashboard/dashboard-contents/vendors",function(){return a("NVrM")}])},Mj5q:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),l=a("q1tI"),c=a.n(l),s=a("vUet"),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.children,d=e.as,f=void 0===d?"div":d,u=Object(r.a)(e,["bsPrefix","className","children","as"]);return a=Object(s.b)(a,"nav-item"),c.a.createElement(f,Object(n.a)({},u,{ref:t,className:i()(o,a)}),l)}));d.displayName="NavItem",t.a=d},NVrM:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),i=a("md7G"),l=a("foSv"),c=a("MX0m"),s=a.n(c),d=a("q1tI"),f=a.n(d),u=(a("vcXL"),a("3Z9Z")),m=a("JI6e"),b=a("6xyR"),v=a("MBJH"),y=a("QojX"),p=a("+YzT"),h=a("IP2g"),x=a("wHSu"),_=a("twK/"),g=a("bWZ2"),j=a("qTQu"),w=a("/JS1"),z=f.a.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var O=function(e){Object(o.a)(a,e);var t=N(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return z("div",{className:"jsx-3124640742"},z(j.default,{icon:x.M,title:" Admin Dashboard / Vendors"}),z(u.a,{style:k.row},z(m.a,{lg:3,md:3,sm:12,xs:12,style:k.col},z("div",{className:"jsx-3124640742 hover"},z(b.a,{style:{background:"lightgreen"}},z(b.a.Header,{style:k.card_header},"Vendors"),z(b.a.Body,null,z(u.a,null,z(m.a,null,z(b.a.Text,{style:k.card_text},"1234")),z(m.a,null,z(b.a.Text,{style:k.card_text},z(h.a,{icon:x.M,style:k.fontawesome})))))))),z(m.a,{lg:3,md:3,sm:12,xs:12,style:k.col},z("div",{className:"jsx-3124640742 hover"},z(b.a,{style:{background:"lightblue"}},z(b.a.Header,{style:k.card_header},"New Vendors"),z(b.a.Body,null,z(u.a,null,z(m.a,null,z(b.a.Text,{style:k.card_text},"1234")),z(m.a,null,z(b.a.Text,{style:k.card_text},z(h.a,{icon:x.L,style:k.fontawesome})))))))),z(m.a,{lg:3,md:3,sm:12,xs:12,style:k.col},z("div",{className:"jsx-3124640742 hover"},z(b.a,{style:{background:"orange"}},z(b.a.Header,{style:k.card_header}," Top Vendors "),z(b.a.Body,null,z(u.a,null,z(m.a,null,z(b.a.Text,{style:k.card_text},"1234")),z(m.a,null,z(b.a.Text,{style:k.card_text},z(h.a,{icon:_.b,style:k.fontawesome})))))))),z(m.a,{lg:3,md:3,sm:12,xs:12,style:k.col},z("div",{className:"jsx-3124640742 hover"},z(b.a,{style:{background:"pink"}},z(b.a.Header,{style:k.card_header}," Admin Vendors "),z(b.a.Body,null,z(u.a,null,z(m.a,null,z(b.a.Text,{style:k.card_text},"5678")),z(m.a,null,z(b.a.Text,{style:k.card_text},z(h.a,{icon:x.M,style:k.fontawesome}))))))))),z(E,{header:"All Vendors",rank:!0}),z(E,{header:"New Vendors",rank:!1}),z(E,{header:"Top Vendors",rank:!0}),z(E,{header:"Admin Vendors",rank:!0}),z(s.a,{id:"3124640742"},[".hover.jsx-3124640742{margin:5px 15px;}",".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]))}}]),a}(f.a.Component);function E(e){return z(f.a.Fragment,null,z(w.default,{title:e.header},z(v.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},z("thead",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z("tr",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z(y.a.Check,{type:"checkbox"})),z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"ID"),z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Name"),z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Name"),z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Location"),e.rank?z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Rank"):null,z("th",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Date"))),z("tbody",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z("tr",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},z(y.a.Check,{type:"checkbox"})),z("td",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])+" td"},"ID",z("div",{className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])+" mr-auto"}),z(p.a.Link,{style:k.nav_link}," View "),z(p.a.Link,{style:k.nav_link},"Edit"),z(p.a.Link,{style:k.nav_link},"Delete")),z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Name"),z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Name"),z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Shop Location"),e.rank?z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"Rank"):null,z("td",{align:"center",className:s.a.dynamic([["2838257374",[g.a.form_label_fontsize,g.a.form_label_fontsize]]])},"10/05/2020"))))),z(s.a,{id:"2838257374",dynamic:[g.a.form_label_fontsize,g.a.form_label_fontsize]},["th.__jsx-style-dynamic-selector{text-align:center;font-size:14px;}",".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:".concat(g.a.form_label_fontsize,";}"),"td.__jsx-style-dynamic-selector{font-size:".concat(g.a.form_label_fontsize,";}")]))}var k={row:{margin:"2%",padding:"0px"},nav_link:{paddingTop:"0px",paddingBottom:"0px",paddingLeft:"10px",paddingRight:"5px"},col:{padding:"0px",margin:"0px"},card:{width:"100%",marginBottom:"2%",border:"1px solid lightgray"},card_header:{fontSize:"".concat(g.a.card_header_fontsize),border:"none"},table_card_header:{fontSize:"".concat(g.a.card_header_fontsize),background:"".concat(g.a.card_header_background),border:"none"},card_text:{color:"".concat(g.a.admin_primry_color),fontSize:"20px"},label:{fontSize:"".concat(g.a.form_label_fontsize)},fontawesome:{color:"".concat(g.a.admin_primry_color),width:"30px",height:"30px",maxHeight:"30px",maxWidth:"30px",float:"right"},accordin_fontawesome:{color:"".concat(g.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=O},Qdst:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createContext(null);t.a=r},YGJp:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},iKII:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),i=a.n(o),l=a("q1tI"),c=a.n(l),s=a("dbZe"),d=a("ZCiN"),f=(a("2W6z"),a("F9IU")),u=a("ILyh"),m=c.a.forwardRef((function(e,t){var a=e.active,o=e.className,s=e.tabIndex,m=e.eventKey,b=e.onSelect,v=e.onClick,y=e.as,p=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),h=Object(u.b)(m,p.href),x=Object(l.useContext)(u.a),_=Object(l.useContext)(f.a),g=a;if(_){p.role||"tablist"!==_.role||(p.role="tab");var j=_.getControllerId(h),w=_.getControlledId(h);p["data-rb-event-key"]=h,p.id=j||p.id,p["aria-controls"]=w||p["aria-controls"],g=null==a&&null!=h?_.activeKey===h:a}"tab"===p.role&&(p.tabIndex=g?s:-1,p["aria-selected"]=g);var z=Object(d.a)((function(e){v&&v(e),null!=h&&(b&&b(h,e),x&&x(h,e))}));return(c.a.createElement(y,Object(n.a)({},p,{ref:t,onClick:z,className:i()(o,g&&"active")})))}));m.defaultProps={disabled:!1};var b=m,v=a("vUet"),y={disabled:!1,as:s.a},p=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.disabled,l=e.className,s=e.href,d=e.eventKey,f=e.onSelect,u=e.as,m=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(v.b)(a,"nav-link"),c.a.createElement(b,Object(n.a)({},m,{href:s,ref:t,eventKey:d,as:u,disabled:o,onSelect:f,className:i()(l,a,o&&"disabled")}))}));p.displayName="NavLink",p.defaultProps=y;t.a=p},lcWJ:function(e,t,a){"use strict";var n=a("q1tI"),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(n.useMemo)((function(){return function(e,t){var a=r(e),n=r(t);return function(e){a&&a(e),n&&n(e)}}(e,t)}),[e,t])}},qTQu:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("3Z9Z"),i=a("IP2g"),l=r.a.createElement,c={title_row:{borderBottom:"1px solid lightgray",padding:"1% 2.5%",display:"flex",alignItems:"center"},title_fontawesome:{color:"gray",marginRight:"3%",width:"22px",height:"22px",maxHeight:"22px",maxWidth:"22px"},title:{color:"gray",fontSize:"14px"}};t.default=function(e){return l(o.a,{style:c.title_row,noGutters:!0},l(i.a,{icon:e.icon,style:c.title_fontawesome}),l("div",{className:"mr-auto",style:c.title}," Muhalik / ",e.title," "))}},qUpC:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=r.a.createContext(null)},vYJ8:function(e,t,a){"use strict";var n,r=a("wx14"),o=a("zLVn"),i=a("dI71"),l=a("TSYQ"),c=a.n(l),s=a("7j6X"),d=a("YECM"),f=a("q1tI"),u=a.n(f),m=a("dRu9"),b=a("Qg85"),v=a("z+q/"),y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var p=((n={})[m.c]="collapse",n[m.d]="collapsing",n[m.b]="collapsing",n[m.a]="collapse show",n),h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=y[e];return a+parseInt(Object(s.a)(t,n[0]),10)+parseInt(Object(s.a)(t,n[1]),10)}},x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var a=t.getDimension();e.style[a]=t._getScrollDimensionValue(e,a)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var a=t.getDimension();e.style[a]=t.props.getDimensionValue(a,e)+"px",Object(v.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(i.a)(t,e);var a=t.prototype;return a.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},a._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},a.render=function(){var e=this,t=this.props,a=t.onEnter,n=t.onEntering,i=t.onEntered,l=t.onExit,s=t.onExiting,f=t.className,v=t.children,y=Object(o.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete y.dimension,delete y.getDimensionValue;var h=Object(b.a)(this.handleEnter,a),x=Object(b.a)(this.handleEntering,n),_=Object(b.a)(this.handleEntered,i),g=Object(b.a)(this.handleExit,l),j=Object(b.a)(this.handleExiting,s);return u.a.createElement(m.e,Object(r.a)({addEndListener:d.a},y,{"aria-expanded":y.role?y.in:null,onEnter:h,onEntering:x,onEntered:_,onExit:g,onExiting:j}),(function(t,a){return u.a.cloneElement(v,Object(r.a)({},a,{className:c()(f,v.props.className,p[t],"width"===e.getDimension()&&"width")}))}))},t}(u.a.Component);x.defaultProps=h,t.a=x},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["Mcwl",0,1,4,2,3,5,6,8,11]]]);