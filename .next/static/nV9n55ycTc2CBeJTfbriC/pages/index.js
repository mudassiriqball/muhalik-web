(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),u=n.n(i),l=n("vUet"),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,s=void 0===i?"div":i,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.b)(n,"container"),m="string"===typeof o?"-"+o:"-fluid";return u.a.createElement(s,Object(r.a)({ref:t},d,{className:c()(f,o?""+p+m:p)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),u=n.n(i),l=n("vUet"),s=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,f=void 0===i?"div":i,d=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(l.b)(n,"col"),m=[],b=[];return s.forEach((function(e){var t,n,r,a=d[e];if(delete d[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var c="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+c:""+p+c+"-"+t),null!=r&&b.push("order"+c+"-"+r),null!=n&&b.push("offset"+c+"-"+n)})),m.length||m.push(p),u.a.createElement(f,Object(r.a)({},d,{ref:t,className:c.a.apply(void 0,[o].concat(m,b))}))}));f.displayName="Col",t.a=f},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("1OyB"),c=n("vuIU"),i=n("Ji7U"),u=n("md7G"),l=n("foSv"),s=n("q1tI"),f=n.n(s),d=n("8Kt/"),p=n.n(d),m=(n("YFqc"),n("09IO")),b=(n("nOHt"),n("vvUq"));n("bWZ2");async function v(e,...t){for(const n of t)switch(typeof n){case"string":await y(e,n);break;case"number":await h(n);break;case"function":await n(e,...t);break;default:await n}}async function y(e,t){const n=function(e,[...t]){return[...e,NaN].findIndex((e,n)=>t[n]!==e)}(e.textContent,t);await async function(e,t,n=60){for(const r of function*(e){for(const t of e)yield e=>requestAnimationFrame(()=>e.textContent=t)}(t))r(e),await h(n+n*(Math.random()-.5))}(e,[...j(e.textContent,n),...O(t,n)])}async function h(e){await new Promise(t=>setTimeout(t,e))}function*O([...e],t=0,n=e.length){for(;t<n;)yield e.slice(0,++t).join("")}function*j([...e],t=0,n=e.length){for(;n>t;)yield e.slice(0,--n).join("")}var g="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var w=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},x=Object(s.memo)((function(e){var t=e.steps,n=e.loop,r=e.className,a=e.wrapper,o=void 0===a?"p":a,c=Object(s.useRef)(null),i=o,u=[g];return r&&u.unshift(r),Object(s.useEffect)((function(){n===1/0?v.apply(void 0,[c.current].concat(w(t),[v])):"number"===typeof n?v.apply(void 0,[c.current].concat(w(Array(n).fill(t).flat()))):v.apply(void 0,[c.current].concat(w(t)))})),f.a.createElement(i,{ref:c,className:u.join(" ")})})),S=n("7vrA"),N=n("3Z9Z"),k=n("JI6e"),C=n("zY1p"),E=f.a.createElement;function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var I=E(S.a,null,E(N.a,{className:"justify-content-md-center",style:{display:"flex",alignItems:"center",minHeight:"83vh"}},E(k.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto",style:{background:"#46d267",padding:"5%"}},E("h1",null,E(x,{steps:["This website is under development",1e3,"Comming Soon...!",1e3,"Be Ready to Shop online...",1e3],loop:1/0,wrapper:"p"}))))),T=function(e){Object(i.a)(n,e);var t=_(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={jwt_token:""},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(Object(b.b)());case 2:null!==(e=t.sent)&&this.setState({jwt_token:e.role});case 4:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"logout",value:function(){Object(b.d)(),this.setState({jwt_token:""})}},{key:"render",value:function(){return E("div",{style:P.body},E(p.a,null,E("title",null,"Muhalik"),E("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),E("meta",{charSet:"utf-8"}),E("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossOrigin:"anonymous"}),E("link",{rel:"shortcut icon",href:""})),E(m.default,{token:this.state.jwt_token,logoutClickHandler:this.logout},E(C.default,null),I))}}]),n}(s.Component),P={body:{background:"#f1f3f4",position:"absolute",top:"0",left:"0",right:"0",minHeight:"100vh"}};t.default=T},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},"m0L+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}n.d(t,"a",(function(){return c}));var o=n("JX7q");function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(o.a)(e):t}},noGa:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r);function o(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}function c(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},zY1p:function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),a=n("q1tI"),o=n.n(a),c=n("wx14"),i=n("zLVn"),u=n("ZCiN");var l=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},s=n("Vhrh"),f=n("TSYQ"),d=n.n(f),p=n("YECM"),m=n("dRu9"),b=n("JCAc"),v=n("YdCC"),y=Object(v.a)("carousel-caption",{Component:"div"}),h=Object(v.a)("carousel-item"),O=n("noGa"),j=n("dbZe"),g=n("vUet"),w=n("z+q/"),x={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var S=o.a.forwardRef((function(e,t){var n=Object(b.a)(e,{activeIndex:"onSelect"}),r=n.as,f=void 0===r?"div":r,v=n.bsPrefix,y=n.slide,h=n.fade,x=n.controls,S=n.indicators,N=n.activeIndex,k=n.onSelect,C=n.onSlide,E=n.onSlid,_=n.interval,I=n.keyboard,T=n.onKeyDown,P=n.pause,R=n.onMouseOver,M=n.onMouseOut,A=n.wrap,L=n.touch,q=n.onTouchStart,J=n.onTouchMove,U=n.onTouchEnd,X=n.prevIcon,D=n.prevLabel,V=n.nextIcon,B=n.nextLabel,Y=n.className,K=n.children,Z=Object(i.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),z=Object(g.b)(v,"carousel"),F=Object(a.useRef)(null),G=Object(a.useState)("next"),H=G[0],Q=G[1],W=Object(a.useState)(!1),$=W[0],ee=W[1],te=Object(a.useState)(N),ne=te[0],re=te[1];$||N===ne||(F.current?(Q(F.current),F.current=null):Q(N>ne?"next":"prev"),y&&ee(!0),re(N));var ae=o.a.Children.toArray(K).filter(o.a.isValidElement).length,oe=Object(a.useCallback)((function(e){if(!$){var t=ne-1;if(t<0){if(!A)return;t=ae-1}F.current="prev",k(t,e)}}),[$,ne,k,A,ae]),ce=Object(u.a)((function(e){if(!$){var t=ne+1;if(t>=ae){if(!A)return;t=0}F.current="next",k(t,e)}})),ie=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{element:ie.current,prev:oe,next:ce}}));var ue=Object(u.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&ce()})),le="next"===H?"left":"right";l((function(){y||(C&&C(ne,le),E&&E(ne,le))}),[ne]);var se=z+"-item-"+H,fe=z+"-item-"+le,de=Object(a.useCallback)((function(e){Object(w.a)(e),C&&C(ne,le)}),[C,ne,le]),pe=Object(a.useCallback)((function(){ee(!1),E&&E(ne,le)}),[E,ne,le]),me=Object(a.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void oe(e);case"ArrowRight":return e.preventDefault(),void ce(e)}T&&T(e)}),[I,T,oe,ce]),be=Object(a.useState)(!1),ve=be[0],ye=be[1],he=Object(a.useCallback)((function(e){"hover"===P&&ye(!0),R&&R(e)}),[P,R]),Oe=Object(a.useCallback)((function(e){ye(!1),M&&M(e)}),[M]),je=Object(a.useRef)(0),ge=Object(a.useRef)(0),we=Object(a.useState)(!1),xe=we[0],Se=we[1],Ne=Object(s.a)(),ke=Object(a.useCallback)((function(e){je.current=e.touches[0].clientX,ge.current=0,L&&Se(!0),q&&q(e)}),[L,q]),Ce=Object(a.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-je.current,J&&J(e)}),[J]),Ee=Object(a.useCallback)((function(e){if(L){var t=ge.current;if(Math.abs(t)<=40)return;t>0?oe(e):ce(e)}Ne.set((function(){Se(!1)}),_),U&&U(e)}),[L,oe,ce,Ne,_,U]),_e=null!=_&&!ve&&!xe&&!$,Ie=Object(a.useRef)();Object(a.useEffect)((function(){if(_e)return Ie.current=setInterval(document.visibilityState?ue:ce,_),function(){clearInterval(Ie.current)}}),[_e,ce,_,ue]);var Te=Object(a.useMemo)((function(){return S&&Array.from({length:ae},(function(e,t){return function(e){k(t,e)}}))}),[S,ae,k]);return(o.a.createElement(f,Object(c.a)({ref:ie},Z,{onKeyDown:me,onMouseOver:he,onMouseOut:Oe,onTouchStart:ke,onTouchMove:Ce,onTouchEnd:Ee,className:d()(Y,z,y&&"slide",h&&z+"-fade")}),S&&o.a.createElement("ol",{className:z+"-indicators"},Object(O.b)(K,(function(e,t){return o.a.createElement("li",{key:t,className:t===ne?"active":null,onClick:Te[t]})}))),o.a.createElement("div",{className:z+"-inner"},Object(O.b)(K,(function(e,t){var n=t===ne;return y?o.a.createElement(m.e,{in:n,onEnter:n?de:null,onEntered:n?pe:null,addEndListener:p.a},(function(t){return o.a.cloneElement(e,{className:d()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})})):o.a.cloneElement(e,{className:d()(e.props.className,n&&"active")})}))),x&&o.a.createElement(o.a.Fragment,null,(A||0!==N)&&o.a.createElement(j.a,{className:z+"-control-prev",onClick:oe},X,D&&o.a.createElement("span",{className:"sr-only"},D)),(A||N!==ae-1)&&o.a.createElement(j.a,{className:z+"-control-next",onClick:ce},V,B&&o.a.createElement("span",{className:"sr-only"},B)))))}));S.displayName="Carousel",S.defaultProps=x,S.Caption=y,S.Item=h;var N=S,k=n("3Z9Z"),C=n("JI6e"),E=o.a.createElement,_=[{img:"carousel_img1.jpg"},{img:"carousel_img2.jpg"},{img:"carousel_img3.jpg"},{img:"carousel_img4.jpg"}];function I(e){var t=o.a.useState(0),n=Object(r.a)(t,2),a=n[0],c=n[1];return E(N,{activeIndex:a,onSelect:function(e,t){c(e)},indicators:!1,interval:"1500"},_&&_.map((function(e,t){return E(N.Item,{key:t},E("img",{className:"d-block w-100",src:e.img,alt:"Slide {i}"}),E(N.Caption,null,E("h3",null,"Slide ",a+1," label"),E("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))})))}t.default=function(e){return E(o.a.Fragment,null,E(k.a,{className:"w-100 p-2 m-0 justify-content-center"},E(C.a,{lg:6,md:6,sm:6,xs:12},E(I,null))))}}},[["m0L+",0,1,4,14,2,3,5,6,7,9,10,13,19,23]]]);