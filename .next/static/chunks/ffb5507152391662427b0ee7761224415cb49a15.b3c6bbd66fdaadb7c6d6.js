(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{MBJH:function(a,t,e){"use strict";var l=e("wx14"),o=e("zLVn"),s=e("TSYQ"),n=e.n(s),i=e("q1tI"),r=e.n(i),d=e("vUet"),c=r.a.forwardRef((function(a,t){var e=a.bsPrefix,s=a.className,i=a.striped,c=a.bordered,u=a.borderless,m=a.hover,f=a.size,_=a.variant,p=a.responsive,b=Object(o.a)(a,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(d.b)(e,"table"),y=n()(s,h,_&&h+"-"+_,f&&h+"-"+f,i&&h+"-striped",c&&h+"-bordered",u&&h+"-borderless",m&&h+"-hover"),g=r.a.createElement("table",Object(l.a)({},b,{className:y,ref:t}));if(p){var x=h+"-responsive";return"string"===typeof p&&(x=x+"-"+p),r.a.createElement("div",{className:x},g)}return g}));t.a=c},sUJQ:function(a,t,e){"use strict";e.r(t);var l,o=e("wx14"),s=e("ODXe"),n=e("rePB"),i=e("o0o1"),r=e.n(i),d=e("1OyB"),c=e("vuIU"),u=e("Ji7U"),m=e("md7G"),f=e("foSv"),_=e("MX0m"),p=e.n(_),b=e("q1tI"),h=e.n(b),y=e("3Z9Z"),g=e("MBJH"),x=e("+YzT"),v=e("QojX"),z=e("JI6e"),w=e("zUrK"),k=e("2mvg"),N=e("zM5D"),j=e("cWnB"),C=e("vDqi"),P=e.n(C),S=e("vvUq"),O=(e("YFqc"),e("nOHt"),e("IP2g")),L=e("wHSu"),D=e("twK/"),G=e("/JS1"),A=e("VbX6"),H=e("bWZ2"),W=e("qTQu"),E=e("tz4B"),F=e("f6Jz"),T=h.a.createElement;function M(a){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,l=Object(f.a)(a);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(l,arguments,o)}else e=l.apply(this,arguments);return Object(m.a)(this,e)}}var V=function(a){Object(u.a)(e,a);var t=M(e);function e(a){var l;return Object(d.a)(this,e),(l=t.call(this,a)).state={showConfirmDeleteModal:!1,showToast:!1,productsArray:[],showProduct:!1,data:{}},l}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var a,t;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A.a.PATH+"/api/products/",t=this,e.t0=r.a,e.t1=P.a,e.t2=a,e.next=7,r.a.awrap(Object(S.c)());case 7:return e.t3=e.sent,e.t4={authorization:e.t3},e.t5={headers:e.t4},e.t6=e.t1.get.call(e.t1,e.t2,e.t5).then((function(a){console.log("data:",a.data.data),t.setState({productsArray:a.data.data})})).catch((function(a){alert("Data Fetchig Error: ",a)})),e.next=13,e.t0.awrap.call(e.t0,e.t6);case 13:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"handleEditProduct",value:function(a){console.log("edit called");var t=[];if("simple-product"!=(t=-1==a?this.state.data:this.state.productsArray[a]).product_type){var e=[];t.product_variations.forEach((function(a,t){e.push({item:a.item,price:a.price,stock:a.stock,image_link:a.image_link,price_error:"",stock_error:"",image_link_error:"",custom_fields:a.custom_fields})})),t.product_variations=e}else t.product_variations=[];this.setState({data:t,showProduct:"edit"})}},{key:"handleDeleteProduct",value:function(){var a,t,e;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=this.state.data._id,console.log("fuck fuck",a),t=A.a.PATH+"/api/products/".concat(a),this.setState({showConfirmDeleteModal:!1}),e=this,l.t0=r.a,l.t1=P.a,l.t2=t,l.next=10,r.a.awrap(Object(S.c)());case 10:return l.t3=l.sent,l.t4={authorization:l.t3},l.t5={headers:l.t4},l.t6=l.t1.delete.call(l.t1,l.t2,l.t5).then((function(t){var l=Object.assign([],e.state.productsArray),o=l;l.forEach((function(t,e){t._id!=a||o.splice(e,1)})),e.setState({productsArray:o,showToast:!0})})).catch((function(a){try{alert("Error Message: ",a.response.data.message)}catch(t){console.log("Error: ",a)}})),l.next=16,l.t0.awrap.call(l.t0,l.t6);case 16:case"end":return l.stop()}}),null,this,null,Promise)}},{key:"isVariableProduct",value:function(a){return"simple-product"!=a.product_type}},{key:"renderSwitch",value:function(a){var t,e=this;switch(a){case"view":return T(I,{data:this.state.data,back:function(){return e.setState({showProduct:!1,data:{}})},isVariableProduct:"simple-product"!=this.state.data.product_type,delete:function(){return e.setState({showConfirmDeleteModal:!0})},edit:function(){return e.handleEditProduct(-1)}});case"edit":return T(E.default,(t={title:"Vendor Dashboard / All Products / Update",isUpdateProduct:!0,_id:this.state.data._id,isVariableProduct:"simple-product"!=this.state.data.product_type,back:function(){return e.setState({showProduct:!1,data:{}})},view:function(){return e.setState({showProduct:"view"})},delete:function(){return e.setState({showConfirmDeleteModal:!0,showProduct:!1})},productCategories:this.state.data.product_category,productSubCategories:this.state.data.product_sub_category,productTags:this.state.data.product_tags,warrantyType:this.state.data.warranty_type,simple_product_image_link:this.state.data.product_image_link,variationsArray:this.state.data.product_variations,dangerousGoodsArray:this.state.data.dangerous_goods,product_name:this.state.data.product_name,product_description:this.state.data.product_description,product_type:"variable-product"},Object(n.a)(t,"product_type",this.state.data.product_type),Object(n.a)(t,"sku",this.state.data.sku),Object(n.a)(t,"product_price",this.state.data.product_price),Object(n.a)(t,"product_in_stock",this.state.data.product_in_stock),Object(n.a)(t,"product_brand_name",this.state.data.product_brand_name),Object(n.a)(t,"product_warranty",this.state.data.product_warranty),Object(n.a)(t,"warranty_type",this.state.data.warranty_type),Object(n.a)(t,"product_discount",this.state.data.product_discount),Object(n.a)(t,"purchase_note",this.state.data.purchase_note),Object(n.a)(t,"product_weight",this.state.data.product_weight),Object(n.a)(t,"dimension_length",this.state.data.dimension_length),Object(n.a)(t,"dimension_width",this.state.data.dimension_width),Object(n.a)(t,"dimension_height",this.state.data.dimension_height),Object(n.a)(t,"shipping_charges",this.state.data.shipping_charges),Object(n.a)(t,"handling_fee",this.state.data.handling_fee),t));default:return T(h.a.Fragment,null,T(W.default,{icon:L.y,title:" Vendor Dashboard / All Products"}),T(y.a,{noGutters:!0,style:{margin:"2%",background:"white"}},T(g.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},T("thead",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},T("tr",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"#"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Name"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Product ID"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Product Type"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"SKU"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Stock"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Price"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Categories"),T("th",{style:{textAlign:"center"},className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},"Date"))),T("tbody",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},this.state.productsArray&&this.state.productsArray.map((function(a,t){return T(h.a.Fragment,null,e.isVariableProduct(a)?T("tr",{key:t,className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},t+1),T("td",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])+" td"},a.product_name,T("div",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])+" mr-auto"}),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.setState({data:a,showProduct:"view"})}}," View "),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.handleEditProduct(t)}},"Edit"),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.setState({data:a,showConfirmDeleteModal:!0,showProduct:!1})}},"Delete")),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a._id),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_type),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.sku?a.sku:"-"),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_variations.map((function(a){return a.stock+","}))),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_variations.map((function(a){return a.price+","}))),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_category.value+" => "+a.product_sub_category.value),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_entry_date)):T(h.a.Fragment,null,T("tr",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},t+1),T("td",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])+" td"},a.product_name,T("div",{className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])+" mr-auto"}),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.setState({data:a,showProduct:"view"})}},"View"),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.handleEditProduct(t)}},"Edit"),T(x.a.Link,{style:B.nav_link,onClick:function(){return e.setState({data:a,showConfirmDeleteModal:!0,showProduct:!1})}},"Delete")),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a._id),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_type),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.sku?a.sku:"-"),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_in_stock),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_price),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_category.value+" => "+a.product_sub_category.value),T("td",{align:"center",className:p.a.dynamic([["2661101606",[H.a.form_label_fontsize,H.a.form_label_fontsize]]])},a.product_entry_date))))}))))),T(p.a,{id:"2661101606",dynamic:[H.a.form_label_fontsize,H.a.form_label_fontsize]},[".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(H.a.form_label_fontsize,";}"),"td.__jsx-style-dynamic-selector{vertical-align:middle;font-size:".concat(H.a.form_label_fontsize,";}")]))}}},{key:"render",value:function(){var a=this;return T(h.a.Fragment,null,T(R,{onHide:function(){return a.setState({showConfirmDeleteModal:!1})},show:this.state.showConfirmDeleteModal,_id:this.state.data._id,product_name:this.state.data.product_name,confirmDelete:this.handleDeleteProduct.bind(this)}),T(F.default,{onHide:function(t){return a.setState({showToast:!1})},show:this.state.showToast,header:"Success",message:"Product Deleted Successfully.",iconName:D.b,color:"#00b300"}),T("div",null,this.renderSwitch(this.state.showProduct)))}}]),e}(b.Component),I=function(a){var t=h.a.useState(!1),e=Object(s.a)(t,2),l=e[0],o=e[1],n=h.a.useState(""),i=Object(s.a)(n,2),r=i[0],d=i[1],c=h.a.useState(""),u=Object(s.a)(c,2),m=u[0],f=u[1],_=a.data.product_image_link.length;function b(){r>0&&d(r-1)}return T(h.a.Fragment,null,T(W.default,{icon:L.y,title:" Vendor Dashboard / All Products / ".concat(a.data.product_name)}),T(v.a.Row,{style:{margin:" 0% 2%",display:"flex",alignItems:"center"}},T(x.a.Link,{style:{fontSize:"14px"},className:"mr-auto",onClick:a.back},"Back"),T("div",{style:{fontSize:"14px"},className:"jsx-1902595393 mr-auto"}," ",a.data.product_name),T(x.a.Link,{style:{fontSize:"14px"},onClick:a.edit}," Edit "),T(x.a.Link,{style:{fontSize:"14px"},onClick:a.delete}," Delete ")),T(G.default,{title:"General Info"},T(y.a,null,T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Product Name:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_name,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Brand Name:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_brand_name,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"SKU:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.sku,disabled:!0}))),a.isVariableProduct?null:T(h.a.Fragment,null,T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Price:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_price,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Product In Stock:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_in_stock,disabled:!0})))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Warranty (month):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_warranty,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Warranty Type:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.warranty_type,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Discount (%):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_discount,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Purchase Note(s):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.purchase_note,disabled:!0}))),T(v.a.Group,{as:z.a,lg:12,md:12,sm:12,xs:12},T(v.a.Label,{style:B.label},"Description:"),T(w.a,null,T(v.a.Control,{as:"textarea",row:"5",size:"sm",value:a.data.product_description,disabled:!0}))))),a.isVariableProduct?T(G.default,{title:"Product Variations"},a.data.product_variations&&a.data.product_variations.map((function(a){return T(h.a.Fragment,null,T(y.a,null,T(v.a.Group,{as:z.a,lg:2,md:2,sm:4,xs:12},T(v.a.Label,{style:B.label},"Price"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.price,disabled:!0}))),T(v.a.Group,{as:z.a,lg:2,md:2,sm:4,xs:12},T(v.a.Label,{style:B.label},"Stock"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.stock,disabled:!0}))),a.item&&a.item.map((function(a){return T(h.a.Fragment,null,T(v.a.Group,{as:z.a,lg:2,md:2,sm:4,xs:12},T(v.a.Label,{style:B.label},a.name),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))})),a.custom_fields&&a.custom_fields.map((function(a){return T(h.a.Fragment,null,T(v.a.Group,{as:z.a,lg:2,md:2,sm:4,xs:12},T(v.a.Label,{style:B.label},a.name),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))}))),T("hr",{className:"jsx-1902595393"}))}))):T(h.a.Fragment,null,T(G.default,{title:"Custom Fields"},a.data.custom_fields&&a.data.custom_fields.map((function(a){return T(y.a,null,T(v.a.Group,{as:z.a,lg:2,md:2,sm:4,xs:12},T(v.a.Label,{style:B.label},a.name),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.value,disabled:!0}))))}))),T(G.default,{title:"Product Images"},a.data.product_image_link&&a.data.product_image_link.map((function(t,e){return T(k.a,{thumbnail:!0,fluid:!0,style:{minWidth:"200px",maxWidth:"200px"},src:"https://drive.google.com/uc?export=view&id=".concat(t.value),alt:"Product Image",onClick:function(){o(!0),d(e),f(a.data.product_image_link)}})})))),T(G.default,{title:"Shipping Details"},T(y.a,null,T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Length (cm):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.dimension_length,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Width (cm):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.dimension_width,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Height (cm):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.dimension_height,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Weight (kg):"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.product_weight,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Shipping Charges:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.shipping_charges,disabled:!0}))),T(v.a.Group,{as:z.a,lg:4,md:4,sm:6,xs:12},T(v.a.Label,{style:B.label},"Handlink Fee:"),T(w.a,null,T(v.a.Control,{type:"text",size:"sm",value:a.data.handling_fee,disabled:!0}))))),T(G.default,{title:"Product Categories"},T(v.a.Group,null,T(v.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Product Categories:"),T(w.a,null,T(v.a.Label,{style:B.label},a.data.product_category.value+" => "+a.data.product_sub_category.value))),T("hr",{className:"jsx-1902595393"}),T(v.a.Group,null,T(v.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Product Tags:"),T(w.a,null,a.data.product_tags&&a.data.product_tags.map((function(a){return T(v.a.Label,{style:B.label},a.value)})))),T("hr",{className:"jsx-1902595393"}),T(v.a.Group,null,T(v.a.Label,{style:{fontSie:"13px",fontWeight:"bold"}},"Dangerous Goods:"),T(w.a,null,a.data.dangerous_goods&&a.data.dangerous_goods.map((function(a){return T(v.a.Label,{style:B.label},a.value)}))))),l?T("div",{className:"jsx-1902595393 modal-overlay"},T("div",{className:"jsx-1902595393 modal-body"},T("div",{className:"jsx-1902595393 close-modal"},T("div",{className:"jsx-1902595393 mr-auto"}),T("div",{className:"jsx-1902595393 mr-auto"}),T(O.a,{className:"mr-auto",icon:L.f,style:B.img_preview_fontawesome,onClick:function(){return b}}),T(O.a,{className:"mr-auto",icon:L.g,style:B.img_preview_fontawesome,onClick:function(){r<_-1&&d(r+1)}}),T("div",{className:"jsx-1902595393 mr-auto"}),T(O.a,{icon:L.H,style:B.img_preview_fontawesome,onClick:function(){return o(!1)}})),T("div",{className:"jsx-1902595393 image-container"},T("img",{src:m[r].value,style:{maxWidth:"100%",maxHeight:"90vh",margin:"auto"},className:"jsx-1902595393"})))):null,T(p.a,{id:"1902595393"},[".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}",".modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}",".close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}",".image-container.jsx-1902595393{display:grid;height:100%;}"]))},B=(l={label:{fontSize:"".concat(H.a.form_label_fontsize)},nav_link:{paddingLeft:"10px",paddingRight:"5px"}},Object(n.a)(l,"label",{fontSize:"".concat(H.a.form_label_fontsize),color:"".concat(H.a.admin_primry_color),marginRight:"2%"}),Object(n.a)(l,"row",{margin:"2%",padding:"0%"}),Object(n.a)(l,"img_preview_fontawesome",{cursor:"pointer",color:"white",fontWeight:"lighter",width:"30px",height:"30px",maxHeight:"30px",maxWidth:"30px"}),Object(n.a)(l,"fontawesome",{color:"".concat(H.a.admin_primry_color),marginRight:"10%",width:"17px",height:"17px",maxHeight:"17px",maxWidth:"17px"}),Object(n.a)(l,"general_info_label",{fontSize:"".concat(H.a.form_label_fontsize),width:"100%",borderBottom:"1px solid gray"}),Object(n.a)(l,"field_label",{border:"1px solid ".concat(H.a.body_color),color:"".concat(H.a.admin_primry_color),margin:"0%",width:"100%",padding:"2px 5px"}),Object(n.a)(l,"card",{width:"100%",border:"1px solid lightgray"}),Object(n.a)(l,"card_header",{alignItems:"center",fontSize:"".concat(H.a.card_header_fontsize),background:"".concat(H.a.card_header_background)}),l);function R(a){return T(N.a,Object(o.a)({},a,{size:"md","aria-labelledby":"alert-modal",centered:!0}),T("div",{style:{border:"1px solid #ff3333",borderRadius:"5px"}},T(N.a.Header,{closeButton:!0,style:{color:"#ff3333",borderBottom:"1px solid #ff3333"}},T(O.a,{icon:L.J,style:{color:"#ff3333",marginRight:"10px",width:"35px",height:"35px",maxHeight:"35px",maxWidth:"35px"}}),T(N.a.Title,{id:"alert-modal"},"Delete Product ?")),T(N.a.Body,null,T(v.a.Label,{style:{fontSize:"14px",padding:"0%",margin:"0%"}},"Product Name: ".concat(a.product_name),"Product ID: ".concat(a._id))),T(N.a.Footer,null,T(j.a,{size:"sm",variant:"outline-danger",className:"mr-auto",onClick:a.confirmDelete},"Confirm"),T(j.a,{size:"sm",variant:"outline-primary",onClick:a.onHide},"Cancel"))))}t.default=V}}]);