(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{G7yv:function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),s=a.n(r),o=a("1OyB"),n=a("vuIU"),l=a("JX7q"),i=a("Ji7U"),u=a("md7G"),c=a("foSv"),g=a("rePB"),d=a("QojX"),h=a("JI6e"),y=a("zUrK"),b=a("cWnB"),p=a("T/rR"),v=(a("IP2g"),a("wHSu")),C=a("twK/"),f=a("q1tI"),m=a.n(f),w=a("VbX6"),x=a("bWZ2"),S=a("vDqi"),k=a.n(S),L=a("f6Jz"),V=a("qTQu"),E=a("/JS1"),j=a("vvUq"),z=m.a.createElement;function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=Object(c.a)(t);if(e){var s=Object(c.a)(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return Object(u.a)(this,a)}}var M=[],_=function(t){Object(i.a)(a,t);var e=O(a);function a(t){var r;return Object(o.a)(this,a),r=e.call(this,t),Object(g.a)(Object(l.a)(r),"handleCategoryChange",(function(t,e){var a=[];(a=Object.assign([],r.state.categoryList))[e].value=t.target.value,""!=t.target.value&&t.target.value.length<=20&&t.target.value.length>=3?a[e].error="":a[e].error="Value must be 3-20 characters",r.setState({categoryList:a})})),Object(g.a)(Object(l.a)(r),"handleDeleteCategoryClick",(function(t){var e=[];e=Object.assign([],r.state.categoryList),M.forEach((function(a,r){e[t].value==a.value&&M.splice(t,1)})),e.splice(t,1),r.setState({categoryList:e,showModalMessage:"Product Category Deleted",showModal:!0})})),r.state={isLoading:!1,showToast:!1,categoryValue:"",subCategoryValue:"",categoryError:"",subCategoryError:"",categoryList:[],categoryRequestList:[],editRequestedCategory:"",showModalMessage:"",showModal:!1,filterStr:""},r}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t,e;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=w.a.PATH+"/api/categories/categories",e=this,a.t0=s.a,a.t1=k.a,a.t2=t,a.next=7,s.a.awrap(Object(j.c)());case 7:return a.t3=a.sent,a.t4={authorization:a.t3},a.t5={headers:a.t4},a.t6=a.t1.get.call(a.t1,a.t2,a.t5).then((function(t){var a;a=t.data.data,e.setState({categoryList:a}),e.setState({categoryRequestList:e.state.categoryList}),M=a})).catch((function(t){console.log("Caterories_1 Fetchig Error: ",t)})),a.next=13,a.t0.awrap.call(a.t0,a.t6);case 13:case"end":return a.stop()}}),null,this,null,Promise)}},{key:"addCategory",value:function(t){var e,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return[],e={category:{value:this.state.categoryValue,label:this.state.categoryValue},sub_category:{value:this.state.subCategoryValue,label:this.state.subCategoryValue}},a=w.a.PATH+"/api/categories/category",r.t0=s.a,r.t1=k.a,r.t2=a,r.t3={data:e},r.next=9,s.a.awrap(Object(j.c)());case 9:return r.t4=r.sent,r.t5={authorization:r.t4},r.t6={headers:r.t5},r.t7=r.t1.post.call(r.t1,r.t2,r.t3,r.t6).then((function(e){return t.setState({isLoading:!1}),t.setState({showModalMessage:"Product Category Added Successfully"}),t.setState({showModal:!0}),!0})).catch((function(e){return t.setState({isLoading:!1}),alert("Error: ",e.response.data.message),!1})),r.next=15,r.t0.awrap.call(r.t0,r.t7);case 15:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"handleFilterStrChange",value:function(t){if(this.setState({filterStr:t.target.value}),""==t.target.value)this.setState({categoryList:M});else{var e=[];this.state.categoryList.filter((function(a){a.value.includes(t.target.value)&&e.push(a)})),this.setState({categoryList:e})}}},{key:"handleSubmit",value:function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:""==this.state.categoryValue||""==this.state.subCategoryValue?(""==this.state.categoryValue&&this.setState({categoryError:"Enter Value First"}),""==this.state.subCategoryValue&&this.setState({subCategoryError:"Enter Value First"})):(this.setState({isLoading:!0}),this.addCategory(this));case 1:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"handleEditCategoryClick",value:function(t){var e,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[],e=Object.assign([],this.state.categoryList),(a={}).value=e[t].value,a.label=!1,a.prevVal=e[t].value,a.error="",e[t]=a,r.next=10,s.a.awrap(this.setState({categoryList:e}));case 10:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"handleCancelCategoryClick",value:function(t){var e=[];(e=Object.assign([],this.state.categoryList))[t].value=e[t].prevVal,e[t].error="",e[t].label=!0,this.setState({categoryList:e})}},{key:"handleUpdateCategoryClick",value:function(t){var e=[];(e=Object.assign([],this.state.categoryList))[t].value==e[t].prevVal?(e[t].error="Enter Different Value",this.setState({categoryRequestList:e})):""==e[t].error&&(e[t].label=!0,M.forEach((function(a,r){e[t].prevVal==a.value&&(a.value=e[t].value)})),this.setState({categoryList:e,showModalMessage:"Product Category Updated Successfully",showModal:!0}))}},{key:"render",value:function(){var t=this;return z(m.a.Fragment,null,z(L.default,{onHide:function(e){return t.setState({showModal:!1})},show:this.state.showModal,header:"Success",message:this.state.showModalMessage,iconName:C.b,color:"#00b300"}),z(V.default,{icon:v.s,title:" Admin Dashboard / Product Categories"}),z(E.default,{title:"Add New Category"},z(d.a.Row,null,z(d.a.Group,{as:h.a,lg:4,md:4,sm:4,xs:12},z(d.a.Label,{style:R.label},"Category"),z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:this.state.categoryValue,onChange:function(e){return t.setState({categoryValue:e.target.value,categoryError:""})},isInvalid:this.state.categoryError}),z(d.a.Control.Feedback,{type:"invalid"},this.state.categoryError))),z(d.a.Group,{as:h.a,lg:4,md:4,sm:4,xs:12},z(d.a.Label,{style:R.label},"Sub Category"),z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:this.state.subCategoryValue,onChange:function(e){return t.setState({subCategoryValue:e.target.value,subCategoryError:""})},isInvalid:this.state.subCategoryError}),z(d.a.Control.Feedback,{type:"invalid"},this.state.subCategoryError)))),z(d.a.Group,null,z(b.a,{type:"submit",size:"sm",onClick:this.handleSubmit.bind(this),disabled:this.state.isLoading,block:!0,style:R.submit_btn},this.state.isLoading?"Uploading":"Add Category",this.state.isLoading?z(p.a,{animation:"grow",size:"sm"}):null))),z(E.default,{title:"All Categories"},z(d.a.Row,{style:{margin:"0% 5%"}},z(d.a.Group,{as:h.a},z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:this.state.filterStr,onChange:function(e){return t.handleFilterStrChange(e)}})))),z("hr",null),this.state.categoryList.map((function(e,a){return z(d.a.Row,null,z(d.a.Group,{as:h.a,lg:"auto",md:"auto",sm:"auto",xs:12},z(d.a.Control,{type:"text",size:"sm",name:"sku",value:e.entry_date,disabled:!0})),z(d.a.Group,{as:h.a,lg:3,md:3,sm:3,xs:12},z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:e.category,onChange:function(e){return t.handleCategoryChange(e,a)},disabled:e.label,isInvalid:e.error}),z(d.a.Control.Feedback,{type:"invalid"},e.error))),z(d.a.Group,{as:h.a,lg:3,md:3,sm:3,xs:12},z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:e.sub_category,onChange:function(e){return t.handleCategoryChange(e,a)},disabled:e.label,isInvalid:e.error}),z(d.a.Control.Feedback,{type:"invalid"},e.error))),z(d.a.Group,{as:h.a,lg:3,md:3,sm:3,xs:12},z(y.a,null,z(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Category Value",name:"sku",value:e.sub_sub_category,onChange:function(e){return t.handleCategoryChange(e,a)},disabled:e.label,isInvalid:e.error}),z(d.a.Control.Feedback,{type:"invalid"},e.error))),z(d.a.Group,{as:h.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},z(b.a,{type:"submit",variant:"outline-success",size:"sm",block:!0,style:R.submit_btn,onClick:e.label?function(){return t.handleEditCategoryClick(a)}:function(){return t.handleUpdateCategoryClick(a)}},z("div",null,e.label?"Edit":"Update"))),z("div",{className:"mr-auto"}),z(d.a.Group,{as:h.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},z(b.a,{type:"submit",variant:e.label?"outline-danger":"outline-primary",size:"sm",block:!0,style:R.submit_btn,onClick:e.label?function(){return t.handleDeleteCategoryClick(a)}:function(){return t.handleCancelCategoryClick(a)}},z("div",null,e.label?"Delete":"Cancel"))))}))))}}]),a}(f.Component),R={title_row:{borderBottom:"1px solid gray",padding:"1.5% 4%"},title_fontawesome:{color:"gray",marginRight:"3%",width:"26px",height:"26px",maxHeight:"26px",maxWidth:"26px"},title:{color:"gray"},card:{margin:"2%"},card_body:{},label:{fontSize:"".concat(x.a.form_label_fontsize)},error:{width:"100%",textAlign:"center",color:"#DC3545",fontSize:"14px"},accordin_fontawesome:{color:"".concat(x.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};e.default=_}}]);