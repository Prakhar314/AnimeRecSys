(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),a=n.n(r),c=n(18),s=n.n(c),o=(n(75),n(76),n(21)),l=n(9),d=n(7),j=n(107),u=n(15),b=n.n(u),h=n(22),m=n(108),g=n(109),O=n(121),x=n(120);var p=function(e){var t=e.id,n=e.title,r=e.image;return Object(i.jsxs)(x.a,{style:{border:"none",marginBottom:"1rem"},children:[Object(i.jsx)(o.b,{style:{textDecoration:"none"},to:"/anime/".concat(t),children:Object(i.jsx)(x.a.Img,{variant:"top",src:r,style:{objectFit:"cover",width:"100%",borderRadius:"5px"}})}),Object(i.jsx)(x.a.Body,{style:{padding:"10px",paddingTop:"1rem",textAlign:"center",marginLeft:"-10%",marginRight:"-10%"},children:Object(i.jsx)(x.a.Subtitle,{style:{fontSize:"1rem",fontWeight:"bold",overflowWrap:"normal",overflow:"hidden",WebkitLineClamp:2,WebkitBoxOrient:"vertical",display:"-webkit-box"},children:n})})]})};var f=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n};var y=function(e){var t=e.anime,n=e.children,a=e.fluid,c=f().width,s=Object(r.useState)(1),o=Object(d.a)(s,2),l=o[0],u=o[1],b=6,x="38rem";c>=992?(b=6,x="21rem"):c>=768?(b=4,x="20rem"):c<=480&&(x="33rem"),Object(r.useEffect)((function(){l>y&&0!=y&&u(y)}),[b]);var y=Math.ceil(t.length/b),v=(l-1)*b,S=v+b;return Object(i.jsxs)(j.a,{fluid:a||!1,children:[n,Object(i.jsx)(m.a,{style:{flexWrap:"wrap",paddingLeft:"10px",paddingRight:"10px",minHeight:x},children:t.slice(v,S).map((function(e){return Object(i.jsx)(g.a,{xs:4,md:3,lg:2,style:{paddingLeft:"10px",paddingRight:"10px"},children:Object(i.jsx)(p,{id:e.id,title:e.title,image:e.image_path})},e.id)}))}),Object(i.jsx)("div",{style:{display:"flex"},children:Object(i.jsxs)(O.a,{className:"mx-auto",children:[Object(i.jsx)(O.a.Prev,{onClick:function(){return u((function(e){return e-1}))},disabled:1==l}),Object(h.a)(Array(y).keys()).map((function(e){return Object(i.jsx)(O.a.Item,{active:l===e+1,onClick:function(){return u(e+1)},children:e+1},e+1)})),Object(i.jsx)(O.a.Next,{onClick:function(){return u((function(e){return e+1}))},disabled:l==y})]})})]})};var v=function(e){var t=e.height;return Object(i.jsx)("div",{style:{textAlign:"center",height:"".concat(t||50,"vh"),padding:"calc(25% - 50px)"},children:Object(i.jsx)("img",{src:"/AnimeRecSys/sharingan.gif",alt:"Loading",style:{borderRadius:"100%"}})})},S=n(46),A=n.n(S),w=n(111),R=n(112),C=n(119),k=n(113),E=n(114),N=["Adventure","Drama","School","Sci-Fi","Romance","Shounen","Fantasy","Comedy","Comedy","Action"],I=["Action","Adventure","Cars","Comedy","Dementia","Demons","Drama","Ecchi","Fantasy","Game","Harem","Historical","Horror","Josei","Kids","Magic","Martial Arts","Mecha","Military","Music","Mystery","Parody","Police","Psychological","Romance","Samurai","School","Sci-Fi","Seinen","Shoujo","Shoujo Ai","Shounen","Shounen Ai","Slice of Life","Space","Sports","Super Power","Supernatural","Thriller","Vampire"],L=n(8),T=n(110),M=n(115);var F=function(e){var t=e.text,n=e.tooltip,r=e.color,a=Object(i.jsx)("span",{style:{display:"inline-block",padding:"0 14px",margin:"2px",height:"32px",lineHeight:"30px",borderRadius:"25px",backgroundColor:r||"#F1F35B",boxShadow:"0px 2px 10px -10px black",color:"rgba(20,20,20,0.25)",fontWeight:"700"},children:t});return null==n?Object(i.jsx)("span",{children:a}):Object(i.jsx)(M.a,{placement:"right",delay:{show:150,hide:150},overlay:function(e){return Object(i.jsx)(T.a,Object(L.a)(Object(L.a)({id:"button-tooltip"},e),{},{children:n}))},children:a})};var _=function(e){var t,n=e.text,a=e.onTap,c=Object(r.useState)(0),s=Object(d.a)(c,2),o=s[0],l=s[1];return Object(i.jsx)("span",{onClick:function(){var e=o+1;o<3?l((function(e){return e+1})):(l(0),e=0),a(e)},style:{cursor:"pointer"},children:Object(i.jsx)(F,{color:(t=o,0===t||2===t?"rgb(255 255 255 / 68%)":1===t?"springgreen":3===t?"rgb(255, 71, 71)":void 0),text:n})})};function B(e){var t=e.onSuggest,n=Object(r.useState)(!1),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!1),l=Object(d.a)(o,2),u=l[0],m=l[1],g=Object(r.useState)([]),O=Object(d.a)(g,2),x=O[0],p=O[1],f=Object(r.useState)([]),y=Object(d.a)(f,2),v=y[0],S=y[1],L=Object(r.useState)(""),T=Object(d.a)(L,2),M=T[0],F=T[1],B=Object(r.useRef)(M);Object(r.useEffect)((function(){B.current=M}),[M]);var W=function(e){z(e)},z=Object(r.useCallback)(A()((function(e){console.log("fetching "+e),console.log(x),console.log(v),s(!0),b()({method:"post",url:"https://animerecsys.glitch.me/search/".concat(e,"/18"),data:{incgenre:x,excgenre:v},headers:{"Content-Type":"application/json"}}).then((function(n){console.log("fetching "+e+" "+B.current),e===B.current?(s(!1),t(n.data)):s(!0)}))}),1e3),[v,x]);return Object(i.jsxs)(w.a,{className:"gradient-section",style:{minHeight:"40vh"},children:[Object(i.jsxs)(j.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(i.jsxs)(R.a,{size:"lg",style:{maxWidth:"400px"},children:[Object(i.jsx)(C.a,{placeholder:"Search...","aria-label":"Search...","aria-describedby":"basic-addon2",onChange:function(e){F(e.target.value),W(e.target.value)},value:M}),Object(i.jsx)(R.a.Append,{children:Object(i.jsxs)(k.a,{variant:"outline-secondary",onClick:function(){F("")},children:[" ",Object(i.jsx)("i",{class:"fa fa-close"})," "]})})]}),c&&Object(i.jsx)(E.a,{style:{marginLeft:"1rem"},animation:"grow"})]}),Object(i.jsxs)(j.a,{style:{width:"80%",display:"block",textAlign:"center"},children:[Object(i.jsx)("h5",{style:{fontWeight:700,color:"grey",marginTop:"1rem"},children:"Tags"}),(u?I:N).map((function(e,t){return Object(i.jsx)(_,{text:e,onTap:function(e){return function(e,t){console.log(x);var n=u?I:N;if(0===t){var i=v.filter((function(t){return t!==n[e]}));S(i)}if(2===t){var r=x.filter((function(t){return t!==n[e]}));p(r)}1===t&&p([].concat(Object(h.a)(x),[n[e]])),3===t&&S([].concat(Object(h.a)(v),[n[e]]))}(t,e)}},t)})),Object(i.jsx)(k.a,{style:{display:"block",marginTop:"1rem",marginLeft:"auto",marginRight:"auto"},variant:"secondary",size:"sm",onClick:function(){return m((function(e){return!e}))},children:u?"Less":"More"})]})]})}var W=n(118),z=n(117);var P=function(){return Object(i.jsxs)(W.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",children:[Object(i.jsx)(W.a.Brand,{href:"#/",children:"AnimeRecSys"}),Object(i.jsx)(W.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(i.jsx)(W.a.Collapse,{id:"responsive-navbar-nav",children:Object(i.jsxs)(z.a,{className:"ml-auto",children:[Object(i.jsx)(o.b,{className:"nav-link",to:"/browse",children:"Browse"}),Object(i.jsx)(o.b,{className:"nav-link",to:"/recommend",children:"Recommendations"})]})})]})};var H=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(d.a)(c,2),o=s[0],l=s[1],u=Object(r.useCallback)((function(){b.a.get("https://animerecsys.glitch.me/",{timeout:5e3}).then((function(e){a(e.data)})).catch((function(e){console.log(e.code),e.message.includes("timeout")&&setTimeout(u,1e3)}))}),[]);return Object(r.useEffect)((function(){u()}),[u]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),0===n.length?Object(i.jsx)(v,{height:"calc( 100vh - 56px)"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B,{onSuggest:function(e){l(e)}}),Object(i.jsx)(j.a,{children:Object(i.jsx)("h3",{style:{marginBottom:"2rem"},children:0===o.length?"Popular Shows":"Search Results"})})]}),0===o.length&&0!==n.length&&Object(i.jsx)(y,{anime:n}),0!==o.length&&Object(i.jsx)(y,{anime:o})]})},D=n(37),G=n(68);function J(e){var t=e.href,n=e.text;return Object(i.jsx)("span",{className:"inline-link",onClick:function(){return window.open(t)},children:n})}var q=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{position:"relative",children:[Object(i.jsx)("div",{style:{position:"absolute",top:"1rem",right:"1rem"},children:Object(i.jsx)(k.a,{onClick:function(){return a((function(e){return!e}))},"aria-controls":"fade-nav-buttons fade-description fade-git-link fade-subtitle","aria-expanded":n,variant:"outline-light",style:{borderRadius:"50%"},children:Object(i.jsx)("i",{className:n?"fa fa-home":"fa fa-info-circle"})})}),Object(i.jsx)("img",{src:"/AnimeRecSys/AttackOnJojo.gif",style:{position:"absolute",zIndex:"-1",width:"100vw",height:"100vh",objectFit:"cover"}}),Object(i.jsxs)("div",{className:"brand",style:{color:"lightgray",margin:"auto",position:"absolute",top:"28%",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center"},children:[Object(i.jsx)("h1",{style:{fontSize:"min(13vw,100px)"},children:"AnimeRecSys"}),Object(i.jsx)(D.a,{in:!n,children:Object(i.jsx)("p",{id:"fade-subtitle",children:"There couldn't be a better name..."})}),Object(i.jsx)(G.a,{in:n,children:Object(i.jsx)("div",{id:"fade-description",children:Object(i.jsxs)("p",{children:["This project uses a ",Object(i.jsx)(J,{href:"https://arxiv.org/abs/1708.05031",text:"collaborative filtering"})," based recommender system, built using Tensorflow 2.0, on  ",Object(i.jsx)(J,{href:"https://www.kaggle.com/qvinhdo/myanimelist",text:"this Kaggle"})," dataset. The webapp is built using React, Express and Bull."]})})})]}),Object(i.jsxs)("div",{style:{position:"absolute",bottom:"2rem",left:"50%",transform:"translate(-50%,0)",display:"inline-block",textAlign:"center"},children:[Object(i.jsx)(G.a,{in:n,children:Object(i.jsx)("div",{id:"fade-git-link",children:Object(i.jsxs)("a",{rel:"noreferrer",target:"_blank",className:"btn btn-outline-light",href:"https://github.com/Prakhar314/AnimeRecSys",style:{margin:"0.5rem"},children:[Object(i.jsx)("i",{className:"fa fa-github"})," View on Github"]})})}),Object(i.jsx)(G.a,{in:!n,children:Object(i.jsxs)("div",{id:"fade-nav-buttons",children:[Object(i.jsx)(o.b,{className:"btn btn-outline-light",to:"/browse",style:{margin:"0.5rem"},children:"Browse Animes"}),Object(i.jsx)(o.b,{className:"btn btn-outline-light",to:"/recommend",style:{margin:"0.5rem"},children:"Get Recommendations"})]})})]})]})},V={userAnimeList:JSON.parse(localStorage.getItem("userAnimeList")||"[]"),recsInSync:JSON.parse(localStorage.getItem("recsInSync")||"false")},Y=Object.freeze({ADD_ANIME:Symbol("ADD_ANIME"),REMOVE_ANIME:Symbol("REMOVE_ANIME"),CLEAR:Symbol("CLEAR"),SYNC:Symbol("SYNC")}),Q=Object(r.createContext)(V),K=Q.Provider,$=function(e){var t=e.children,n=Object(r.useReducer)((function(e,t){switch(t.type){case Y.ADD_ANIME:return{recsInSync:!1,userAnimeList:[t.payload].concat(Object(h.a)(e.userAnimeList.filter((function(e){return e.id!==t.payload.id}))))};case Y.REMOVE_ANIME:return{recsInSync:!1,userAnimeList:Object(h.a)(e.userAnimeList.filter((function(e){return e.id!==t.payload.id})))};case Y.CLEAR:return{recsInSync:!1,userAnimeList:[]};case Y.SYNC:return Object(L.a)(Object(L.a)({},e),{},{recsInSync:!0});default:throw new Error}}),V),a=Object(d.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){console.log("setting a "+JSON.stringify(c.userAnimeList)),localStorage.setItem("userAnimeList",JSON.stringify(c.userAnimeList))}),[c.userAnimeList]),Object(r.useEffect)((function(){console.log("setting b "+JSON.stringify(c.recsInSync)),localStorage.setItem("recsInSync",JSON.stringify(c.recsInSync))}),[c.recsInSync]),Object(i.jsx)(K,{value:{state:c,dispatch:s},children:t})};function U(e){switch(e){case"R - 17+ (violence & profanity)":return{text:"R-17+",tooltip:"Violence & Profanity",color:"#fc1303"};case"PG-13 - Teens 13 or older":return{text:"PG-13",tooltip:"Teens 13 or Older",color:"#e7f03c"};case"PG - Children":return{text:"PG",tooltip:"Children",color:"#31d65d"};case"R+ - Mild Nudity":return{text:"R+",tooltip:"Mild Nudity",color:"#fc1303"};case"G - All Ages":return{text:"G",tooltip:"All Ages",color:"#31d65d"};default:return{text:e}}}function X(e){return Object(i.jsx)(i.Fragment,{children:e.split(",").map((function(e){return Object(i.jsx)(F,{text:e,color:"#e1e3e3"})}))})}var Z=function(e){var t=e.mpaa_rating,n=e.score,r=e.genre;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{style:{marginBottom:"0.2rem"},children:[Object(i.jsx)(F,Object(L.a)({},U(t)))," ",Object(i.jsx)(F,{text:n,color:"#46ebda"})]}),Object(i.jsx)("p",{children:X(r)})]})},ee=n(116),te=n(50),ne=n.n(te);var ie=function(e){var t=e.children;return Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"},children:t})};var re=function(e){var t=e.anime,n=e.handleClose,a=e.show,c=e.editing,s=Object(r.useContext)(Q).dispatch;return Object(i.jsxs)(ee.a,{show:a,onHide:n,id:"edit-anime-modal",children:[Object(i.jsx)(ee.a.Header,{closeButton:!0,children:Object(i.jsx)(ee.a.Title,{children:!1!==c?"Edit Rating":"Add Rating"})}),Object(i.jsxs)(ee.a.Body,{style:{textAlign:"center"},children:[!t.image_path&&Object(i.jsx)(ie,{children:Object(i.jsx)("h3",{style:{fontWeight:200},children:"Nothing Selected"})}),t.image_path&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:t.image_path,alt:t.title,style:{width:"80%"}}),Object(i.jsx)("h3",{style:{marginTop:"1rem"},children:t.title}),Object(i.jsx)(ne.a,{classNames:"mx-auto",size:35,count:5,isHalf:!0,onChange:function(e){t.score=2*e}})]})]}),Object(i.jsxs)(ee.a.Footer,{children:[Object(i.jsx)(k.a,{variant:"secondary",size:"sm",onClick:n,children:"Close"}),!1!==c&&Object(i.jsx)(k.a,{variant:"danger",size:"sm",onClick:function(){n(),s({type:Y.REMOVE_ANIME,payload:t})},children:"Remove"}),Object(i.jsx)(k.a,{variant:"primary",size:"sm",onClick:function(){n(),s({type:Y.ADD_ANIME,payload:t})},children:"Save Changes"})]})]})};function ae(){var e=Object(r.useMemo)((function(){return{cover:"/AnimeRecSys/coverPlaceholder.png",banner:"/AnimeRecSys/bannerPlaceholder.png"}}),[]),t=Object(l.f)().id,n=Object(r.useState)({}),c=Object(d.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(e),h=Object(d.a)(u,2),O=h[0],x=h[1],p=a.a.useState(window.innerWidth),f=Object(d.a)(p,2),S=f[0],A=f[1],w=Object(r.useState)(!1),R=Object(d.a)(w,2),C=R[0],E=R[1],N=(Object(r.useContext)(Q).state.userAnimeList.filter((function(e){return e.id===t}))[0]||{score:null}).score;return a.a.useEffect((function(){var e=function(){return A(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(r.useEffect)((function(){x(e),b.a.get("https://animerecsys.glitch.me/anime/".concat(t,"/18")).then((function(e){o(e.data)}));var n={id:t};b.a.post("https://graphql.anilist.co",{query:"\n            query ($id: Int) {\n                Media(idMal: $id, type: ANIME) {\n                    coverImage {\n                    large\n                    }\n                    bannerImage\n                }\n            }\n            ",variables:n}).then((function(t){x({banner:t.data.data.Media.bannerImage||e.banner,cover:t.data.data.Media.coverImage.large||e.cover})}))}),[t,e]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),s.details&&Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:O.banner,alt:s.details.title,style:{height:"min(500px,60vw)",width:"100%",objectFit:"cover"}}),Object(i.jsx)(j.a,{children:Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(g.a,{xs:12,md:4,style:{paddingRight:S>768?"0px":"15px",textAlign:S>768?"left":"center"},children:[Object(i.jsx)("div",{style:{display:"flex"},children:Object(i.jsx)("img",{src:O.cover,alt:s.details.title,style:{marginTop:"-120px",boxShadow:"0px 0px 68px -19px black",marginLeft:S>768?"unset":"auto",marginRight:S>768?"unset":"auto"}})}),Object(i.jsxs)("h5",{style:{color:"rgb(108, 117, 125)",fontWeight:"300",marginTop:"2rem"},children:[s.details.title_japanese,", ",s.details.title_english]}),Object(i.jsx)(Z,Object(L.a)({},s.details))]}),Object(i.jsxs)(g.a,{xs:12,md:8,style:{marginLeft:S>768?"15px":"0px",marginRight:"-15px"},children:[Object(i.jsx)("h2",{style:{marginTop:"2rem",marginBottom:"1rem",textAlign:S>768?"left":"center"},children:s.details.title}),Object(i.jsx)("p",{children:s.details.synopsis}),Object(i.jsxs)("div",{className:"text-center text-sm-left",children:[Object(i.jsx)(k.a,{variant:"outline-dark m-1",onClick:function(){return E(!0)},children:null!=N?"Rated ".concat(N):"Rate this Anime"}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.myanimelist.net/anime/".concat(t),className:"btn btn-outline-dark m-1",children:"Open in MyAnimeList"})]})]})]})}),Object(i.jsx)(y,{anime:s.recommendations,children:Object(i.jsx)("h3",{style:{marginTop:"2rem",marginBottom:"1rem",textAlign:S>768?"left":"center"},children:"Recommendations"})}),Object(i.jsx)(re,{anime:{id:s.details.id,title:s.details.title,image_path:O.cover},handleClose:function(){return E(!1)},show:C,editing:!1})]}),null==s.details&&Object(i.jsx)(v,{})]})}var ce=function(e){var t=e.show,n=e.handleClose,a=Object(r.useContext)(Q),c=a.state,s=a.dispatch,o=Object(r.useState)({loading:!1,value:"",currentAnime:{},suggestion:[]}),l=Object(d.a)(o,2),j=l[0],u=l[1],h=Object(r.useRef)(j.value);Object(r.useEffect)((function(){h.current=j.value}),[j.value]);var O=function(e){x(e)},x=Object(r.useCallback)(A()((function(e){console.log("fetching "+e),u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!0})})),b()({method:"post",url:"https://animerecsys.glitch.me/search/".concat(e,"/5"),headers:{"Content-Type":"application/json"}}).then((function(t){console.log("fetching "+e+" "+h.current),e===h.current?u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!1,suggestion:t.data})})):u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!0})}))}))}),1e3),[]),p=c.userAnimeList.filter((function(e){return e.id===j.currentAnime.id})),f=0!==p.length&&(null==j.currentAnime.score||j.currentAnime.score===p[0].score);return Object(i.jsxs)(ee.a,{show:t,onHide:n,children:[Object(i.jsx)(ee.a.Header,{closeButton:!0,children:Object(i.jsx)(ee.a.Title,{children:"Rate Anime"})}),Object(i.jsx)(ee.a.Body,{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"0px",paddingTop:"0px"},children:Object(i.jsxs)(m.a,{style:{minHeight:"300px"},children:[Object(i.jsxs)(g.a,{style:{background:"linear-gradient(180deg, rgba(230,250,255,1) 0%, rgba(187,226,255,1) 100%)",paddingTop:"1rem"},children:[Object(i.jsxs)(R.a,{size:"sm",children:[Object(i.jsx)(C.a,{placeholder:"Search","aria-label":"Search...","aria-describedby":"basic-addon2",onChange:function(e){u((function(t){return Object(L.a)(Object(L.a)({},t),{},{value:e.target.value,currentAnime:{}})})),O(e.target.value)},value:j.value}),Object(i.jsx)(R.a.Append,{children:Object(i.jsxs)(k.a,{variant:"outline-secondary",onClick:function(){u((function(e){return Object(L.a)(Object(L.a)({},e),{},{value:"",loading:!1})}))},children:[" ",Object(i.jsx)("i",{class:"fa fa-close"})," "]})})]}),j.loading&&Object(i.jsx)("div",{style:{display:"flex",height:"80%"},children:Object(i.jsx)(E.a,{animation:"grow",style:{margin:"auto"}})}),Object(i.jsxs)("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"},children:[!j.loading&&0!==j.suggestion.length&&j.suggestion.map((function(e,t){return Object(i.jsx)("h6",{style:{padding:"10px",borderTop:0===t?"1px solid gray":"none",borderBottom:"1px solid gray",marginBottom:"5px",cursor:"pointer"},onClick:function(){return t=e,void u((function(e){return Object(L.a)(Object(L.a)({},e),{},{currentAnime:t})}));var t},children:e.title},e.id)})),!j.loading&&0===j.suggestion.length&&Object(i.jsx)(ie,{children:Object(i.jsx)("h6",{style:{fontWeight:200},children:"Suggestions will show up here"})})]})]}),Object(i.jsxs)(g.a,{style:{textAlign:"center"},children:[!j.currentAnime.image_path&&Object(i.jsx)(ie,{children:Object(i.jsx)("h3",{style:{fontWeight:200},children:"Nothing Selected"})}),j.currentAnime.image_path&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:j.currentAnime.image_path,alt:j.currentAnime.title,style:{width:"80%"}}),Object(i.jsx)("h3",{style:{marginTop:"1rem"},children:j.currentAnime.title}),Object(i.jsx)(ne.a,{classNames:"mx-auto",size:35,count:5,isHalf:!0,onChange:function(e){j.currentAnime.score=2*e,u((function(e){return Object(L.a)({},e)}))}})]})]})]})}),Object(i.jsxs)(ee.a.Footer,{children:[Object(i.jsx)(k.a,{variant:"secondary",size:"sm",onClick:n,children:"Close"}),Object(i.jsx)(k.a,{variant:"primary",size:"sm",onClick:function(){return e=j.currentAnime,void s({type:Y.ADD_ANIME,payload:Object(L.a)({},e)});var e},disabled:null==j.currentAnime.score||f,children:f?"Rated ".concat(p[0].score):"Save Rating"})]})]})},se=n(69),oe=n.n(se);var le=function(e){e.id;var t=e.title,n=e.image,r=e.score;return Object(i.jsxs)(x.a,{style:{border:"none",margin:"0.5rem",backgroundColor:"transparent",cursor:"pointer"},children:[Object(i.jsx)(x.a.Img,{variant:"top",src:n,style:{objectFit:"cover",height:"30vh",borderRadius:"10px",display:"block"}}),Object(i.jsxs)("div",{style:{backgroundColor:"#000000a6",color:"white",fontWeight:700,fontSize:"smaller",position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"10px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"flex-end",paddingBottom:"1rem"},children:[Object(i.jsx)("h1",{style:{position:"absolute",top:"50%",fontWeight:800,transform:"translate( 0 , -50% )"},children:r||10}),t.slice(0,50)]})]})};function de(e){var t=e.text,n=e.style,r=e.onClick,a=e.width;return Object(i.jsx)(k.a,{variant:"outline-dark",size:a>600?"md":"sm",style:n,onClick:r,children:t})}var je=function(e){var t=e.onAddAnime,n=Object(r.useContext)(Q),a=n.state,c=n.dispatch,s=f().width,o=Object(r.useState)({key:0,showModal:!1}),l=Object(d.a)(o,2),u=l[0],b=l[1];return Object(i.jsxs)("div",{className:"gradient-section",style:{minHeight:"45vh",backgroundColor:"lightgrey",paddingTop:"1rem"},children:[Object(i.jsxs)(j.a,{style:{display:"flex"},children:[Object(i.jsxs)("h3",{style:{marginLeft:"1rem",fontWeight:300,fontSize:s>600?"":"25px"},children:["Your List(",a.userAnimeList.length,")"]}),Object(i.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(i.jsx)(de,{style:{marginRight:"5px"},text:"Add Anime",onClick:t,width:s}),Object(i.jsx)(de,{style:{marginLeft:"5px"},text:"Clear All",onClick:function(){c({type:Y.CLEAR})},width:s})]})]}),Object(i.jsx)(j.a,{children:Object(i.jsx)(oe.a,{arrowLeft:Object(i.jsx)("div",{style:{fontSize:"30px",marginRight:"1rem",fontWeight:700},children:" < "}),arrowRight:Object(i.jsx)("div",{style:{fontSize:"30px",marginLeft:"1rem",fontWeight:700},children:" > "}),arrowDisabledClass:"d-none",hideSingleArrow:!0,data:a.userAnimeList.map((function(e,t){return Object(i.jsx)("div",{className:"menu-item",style:{display:"grid",maxWidth:"21vh"},children:Object(i.jsx)(le,{id:e.id,image:e.image_path,title:e.title,score:e.score})},t)})),selected:u.key,onSelect:function(e){b({key:e,showModal:!0})}})}),u.showModal&&Object(i.jsx)(re,{anime:Object(L.a)({},a.userAnimeList[u.key]),show:u.showModal,handleClose:function(){return b((function(e){return Object(L.a)(Object(L.a)({},e),{},{showModal:!1})}))}})]})},ue=n(122),be={loading:!1,recommendations:[],error:!1,errorMessage:"",progress:0,queue:0};function he(e,t){switch(t.type){case"REQ_SENT":return{loading:!0,recommendations:[],error:!1,errorMessage:"",progress:0,queue:t.payload.numWait||-1};case"PROGRESS":return Object(L.a)(Object(L.a)({},e),{},{progress:t.payload.progress});case"FINISH":return{loading:!1,recommendations:t.payload.result,error:!1,errorMessage:"",progress:0,queue:0};case"ERROR":return{loading:!1,recommendations:[],error:!0,errorMessage:t.payload.error,progress:0,queue:0};default:return be}}var me=function(){var e=Object(r.useReducer)(he,be),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useContext)(Q),s=c.state,o=c.dispatch,l=s.userAnimeList;function u(e){e>30&&a({type:"ERROR",payload:{error:"Job didn't finish in time"}}),b.a.get("https://animerecsys.glitch.me/job/",{withCredentials:!0}).then((function(t){"failed"!==t.data.status?null!=t.data.result?a({type:"FINISH",payload:{result:t.data.result}}):(a({type:"PROGRESS",payload:{progress:t.data.progress}}),setTimeout((function(){u(e+1)}),5e3)):a({type:"ERROR",payload:{error:"Failed"}})})).catch((function(e){a({type:"ERROR",payload:{error:e.response.data.error}})}))}return Object(r.useEffect)((function(){s.recsInSync&&(a({type:"REQ_SENT",payload:{}}),b.a.get("https://animerecsys.glitch.me/job/",{withCredentials:!0}).then((function(e){"failed"!==e.data.status?null!=e.data.result?a({type:"FINISH",payload:{result:e.data.result}}):(a({type:"PROGRESS",payload:{progress:e.data.progress}}),setTimeout((function(){u(0)}),5e3)):a({type:"reset"})})).catch((function(e){a({type:"reset"}),console.log(e)})))}),[]),Object(i.jsxs)("div",{style:{minHeight:"45vh",position:"relative",paddingBottom:"3rem"},children:[Object(i.jsxs)("div",{style:{textAlign:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50% , -50%)"},children:[n.loading&&(n.progress>0?Object(i.jsx)(ue.a,{variant:"info",now:n.progress,animated:!0,style:{minWidth:"200px"}}):Object(i.jsx)(E.a,{animation:"grow",variant:"info"})),n.loading&&n.queue>0&&Object(i.jsxs)("h6",{className:"text-muted",style:{marginTop:"1rem"},children:["Wait Time...",30*n.queue,"s"]}),n.error&&Object(i.jsx)("h6",{className:"text-danger",children:n.errorMessage})]}),0!==n.recommendations.length&&Object(i.jsx)(y,{anime:n.recommendations,style:{margin:"3rem"},children:Object(i.jsx)(j.a,{fluid:!0,children:Object(i.jsx)("h3",{style:{marginBottom:"2rem",marginTop:"2rem"},children:"Recommended"})})}),!n.loading&&Object(i.jsx)(k.a,{variant:"outline-dark",onClick:function(){a({type:"REQ_SENT",payload:{}}),b()({method:"post",url:"https://animerecsys.glitch.me/recommendations/18",data:{animes:Object(h.a)(l.map((function(e){return e.id}))),scores:Object(h.a)(l.map((function(e){return e.score})))},headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){a({type:"REQ_SENT",payload:e.data}),o({type:Y.SYNC}),setTimeout((function(){u(0)}),5e3)})).catch((function(e){"ACTIVE_JOB"!==e.response.data.err?a({type:"ERROR",payload:{error:e.response.data.error}}):u(0)}))},disabled:l.length<10,style:{position:"absolute",left:"50%",transform:"translate(-50%,0)",bottom:"1rem"},children:l.length<10?"Add "+(10-l.length)+" more":"Get Recommendations"})]})};var ge=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),Object(i.jsx)(je,{onAddAnime:function(){return a(!0)}}),Object(i.jsx)(ce,{show:n,handleClose:function(){return a(!1)}}),Object(i.jsx)(me,{})]})};var Oe=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(o.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/anime/:id",children:Object(i.jsx)(ae,{})}),Object(i.jsx)(l.a,{path:"/recommend",children:Object(i.jsx)(ge,{})}),Object(i.jsx)(l.a,{path:"/browse",children:Object(i.jsx)(H,{})}),Object(i.jsx)(l.a,{path:"/",children:Object(i.jsx)(q,{})})]})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)($,{children:Object(i.jsx)(Oe,{})})}),document.getElementById("root")),xe()},75:function(e,t,n){},76:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.6c4a735c.chunk.js.map