(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{DZHF:function(e,a,l){"use strict";var n=l("wx14"),t=l("zLVn"),r=l("TSYQ"),o=l.n(r),i=l("q1tI"),s=l.n(i),u=l("JCAc"),c=l("vUet"),d=l("ILyh"),m=s.a.createContext(null);var p=s.a.forwardRef((function(e,a){var l=e.as,r=void 0===l?"button":l,o=e.children,u=e.eventKey,c=e.onClick,p=Object(t.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var l=Object(i.useContext)(m),n=Object(i.useContext)(d.a);return function(t){n(e===l?null:e,t),a&&a(t)}}(u,c);return s.a.createElement(r,Object(n.a)({ref:a,onClick:v},p),o)})),v=l("vYJ8"),b=s.a.forwardRef((function(e,a){var l=e.children,r=e.eventKey,o=Object(t.a)(e,["children","eventKey"]),u=Object(i.useContext)(m);return s.a.createElement(v.a,Object(n.a)({ref:a,in:u===r},o),s.a.createElement("div",null,s.a.Children.only(l)))}));b.displayName="AccordionCollapse";var h=b,y=s.a.forwardRef((function(e,a){var l=Object(u.a)(e,{activeKey:"onSelect"}),r=l.as,i=void 0===r?"div":r,p=l.activeKey,v=l.bsPrefix,b=l.children,h=l.className,y=l.onSelect,g=Object(t.a)(l,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(c.b)(v,"accordion"),s.a.createElement(m.Provider,{value:p},s.a.createElement(d.a.Provider,{value:y},s.a.createElement(i,Object(n.a)({ref:a},g,{className:o()(h,v)}),b)))}));y.Toggle=p,y.Collapse=h;a.a=y},UQTI:function(e,a,l){"use strict";a.a=[{value:"Apricot",label:"Apricot"},{value:"Aquamarine",label:"Aquamarine"},{value:"Black",label:"Black"},{value:"Blue",label:"Blue"},{value:"Bronze",label:"Bronze"},{value:"Baby-Blue",label:"Baby-Blue"},{value:"Blue-Green",label:"Blue-Green"},{value:"Blue-Violet",label:"Blue-Violet"},{value:"Chocolate",label:"Chocolate"},{value:"Coffee",label:"Coffee"},{value:"Cyan",label:"Cyan"},{value:"Desert-Sand",label:"Desert-Sand"},{value:"Gray",label:"Gray"},{value:"Green",label:"Green"},{value:"Indigo",label:"Indigo"},{value:"Lime",label:"Lime"},{value:"Magenta",label:"Magenta"},{value:"Maroon",label:"Maroon"},{value:"Navy",label:"Navy"},{value:"Navy-Blue",label:"Navy-Blue"},{value:"Orange",label:"Orange"},{value:"Olive",label:"Olive"},{value:"Pink",label:"Pink"},{value:"Peach",label:"Peach"},{value:"Purple",label:"Purple"},{value:"Red",label:"Chocolate"},{value:"Rose",label:"Rose"},{value:"Red-Violet",label:"Red-Violet"},{value:"Silver",label:"Silver"},{value:"Sky-Blue",label:"Sky-Blue"},{value:"Tan",label:"Tan"},{value:"Teal",label:"Teal"},{value:"Turquoise",label:"Turquoise"},{value:"Violet",label:"Violet"},{value:"White",label:"White"},{value:"Yellow",label:"Yellow"}]},ZTIo:function(e,a,l){"use strict";l.r(a);var n=l("ODXe"),t=l("MX0m"),r=l.n(t),o=l("q1tI"),i=l.n(o),s=(l("zE5f"),l("UQTI"),l("DZHF")),u=l("6xyR"),c=l("3Z9Z"),d=l("JI6e"),m=l("QojX"),p=l("cWnB"),v=l("KD6P"),b=l("+YzT"),h=l("zUrK"),y=l("IP2g"),g=l("wHSu"),_=l("vwsU"),C=l("bWZ2"),x=(l("VbX6"),l("pSe8")),k=l("Cs6D"),f=l("qxaI"),w=l("nvxB"),N=i.a.createElement,I={border:"1px solid ".concat(C.a.admin_primry_color),borderRadius:"5px",background:"white",color:"".concat(C.a.admin_primry_color)},S={DropdownIndicator:null},P=function(e){return N("div",{style:I},N(x.z.Group,e))},L={title_row:{borderBottom:"1px solid gray",padding:"1.5% 4%"},title_fontawesome:{color:"gray",marginRight:"3%",width:"26px",height:"26px",maxHeight:"26px",maxWidth:"26px"},title:{color:"gray"},nav_link:{color:"white",fontSize:"12px",display:"flex",alignItems:"center",height:"45px"},row:{margin:"2%",padding:"0%"},card:{width:"100%"},card_header:{alignItems:"center",fontSize:"15px",background:"lightgray"},buttons:{background:"".concat(C.a.primry_color),border:"none",fontSize:"10px"},submit_btn:{background:"".concat(C.a.primry_color),marginTop:"3%"},label:{fontSize:"".concat(C.a.form_label_fontsize)},term_condition_label:{width:"100%",fontSize:"".concat(C.a.form_label_fontsize),paddingTop:"-10px",marginTop:"-10px"},fontawesome:{color:"".concat(C.a.primary_text_color),width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"},product_fontawesome:{color:"".concat(C.a.primary_text_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"},variations_fontawesome:{color:"".concat(C.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};a.default=function(e){var a=i.a.useState(!1),l=Object(n.a)(a,2),t=l[0],o=l[1],x=!0;return x=""!=e.attributesArray,N(s.a,{style:{width:"100%"},defaultActiveKey:"0"},N(u.a,{style:L.card},N(u.a.Header,{style:L.card_header},N(c.a,{noGutters:!0,style:{display:"flex",alignItems:"center"}},N(d.a,{lg:3,md:3,sm:3,xs:4},"Product Data"),N(d.a,{lg:3,md:3,sm:5,xs:8},N(m.a.Control,{as:"select",name:"product_type",size:"sm",value:e.product_type_values,onChange:function(a){e.onChange(a),e.productTypeHandler(a)}},N("option",{value:"simple-product",className:"jsx-1365533928"}," Simple Product "),N("option",{value:"variable-prouct",className:"jsx-1365533928"}," Variable Product "))),N("div",{className:"jsx-1365533928 mr-auto"}),N(s.a.Toggle,{as:p.a,size:"sm",eventKey:"0",style:{float:"right",background:"none"}},N(y.a,{size:"xs",icon:g.B,style:L.variations_fontawesome})))),N(s.a.Collapse,{eventKey:"0"},N(u.a.Body,{style:{padding:"0.5%",margin:"0px"}},N(v.a.Container,{id:"left-tabs-example",defaultActiveKey:"Inventory"},N(c.a,{style:{margin:"0px"},noGutters:!0},N(d.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto",style:{background:"".concat(C.a.admin_primry_color)}},N(b.a,{variant:"pills",className:"flex-column",style:{margin:"0px"}},N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"Inventory",style:L.nav_link},N(y.a,{size:"xs",icon:g.C,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," Inventory ")))),e.isVariableProduct?N(i.a.Fragment,null,N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"Attributes",style:L.nav_link},N(y.a,{size:"xs",icon:g.q,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," Attributes ")))),N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"Variations",style:L.nav_link},N(y.a,{size:"xs",icon:g.q,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," Variations "))))):N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"General",style:L.nav_link},N(y.a,{size:"xs",icon:g.B,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," General ")))),N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"Shipping",style:L.nav_link},N(y.a,{size:"xs",icon:g.H,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," Shipping ")))),N(b.a.Item,null,N("div",{className:"jsx-1365533928 nav_link"},N(b.a.Link,{eventKey:"Advanced",style:L.nav_link},N(y.a,{size:"xs",icon:g.G,style:L.product_fontawesome}),N("div",{className:"jsx-1365533928 linkName"}," Advanced ")))))),N(d.a,{style:{padding:"2%"}},N(v.a.Content,null,N(v.a.Pane,{eventKey:"General"},e.isVariableProduct?null:N(i.a.Fragment,null,N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product Price ",N("span",{className:"jsx-1365533928"}," * ")),N(h.a,null,N(m.a.Control,{type:"number",size:"sm",placeholder:"Enter Product Price",name:"product_price",value:e.product_price_values,onChange:e.onChange,isInvalid:e.product_price_touched&&e.product_price_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.product_price_errors))),N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product in Stock"),N(m.a.Control,{type:"number",size:"sm",name:"product_in_stock",value:e.product_in_stock_values,onChange:e.onChange,isInvalid:e.product_in_stock_touched&&e.product_in_stock_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.product_in_stock_errors)),N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Brand Name"),N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Brand Name",name:"product_brand_name",value:e.product_brand_name_values,onChange:e.onChange,isInvalid:e.product_brand_name_touched&&e.product_brand_name_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.product_brand_name_errors)))),N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:12,md:12,sm:12,xs:12},N(m.a.Label,{style:L.label},"Image Link ",N("span",{className:"jsx-1365533928"}," * ")),N(_.a,{components:S,inputValue:e.inputValue,isClearable:!0,isMulti:!0,menuIsOpen:!1,onChange:e.simpleProductImageLinkHandler,onInputChange:e.simpleProductImageLinkInputChangeHandler,onKeyDown:e.simpleProductImageLinkhandleKeyDownHandler,placeholder:"Type something and press enter...",value:e.imageLink}))),N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product Warranty (months) "),N(h.a,null,N(m.a.Control,{type:"number",size:"sm",placeholder:"Enter Product Warranty",name:"product_warranty",value:e.product_warranty_values,onChange:e.onChange,isInvalid:e.product_warranty_touched&&e.product_warranty_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.product_warranty_errors))),N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label}," Warranty Type "),N(h.a,null,N(h.a.Prepend,null,N(m.a.Control,{as:"select",name:"warranty_type",size:"sm",value:e.warranty_type_values,onChange:e.onChange,isInvalid:e.warranty_type_touched&&e.warranty_type_errors},N("option",{className:"jsx-1365533928"},"Waranty Type"),N("option",{className:"jsx-1365533928"}," No Warranty "),N("option",{className:"jsx-1365533928"}," Brand Warranty "),N("option",{className:"jsx-1365533928"}," Local Warranty "),N("option",{className:"jsx-1365533928"}," Local Seller Warranty "),N("option",{className:"jsx-1365533928"}," Non-Local Warranty "),N("option",{className:"jsx-1365533928"}," Internationsl Warranty "),N("option",{className:"jsx-1365533928"}," Internationsl Seller Warranty "),N("option",{className:"jsx-1365533928"}," International Manufacturer Warranty "))),N(m.a.Control.Feedback,{type:"invalid"},e.product_warranty_errors))),N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product Discount"),N(h.a,null,N(m.a.Control,{type:"number",size:"sm",placeholder:"Enter Discount on on Product(%)",name:"product_discount",value:e.product_discount_values,onChange:e.onChange,isInvalid:e.product_discount_touched&&e.product_discount_errors}),N(h.a.Prepend,null,N(p.a,{variant:"primary",size:"sm"},"%")),N(m.a.Control.Feedback,{type:"invalid"},e.product_discount_errors)))))),N(v.a.Pane,{eventKey:"Inventory"},N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:6,md:6,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product SKU"),N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter SKU (Stock Keeping Unit)",name:"sku",value:e.sku_values,onChange:e.onChange,isInvalid:e.sku_touched&&e.sku_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.sku_errors))))),N(v.a.Pane,{eventKey:"Shipping"},N(m.a.Group,{as:c.a,noGutters:!0},N(m.a.Label,{style:L.label},"Weight (kg)"),N(m.a.Control,{type:"number",name:"product_weight",size:"sm",value:e.product_weight_values,onChange:e.onChange,isInvalid:e.product_weight_touched&&e.product_weight_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.product_weight_errors)),N(m.a.Group,{as:c.a,noGutters:!0},N(m.a.Label,{style:L.label},"Dimensions (cm)"),N(h.a,null,N(h.a.Prepend,null,N(m.a.Control,{type:"number",name:"dimension_length",size:"sm",value:e.dimension_length_values,onChange:e.onChange,placeholder:"Length",isInvalid:e.dimension_length_touched&&e.dimension_length_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.dimension_length_errors)),N(m.a.Control,{type:"number",name:"dimension_width",size:"sm",value:e.dimension_width_values,placeholder:"Width",onChange:e.onChange,isInvalid:e.dimension_width_touched&&e.dimension_width_errors}),N(h.a.Prepend,null,N(m.a.Control.Feedback,{type:"invalid"},e.dimension_width_errors),N(m.a.Control,{type:"number",name:"dimension_height",size:"sm",value:e.dimension_height_values,placeholder:"Height",onChange:e.onChange,isInvalid:e.dimension_height_touched&&e.dimension_height_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.dimension_height_errors)))),N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:6,md:6,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product Shipping Charges"),N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Product Shipping Charges",name:"shipping_charges",value:e.shipping_charges_values,onChange:e.onChange,isInvalid:e.shipping_charges_touched&&e.shipping_charges_errors}),N(h.a.Prepend,null,N(p.a,{variant:"primary",size:"sm"},"Riyal")),N(m.a.Control.Feedback,{type:"invalid"},e.shipping_charges_errors))),N(m.a.Group,{as:d.a,lg:6,md:6,sm:12,xs:12},N(m.a.Label,{style:L.label},"Product Handling Fee"),N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Product Handling Fee",name:"handling_fee",value:e.handling_fee_values,onChange:e.onChange,isInvalid:e.handling_fee_touched&&e.handling_fee_errors}),N(h.a.Prepend,null,N(p.a,{variant:"primary",size:"sm"},"Riyal")),N(m.a.Control.Feedback,{type:"invalid"},e.handling_fee_errors))))),N(v.a.Pane,{eventKey:"Attributes"},N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:5,md:5,sm:12,xs:12},N(m.a.Label,{style:L.label},"Field Name"),N(k.a,{options:f.a,components:{Group:P},value:e.productAttributeNameSelected,onChange:e.attributeNameHandler}),N(b.a.Link,{style:{padding:"0%",margin:"0%",fontSize:"14px"},onClick:function(){return o(!0)}},"Add New"),N(w.default,{show:t,onHide:function(){return o(!1)}})),N(m.a.Group,{as:d.a,lg:7,md:7,sm:12,xs:12},N(m.a.Label,{style:L.label},"Field Value "),N(h.a,null,N(m.a.Control,{type:"text",placeholder:"Enter Value",name:"sku",value:e.value,onChange:e.attributeValueHandler}),N(p.a,{variant:"outline-primary",style:{marginLeft:"1%"},onClick:e.addAttributeHandler},"Add"))),N(m.a.Label,{style:L.label},N("span",{style:{color:"red"},className:"jsx-1365533928"},e.error))),N(m.a.Row,null,N(m.a.Label,{style:L.label,className:"mr-auto"},"For Multiple Values add | between values"),N(p.a,{variant:"outline-primary",size:"sm",onClick:e.saveAttributesHandler},"Save Attributes")),N("hr",{className:"jsx-1365533928"}),e.attributesArray&&e.attributesArray.map((function(a,l){return N(m.a.Row,{style:{padding:"0%"},key:l},N(m.a.Group,{as:d.a,lg:5,md:5,sm:12,xs:12},N(m.a.Control,{as:"select",size:"sm",value:a.productAttributeName,onChange:function(){return a.productAttributeName}},N("option",{className:"jsx-1365533928"},a.productAttributeName))),N(m.a.Group,{as:d.a,lg:7,md:7,sm:12,xs:12},N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Value",name:"sku",value:a.productAttributeValue,onChange:function(){return a.productAttributeValue}}),N(p.a,{variant:"outline-primary",size:"sm",style:{marginLeft:"1%"},onClick:function(){return e.deleteAttributeHandler(l)}}," delete"))))}))),N(v.a.Pane,{eventKey:"Variations"},x?N(i.a.Fragment,null,N(m.a.Row,null,N(m.a.Group,{as:d.a},N(m.a.Label,null,N(m.a.Check,{name:"samePrice",label:"Same Price for all",style:L.label,onChange:e.variationsSamePriceCheckboxHandler,id:"samePrice"})),N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Price",name:"samePrice",value:e.samePriceInput,onChange:e.variationsSamePriceChanged})),N(m.a.Group,{as:d.a},N(m.a.Label,null,N(m.a.Check,{name:"sameStock",label:"Same Stock for all",style:L.label,onChange:e.variationsSameStockCheckboxHandler,id:"sameStock"})),N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Product In Stock",name:"sameStock",value:e.sameStockInput,onChange:e.sameStockForAllVariationsChangeHandler})),N(m.a.Group,{as:d.a},N(m.a.Label,null,N(m.a.Check,{name:"sameImageLink",label:"Same Image Link for all",style:L.label,onChange:e.variationsSameImgLinkCheckboxHandler,id:"sameImageLink"})),N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Image Link",name:"sameImgLinkInput",value:e.sameImgLinkInput,onChange:e.variationsSameImgLinkChanged}))),N("hr",{className:"jsx-1365533928"}),e.variationsArray&&e.variationsArray.map((function(a,l){return N("div",{key:l,className:"jsx-1365533928"},N(s.a,null,N(c.a,{noGutters:!0,style:{border:e.variationsErrorHandler(a)}},a.items&&a.items.map((function(e,l){return N(m.a.Group,{as:d.a,lg:3,md:3,sm:6,xs:6,key:l},N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Value",name:"sku",value:e.value,onChange:function(){return a.productAttributeValue}}))})),N("div",{className:"jsx-1365533928 mr-auto"}),N(s.a.Toggle,{as:m.a.Group,eventKey:"0"},N(p.a,{variant:"outline-primary",size:"sm"},N(y.a,{size:"xs",icon:g.B,style:L.variations_fontawesome}))),N(m.a.Group,{style:{float:"right"}},N(p.a,{variant:"outline-primary",size:"sm",style:{marginLeft:"1%"},onClick:function(){return e.deleteVariationHandler(l)}}," delete"))),N(s.a.Collapse,{eventKey:"0"},N(m.a.Row,null,N(m.a.Group,{as:d.a,lg:4,md:4,sm:6,xs:6},N(m.a.Label,{style:L.label},"Product Price",N("span",{className:"jsx-1365533928"},"*")),N(h.a,null,N(m.a.Control,{type:"number",size:"sm",placeholder:"Enter Product Price",name:"product_price",value:a.price,onChange:function(a){return e.variationPriceHandler(a,l)},isInvalid:a.price_error}),N(m.a.Control.Feedback,{type:"invalid"},a.price_error))),N(m.a.Group,{as:d.a,lg:4,md:4,sm:6,xs:6},N(m.a.Label,{style:L.label},"Product in Stock"),N(m.a.Control,{type:"number",size:"sm",name:"product_in_stock",placeholder:"Enter Product In Stock",value:a.stock,onChange:function(a){return e.variationStockHandler(a,l)}}),N(m.a.Control.Feedback,{type:"invalid"})),N(m.a.Group,{as:d.a,lg:4,md:4,sm:12,xs:12},N(m.a.Label,{style:L.label},"Image Link"),N(m.a.Control,{type:"text",size:"sm",name:"image_link",placeholder:"Enter Image Link",value:a.image_link,onChange:function(a){return e.variationImageLinkHandler(a,l)},isInvalid:a.image_link_error}),N(m.a.Control.Feedback,{type:"invalid"},a.image_link_error))))))})),N(p.a,{variant:"outline-primary",size:"sm",block:!0,onClick:e.saveVariationsHandler}," Save Variations")):N("div",{style:{width:"100%",textAlign:"center",marginTop:"10%"},className:"jsx-1365533928"},N(m.a.Label,null,"Please First add Attributes from Attributes Tab"))),N(v.a.Pane,{eventKey:"Advanced"},N(m.a.Row,null,N(m.a.Label,{style:L.label},"Purchase Note"),N(h.a,null,N(m.a.Control,{type:"text",size:"sm",placeholder:"Enter Purchase Notes",name:"purchase_note",value:e.purchase_note_values,onChange:e.onChange,isInvalid:e.purchase_note_touched&&e.purchase_note_errors}),N(m.a.Control.Feedback,{type:"invalid"},e.purchase_note_errors))))))))))),N(r.a,{id:"1365533928"},["span.jsx-1365533928{color:red;}","@media (max-width:991px){.linkName.jsx-1365533928{display:none;}}"]))}},qxaI:function(e,a,l){"use strict";l.d(a,"a",(function(){return n}));var n=[{label:"General",options:[{value:"Color",label:"Color"},{value:"Size",label:"Size"},{value:"Width",label:"Width"},{value:"Length",label:"Length"},{value:"Quality",label:"Quality"},{value:"Camera",label:"Camera"}]},{label:"Laptop",options:[{value:"USB Type/ Post",label:"USB Type/ Post"},{value:"Screen Resolution",label:"Screen Resolution"},{value:"Displays Type",label:"Displays Type"},{value:"Processor",label:"Processor"},{value:"RAM",label:"RAM"},{value:"ROM",label:"ROM"},{value:"SSD",label:"SSD"},{value:"Graphic Card",label:"RAM"},{value:"Operating System",label:"Operating System"}]},,{label:"States",options:[{value:"AL",label:"Alabama"},{value:"AK",label:"Alaska"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"DC",label:"District Of Columbia"},{value:"FM",label:"Federated States Of Micronesia"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"ME",label:"Maine"},{value:"MH",label:"Marshall Islands"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NV",label:"Nevada"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"MP",label:"Northern Mariana Islands"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PW",label:"Palau"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VT",label:"Vermont"},{value:"VI",label:"Virgin Islands"},{value:"VA",label:"Virginia"},{value:"WA",label:"Washington"},{value:"WV",label:"West Virginia"},{value:"WI",label:"Wisconsin"},{value:"WY",label:"Wyoming"}]}]},vwsU:function(e,a,l){"use strict";l("Ff2n");var n=l("wx14"),t=l("KQm4"),r=l("vpQ4"),o=l("1OyB"),i=l("vuIU"),s=l("md7G"),u=l("foSv"),c=l("Ji7U"),d=l("JX7q"),m=l("rePB"),p=l("q1tI"),v=l.n(p),b=(l("qKvR"),l("i8i4"),l("17x9"),l("U8pU"),l("tk1G")),h=l("YD8z"),y=(l("iYmT"),l("h4VS"),l("FUBA"),l("ItZv")),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,l=String(e).toLowerCase(),n=String(a.value).toLowerCase(),t=String(a.label).toLowerCase();return n===l||t===l},_={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,a,l){return!(!e||a.some((function(a){return g(e,a)}))||l.some((function(a){return g(e,a)})))},getNewOptionData:function(e,a){return{label:a,value:e,__isNew__:!0}}},C=Object(r.a)({allowCreateWhileLoading:!1,createOptionPosition:"last"},_),x=function(e){var a,l;return l=a=function(a){function l(e){var a;Object(o.a)(this,l),a=Object(s.a)(this,Object(u.a)(l).call(this,e)),Object(m.a)(Object(d.a)(Object(d.a)(a)),"select",void 0),Object(m.a)(Object(d.a)(Object(d.a)(a)),"onChange",(function(e,l){var n=a.props,r=n.getNewOptionData,o=n.inputValue,i=n.isMulti,s=n.onChange,u=n.onCreateOption,c=n.value,d=n.name;if("select-option"!==l.action)return s(e,l);var m=a.state.newOption,p=Array.isArray(e)?e:[e];if(p[p.length-1]!==m)s(e,l);else if(u)u(o);else{var v=r(o,o),h={action:"create-option",name:d};s(i?[].concat(Object(t.a)(Object(b.f)(c)),[v]):v,h)}}));var n=e.options||[];return a.state={newOption:void 0,options:n},a}return Object(c.a)(l,a),Object(i.a)(l,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=e.allowCreateWhileLoading,l=e.createOptionPosition,n=e.formatCreateLabel,r=e.getNewOptionData,o=e.inputValue,i=e.isLoading,s=e.isValidNewOption,u=e.value,c=e.options||[],d=this.state.newOption;d=s(o,Object(b.f)(u),c)?r(o,n(o)):void 0,this.setState({newOption:d,options:!a&&i||!d?c:"first"===l?[d].concat(Object(t.a)(c)):[].concat(Object(t.a)(c),[d])})}},{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var a=this,l=this.state.options;return v.a.createElement(e,Object(n.a)({},this.props,{ref:function(e){a.select=e},options:l,onChange:this.onChange}))}}]),l}(p.Component),Object(m.a)(a,"defaultProps",C),l}(h.a),k=Object(y.a)(x);a.a=k},zE5f:function(e,a,l){"use strict"}}]);