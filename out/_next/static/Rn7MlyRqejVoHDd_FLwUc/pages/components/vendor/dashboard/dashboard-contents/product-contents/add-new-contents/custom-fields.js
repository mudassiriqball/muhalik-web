(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+YzT":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=(t("K9S6"),t("q1tI")),c=t.n(i),u=t("JCAc"),s=t("vUet"),b=t("qUpC"),d=t("Wzyw"),f=t("Zeqi"),v=t("YGJp"),m=t("lcWJ"),p=t("F9IU"),y=t("ILyh"),O=t("Qdst"),j=function(){},h=c.a.forwardRef((function(e,a){var t,l,o=e.as,u=void 0===o?"ul":o,s=e.onSelect,b=e.activeKey,d=e.role,h=e.onKeyDown,x=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),g=Object(v.a)(),w=Object(i.useRef)(!1),C=Object(i.useContext)(y.a),N=Object(i.useContext)(O.a);N&&(d=d||"tablist",b=N.activeKey,t=N.getControlledId,l=N.getControllerId);var S=Object(i.useRef)(null),I=function(e){if(!S.current)return null;var a=Object(f.a)(S.current,"[data-rb-event-key]:not(.disabled)"),t=S.current.querySelector(".active"),n=a.indexOf(t);if(-1===n)return null;var r=n+e;return r>=a.length&&(r=0),r<0&&(r=a.length-1),a[r]},P=function(e,a){null!=e&&(s&&s(e,a),C&&C(e,a))};Object(i.useEffect)((function(){if(S.current&&w.current){var e=S.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var k=Object(m.a)(a,S);return c.a.createElement(y.a.Provider,{value:P},c.a.createElement(p.a.Provider,{value:{role:d,activeKey:Object(y.b)(b),getControlledId:t||j,getControllerId:l||j}},c.a.createElement(u,Object(n.a)({},x,{onKeyDown:function(e){var a;switch(h&&h(e),e.key){case"ArrowLeft":case"ArrowUp":a=I(-1);break;case"ArrowRight":case"ArrowDown":a=I(1);break;default:return}a&&(e.preventDefault(),P(a.dataset.rbEventKey,e),w.current=!0,g())},ref:k,role:d}))))})),x=t("Mj5q"),g=t("iKII"),w=c.a.forwardRef((function(e,a){var t,l,f,v=Object(u.a)(e,{activeKey:"onSelect"}),m=v.as,p=void 0===m?"div":m,y=v.bsPrefix,O=v.variant,j=v.fill,x=v.justify,g=v.navbar,w=v.className,C=v.children,N=v.activeKey,S=Object(r.a)(v,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);y=Object(s.b)(y,"nav");var I=Object(i.useContext)(b.a),P=Object(i.useContext)(d.a);return I?(l=I.bsPrefix,g=null==g||g):P&&(f=P.cardHeaderBsPrefix),c.a.createElement(h,Object(n.a)({as:p,ref:a,activeKey:N,className:o()(w,(t={},t[y]=!g,t[l+"-nav"]=g,t[f+"-"+O]=!!f,t[y+"-"+O]=!!O,t[y+"-fill"]=j,t[y+"-justified"]=x,t))},S),C)}));w.displayName="Nav",w.defaultProps={justify:!1,fill:!1},w.Item=x.a,w.Link=g.a;a.a=w},"1OyB":function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return n}))},"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("vUet"),s=t("YdCC"),b=t("U1MP"),d=t("Wzyw"),f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.variant,s=e.as,b=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(u.b)(t,"card-img");return c.a.createElement(b,Object(n.a)({ref:a,className:o()(i?f+"-"+i:f,l)},d))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,m=Object(b.a)("h5"),p=Object(b.a)("h6"),y=Object(s.a)("card-body"),O=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.bg,b=e.text,f=e.border,v=e.body,m=e.children,p=e.as,O=void 0===p?"div":p,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(u.b)(t,"card"),x=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return c.a.createElement(d.a.Provider,{value:x},c.a.createElement(O,Object(n.a)({ref:a},j,{className:o()(l,h,s&&"bg-"+s,b&&"text-"+b,f&&"border-"+f)}),v?c.a.createElement(y,null,m):m))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=v,O.Title=Object(s.a)("card-title",{Component:m}),O.Subtitle=Object(s.a)("card-subtitle",{Component:p}),O.Body=y,O.Link=Object(s.a)("card-link",{Component:"a"}),O.Text=Object(s.a)("card-text",{Component:"p"}),O.Header=Object(s.a)("card-header"),O.Footer=Object(s.a)("card-footer"),O.ImgOverlay=Object(s.a)("card-img-overlay");a.a=O},"7xGa":function(e,a,t){"use strict";var n,r=t("wx14"),l=t("zLVn"),o=t("TSYQ"),i=t.n(o),c=t("YECM"),u=t("q1tI"),s=t.n(u),b=t("dRu9"),d=t("z+q/"),f=((n={})[b.b]="show",n[b.a]="show",n),v=s.a.forwardRef((function(e,a){var t=e.className,n=e.children,o=Object(l.a)(e,["className","children"]),v=Object(u.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return s.a.createElement(b.e,Object(r.a)({ref:a,addEndListener:c.a},o,{onEnter:v}),(function(e,a){return s.a.cloneElement(n,Object(r.a)({},a,{className:i()("fade",t,n.props.className,f[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",a.a=v},DZHF:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("JCAc"),s=t("vUet"),b=t("ILyh"),d=c.a.createContext(null);var f=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"button":t,o=e.children,u=e.eventKey,s=e.onClick,f=Object(r.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var t=Object(i.useContext)(d),n=Object(i.useContext)(b.a);return function(r){n(e===t?null:e,r),a&&a(r)}}(u,s);return c.a.createElement(l,Object(n.a)({ref:a,onClick:v},f),o)})),v=t("vYJ8"),m=c.a.forwardRef((function(e,a){var t=e.children,l=e.eventKey,o=Object(r.a)(e,["children","eventKey"]),u=Object(i.useContext)(d);return c.a.createElement(v.a,Object(n.a)({ref:a,in:u===l},o),c.a.createElement("div",null,c.a.Children.only(t)))}));m.displayName="AccordionCollapse";var p=m,y=c.a.forwardRef((function(e,a){var t=Object(u.a)(e,{activeKey:"onSelect"}),l=t.as,i=void 0===l?"div":l,f=t.activeKey,v=t.bsPrefix,m=t.children,p=t.className,y=t.onSelect,O=Object(r.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(s.b)(v,"accordion"),c.a.createElement(d.Provider,{value:f},c.a.createElement(b.a.Provider,{value:y},c.a.createElement(i,Object(n.a)({ref:a},O,{className:o()(p,v)}),m)))}));y.Toggle=f,y.Collapse=p;a.a=y},F9IU:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createContext(null);a.a=r},HcA0:function(e,a,t){"use strict";t.r(a);var n=t("ODXe"),r=t("q1tI"),l=t.n(r),o=t("DZHF"),i=t("6xyR"),c=t("QojX"),u=t("cWnB"),s=t("JI6e"),b=t("+YzT"),d=t("zUrK"),f=t("IP2g"),v=t("wHSu"),m=t("bWZ2"),p=t("pSe8"),y=t("Cs6D"),O=t("qxaI"),j=t("nvxB"),h=l.a.createElement,x={border:"1px solid ".concat(m.a.admin_primry_color),borderRadius:"5px",background:"white",color:"".concat(m.a.admin_primry_color)},g=function(e){return h("div",{style:x},h(p.z.Group,e))},w={row:{margin:"2%",padding:"0%"},card:{width:"100%"},card_header:{width:"100%",alignItems:"center",fontSize:"15px",background:"lightgray"},label:{fontSize:"13px"},variations_fontawesome:{color:"".concat(m.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};a.default=function(e){var a=l.a.useState(!1),t=Object(n.a)(a,2),r=t[0],m=t[1];return h(o.a,{style:{width:"100%"},defaultActiveKey:"0"},h(i.a,{style:w.card},h(i.a.Header,{style:w.card_header},h(c.a.Label,null,"Custome Fields"),h(o.a.Toggle,{as:u.a,size:"sm",eventKey:"0",style:{float:"right",background:"none"}},h(f.a,{size:"xs",icon:v.B,style:w.variations_fontawesome}))),h(o.a.Collapse,{eventKey:"0"},h(i.a.Body,null,h(c.a.Row,{style:{margin:"0.5% 1%",padding:"1% 2%",background:"lightGray"}},h(c.a.Group,{as:s.a,lg:5,md:5,sm:12,xs:12},h(c.a.Label,{style:w.label},"Field Name"),h(y.a,{options:O.a,components:{Group:g},value:e.customFieldNameSelected,onChange:e.fieldNameHandler}),h(b.a.Link,{style:{padding:"0%",margin:"0%",fontSize:"14px"},onClick:function(){return m(!0)}},"Add New"),h(j.default,{show:r,onHide:function(){return m(!1)}})),h(c.a.Group,{as:s.a,lg:7,md:7,sm:12,xs:12},h(c.a.Label,{style:w.label},"Field Value "),h(d.a,null,h(c.a.Control,{type:"text",placeholder:"Enter Value",name:"sku",value:e.value,onChange:e.fieldValueHandler}))),h(c.a.Label,{style:w.label},e.isVariableProduct?h("span",null,"For Variable Products each Custom Field will be added to all variations"):null,h("span",{style:{color:"red"}},e.error)),h(u.a,{variant:"outline-primary",size:"sm",block:!0,style:{margin:"2% 0px"},onClick:e.addFieldHandler},"Add Field")),h("div",{style:{background:"lightGray",margin:"0.5% 1%"}},e.customFieldsArray&&e.customFieldsArray.map((function(a,t){return h(c.a.Row,{style:{padding:"1% 2%"},key:t},h(c.a.Group,{as:s.a,lg:5,md:5,sm:12,xs:12},h(c.a.Control,{as:"select",size:"sm",value:a.customFieldName,onChange:function(){return a.customFieldName}},h("option",null,a.customFieldName))),h(c.a.Group,{as:s.a,lg:7,md:7,sm:12,xs:12},h(d.a,null,h(c.a.Control,{type:"text",size:"sm",placeholder:"Enter Value",name:"sku",value:a.customFieldValue,onChange:function(){return a.fieldValue}}),h(u.a,{variant:"outline-primary",size:"sm",style:{marginLeft:"1%"},onClick:function(){return e.delete(t)}}," delete"))))})))))))}},JX7q:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},Ji7U:function(e,a,t){"use strict";function n(e,a){return(n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}t.d(a,"a",(function(){return r}))},Mj5q:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("vUet"),s=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.children,s=e.as,b=void 0===s?"div":s,d=Object(r.a)(e,["bsPrefix","className","children","as"]);return t=Object(u.b)(t,"nav-item"),c.a.createElement(b,Object(n.a)({},d,{ref:a,className:o()(l,t)}),i)}));s.displayName="NavItem",a.a=s},Qdst:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createContext(null);a.a=r},RjgW:function(e,a,t){"use strict";function n(e,a){return e.contains?e.contains(a):e.compareDocumentPosition?e===a||!!(16&e.compareDocumentPosition(a)):void 0}t.d(a,"a",(function(){return n}))},U1MP:function(e,a,t){"use strict";var n=t("wx14"),r=t("q1tI"),l=t.n(r),o=t("TSYQ"),i=t.n(o);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},U8pU:function(e,a,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}t.d(a,"a",(function(){return r}))},UT2A:function(e,a,t){"use strict";var n=t("i8i4"),r=t.n(n),l=t("dZvc");a.a=function(e){return Object(l.a)(r.a.findDOMNode(e))}},Wzyw:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);a.a=r.a.createContext(null)},YGJp:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI");function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},Zeqi:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,a){return n(e.querySelectorAll(a))}},bWZ2:function(e,a,t){"use strict";a.a={primry_color:"#28A745",admin_primry_color:"#373948",primary_text_color:"white",body_color:"#F1F1F1",form_label_fontsize:"13px"}},cWnB:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("vUet"),s=t("dbZe"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,i=e.size,b=e.active,d=e.className,f=e.block,v=e.type,m=e.as,p=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(u.b)(t,"btn"),O=o()(d,y,b&&"active",y+"-"+l,f&&y+"-block",i&&y+"-"+i);if(p.href)return c.a.createElement(s.a,Object(n.a)({},p,{as:m,ref:a,className:o()(O,p.disabled&&"disabled")}));a&&(p.ref=a),m||(p.type=v);var j=m||"button";return c.a.createElement(j,Object(n.a)({},p,{className:O}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=b},eTkP:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields",function(){return t("HcA0")}])},foSv:function(e,a,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(a,"a",(function(){return n}))},iKII:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("dbZe"),s=t("ZCiN"),b=t("F9IU"),d=t("ILyh"),f=c.a.forwardRef((function(e,a){var t=e.active,l=e.className,u=e.tabIndex,f=e.eventKey,v=e.onSelect,m=e.onClick,p=e.as,y=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),O=Object(d.b)(f,y.href),j=Object(i.useContext)(d.a),h=Object(i.useContext)(b.a),x=t;h&&(y.role||"tablist"!==h.role||(y.role="tab"),y["data-rb-event-key"]=O,y.id=h.getControllerId(O),y["aria-controls"]=h.getControlledId(O),x=null==t&&null!=O?h.activeKey===O:t),"tab"===y.role&&(y.tabIndex=x?u:-1,y["aria-selected"]=x);var g=Object(s.a)((function(e){m&&m(e),null!=O&&(v&&v(O,e),j&&j(O,e))}));return c.a.createElement(p,Object(n.a)({},y,{ref:a,onClick:g,className:o()(l,x&&"active")}))}));f.defaultProps={disabled:!1};var v=f,m=t("vUet"),p={disabled:!1,as:u.a},y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.disabled,i=e.className,u=e.href,s=e.eventKey,b=e.onSelect,d=e.as,f=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(m.b)(t,"nav-link"),c.a.createElement(v,Object(n.a)({},f,{href:u,ref:a,eventKey:s,as:d,disabled:l,onSelect:b,className:o()(i,t,l&&"disabled")}))}));y.displayName="NavLink",y.defaultProps=p;a.a=y},lcWJ:function(e,a,t){"use strict";var n=t("q1tI"),r=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.a=function(e,a){return Object(n.useMemo)((function(){return function(e,a){var t=r(e),n=r(a);return function(e){t&&t(e),n&&n(e)}}(e,a)}),[e,a])}},md7G:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("U8pU"),r=t("JX7q");function l(e,a){return!a||"object"!==Object(n.a)(a)&&"function"!==typeof a?Object(r.a)(e):a}},qxaI:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=[{label:"General",options:[{value:"Color",label:"Color"},{value:"Size",label:"Size"},{value:"Width",label:"Width"},{value:"Length",label:"Length"},{value:"Quality",label:"Quality"},{value:"Camera",label:"Camera"}]},{label:"Laptop",options:[{value:"USB Type/ Post",label:"USB Type/ Post"},{value:"Screen Resolution",label:"Screen Resolution"},{value:"Displays Type",label:"Displays Type"},{value:"Processor",label:"Processor"},{value:"RAM",label:"RAM"},{value:"ROM",label:"ROM"},{value:"SSD",label:"SSD"},{value:"Graphic Card",label:"RAM"},{value:"Operating System",label:"Operating System"}]},,{label:"States",options:[{value:"AL",label:"Alabama"},{value:"AK",label:"Alaska"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"DC",label:"District Of Columbia"},{value:"FM",label:"Federated States Of Micronesia"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"ME",label:"Maine"},{value:"MH",label:"Marshall Islands"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NV",label:"Nevada"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"MP",label:"Northern Mariana Islands"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PW",label:"Palau"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VT",label:"Vermont"},{value:"VI",label:"Virgin Islands"},{value:"VA",label:"Virginia"},{value:"WA",label:"Washington"},{value:"WV",label:"West Virginia"},{value:"WI",label:"Wisconsin"},{value:"WY",label:"Wyoming"}]}]},rePB:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},vuIU:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",(function(){return r}))},zUrK:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),u=t("YdCC"),s=t("vUet"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.size,i=e.className,u=e.as,b=void 0===u?"div":u,d=Object(r.a)(e,["bsPrefix","size","className","as"]);return t=Object(s.b)(t,"input-group"),c.a.createElement(b,Object(n.a)({ref:a},d,{className:o()(i,t,l&&t+"-"+l)}))})),d=Object(u.a)("input-group-append"),f=Object(u.a)("input-group-prepend"),v=Object(u.a)("input-group-text",{Component:"span"});b.displayName="InputGroup",b.Text=v,b.Radio=function(e){return c.a.createElement(v,null,c.a.createElement("input",Object(n.a)({type:"radio"},e)))},b.Checkbox=function(e){return c.a.createElement(v,null,c.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},b.Append=d,b.Prepend=f,a.a=b}},[["eTkP",0,1,3,2,4,5,7,15,16]]]);