(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"87rd":function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),r=n("vuIU"),s=n("Ji7U"),o=n("md7G"),i=n("foSv"),u=n("MX0m"),c=n.n(u),d=n("q1tI"),l=n.n(d),p=n("3Z9Z"),f=n("JI6e"),m=n("6xyR"),_=n("IP2g"),y=n("wHSu"),g=n("twK/"),b=n("8tEE"),v=n("PHNs"),x=n.n(v),h=n("bWZ2"),w=n("qTQu"),j=l.a.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var O=function(e){Object(s.a)(n,e);var t=N(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={noOfTotalProducts:1e3,noOfInStockProducts:2e3,noOfSoldProducts:3e3,noOfReturnedProducts:4e3,totalEarnings:5470,thisYearEarnings:2309,thisMonthEarnings:1207,noOfTotalOrders:1190,noOfDeliveredOrders:980,noOfPendingOrders:120,noOfCancelledOrders:100},r}return Object(r.a)(n,[{key:"render",value:function(){return j("div",{className:"jsx-4035273632"},j(w.default,{icon:y.D,title:"Vendor Dashboard"}),j(p.a,{noGutters:!0,style:{padding:"0% 1%"}},j(f.a,{lg:4,md:4,sm:12,xs:12,style:R.product_card_col},j(m.a,null,j(m.a.Header,{style:R.card_header},"Products"),j(m.a.Body,{style:R.card_body},j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Total Products")),j("div",{style:R.total_product_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:b.f,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfTotalProducts,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"In-Stock Products")),j("div",{style:R.stock_product_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.C,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfInStockProducts,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Sold Products")),j("div",{style:R.sold_product_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.d,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfSoldProducts,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Returned Products")),j("div",{style:R.returned_product_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:g.a,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfReturnedProducts,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))}))))))),j(f.a,{lg:4,md:4,sm:12,xs:12,style:R.order_card_col},j(m.a,null,j(m.a.Header,{style:R.card_header},"Orders"),j(m.a.Body,{style:R.card_body},j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Total Orders")),j("div",{style:R.total_order_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.k,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfTotalOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Deleivered Orders")),j("div",{style:R.delivered_order_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:g.b,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfDeliveredOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Pending Orders")),j("div",{style:R.prnding_order_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.h,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfPendingOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))),j("div",{style:R.card_text_div,className:"jsx-4035273632"},j("p",{className:"jsx-4035273632"},j("span",{className:"jsx-4035273632 label_span"},"Cancelled Orders")),j("div",{style:R.cancelled_order_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.a,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfCancelledOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))}))))))),j(f.a,{lg:4,md:4,sm:12,xs:12,style:R.earning_card_col},j(p.a,{noGutters:!0,style:R.earning_card_row},j(m.a,{style:R.total_earning_card},j(m.a.Header,{style:R.earning_card_header},"Total Earnings"),j(m.a.Body,null,j("div",{style:R.total_errning_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.i,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfPendingOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))))),j(p.a,{noGutters:!0,style:R.earning_card_row},j(m.a,{style:R.year_earning_card},j(m.a.Header,{style:R.earning_card_header},"This Year Earnings"),j(m.a.Body,null,j("div",{style:R.year_errning_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.i,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfPendingOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))))),j(p.a,{noGutters:!0,style:R.earning_card_row},j(m.a,{style:R.month_earning_card},j(m.a.Header,{style:R.earning_card_header},"This Month Earnings"),j(m.a.Body,null,j("div",{style:R.month_errning_row,className:"jsx-4035273632 number_count_div"},j(_.a,{icon:y.i,className:"mr-auto",style:R.product_fontawesome}),j(x.a,{start:0,end:this.state.noOfPendingOrders,delay:0,duration:10},(function(e){var t=e.countUpRef;return j("div",{className:"jsx-4035273632"},j("span",{ref:t,className:"jsx-4035273632 number_count"}))})))))))),j(c.a,{id:"4035273632"},["p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}",".label_span.jsx-4035273632{background:#fff;padding-right:3%;}",".number_count.jsx-4035273632{color:white;font-size:25px;}",".number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}",".number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}"]))}}]),n}(l.a.Component),R={row:{margin:"2%",padding:"0px"},card_header:{color:"#6A7074",fontSize:"".concat(h.a.card_header_fontsize),background:"".concat(h.a.card_header_background)},card_text_div:{color:"#6A7074",fontSize:"14px",padding:"5%"},product_card_col:{padding:"3% 1%"},total_product_row:{background:"blue"},stock_product_row:{background:"purple"},sold_product_row:{background:"green"},returned_product_row:{background:"gray"},order_card_col:{padding:"3% 1%"},total_order_row:{background:"blue"},delivered_order_row:{background:"green"},prnding_order_row:{background:"#ffbf00"},cancelled_order_row:{background:"red"},earning_card_col:{padding:"3% 1%"},earning_card_row:{marginBottom:"4%"},earning_card_header:{color:"white",fontSize:"15px"},total_earning_card:{width:"100%",background:"#0099e6"},year_earning_card:{width:"100%",background:"#ac00e6",color:"blue"},month_earning_card:{width:"100%",background:"#ac7339"},total_errning_row:{background:"#0088cc"},year_errning_row:{background:"#9900cc"},month_errning_row:{background:"#996633"},product_fontawesome:{color:"white",width:"30px",height:"30px",maxHeight:"30px",maxWidth:"30px"},fontawesome:{color:"".concat(h.a.primry_color),width:"50px",height:"50px",maxHeight:"50px",maxWidth:"50px",float:"right"}};t.default=O},GiOn:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,s){function o(e){return"number"==typeof e&&!isNaN(e)}var i=this;if(i.version=function(){return"1.9.3"},i.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,s,o,u=e<0;if(e=Math.abs(e).toFixed(i.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?i.options.decimal+t[1]:"",i.options.useGrouping){for(r="",s=0,o=n.length;s<o;++s)0!==s&&s%3===0&&(r=i.options.separator+r),r=n[o-s-1]+r;n=r}return i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),(u?"-":"")+i.options.prefix+n+a+i.options.suffix},prefix:"",suffix:"",numerals:[]},s&&"object"==typeof s)for(var u in i.options)s.hasOwnProperty(u)&&null!==s[u]&&(i.options[u]=s[u]);""===i.options.separator?i.options.useGrouping=!1:i.options.separator=""+i.options.separator;for(var c=0,d=["webkit","moz","ms","o"],l=0;l<d.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[d[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[l]+"CancelAnimationFrame"]||window[d[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout((function(){e(n+a)}),a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),i.initialize=function(){return!!i.initialized||(i.error="",i.d="string"==typeof e?document.getElementById(e):e,i.d?(i.startVal=Number(t),i.endVal=Number(n),o(i.startVal)&&o(i.endVal)?(i.decimals=Math.max(0,a||0),i.dec=Math.pow(10,i.decimals),i.duration=1e3*Number(r)||2e3,i.countDown=i.startVal>i.endVal,i.frameVal=i.startVal,i.initialized=!0,!0):(i.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(i.error="[CountUp] target is null or undefined",!1))},i.printValue=function(e){var t=i.options.formattingFn(e);"INPUT"===i.d.tagName?this.d.value=t:"text"===i.d.tagName||"tspan"===i.d.tagName?this.d.textContent=t:this.d.innerHTML=t},i.count=function(e){i.startTime||(i.startTime=e),i.timestamp=e;var t=e-i.startTime;i.remaining=i.duration-t,i.options.useEasing?i.countDown?i.frameVal=i.startVal-i.options.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.options.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(t/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.dec)/i.dec,i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):i.callback&&i.callback()},i.start=function(e){i.initialize()&&(i.callback=e,i.rAF=requestAnimationFrame(i.count))},i.pauseResume=function(){i.paused?(i.paused=!1,delete i.startTime,i.duration=i.remaining,i.startVal=i.frameVal,requestAnimationFrame(i.count)):(i.paused=!0,cancelAnimationFrame(i.rAF))},i.reset=function(){i.paused=!1,delete i.startTime,i.initialized=!1,i.initialize()&&(cancelAnimationFrame(i.rAF),i.printValue(i.startVal))},i.update=function(e){if(i.initialize()){if(!o(e=Number(e)))return void(i.error="[CountUp] update() - new endVal is not a number: "+e);i.error="",e!==i.frameVal&&(cancelAnimationFrame(i.rAF),i.paused=!1,delete i.startTime,i.startVal=i.frameVal,i.endVal=e,i.countDown=i.startVal>i.endVal,i.rAF=requestAnimationFrame(i.count))}},i.initialize()&&i.printValue(i.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("17x9")),s=n("q1tI"),o=a(s),i=a(n("2W6z")),u=a(n("GiOn"));function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,s=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,s=t.easingFn,o=t.end,i=t.formattingFn,c=t.prefix,d=t.separator,l=t.start,p=t.suffix,f=t.useEasing;return new u(e,l,o,a,r,{decimal:n,easingFn:s,formattingFn:i,separator:d,prefix:c,suffix:p,useEasing:f,useGrouping:!!d})},g=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return a=this,r=(e=p(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==typeof r&&"function"!==typeof r?m(a):r,d(m(n),"createInstance",(function(){return"function"===typeof n.props.children&&i(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),y(n.containerRef.current,n.props)})),d(m(n),"pauseResume",(function(){var e=m(n),t=e.reset,a=e.restart,r=e.update,s=n.props.onPauseResume;n.instance.pauseResume(),s({reset:t,start:a,update:r})})),d(m(n),"reset",(function(){var e=m(n),t=e.pauseResume,a=e.restart,r=e.update,s=n.props.onReset;n.instance.reset(),s({pauseResume:t,start:a,update:r})})),d(m(n),"restart",(function(){n.reset(),n.start()})),d(m(n),"start",(function(){var e=m(n),t=e.pauseResume,a=e.reset,r=e.restart,s=e.update,o=n.props,i=o.delay,u=o.onEnd,c=o.onStart,d=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:s})}))};i>0?n.timeoutId=setTimeout(d,1e3*i):d(),c({pauseResume:t,reset:a,update:s})})),d(m(n),"update",(function(e){var t=m(n),a=t.pauseResume,r=t.reset,s=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:s})})),d(m(n),"containerRef",o.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,s=t.prefix,o=t.redraw,i=t.duration,u=t.separator,c=t.decimals,d=t.decimal;return i!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||s!==e.prefix||u!==e.separator||c!==e.decimals||d!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,s=t.prefix,o=t.duration,i=t.separator,u=t.decimals,c=t.decimal,d=t.preserveValue;o===e.duration&&a===e.start&&r===e.suffix&&s===e.prefix&&i===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(d||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,s=this.pauseResume,i=this.reset,u=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:s,reset:i,start:u,update:c}):o.createElement("span",{className:n,ref:r,style:a})}}])&&c(n.prototype,a),r&&c(n,r),t}(s.Component);d(g,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),d(g,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var b={innerHTML:null};t.default=g,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g.defaultProps,{},e),n=t.start,a=t.formattingFn,r=_(s.useState("function"===typeof a?a(n):n),2),o=r[0],i=r[1],u=s.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=y(b,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);i(e)},e}();return u.current=n,n},p=function(){var e=t.onReset;c().reset(),e({pauseResume:m,start:f,update:v})},f=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start((function(){a({pauseResume:m,reset:p,start:e,update:v})})),n({pauseResume:m,reset:p,update:v})},m=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:p,start:f,update:v})},v=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:m,reset:p,start:f})};return s.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:m,reset:p,update:v}),c().start((function(){clearTimeout(r),a({pauseResume:m,reset:p,start:f,update:v})}))}),1e3*e);return p}),[]),{countUp:o,start:f,pauseResume:m,reset:p,update:v}}}}]);