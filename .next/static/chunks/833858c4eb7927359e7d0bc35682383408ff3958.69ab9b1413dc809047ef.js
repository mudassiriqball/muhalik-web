(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{yXNp:function(e,t,a){"use strict";a.r(t);var l=a("o0o1"),s=a.n(l),i=a("1OyB"),n=a("vuIU"),r=a("JX7q"),u=a("Ji7U"),o=a("md7G"),d=a("foSv"),c=a("rePB"),h=a("QojX"),f=a("zUrK"),v=a("cWnB"),m=a("T/rR"),p=a("JI6e"),b=(a("IP2g"),a("wHSu")),g=a("twK/"),y=a("q1tI"),k=a.n(y),C=a("VbX6"),F=a("bWZ2"),w=a("vDqi"),S=a.n(w),x=a("f6Jz"),R=a("qTQu"),L=a("/JS1"),q=a("vvUq"),j=k.a.createElement;function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=Object(d.a)(e);if(t){var s=Object(d.a)(this).constructor;a=Reflect.construct(l,arguments,s)}else a=l.apply(this,arguments);return Object(o.a)(this,a)}}var O=[],V=function(e){Object(u.a)(a,e);var t=M(a);function a(e){var l;return Object(i.a)(this,a),l=t.call(this,e),Object(c.a)(Object(r.a)(l),"handleFieldRequestChange",(function(e,t){var a=[];(a=Object.assign([],l.state.fieldRequestList))[t].value=e.target.value,""!=e.target.value&&e.target.value.length<=20&&e.target.value.length>=3?a[t].error="":a[t].error="Value must be 3-20 characters",l.setState({fieldRequestList:a})})),Object(c.a)(Object(r.a)(l),"handleFieldChange",(function(e,t){var a=[];(a=Object.assign([],l.state.fieldList))[t].value=e.target.value,""!=e.target.value&&e.target.value.length<=20&&e.target.value.length>=3?a[t].error="":a[t].error="Value must be 3-20 characters",l.setState({fieldList:a})})),Object(c.a)(Object(r.a)(l),"handleDeleteFieldClick",(function(e){var t=[];t=Object.assign([],l.state.fieldList),O.forEach((function(a,l){t[e].value==a.value&&O.splice(e,1)})),t.splice(e,1),l.setState({fieldList:t,showModalMessage:"Product Field Deleted",showModal:!0})})),l.state={isLoading:!1,showToast:!1,fieldValue:"",error:"",fieldList:[],fieldRequestList:[],editRequestedField:"",showModalMessage:"",showModal:!1,filterStr:""},l}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=C.a.PATH+"/api/categories/fields",t=this,a.t0=s.a,a.t1=S.a,a.t2=e,a.next=7,s.a.awrap(Object(q.c)());case 7:return a.t3=a.sent,a.t4={authorization:a.t3},a.t5={headers:a.t4},a.t6=a.t1.get.call(a.t1,a.t2,a.t5).then((function(e){var a=[];(a=e.data.data.docs).forEach((function(e,t){e.label=!0})),t.setState({fieldList:a}),t.setState({fieldRequestList:a}),O=a})).catch((function(e){alert("F error: ",e)})),a.next=13,a.t0.awrap.call(a.t0,a.t6);case 13:case"end":return a.stop()}}),null,this,null,Promise)}},{key:"addField",value:function(e,t){var a,l;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=C.a.PATH+"/api/categories/field",[],l={label:e,value:e},i.t0=s.a,i.t1=S.a,i.t2=a,i.t3={data:l},i.next=9,s.a.awrap(Object(q.c)());case 9:return i.t4=i.sent,i.t5={authorization:i.t4},i.t6={headers:i.t5},i.t7=i.t1.post.call(i.t1,i.t2,i.t3,i.t6).then((function(e){t.setState({isLoading:!1}),t.setState({showModalMessage:"Product Field Added Successfully"}),t.setState({showModal:!0})})).catch((function(e){t.setState({isLoading:!1}),alert("Error: ",e.response.data.message)})),i.next=15,i.t0.awrap.call(i.t0,i.t7);case 15:case"end":return i.stop()}}),null,null,null,Promise)}},{key:"handleFilterStrChange",value:function(e){if(this.setState({filterStr:e.target.value}),""==e.target.value)this.setState({fieldList:O});else{var t=[];this.state.fieldList.filter((function(a){a.value.includes(e.target.value)&&t.push(a)})),this.setState({fieldList:t})}}},{key:"handleSubmit",value:function(){""==this.state.fieldValue?this.setState({error:"Enter Value First"}):(this.setState({isLoading:!0}),this.setState({error:""}),this.addField(this.state.fieldValue,this))}},{key:"handleEditFieldRequestClick",value:function(e){var t,a;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=[],t=Object.assign([],this.state.fieldRequestList),(a={}).value=t[e].value,a.label=!1,a.prevVal=t[e].value,a.error="",t[e]=a,l.next=10,s.a.awrap(this.setState({fieldRequestList:t}));case 10:case"end":return l.stop()}}),null,this,null,Promise)}},{key:"handleCancelFieldRequestClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldRequestList))[e].value=t[e].prevVal,t[e].label=!0,t[e].error="",this.setState({fieldRequestList:t})}},{key:"handleUpdateFieldRequestClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldRequestList))[e].value==t[e].prevVal?(t[e].error="Enter Different Value",this.setState({fieldRequestList:t})):""==t[e].error&&(t[e].label=!0,this.setState({fieldRequestList:t,showModalMessage:"Product Field Updated Successfully",showModal:!0}))}},{key:"handleAddFieldRequestClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldRequestList)).splice(e,1),this.setState({fieldRequestList:t,showModalMessage:"Product Field Added Successfully",showModal:!0}),this.addField(t[e].value,this)}},{key:"handleDeleteFieldRequestClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldRequestList)).splice(e,1),this.setState({fieldRequestList:t,showModalMessage:"Product Field Deleted",showModal:!0})}},{key:"handleEditFieldClick",value:function(e){var t,a;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=[],t=Object.assign([],this.state.fieldList),(a={}).value=t[e].value,a.label=!1,a.prevVal=t[e].value,a.error="",t[e]=a,l.next=10,s.a.awrap(this.setState({fieldList:t}));case 10:case"end":return l.stop()}}),null,this,null,Promise)}},{key:"handleCancelFieldClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldList))[e].value=t[e].prevVal,t[e].error="",t[e].label=!0,this.setState({fieldList:t})}},{key:"handleUpdateFieldClick",value:function(e){var t=[];(t=Object.assign([],this.state.fieldList))[e].value==t[e].prevVal?(t[e].error="Enter Different Value",this.setState({fieldRequestList:t})):""==t[e].error&&(t[e].label=!0,O.forEach((function(a,l){t[e].prevVal==a.value&&(a.value=t[e].value)})),this.setState({fieldList:t,showModalMessage:"Product Field Updated Successfully",showModal:!0}))}},{key:"render",value:function(){var e=this;return j(k.a.Fragment,null,j(x.default,{onHide:function(t){return e.setState({showModal:!1})},show:this.state.showModal,header:"Success",message:this.state.showModalMessage,iconName:g.b,color:"#00b300"}),j(R.default,{icon:b.s,title:" Admin Dashboard / Product Fields"}),j(L.default,{title:"Add New Field"},j(h.a.Group,null,j(f.a,null,j(h.a.Control,{type:"text",size:"sm",placeholder:"Enter Field Value",name:"sku",value:this.state.fieldValue,onChange:function(t){return e.setState({fieldValue:t.target.value})},isInvalid:this.state.error}),j(h.a.Control.Feedback,{type:"invalid"},this.state.error))),j(h.a.Group,null,j(v.a,{type:"submit",variant:"outline-primary",size:"sm",onClick:this.handleSubmit.bind(this),disabled:this.state.isLoading,block:!0,style:z.submit_btn},this.state.isLoading?"Uploading":"Add Field",this.state.isLoading?j(m.a,{animation:"grow",size:"sm"}):null))),j(L.default,{title:"Add Field Requests"},this.state.fieldRequestList.map((function(t,a){return j(h.a.Row,null,j(h.a.Group,{as:p.a,lg:2,md:2,sm:3,xs:12},j(h.a.Control,{type:"text",size:"sm",name:"sku",value:t.entry_date,disabled:!0})),j(h.a.Group,{as:p.a,lg:2,md:2,sm:3,xs:12},j(h.a.Control,{type:"text",size:"sm",name:"sku",value:t.entry_date,disabled:!0})),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:4,md:4,sm:6,xs:12},j(f.a,null,j(h.a.Control,{type:"text",size:"sm",placeholder:"Enter Field Value",name:"sku",value:t.value,onChange:function(t){return e.handleFieldRequestChange(t,a)},isInvalid:t.error,disabled:t.label}),j(h.a.Control.Feedback,{type:"invalid"},t.error))),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},j(v.a,{type:"submit",variant:"outline-success",size:"sm",block:!0,style:z.submit_btn,onClick:function(){return t.label?e.handleEditFieldRequestClick(a):e.handleUpdateFieldRequestClick(a)}},j("div",null,t.label?"Edit":"Update"))),j(h.a.Group,{as:p.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},j(v.a,{type:"submit",variant:"outline-primary",size:"sm",block:!0,style:z.submit_btn,onClick:function(){t.label?e.handleAddFieldRequestClick(a):e.handleCancelFieldRequestClick(a)}},j("div",null,t.label?"Add":"Cancel"))),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},j(v.a,{type:"submit",variant:"outline-danger",size:"sm",block:!0,style:z.submit_btn,onClick:function(){return e.handleDeleteFieldRequestClick(a)}},j("div",null,"Discard"))))}))),j(L.default,{title:"All Fields"},j(h.a.Row,{style:{margin:"0% 5%"}},j(h.a.Group,{as:p.a},j(f.a,null,j(h.a.Control,{type:"text",size:"sm",placeholder:"Enter Field Value",name:"sku",value:this.state.filterStr,onChange:function(t){return e.handleFilterStrChange(t)}})))),j("hr",null),this.state.fieldList&&this.state.fieldList.map((function(t,a){return j(h.a.Row,null,j(h.a.Group,{as:p.a,lg:2,md:2,sm:6,xs:12},j(h.a.Control,{type:"text",size:"sm",name:"sku",value:t.entry_date,disabled:!0})),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:6,md:6,sm:6,xs:12},j(f.a,null,j(h.a.Control,{type:"text",size:"sm",placeholder:"Enter Field Value",name:"sku",value:t.value,onChange:function(t){return e.handleFieldChange(t,a)},disabled:t.label,isInvalid:t.error}),j(h.a.Control.Feedback,{type:"invalid"},t.error))),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},j(v.a,{type:"submit",variant:"outline-success",size:"sm",block:!0,style:z.submit_btn,onClick:t.label?function(){return e.handleEditFieldClick(a)}:function(){return e.handleUpdateFieldClick(a)}},j("div",null,t.label?"Edit":"Update"))),j("div",{className:"mr-auto"}),j(h.a.Group,{as:p.a,lg:"auto",md:"auto",sm:"auto",xs:"auto"},j(v.a,{type:"submit",variant:t.label?"outline-danger":"outline-primary",size:"sm",block:!0,style:z.submit_btn,onClick:t.label?function(){return e.handleDeleteFieldClick(a)}:function(){return e.handleCancelFieldClick(a)}},j("div",null,t.label?"Delete":"Cancel"))))}))))}}]),a}(y.Component),z={title_row:{borderBottom:"1px solid gray",padding:"1.5% 4%"},title_fontawesome:{color:"gray",marginRight:"3%",width:"26px",height:"26px",maxHeight:"26px",maxWidth:"26px"},title:{color:"gray"},card:{margin:"2%"},card_body:{},label:{fontSize:"".concat(F.a.form_label_fontsize)},error:{width:"100%",textAlign:"center",color:"#DC3545",fontSize:"14px"},accordin_fontawesome:{color:"".concat(F.a.admin_primry_color),marginRight:"10%",width:"15px",height:"15px",maxHeight:"15px",maxWidth:"15px"}};t.default=V}}]);