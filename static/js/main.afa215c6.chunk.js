(this["webpackJsonpbaby-bear-bb-ecommerce-app"]=this["webpackJsonpbaby-bear-bb-ecommerce-app"]||[]).push([[0],{141:function(e,t,n){},173:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(24),r=n.n(a),s=(n(141),n(2)),i=n.n(s),o=n(4),l=n(13),j={apiKey:"AIzaSyCemqcywouDvsb5c-56t9ZkBxnB3KEFnUo",authDomain:"baby-bear-bb-ecommerce-app.firebaseapp.com",projectId:"baby-bear-bb-ecommerce-app",storageBucket:"baby-bear-bb-ecommerce-app.appspot.com",messagingSenderId:"1026316384071",appId:"1:1026316384071:web:ff16579a2f19dd8d3f7e62",measurementId:"G-DVE4WQ76WC"},u=n(115),d=n(34),b=n(72),h=n(116),p=new(n.n(h).a)("pk_test_3301917da34a40b75135c69c8c3ec08dbed510f319703",!0),m=n(20),O=n(27),x=n(238),f=n(240),_=n(241),g=n(243),v=n(244),y=n(239),N=n(242),k=n(8),w=n(86),C=n(257),S=n(121),F=n.n(S),B=n(234),P=n(30),T=(n(173),n(3)),I=function(e){var t=e.display,n=e.getDisplay,c=e.handleSearch,a=e.searchProducts,r=Object(B.a)((function(e){return{search:Object(k.a)({position:"relative",borderRadius:"24px",border:"1px solid #000",backgroundColor:Object(P.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,marginBottom:"2em"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"grey"},inputRoot:{color:"inherit",paddingLeft:"calc(2em + ".concat(e.spacing(4),"px)")},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),transition:e.transitions.create("width"),marginBottom:"2em"},e.breakpoints.up("md"),{width:"20ch"})}}))();return Object(T.jsx)("div",{className:"searchLink__container",children:Object(T.jsxs)("div",{className:"searchLink",children:[Object(T.jsx)(w.a,{className:"searchLink__close",size:32,onClick:function(){return n(!t)}}),Object(T.jsxs)("div",{className:r.search,children:[Object(T.jsx)("div",{className:r.searchIcon,children:Object(T.jsx)(F.a,{})}),Object(T.jsx)(C.a,{placeholder:"Search Product",onChange:c,classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})]}),Object(T.jsx)("div",{className:"popup__message__container",children:a.map((function(e,c){return console.log(e.id),Object(T.jsx)(m.b,{to:"/products/".concat(e.id),onClick:function(){return n(!t)},exact:!0,path:!0,children:Object(T.jsx)("p",{style:{marginBottom:"0.5em"},children:e.name},c)})}))})]})})},A=(n(182),function(e){var t=e.isLoggedIn,n=e.totalItems,a=e.handleSearch,r=e.searchProducts,s=Object(O.g)(),i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),h=b[0],p=b[1],k=function(){u((function(e){return!e}))};return Object(T.jsxs)(T.Fragment,{children:[h&&Object(T.jsx)(I,{display:h,getDisplay:function(e){p(e)},handleSearch:a,searchProducts:r}),Object(T.jsxs)("header",{children:["/"===s.pathname&&Object(T.jsx)("div",{className:"announcement",children:Object(T.jsx)("span",{children:"FREE SHIPPING ON PURCHASES OVER $75.00"})}),Object(T.jsxs)("nav",{className:"navbar__container",children:[Object(T.jsx)("div",{className:"menu",children:Object(T.jsx)(x.a,{onClick:k})}),Object(T.jsx)(m.b,{to:"/",className:"logo",children:"BABYBEAR BB"}),Object(T.jsxs)("ul",{className:"nav__list",children:[Object(T.jsx)("li",{className:"nav__home",children:Object(T.jsx)(m.b,{to:"/",className:"nav__item nav__show",children:"Home"})}),Object(T.jsx)("li",{className:"nav__product",children:Object(T.jsx)(m.b,{to:"/products",className:"nav__item nav__show",children:"Products"})}),Object(T.jsx)("li",{className:"nav__news",children:Object(T.jsx)(m.b,{to:"/news",className:"nav__item nav__show",children:"News"})}),Object(T.jsxs)("ul",{className:"icon__container",children:[Object(T.jsx)("li",{className:"nav__person",children:Object(T.jsx)(y.a,{component:m.b,to:"/profile","aria-label":"Show profile",color:"inherit",children:Object(T.jsx)(f.a,{className:"nav__item nav__show"})})}),Object(T.jsx)("li",{className:"nav__search",children:Object(T.jsx)(y.a,{"aria-label":"Show search",color:"inherit",children:Object(T.jsx)(_.a,{className:"nav__item nav__show",onClick:function(){p((function(e){return!e}))}})})}),Object(T.jsx)("li",{className:"nav__cart",children:Object(T.jsx)(y.a,{component:m.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(T.jsx)(N.a,{badgeContent:n,color:"primary",children:Object(T.jsx)(g.a,{})})})})]})]})]}),Object(T.jsxs)("ul",{className:j?"nav__menu show":"nav__menu",children:[Object(T.jsx)(v.a,{style:{alignSelf:"flex-end",cursor:"pointer"},onClick:k}),Object(T.jsx)("li",{className:"nav__home__menu",onClick:k,children:Object(T.jsx)(m.b,{to:"/",children:"Home"})}),Object(T.jsx)("li",{className:"nav__product__menu",onClick:k,children:Object(T.jsx)(m.b,{to:"/products",children:"Products"})}),Object(T.jsx)("li",{className:"nav__news__menu",onClick:k,children:Object(T.jsx)(m.b,{to:"/news",children:"News"})}),t?Object(T.jsx)("li",{className:"nav__login",onClick:k,children:Object(T.jsx)(m.b,{to:"/profile",children:"Profile"})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("li",{className:"nav__login",onClick:k,children:Object(T.jsx)(m.b,{to:"/profile",children:"Log in"})}),Object(T.jsx)("li",{className:"nav__create",onClick:k,children:Object(T.jsx)(m.b,{to:"/profile",children:"Create Account"})})]})]})]})]})}),E=(n(183),n.p+"static/media/baby-white-tuxedo.e8658fff.jpg"),L=n(71),D=function(e){var t=e.products,n=(e.variant,e.handleAddToCart),a=Object(c.useState)(t[0]),r=Object(l.a)(a,2),s=r[0],i=(r[1],Object(c.useState)({})),o=Object(l.a)(i,2),j=o[0],u=(o[1],function(e){var t=e.target,n=t.name,c=t.value;j[n]=c});return Object(c.useEffect)((function(){L.a.from(".hero__subtitle",{opacity:0,duration:1,delay:1,y:10}),L.a.from(".hero__title",{opacity:0,duration:1,delay:1,y:10}),L.a.from(".shop__btn",{opacity:0,duration:1,delay:1,y:10})}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"banner__slide",children:[Object(T.jsx)("img",{src:E,alt:"home page pic",className:"banner__img"}),Object(T.jsxs)("div",{className:"hero__banner",children:[Object(T.jsx)("span",{className:"hero__subtitle",children:"2021 FALL SEASON"}),Object(T.jsx)("h2",{className:"hero__title",children:"BABY BEAR BB"}),Object(T.jsx)(m.b,{to:"/products",children:Object(T.jsx)("p",{className:"shop__btn",children:"SHOP NOW"})})]})]}),Object(T.jsxs)("div",{className:"home__container",children:[Object(T.jsx)("p",{className:"home__description",children:"Shop at Babybear BB for cute, comfortable, high quality clothes for your baby!"}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{style:{marginBottom:"1.5em"},children:[Object(T.jsx)("h2",{className:"featured__title",children:"Featured collections"}),Object(T.jsx)("hr",{className:"hr--small"})]}),Object(T.jsxs)("div",{className:"productLink",children:[Object(T.jsx)("div",{className:"productHome__img__container",children:Object(T.jsx)("img",{src:t[0].assets[0].url,alt:t[0].name})}),Object(T.jsxs)("div",{className:"productLink__container",children:[Object(T.jsx)("h1",{style:{fontSize:"30px",fontWeight:"300",padding:"0 1em",textAlign:"center",margin:"1em 0"},children:s.name}),Object(T.jsx)("span",{style:{marginBottom:"1.5em",fontSize:"18px",fontFamily:"Montserrat, sans-serif",fontWeight:"600",letterSpacing:"0.1em"},children:s.price.formatted_with_symbol}),Object(T.jsxs)("span",{style:{fontFamily:"Arapey, serif",marginBottom:"1em"},children:["Tax included. ",Object(T.jsx)("a",{style:{color:"#FFB7C5",textDecoration:"underline"},children:"Shipping"})," calculated at checkout."]}),Object(T.jsx)("hr",{className:"hr--small"}),Object(T.jsxs)("form",{className:"productlink__form__container",children:[s.variant_groups.map((function(e){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("span",{children:e.name}),Object(T.jsx)("div",{className:"radio-toolbar",children:e.options.map((function(t,n){return 0===n&&(j[e.id]=t.id),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("input",{type:"radio",id:"".concat(t.id),name:"".concat(e.id),value:"".concat(t.id),onClick:u,defaultChecked:0===n},n),Object(T.jsx)("label",{for:"".concat(t.id),children:t.name})]})}))})]})})),Object(T.jsx)("button",{type:"button",className:"btn__addToCart",onClick:function(){return n(s.id,1,j)},children:"ADD TO CART"}),Object(T.jsx)("button",{type:"button",className:"btn__buyItNow",children:"BUY IT NOW"})]}),Object(T.jsx)(m.b,{to:"products/".concat(s.id),children:"Full details"})]})]})]})]})]})},R=n(245),z=(n(184),function(e){var t=e.product,n=(e.handleProductLinkClick,e.getProduct);return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"product__container",children:[Object(T.jsx)(m.b,{onClick:function(){n(t)},to:"products/".concat(t.id),exact:!0,path:!0,children:Object(T.jsx)("div",{className:"product__img",children:Object(T.jsx)("img",{src:t.media.source,alt:t.name})})}),Object(T.jsxs)("span",{style:{width:"345px",textAlign:"center"},children:[t.name," - ",Object(T.jsx)("b",{style:{fontSize:"14px",fontFamily:"Montserrat, sans-seriif",letterSpacing:"0.1em"},children:t.price.formatted_with_symbol})]})]})})}),W=(n(185),function(e){var t=e.products,n=e.handleProductLinkClick,a=e.getProduct;return Object(c.useEffect)((function(){L.a.from(".grid__container",{opacity:0,duration:1,delay:1,y:10})}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"page__container",children:Object(T.jsx)("span",{style:{fontSize:"30px"},children:"Products"})}),Object(T.jsx)("hr",{className:"hr--small",style:{marginBottom:"2em"}}),Object(T.jsx)("div",{className:"grid__container",children:Object(T.jsx)(R.a,{container:!0,justifyContent:"center",alignContent:"center",spacing:0,children:t.map((function(e){return Object(T.jsx)(R.a,{item:!0,xs:24,sm:12,md:6,lg:4,children:Object(T.jsx)(z,{getProduct:a,product:e,handleProductLinkClick:n},e.id)},e.id)}))})})]})}),U=(n(186),function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"page__container",children:Object(T.jsx)("span",{style:{fontSize:"30px"},children:"News"})}),Object(T.jsx)("hr",{className:"hr--small"}),Object(T.jsxs)("div",{className:"news__container",children:[Object(T.jsx)("span",{children:"We are currently developing our news page."}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"Please visit the news page later!"})]})]})}),q=(n(187),n(260)),H=n(123),Y=n(69),M=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),j=s[0],u=s[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),p=h[0],m=h[1],x=Object(c.useState)(""),f=Object(l.a)(x,2),_=f[0],g=f[1],v=Object(c.useState)(!0),y=Object(l.a)(v,2),N=y[0],k=y[1],w=Object(O.f)(),C=function(e){var t=e.target,c=t.name,r=t.value;"email"===c?a(r):"password"===c&&u(r),k(!n||!j)},S=function(){var e=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=Object(d.e)(),e.prev=2,!p){e.next=9;break}return e.next=6,Object(d.d)(c,n,j);case 6:e.sent,e.next=12;break;case 9:return e.next=11,Object(d.g)(c,n,j);case 11:e.sent;case 12:w.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,c=Object(d.e)(),"google"===n?a=new d.c:"facebook"===n?a=new d.a:"github"===n&&(a=new d.b),e.next=5,Object(d.h)(c,a).then((function(e){w.push("/")})).catch((function(e){console.log(_)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{className:"auth__container",children:[Object(T.jsx)("div",{className:"login__logo__container",children:Object(T.jsx)("span",{style:{fontSize:"30px"},children:"Log In"})}),Object(T.jsx)("hr",{className:"hr--small"}),Object(T.jsxs)("div",{className:"login__container",children:[Object(T.jsxs)("form",{onSubmit:S,className:"form__container",children:[Object(T.jsx)(q.a,{InputLabelProps:{style:{fontSize:12,fontFamily:"Arapey, sans-serif"}},className:"form__input",label:"Email Address",name:"email",type:"text",placeholder:"Email",value:n,onChange:C,required:!0}),Object(T.jsx)(q.a,{InputLabelProps:{style:{fontSize:12,fontFamily:"Arapey, sans-serif"}},className:"form__input",label:"Password",name:"password",type:"password",placeholder:"Password",value:j,onChange:C,required:!0}),Object(T.jsx)("input",{onChange:C,disabled:N,className:"submit__input",type:"submit",value:p?"CREATE ACCOUNT":"SIGN IN"})]}),Object(T.jsxs)("div",{className:"divider",children:[Object(T.jsx)("hr",{className:"divider__show"}),Object(T.jsx)("span",{children:"OR"}),Object(T.jsx)("hr",{className:"divider__show"})]}),Object(T.jsxs)("div",{className:"social__auth__container",children:[Object(T.jsxs)("button",{className:"social__button",onClick:F,name:"google",children:[Object(T.jsx)(H.a,{className:"button__logo",size:18}),"Continue with Google"]}),Object(T.jsxs)("button",{className:"social__button",onClick:F,name:"facebook",children:[Object(T.jsx)(Y.c,{className:"button__logo",style:{color:"#3b5998"},size:18}),"Continue with Facebook"]}),Object(T.jsxs)("button",{className:"social__button",onClick:F,name:"github",children:[Object(T.jsx)(Y.d,{className:"button__logo",style:{color:"#171515"},size:18}),"Continue with Github"]})]}),Object(T.jsxs)("div",{className:"toggle__sign",children:[Object(T.jsx)("p",{children:"Don't have an account?"}),Object(T.jsx)("p",{className:"toggle__sign__p",onClick:function(){m((function(e){return!e}))},children:p?"Sign In":"Sign Up"})]})]}),Object(T.jsxs)("span",{className:"security",children:["Secure Login with reCAPTCHA subject to Google ",Object(T.jsx)("a",{href:"https://policies.google.com/terms?hl=en",children:"Terms"})," & ",Object(T.jsx)("a",{href:"https://policies.google.com/privacy?hl=en",children:"Privacy"})]}),_]})},Q=n(249),G=(n(188),function(e){var t=e.content,n=Object(B.a)((function(){return{card:{margin:"0px 25px",width:"100%",display:"flex",justifyContent:"center"}}}))();return Object(T.jsx)(T.Fragment,{children:t&&Object(T.jsx)(Q.a,{className:n.card,children:Object(T.jsx)("img",{id:t.id,src:t.url,alt:t.description})})})}),J=(n(189),function(e){var t=e.products,n=(e.getProduct,e.item),a=e.handleAddToCart,r=Object(c.useState)(n),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)({}),u=Object(l.a)(j,2),d=u[0],b=(u[1],Object(c.useState)(0)),h=Object(l.a)(b,2),p=h[0],m=h[1],x=Object(c.useState)({}),f=Object(l.a)(x,2),_=f[0],g=f[1],v=Object(c.useState)(0),y=Object(l.a)(v,2),N=y[0],k=y[1],w=Object(c.useState)([]),C=Object(l.a)(w,2),S=C[0],F=C[1],B=Object(O.h)().productId,P=function(e){var t=e.target,n=t.name,c=t.value;d[n]=c};Object(c.useEffect)((function(){if(0!==Object.keys(n).length||t.length>0){o(n);var e=t.find((function(e){return e.id===B}));console.log(e),o(e),F(e.assets),g(S[p]),k(S.length)}}));var I=function(e){var t=e.direction,n=e.clickFunction,c="left"===t?Object(T.jsx)(Y.a,{}):Object(T.jsx)(Y.b,{});return Object(T.jsx)("div",{onClick:n,children:c})},A=function(e){m((p+("left"===e?-1:1)+N)%N)};return Object(T.jsx)(T.Fragment,{children:i&&Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"productLink",children:[Object(T.jsx)("div",{className:"productLink__img__container",children:i.assets.map((function(e){return Object(T.jsx)("img",{src:e.url,alt:i.name})}))}),Object(T.jsxs)("div",{className:"slider",children:[Object(T.jsx)(I,{direction:"left",clickFunction:function(){return A("left")}}),Object(T.jsx)(G,{content:_}),Object(T.jsx)(I,{direction:"right",clickFunction:function(){return A("right")}})]}),Object(T.jsxs)("div",{className:"productLink__container",children:[Object(T.jsx)("h1",{style:{fontSize:"30px",fontWeight:"300",padding:"0 1em",textAlign:"center",margin:"1em 0"},children:i.name}),Object(T.jsx)("span",{style:{marginBottom:"1.5em",fontSize:"18px",fontFamily:"Montserrat, sans-serif",fontWeight:"600",letterSpacing:"0.1em"},children:i.price.formatted_with_symbol}),Object(T.jsxs)("span",{style:{fontFamily:"Arapey, serif",marginBottom:"1em"},children:["Tax included. ",Object(T.jsx)("a",{style:{color:"#FFB7C5",textDecoration:"underline"},children:"Shipping"})," calculated at checkout."]}),Object(T.jsx)("hr",{className:"hr--small"}),Object(T.jsxs)("form",{className:"productlink__form__container",children:[i.variant_groups.map((function(e){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("span",{children:e.name}),Object(T.jsx)("div",{className:"radio-toolbar",children:e.options.map((function(t,n){return 0===n&&(d[e.id]=t.id),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("input",{type:"radio",id:"".concat(t.id),name:"".concat(e.id),value:"".concat(t.id),onClick:P,defaultChecked:0===n}),Object(T.jsx)("label",{for:"".concat(t.id),children:t.name})]})}))})]})})),Object(T.jsx)("button",{type:"button",className:"btn__addToCart",onClick:function(){return a(i.id,1,d)},children:"ADD TO CART"}),Object(T.jsx)("button",{type:"button",className:"btn__buyItNow",children:"BUY IT NOW"})]}),Object(T.jsx)("div",{className:"product__description",dangerouslySetInnerHTML:{__html:i.description}})]})]})})})}),V=function(e){var t=e.item,n=(e.handleRemoveFromCart,e.handleUpdateCartQty),a=Object(c.useState)(t.quantity),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)({}),j=Object(l.a)(o,2),u=j[0];j[1];Object(c.useEffect)((function(){t.selected_options.map((function(e){u[e.group_id]=e.option_id}))}),[]);return Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsxs)("div",{className:"cart__product",children:[Object(T.jsx)("img",{src:t.variant.assets[0].url,alt:t.name}),Object(T.jsxs)("div",{className:"cart__product__description",children:[Object(T.jsx)("h4",{children:t.name}),Object(T.jsxs)("span",{children:[t.selected_options[0].option_name," / ",t.selected_options[1].option_name]}),Object(T.jsx)("p",{style:{cursor:"pointer"},onClick:function(){return n(t.id,s,u)},children:"Update"})]})]}),Object(T.jsx)("div",{className:"cart__item__price",children:Object(T.jsxs)("form",{method:"post",onSubmit:function(){return n(t.id,s,u)},style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(T.jsx)("input",{id:"quantity",type:"number",value:s,onChange:function(e){i(e.target.value)},style:{marginRight:"3em",width:"80px",height:"43px",textAlign:"center",fontSize:"16px",fontWeight:600}}),Object(T.jsx)("span",{style:{marginLeft:"3em"},children:t.line_total.formatted_with_symbol})]})})]})},X=(n(190),function(e){var t=e.handleUpdateCartQty,n=e.handleEmptyCart,c=e.cart,a=e.handleRemoveFromCart;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"page__container",children:Object(T.jsx)("span",{style:{fontSize:"30px"},children:"Your Cart"})}),Object(T.jsx)("hr",{className:"hr--small"}),c&&c.total_items>0?Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"cart__container",children:[Object(T.jsxs)("div",{className:"cart__top",children:[Object(T.jsx)("p",{children:"QUANTITY"}),Object(T.jsx)("p",{children:"TOTAL"}),Object(T.jsx)("hr",{className:"hr--cart"})]}),c.line_items.map((function(e,n){return Object(T.jsx)(V,{handleUpdateCartQty:t,item:e,handleRemoveFromCart:a},n)})),Object(T.jsxs)("div",{className:"subtotal__container",children:[Object(T.jsx)("hr",{className:"hr--cart"}),Object(T.jsxs)("div",{className:"cart__container__subtotal",children:[Object(T.jsxs)("div",{className:"subtotal",children:[Object(T.jsx)("p",{className:"subtotal__p",children:"SUBTOTAL"}),Object(T.jsx)("p",{children:c.subtotal.formatted_with_symbol})]}),Object(T.jsxs)("span",{style:{fontFamily:"Arapey, serif",marginBottom:"1em"},children:["Tax included. ",Object(T.jsx)("a",{style:{color:"#FFB7C5",textDecoration:"underline"},children:"Shipping"})," calculated at checkout."]}),Object(T.jsxs)("div",{className:"cart__button__container",children:[Object(T.jsx)("button",{className:"update__button",onClick:n,children:"EMPTY CART"}),Object(T.jsx)("button",{className:"checkout__button",children:Object(T.jsx)(m.b,{to:"/checkout",children:"CHECK OUT"})})]})]})]})]})}):Object(T.jsxs)("div",{style:{textAlign:"center"},children:[Object(T.jsx)("p",{children:"Your cart is currently empty."}),Object(T.jsxs)("p",{children:["Continue browsing ",Object(T.jsx)(m.b,{to:"/products",children:"here."})]})]})]})}),Z=function(e){var t=e.orderId,n=e.orderPrice,c=e.orderDate;return Object(T.jsxs)("div",{className:"history__items",children:[Object(T.jsxs)("p",{className:"history__item",children:["Order ID: ",t]}),Object(T.jsxs)("p",{className:"history__item",children:["Order Date: ",c]}),Object(T.jsxs)("p",{className:"history__item",children:["Total Price: ",n]})]})},K=(n(191),function(e){var t=e.auth,n=e.db,a=e.getDocs,r=e.collection,s=Object(c.useState)(!0),j=Object(l.a)(s,2),u=j[0],b=j[1],h=Object(c.useState)([]),p=Object(l.a)(h,2),m=p[0],x=p[1];Object(c.useEffect)((function(){f()}),[]);var f=function(){var e=Object(o.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(r(n,t.currentUser.uid));case 2:c=e.sent,console.log(c),c.forEach((function(e){var t=[e.data()];x(t)})),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=Object(O.f)(),g=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(d.e)(),Object(d.i)(t).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),_.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(T.Fragment,{children:u?Object(T.jsx)("div",{children:'"Loading..."'}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"page__container",children:Object(T.jsx)("span",{style:{fontSize:"30px"},children:"Order History"})}),Object(T.jsx)("hr",{className:"hr--small",style:{marginBottom:"2em"}}),Object(T.jsxs)("div",{className:"history__container",children:[m.length>0?m.map((function(e,t){return Object(T.jsx)(Z,{orderId:e.orderId,orderDate:e.orderDate,orderPrice:e.orderPrice},t)})):"No order",Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(T.jsx)("button",{className:"home__container",onClick:g,style:{padding:"1em 2em"},children:"Log Out"})})]})]})})}),$=n(87),ee=n(253),te=n(251),ne=n(254),ce=n(255),ae=n(195),re=n(263),se=n(256),ie=n(259),oe=n(52),le=n(262),je=n(258),ue=n(250),de=n(70),be=function(e){var t=e.name,n=e.label,c=Object(de.d)().control;return Object(T.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(de.a,{control:c,name:t,render:function(e){var t=e.field;return Object(T.jsx)(q.a,Object(oe.a)(Object(oe.a)({},t),{},{fullWidth:!0,label:n,required:!0}))},error:"false"})})},he=function(e){var t=e.checkoutToken,n=e.test,a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],j=r[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),b=d[0],h=d[1],O=Object(c.useState)([]),x=Object(l.a)(O,2),f=x[0],_=x[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),y=v[0],N=v[1],k=Object(c.useState)([]),w=Object(l.a)(k,2),C=w[0],S=w[1],F=Object(c.useState)(""),B=Object(l.a)(F,2),P=B[0],I=B[1],A=Object(de.c)(),E=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListShippingCountries(t);case 2:n=e.sent,c=n.countries,j(c),h(Object.keys(c)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListSubdivisions(t);case 2:n=e.sent,c=n.subdivisions,_(c),N(Object.keys(c)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var c,a,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>2&&void 0!==r[2]?r[2]:null,e.next=3,p.checkout.getShippingOptions(t,{country:n,region:c});case 3:a=e.sent,S(a),I(a[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){E(t.id)}),[]),Object(c.useEffect)((function(){b&&L(b)}),[b]),Object(c.useEffect)((function(){y&&D(t.id,b,y)}),[y]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)($.a,{variant:"h6",gutterBottom:!0,children:"Shipping address"}),Object(T.jsx)(de.b,Object(oe.a)(Object(oe.a)({},A),{},{children:Object(T.jsxs)("form",{onSubmit:A.handleSubmit((function(e){return n(Object(oe.a)(Object(oe.a)({},e),{},{shippingCountry:b,shippingSubdivision:y,shippingOption:P}))})),children:[Object(T.jsxs)(R.a,{container:!0,spacing:3,children:[Object(T.jsx)(be,{name:"firstName",label:"First name"}),Object(T.jsx)(be,{name:"lastName",label:"Last name"}),Object(T.jsx)(be,{name:"address1",label:"Address line 1"}),Object(T.jsx)(be,{name:"email",label:"Email"}),Object(T.jsx)(be,{name:"city",label:"City"}),Object(T.jsx)(be,{name:"zip",label:"Zip / Postal code"}),Object(T.jsxs)(R.a,{item:!0,xs:12,sm:6,children:[Object(T.jsx)(le.a,{children:"Country"}),Object(T.jsx)(je.a,{value:b,fullWidth:!0,onChange:function(e){return h(e.target.value)},children:Object.entries(s).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return Object(T.jsx)(ue.a,{value:e.id,children:e.label},e.id)}))})]}),Object(T.jsxs)(R.a,{item:!0,xs:12,sm:6,children:[Object(T.jsx)(le.a,{children:"State"}),Object(T.jsx)(je.a,{value:y,fullWidth:!0,onChange:function(e){return N(e.target.value)},children:Object.entries(f).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return Object(T.jsx)(ue.a,{value:e.id,children:e.label},e.id)}))})]}),Object(T.jsxs)(R.a,{item:!0,xs:12,sm:6,children:[Object(T.jsx)(le.a,{children:"Shipping Options"}),Object(T.jsx)(je.a,{value:P,fullWidth:!0,onChange:function(e){return I(e.target.value)},children:C.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})).map((function(e){return Object(T.jsx)(ue.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(te.a,{component:m.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(T.jsx)(te.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},pe=n(77),me=n(124),Oe=n(248),xe=n(196),fe=n(252),_e=function(e){var t=e.checkoutToken;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)($.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(T.jsxs)(Oe.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(T.jsxs)(xe.a,{style:{padding:"10px 0"},children:[Object(T.jsx)(fe.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(T.jsx)($.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(T.jsxs)(xe.a,{style:{padding:"10px 0"},children:[Object(T.jsx)(fe.a,{primary:"Total"}),Object(T.jsx)($.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},ge=Object(me.a)("pk_test_51JWVpHBMQpAO6GXJRODHAZYwetWRTPWVab3jA0thXl3wbMPt6xfmA49oABPajY2Xq9uu5OwBjRD4Sq3wUE7VXgtc00govPZSJq"),ve=function(e){var t=e.checkoutToken,n=e.nextStep,c=e.backStep,a=e.shippingData,r=e.onCaptureCheckout,s=function(){var e=Object(o.a)(i.a.mark((function e(c,s,o){var l,j,u,d,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),o&&s){e.next=3;break}return e.abrupt("return");case 3:return l=s.getElement(pe.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:l});case 6:j=e.sent,u=j.error,d=j.paymentMethod,u?console.log("[error]",u):(b={line_items:t.live.line_items,customer:{firstname:a.firstName,lastname:a.lastName,email:a.email},shipping:{name:"International",street:a.address1,town_city:a.city,county_state:a.shippingSubdivision,postal_zip_code:a.zip,country:a.shippingCountry},fulfillment:{shipping_method:a.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},r(t.id,b),n());case 10:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(_e,{checkoutToken:t}),Object(T.jsx)(ee.a,{}),Object(T.jsx)($.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(T.jsx)(pe.Elements,{stripe:ge,children:Object(T.jsx)(pe.ElementsConsumer,{children:function(e){var n=e.elements,a=e.stripe;return Object(T.jsxs)("form",{onSubmit:function(e){return s(e,n,a)},children:[Object(T.jsx)(pe.CardElement,{}),Object(T.jsx)("br",{})," ",Object(T.jsx)("br",{}),Object(T.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(te.a,{variant:"outlined",onClick:c,children:"Back"}),Object(T.jsxs)(te.a,{type:"submit",variant:"contained",disabled:!a,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},ye=Object(B.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(k.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(k.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(k.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),Ne=["Shipping address","Payment details"],ke=function(e){var t=e.cart,n=e.onCaptureCheckout,a=e.order,r=e.error,s=Object(c.useState)(null),j=Object(l.a)(s,2),u=j[0],d=j[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),x=h[0],f=h[1],_=Object(c.useState)({}),g=Object(l.a)(_,2),v=g[0],y=g[1],N=ye(),k=Object(O.f)(),w=function(){return f((function(e){return e+1}))},C=function(){return f((function(e){return e-1}))};Object(c.useEffect)((function(){t.id&&function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,d(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x!==Ne.length&&k.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var S=function(e){y(e),w()},F=function(){return a.customer?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)($.a,{variant:"h5",children:["Thank you for your purchase, ",a.customer.firstname," ",a.customer.lastname,"!"]}),Object(T.jsx)(ee.a,{className:N.divider}),Object(T.jsxs)($.a,{variant:"subtitle2",children:["Order ref: ",a.customer_reference]})]}),Object(T.jsx)("br",{}),Object(T.jsx)(te.a,{component:m.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(T.jsx)("div",{className:N.spinner,children:Object(T.jsx)(ne.a,{})})};r&&(console.log(v),F=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)($.a,{variant:"h5",children:["Error: ",r]}),Object(T.jsx)("br",{}),Object(T.jsx)(te.a,{component:m.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]})});var B=function(){return 0===x?Object(T.jsx)(he,{checkoutToken:u,nextStep:w,setShippingData:y,test:S}):Object(T.jsx)(ve,{checkoutToken:u,nextStep:w,backStep:C,shippingData:v,onCaptureCheckout:n})};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ce.a,{}),Object(T.jsx)("div",{className:N.toolbar}),Object(T.jsx)("main",{className:N.layout,children:Object(T.jsxs)(ae.a,{className:N.paper,children:[Object(T.jsx)($.a,{variant:"h4",align:"center",children:"Checkout"}),Object(T.jsx)(re.a,{activeStep:x,className:N.stepper,children:Ne.map((function(e){return Object(T.jsx)(se.a,{children:Object(T.jsx)(ie.a,{children:e})},e)}))}),x===Ne.length?Object(T.jsx)(F,{}):u&&Object(T.jsx)(B,{})]})})]})};n(192);var we=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),h=s[0],x=s[1],f=Object(c.useState)(!0),_=Object(l.a)(f,2),g=_[0],v=_[1],y=Object(c.useState)([]),N=Object(l.a)(y,2),k=N[0],C=N[1],S=Object(c.useState)([]),F=Object(l.a)(S,2),B=(F[0],F[1]),P=Object(c.useState)({}),I=Object(l.a)(P,2),E=I[0],L=I[1],R=Object(c.useState)({}),z=Object(l.a)(R,2),q=z[0],H=z[1],Y=Object(c.useState)({}),Q=Object(l.a)(Y,2),G=Q[0],V=(Q[1],Object(c.useState)({})),Z=Object(l.a)(V,2),$=Z[0],ee=Z[1],te=Object(c.useState)(""),ce=Object(l.a)(te,2),ae=ce[0],re=ce[1],se=Object(c.useState)(!0),ie=Object(l.a)(se,2),oe=ie[0],le=ie[1],je=Object(c.useState)([]),ue=Object(l.a)(je,2),de=ue[0],be=ue[1],he=Object(c.useState)({}),pe=Object(l.a)(he,2),me=pe[0],Oe=pe[1],xe=Object(c.useState)({}),fe=Object(l.a)(xe,2),_e=fe[0],ge=fe[1];Object(c.useEffect)((function(){ve()}),[]),Object(c.useEffect)((function(){ye(),Ne()}),[]);var ve=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(j);case 2:return t=e.sent,a(t),e.next=6,Object(d.e)(t);case 6:return n=e.sent,ge(n),Object(d.f)(n,(function(e){x(!!e)})),e.next=12,Object(b.d)(t);case 12:c=e.sent,Oe(c),v(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,p.products.list();case 3:t=e.sent,n=t.data,C(n),be(n),v(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.t0=H,e.next=4,p.cart.retrieve();case 4:e.t1=e.sent,(0,e.t0)(e.t1),v(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(o.a)(i.a.mark((function e(t,n,c){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.add(t,n,c);case 2:a=e.sent,r=a.cart,H(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,p.cart.remove(t);case 3:n=e.sent,c=n.cart,H(c),v(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,p.cart.empty();case 3:t=e.sent,n=t.cart,H(n),v(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(o.a)(i.a.mark((function e(t,n,c){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),n||(n=0),e.next=4,p.cart.update(t,{quantity:n},c);case 4:a=e.sent,r=a.cart,H(r),v(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),Be=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.refresh();case 2:t=e.sent,H(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.capture(t,n);case 3:if(c=e.sent,ee(c),console.log((new Date).toLocaleDateString()),!h){e.next=17;break}return e.prev=7,e.next=10,Object(b.a)(Object(b.b)(me,_e.currentUser.uid),{orderId:c.customer_reference,orderDate:(new Date).toLocaleDateString(),orderPrice:c.order_value.formatted_with_symbol});case 10:a=e.sent,console.log("Document written with ID: ",a.id),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error adding document: ",e.t0);case 17:Be(),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(0),re(e.t1.data.error.message);case 23:case"end":return e.stop()}}),e,null,[[0,20],[7,14]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[oe&&Object(T.jsx)("div",{className:"popUp__container",children:Object(T.jsxs)("div",{className:"popUp",children:[Object(T.jsx)(w.a,{className:"popUp__close",size:32,onClick:function(){le((function(e){return!e}))}}),Object(T.jsxs)("div",{className:"popup__message__container",children:[Object(T.jsx)("h3",{children:"We are still in the development phase."}),Object(T.jsx)("br",{}),Object(T.jsx)("h3",{children:"Please do not use real credit card number."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"We are sorry for the incovience."})]})]})}),!g&&ve?Object(T.jsxs)(m.a,{children:[Object(T.jsx)(A,{isLoggedIn:h,totalItems:q.total_items,handleSearch:function(e){var t=e.target.value,n=k.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));be(n)},searchProducts:de}),Object(T.jsxs)(O.c,{children:[!g&&k.length>0?Object(T.jsx)(O.a,{exact:!0,path:"/",children:Object(T.jsx)(D,{products:k,variant:G,handleAddToCart:we})}):Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(T.jsx)(ne.a,{})}),Object(T.jsx)(O.a,{exact:!0,path:"/products",children:Object(T.jsx)(W,{products:k,getProduct:function(e){L(e)},handleProductLinkClick:function(e){B(e)}})}),!g&&k?Object(T.jsx)(O.a,{path:"/products/:productId",children:Object(T.jsx)(J,{products:k,item:E,handleAddToCart:we})}):Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(T.jsx)(ne.a,{})}),Object(T.jsx)(O.a,{exact:!0,path:"/news",children:Object(T.jsx)(U,{})}),Object(T.jsx)(m.a,{exact:!0,path:"/cart",children:Object(T.jsx)(X,{handleUpdateCartQty:Fe,handleEmptyCart:Se,cart:q,handleRemoveFromCart:Ce})}),Object(T.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(T.jsx)(ke,{cart:q,order:$,onCaptureCheckout:Pe,error:ae})}),h&&null!==n?Object(T.jsx)(m.a,{exact:!0,path:"/profile",children:Object(T.jsx)(K,{firebase:n,auth:_e,db:me,getDocs:b.c,collection:b.b})}):Object(T.jsx)(O.a,{exact:!0,path:"/profile",children:Object(T.jsx)(M,{})})]}),Object(T.jsx)("footer",{className:"footer__container",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("hr",{className:"hr--large"}),Object(T.jsxs)("span",{children:["Copyright \xa9",(new Date).getFullYear(),", BabyBear BB "]})]})})]}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(T.jsx)(ne.a,{})})})]})};r.a.render(Object(T.jsx)(we,{}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.afa215c6.chunk.js.map