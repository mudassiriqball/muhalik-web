(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{MBJH:function(a,t,e){"use strict";var l=e("wx14"),s=e("zLVn"),n=e("TSYQ"),i=e.n(n),r=e("q1tI"),o=e.n(r),d=e("vUet"),c=o.a.forwardRef((function(a,t){var e=a.bsPrefix,n=a.className,r=a.striped,c=a.bordered,u=a.borderless,m=a.hover,p=a.size,_=a.variant,b=a.responsive,f=Object(s.a)(a,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(d.b)(e,"table"),g=i()(n,y,_&&y+"-"+_,p&&y+"-"+p,r&&y+"-striped",c&&y+"-bordered",u&&y+"-borderless",m&&y+"-hover"),h=o.a.createElement("table",Object(l.a)({},f,{className:g,ref:t}));if(b){var x=y+"-responsive";return"string"===typeof b&&(x=x+"-"+b),o.a.createElement("div",{className:x},h)}return h}));t.a=c},WGuO:function(a,t,e){"use strict";e.r(t);var l,s=e("ODXe"),n=e("rePB"),i=e("o0o1"),r=e.n(i),o=e("1OyB"),d=e("vuIU"),c=e("Ji7U"),u=e("md7G"),m=e("foSv"),p=e("MX0m"),_=e.n(p),b=e("q1tI"),f=e.n(b),y=e("3Z9Z"),g=e("MBJH"),h=e("QojX"),x=e("+YzT"),v=e("JI6e"),k=e("zUrK"),z=e("2mvg"),w=e("vDqi"),N=e.n(w),j=e("vvUq"),P=(e("YFqc"),e("nOHt"),e("IP2g")),C=e("wHSu"),O=e("/JS1"),L=e("VbX6"),S=e("bWZ2"),G=e("qTQu"),D=e("tz4B"),A=f.a.createElement;function W(a){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,l=Object(m.a)(a);if(t){var s=Object(m.a)(this).constructor;e=Reflect.construct(l,arguments,s)}else e=l.apply(this,arguments);return Object(u.a)(this,e)}}var F=function(a){Object(c.a)(e,a);var t=W(e);function e(a){var l;return Object(o.a)(this,e),(l=t.call(this,a)).state={productsArray:[],viewProduct:!1,data:{}},l}return Object(d.a)(e,[{key:"componentDidMount",value:function(){var a,t;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.PATH+"/api/products/",t=this,e.t0=r.a,e.t1=N.a,e.t2=a,e.next=7,r.a.awrap(Object(j.c)());case 7:return e.t3=e.sent,e.t4={authorization:e.t3},e.t5={headers:e.t4},e.t6=e.t1.get.call(e.t1,e.t2,e.t5).then((function(a){console.log("data:",a.data.data),t.setState({productsArray:a.data.data})})).catch((function(a){alert("Data Fetchig Error: ",a)})),e.next=13,e.t0.awrap.call(e.t0,e.t6);case 13:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"handleEditProduct",value:function(a){console.log("edit called");var t=[];if("simple-product"!=(t=-1==a?this.state.data:this.state.productsArray[a]).product_type){var e=[];t.product_variations.forEach((function(a,t){e.push({item:a.item,price:a.price,stock:a.stock,image_link:a.image_link,price_error:"",stock_error:"",image_link_error:"",custom_fields:a.custom_fields})})),t.product_variations=e}else t.product_variations=[];this.setState({data:t,viewProduct:"edit"})}},{key:"handleDeleteProduct",value:function(a){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}}),null,null,null,Promise)}},{key:"isVariableProduct",value:function(a){return"simple-product"!=a.product_type}},{key:"renderSwitch",value:function(a){var t,e=this;switch(a){case"view":return A(V,{data:this.state.data,back:function(){return e.setState({viewProduct:!1,data:{}})},isVariableProduct:"simple-product"!=this.state.data.product_type,delete:function(){return e.handleDeleteProduct(-1)},edit:function(){return e.handleEditProduct(-1)}});case"edit":return A(D.default,(t={title:"Vendor Dashboard / All Products / Update",isUpdateProduct:!0,_id:this.state.data._id,isVariableProduct:"simple-product"!=this.state.data.product_type,back:function(){return e.setState({viewProduct:!1,data:{}})},view:function(){return e.setState({viewProduct:"view"})},delete:function(){return e.handleDeleteProduct(-1)},productCategories:this.state.data.product_category,productSubCategories:this.state.data.product_sub_category,productTags:this.state.data.product_tags,warrantyType:this.state.data.warranty_type,simple_product_image_link:this.state.data.product_image_link,variationsArray:this.state.data.product_variations,dangerousGoodsArray:this.state.data.dangerous_goods,product_name:this.state.data.product_name,product_description:this.state.data.product_description,product_type:"variable-product"},Object(n.a)(t,"product_type",this.state.data.product_type),Object(n.a)(t,"sku",this.state.data.sku),Object(n.a)(t,"product_price",this.state.data.product_price),Object(n.a)(t,"product_in_stock",this.state.data.product_in_stock),Object(n.a)(t,"product_brand_name",this.state.data.product_brand_name),Object(n.a)(t,"product_warranty",this.state.data.product_warranty),Object(n.a)(t,"warranty_type",this.state.data.warranty_type),Object(n.a)(t,"product_discount",this.state.data.product_discount),Object(n.a)(t,"purchase_note",this.state.data.purchase_note),Object(n.a)(t,"product_weight",this.state.data.product_weight),Object(n.a)(t,"dimension_length",this.state.data.dimension_length),Object(n.a)(t,"dimension_width",this.state.data.dimension_width),Object(n.a)(t,"dimension_height",this.state.data.dimension_height),Object(n.a)(t,"shipping_charges",this.state.data.shipping_charges),Object(n.a)(t,"handling_fee",this.state.data.handling_fee),t));default:return A(f.a.Fragment,null,A(G.default,{icon:C.y,title:" Vendor Dashboard / All Products"}),A(y.a,{noGutters:!0,style:{margin:"2%",background:"white"}},A(g.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},A("thead",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A("tr",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A(h.a.Check,{type:"checkbox"})),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Name"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Product Type"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"SKU"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Stock"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Price"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Categories"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Tags"),A("th",{style:{textAlign:"center"},className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},"Date"))),A("tbody",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},this.state.productsArray&&this.state.productsArray.map((function(a,t){return A(f.a.Fragment,null,e.isVariableProduct(a)?A("tr",{key:t,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A(h.a.Check,{type:"checkbox"})),A("td",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])+" td"},a.product_name,A("div",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])+" mr-auto"}),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.setState({data:a,viewProduct:"view"})}}," View "),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.handleEditProduct(t)}},"Edit"),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.handleDeleteProduct(t)}},"Delete")),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_type),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.sku?a.sku:"-"),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_variations.map((function(a){return a.stock+","}))),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_variations.map((function(a){return a.price+","}))),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_category.value+" => "+a.product_sub_category.value),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_tags&&a.product_tags.map((function(a){return a.value+","}))),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_entry_date)):A(f.a.Fragment,null,A("tr",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},A(h.a.Check,{type:"checkbox"})),A("td",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])+" td"},a.product_name,A("div",{className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])+" mr-auto"}),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.setState({data:a,viewProduct:"view"})}},"View"),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.handleEditProduct(t)}},"Edit"),A(x.a.Link,{style:E.nav_link,onClick:function(){return e.handleDeleteProduct(t)}},"Delete")),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_type),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.sku?a.sku:"-"),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_in_stock),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_price),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_category.value+" => "+a.product_sub_category.value),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_tags&&a.product_tags.map((function(a){return a.value+","}))),A("td",{align:"center",style:E.label,className:_.a.dynamic([["3582920204",[S.a.form_label_fontsize]]])},a.product_entry_date))))}))))),A(_.a,{id:"3582920204",dynamic:[S.a.form_label_fontsize]},[".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(S.a.form_label_fontsize,";}")]))}}},{key:"render",value:function(){return A(f.a.Fragment,null,A("div",null,this.renderSwitch(this.state.viewProduct)))}}]),e}(b.Component),V=function(a){var t=f.a.useState(!1),e=Object(s.a)(t,2),l=e[0],n=e[1],i=f.a.useState(""),r=Object(s.a)(i,2),o=r[0],d=r[1],c=f.a.useState(""),u=Object(s.a)(c,2),m=u[0],p=u[1],b=a.data.product_image_link.length;function g(){o>0&&d(o-1)}return A(f.a.Fragment,null,A(G.default,{icon:C.y,title:" Vendor Dashboard / All Products / ".concat(a.data.product_name)}),A(h.a.Row,{style:{margin:" 0% 2%",display:"flex",alignItems:"center"}},A(x.a.Link,{style:{fontSize:"14px"},className:"mr-auto",onClick:a.back},"Back"),A("div",{style:{fontSize:"14px"},className:"jsx-1902595393 mr-auto"}," ",a.data.product_name),A(x.a.Link,{style:{fontSize:"14px"},onClick:a.edit}," Edit "),A(x.a.Link,{style:{fontSize:"14px"},onClick:a.delete}," Delete ")),A(O.default,{title:"General Info"},A(y.a,null,A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Product Name:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_name,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Brand Name:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_brand_name,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"SKU:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.sku,disabled:!0}))),a.isVariableProduct?null:A(f.a.Fragment,null,A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Price:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_price,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Product In Stock:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_in_stock,disabled:!0})))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Warranty (month):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_warranty,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Warranty Type:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.warranty_type,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Discount (%):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_discount,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Purchase Note(s):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.purchase_note,disabled:!0}))),A(h.a.Group,{as:v.a,lg:12,md:12,sm:12,xs:12},A(h.a.Label,{style:E.label},"Description:"),A(k.a,null,A(h.a.Control,{as:"textarea",row:"5",size:"sm",value:a.data.product_description,disabled:!0}))))),a.isVariableProduct?A(O.default,{title:"Product Variations"},a.data.product_variations&&a.data.product_variations.map((function(a){return A(f.a.Fragment,null,A(y.a,null,A(h.a.Group,{as:v.a,lg:2,md:2,sm:4,xs:12},A(h.a.Label,{style:E.label},"Price"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.price,disabled:!0}))),A(h.a.Group,{as:v.a,lg:2,md:2,sm:4,xs:12},A(h.a.Label,{style:E.label},"Stock"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.stock,disabled:!0}))),a.item&&a.item.map((function(a){return A(f.a.Fragment,null,A(h.a.Group,{as:v.a,lg:2,md:2,sm:4,xs:12},A(h.a.Label,{style:E.label},a.name),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))})),a.custom_fields&&a.custom_fields.map((function(a){return A(f.a.Fragment,null,A(h.a.Group,{as:v.a,lg:2,md:2,sm:4,xs:12},A(h.a.Label,{style:E.label},a.name),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))}))),A("hr",{className:"jsx-1902595393"}))}))):A(f.a.Fragment,null,A(O.default,{title:"Custom Fields"},a.data.custom_fields&&a.data.custom_fields.map((function(a){return A(y.a,null,A(h.a.Group,{as:v.a,lg:2,md:2,sm:4,xs:12},A(h.a.Label,{style:E.label},a.name),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))}))),A(O.default,{title:"Product Images"},a.data.product_image_link&&a.data.product_image_link.map((function(t,e){return A(z.a,{thumbnail:!0,fluid:!0,style:{minWidth:"200px",maxWidth:"200px"},src:"https://drive.google.com/uc?export=view&id=".concat(t.value),alt:"Product Image",onClick:function(){n(!0),d(e),p(a.data.product_image_link)}})})))),A(O.default,{title:"Shipping Details"},A(y.a,null,A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Length (cm):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.dimension_length,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Width (cm):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.dimension_width,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Height (cm):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.dimension_height,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Weight (kg):"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.product_weight,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Shipping Charges:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.shipping_charges,disabled:!0}))),A(h.a.Group,{as:v.a,lg:4,md:4,sm:6,xs:12},A(h.a.Label,{style:E.label},"Handlink Fee:"),A(k.a,null,A(h.a.Control,{type:"text",size:"sm",value:a.data.handling_fee,disabled:!0}))))),A(O.default,{title:"Product Categories"},A(h.a.Group,null,A(h.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Product Categories:"),A(k.a,null,A(h.a.Label,{style:E.label},a.data.product_category.value+" => "+a.data.product_sub_category.value))),A("hr",{className:"jsx-1902595393"}),A(h.a.Group,null,A(h.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Product Tags:"),A(k.a,null,a.data.product_tags&&a.data.product_tags.map((function(a){return A(h.a.Label,{style:E.label},a.value)})))),A("hr",{className:"jsx-1902595393"}),A(h.a.Group,null,A(h.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Dangerous Goods:"),A(k.a,null,a.data.dangerous_goods&&a.data.dangerous_goods.map((function(a){return A(h.a.Label,{style:E.label},a.value)}))))),l?A("div",{className:"jsx-1902595393 modal-overlay"},A("div",{className:"jsx-1902595393 modal-body"},A("div",{className:"jsx-1902595393 close-modal"},A("div",{className:"jsx-1902595393 mr-auto"}),A("div",{className:"jsx-1902595393 mr-auto"}),A(P.a,{className:"mr-auto",icon:C.f,style:E.img_preview_fontawesome,onClick:function(){return g}}),A(P.a,{className:"mr-auto",icon:C.g,style:E.img_preview_fontawesome,onClick:function(){o<b-1&&d(o+1)}}),A("div",{className:"jsx-1902595393 mr-auto"}),A(P.a,{icon:C.H,style:E.img_preview_fontawesome,onClick:function(){return n(!1)}})),A("div",{className:"jsx-1902595393 image-container"},A("img",{src:m[o].value,style:{maxWidth:"100%",maxHeight:"90vh",margin:"auto"},className:"jsx-1902595393"})))):null,A(_.a,{id:"1902595393"},[".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}",".modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}",".close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}",".image-container.jsx-1902595393{display:grid;height:100%;}"]))},E=(l={label:{fontSize:"".concat(S.a.form_label_fontsize)},nav_link:{paddingLeft:"10px",paddingRight:"5px"}},Object(n.a)(l,"label",{fontSize:"".concat(S.a.form_label_fontsize),color:"".concat(S.a.admin_primry_color),marginRight:"2%"}),Object(n.a)(l,"row",{margin:"2%",padding:"0%"}),Object(n.a)(l,"img_preview_fontawesome",{cursor:"pointer",color:"white",fontWeight:"lighter",width:"30px",height:"30px",maxHeight:"30px",maxWidth:"30px"}),Object(n.a)(l,"fontawesome",{color:"".concat(S.a.admin_primry_color),marginRight:"10%",width:"17px",height:"17px",maxHeight:"17px",maxWidth:"17px"}),Object(n.a)(l,"general_info_label",{fontSize:"".concat(S.a.form_label_fontsize),width:"100%",borderBottom:"1px solid gray"}),Object(n.a)(l,"field_label",{border:"1px solid ".concat(S.a.body_color),color:"".concat(S.a.admin_primry_color),margin:"0%",width:"100%",padding:"2px 5px"}),Object(n.a)(l,"card",{width:"100%",border:"1px solid lightgray"}),Object(n.a)(l,"card_header",{alignItems:"center",fontSize:"".concat(S.a.card_header_fontsize),background:"".concat(S.a.card_header_background)}),l);t.default=F}}]);