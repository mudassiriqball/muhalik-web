(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"1m6S":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields",function(){return t("HcA0")}])},"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),o=t("TSYQ"),s=t.n(o),c=t("q1tI"),i=t.n(c),u=t("vUet"),l=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,c=e.noGutters,d=e.as,f=void 0===d?"div":d,m=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(u.b)(t,"row"),b=p+"-cols",v=[];return l.forEach((function(e){var a,t=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+b+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},m,{className:s.a.apply(void 0,[o,p,c&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},F9IU:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createContext(null);a.a=r},HcA0:function(e,a,t){"use strict";t.r(a);var n=t("ODXe"),r=t("MX0m"),o=t.n(r),s=t("q1tI"),c=t.n(s),i=t("QojX"),u=t("JI6e"),l=t("+YzT"),d=t("zUrK"),f=t("cWnB"),m=t("3Z9Z"),p=(t("IP2g"),t("bWZ2")),b=t("FCdT"),v=t("Cs6D"),y=t("qxaI"),x=t("nvxB"),g=c.a.createElement,w={border:"1px solid ".concat(p.a.admin_primry_color),borderRadius:"5px",background:"white",color:"".concat(p.a.admin_primry_color)},h=function(e){return g("div",{style:w},g(b.z.Group,e))},j={row:{margin:"2%",padding:"0%"},card:{width:"100%"},card_header:{width:"100%",alignItems:"center",fontSize:"".concat(p.a.card_header_fontsize),background:"".concat(p.a.card_header_background)},label:{fontSize:"13px"},accordin_fontawesome:{color:"".concat(p.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};a.default=function(e){var a=c.a.useState(!1),t=Object(n.a)(a,2),r=t[0],s=t[1],b=c.a.useState(""),w=Object(n.a)(b,2),O=w[0],C=w[1],N=c.a.useState(""),k=Object(n.a)(N,2),z=k[0],F=k[1],_=c.a.useState(""),I=Object(n.a)(_,2),E=I[0],P=I[1];return g(c.a.Fragment,null,e.showCustomFields?g(i.a.Label,{style:j.label}," Please First Create Variations "):g(c.a.Fragment,null,g(i.a.Row,{style:{margin:"0%",padding:"1.5%",background:"".concat(p.a.body_color)}},g(i.a.Group,{as:u.a,lg:5,md:5,sm:12,xs:12},g(i.a.Label,{style:j.label},"Field Name"),g(v.a,{styles:p.a.react_select_styles,options:y.a,components:{Group:h},value:O,onChange:function(e){return C(e)}}),g(l.a.Link,{style:{padding:"0%",margin:"0%",fontSize:"14px"},onClick:function(){return s(!0)}},"Add New"),g(x.default,{show:r,onHide:function(){return s(!1)}})),g(i.a.Group,{as:u.a,lg:7,md:7,sm:12,xs:12},g(i.a.Label,{style:j.label},"Field Value "),g(d.a,null,g(i.a.Control,{style:{fontSize:"14px"},type:"text",placeholder:"Enter Value",name:"sku",value:z,onChange:function(e){return F(e.target.value)}}),g(f.a,{variant:"outline-primary",size:"sm",style:{marginLeft:"1%"},onClick:function(){if(""!=O&&""!=z){var a=Object.assign([],e.customFieldsArray);a.push({name:O.value,value:z}),e.setFieldsArrayHandler(a),P(""),C(""),F("")}else P("Enter Field Name and Value")}},"Add"))),g("span",{className:"jsx-1112730667 mr-auto"}," ",E," "),g(m.a,{style:{width:"100%",display:"flex",alignItems:"center"},noGutters:!0},e.isVariableProduct?g(i.a.Label,{style:j.label,className:"mr-auto"},"For Variable Products each Custom Field will be added to all variations"):null,g("div",{className:"jsx-1112730667 mr-auto"}),g(f.a,{variant:"outline-primary",size:"sm",onClick:function(){""!=e.customFieldsArray?(P(""),e.saveCustomFieldsHandler()):P("Add Fields First")}},"Save Fields")))),g("div",{style:{background:"".concat(p.a.body_color),marginTop:"1%"},className:"jsx-1112730667"},e.customFieldsArray&&e.customFieldsArray.map((function(a,t){return g(i.a.Row,{style:{padding:"1% 2%"},key:t},g(u.a,{lg:5,md:5,sm:12,xs:12},g(i.a.Control,{as:"select",size:"sm",value:a.name,onChange:function(){return a.name}},g("option",{className:"jsx-1112730667"},a.name))),g(u.a,{lg:7,md:7,sm:12,xs:12},g(d.a,null,g(i.a.Control,{type:"text",size:"sm",placeholder:"Enter Value",name:"sku",value:a.value,onChange:function(){return a.value}}),g(f.a,{variant:"outline-danger",size:"sm",style:{marginLeft:"1%"},onClick:function(){return function(a){var t=Object.assign([],e.customFieldsArray);t.splice(a,1),e.setFieldsArrayHandler(t)}(t)}}," delete"))))}))),g(o.a,{id:"1112730667"},["span.jsx-1112730667{color:red;font-size:13px;}"]))}},U1MP:function(e,a,t){"use strict";var n=t("wx14"),r=t("q1tI"),o=t.n(r),s=t("TSYQ"),c=t.n(s);a.a=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(n.a)({},a,{ref:t,className:c()(a.className,e)}))}))}},Wzyw:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);a.a=r.a.createContext(null)},YGJp:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI");function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI");var r=function(e){var a=Object(n.useRef)(e);return Object(n.useEffect)((function(){a.current=e}),[e]),a};function o(e){var a=r(e);return Object(n.useCallback)((function(){return a.current&&a.current.apply(a,arguments)}),[a])}},cWnB:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),o=t("TSYQ"),s=t.n(o),c=t("q1tI"),i=t.n(c),u=t("vUet"),l=t("dbZe"),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.variant,c=e.size,d=e.active,f=e.className,m=e.block,p=e.type,b=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(u.b)(t,"btn"),x=s()(f,y,d&&"active",y+"-"+o,m&&y+"-block",c&&y+"-"+c);if(v.href)return i.a.createElement(l.a,Object(n.a)({},v,{as:b,ref:a,className:s()(x,v.disabled&&"disabled")}));a&&(v.ref=a),b||(v.type=p);var g=b||"button";return(i.a.createElement(g,Object(n.a)({},v,{className:x})))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=d},dbZe:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),o=t("q1tI"),s=t.n(o),c=t("Qg85");function i(e){return!e||"#"===e.trim()}var u=s.a.forwardRef((function(e,a){var t=e.as,o=void 0===t?"a":t,u=e.disabled,l=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var a=d.href,t=d.onClick;(u||i(a))&&e.preventDefault(),u?e.stopPropagation():t&&t(e)};return i(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),u&&(d.tabIndex=-1,d["aria-disabled"]=!0),s.a.createElement(o,Object(n.a)({ref:a},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),l)}))}));u.displayName="SafeAnchor",a.a=u},lcWJ:function(e,a,t){"use strict";var n=t("q1tI"),r=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.a=function(e,a){return Object(n.useMemo)((function(){return function(e,a){var t=r(e),n=r(a);return function(e){t&&t(e),n&&n(e)}}(e,a)}),[e,a])}},qUpC:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);a.a=r.a.createContext(null)},zUrK:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),o=t("TSYQ"),s=t.n(o),c=t("q1tI"),i=t.n(c),u=t("YdCC"),l=t("vUet"),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.size,c=e.className,u=e.as,d=void 0===u?"div":u,f=Object(r.a)(e,["bsPrefix","size","className","as"]);return t=Object(l.b)(t,"input-group"),i.a.createElement(d,Object(n.a)({ref:a},f,{className:s()(c,t,o&&t+"-"+o)}))})),f=Object(u.a)("input-group-append"),m=Object(u.a)("input-group-prepend"),p=Object(u.a)("input-group-text",{Component:"span"});d.displayName="InputGroup",d.Text=p,d.Radio=function(e){return i.a.createElement(p,null,i.a.createElement("input",Object(n.a)({type:"radio"},e)))},d.Checkbox=function(e){return i.a.createElement(p,null,i.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},d.Append=f,d.Prepend=m,a.a=d}},[["1m6S",0,1,2,3,5,6,7,8,9,13,17]]]);