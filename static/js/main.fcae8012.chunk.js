(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=n.n(i),c=n(19),s=n.n(c),o=(n(75),n(76),n(18)),l=n(9),d=n(8),j=n(107),u=n(13),b=n.n(u),h=n(22),m=n(108),g=n(109),O=n(121),x=n(120);var p=function(e){var t=e.id,n=e.title,i=e.image;return Object(r.jsxs)(x.a,{style:{border:"none",marginBottom:"1rem"},children:[Object(r.jsx)(o.b,{style:{textDecoration:"none"},to:"/anime/".concat(t),children:Object(r.jsx)(x.a.Img,{variant:"top",src:i,style:{objectFit:"cover",width:"100%",borderRadius:"5px"}})}),Object(r.jsx)(x.a.Body,{style:{padding:"10px",paddingTop:"1rem",textAlign:"center",marginLeft:"-10%",marginRight:"-10%"},children:Object(r.jsx)(x.a.Subtitle,{style:{fontSize:"1rem",fontWeight:"bold",overflowWrap:"normal",overflow:"hidden",WebkitLineClamp:2,WebkitBoxOrient:"vertical",display:"-webkit-box"},children:n})})]})};var f=function(){var e=Object(i.useState)({width:void 0,height:void 0}),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n};var y=function(e){var t=e.anime,n=e.children,a=e.fluid,c=f().width,s=Object(i.useState)(1),o=Object(d.a)(s,2),l=o[0],u=o[1],b=6,x="38rem";c>=992?(b=6,x="21rem"):c>=768?(b=4,x="20rem"):c<=480&&(x="33rem"),Object(i.useEffect)((function(){l>y&&0!==y&&u(y)}),[b]);var y=Math.ceil(t.length/b),v=(l-1)*b,S=v+b;return Object(r.jsxs)(j.a,{fluid:a||!1,children:[n,Object(r.jsx)(m.a,{style:{flexWrap:"wrap",paddingLeft:"10px",paddingRight:"10px",minHeight:x},children:t.slice(v,S).map((function(e){return Object(r.jsx)(g.a,{xs:4,md:3,lg:2,style:{paddingLeft:"10px",paddingRight:"10px"},children:Object(r.jsx)(p,{id:e.id,title:e.title,image:e.image_path})},e.id)}))}),Object(r.jsx)("div",{style:{display:"flex"},children:Object(r.jsxs)(O.a,{className:"mx-auto",children:[Object(r.jsx)(O.a.Prev,{onClick:function(){return u((function(e){return e-1}))},disabled:1===l}),Object(h.a)(Array(y).keys()).map((function(e){return Object(r.jsx)(O.a.Item,{active:l===e+1,onClick:function(){return u(e+1)},children:e+1},e+1)})),Object(r.jsx)(O.a.Next,{onClick:function(){return u((function(e){return e+1}))},disabled:l===y})]})})]})};var v=function(e){var t=e.height;return Object(r.jsx)("div",{style:{textAlign:"center",height:"".concat(t||50,"vh"),padding:"calc(25% - 50px)"},children:Object(r.jsx)("img",{src:"/AnimeRecSys/sharingan.gif",alt:"Loading",style:{borderRadius:"100%"}})})},S=n(46),A=n.n(S),w=n(111),R=n(112),C=n(119),k=n(113),E=n(114),I=["Adventure","Drama","School","Sci-Fi","Romance","Shounen","Fantasy","Comedy","Comedy","Action"],N=["Action","Adventure","Cars","Comedy","Dementia","Demons","Drama","Ecchi","Fantasy","Game","Harem","Historical","Horror","Josei","Kids","Magic","Martial Arts","Mecha","Military","Music","Mystery","Parody","Police","Psychological","Romance","Samurai","School","Sci-Fi","Seinen","Shoujo","Shoujo Ai","Shounen","Shounen Ai","Slice of Life","Space","Sports","Super Power","Supernatural","Thriller","Vampire"],L=n(7),T=n(110),M=n(115);var F=function(e){var t=e.text,n=e.tooltip,i=e.color,a=Object(r.jsx)("span",{style:{display:"inline-block",padding:"0 14px",margin:"2px",height:"32px",lineHeight:"30px",borderRadius:"25px",backgroundColor:i||"#F1F35B",boxShadow:"0px 2px 10px -10px black",color:"rgba(20,20,20,0.25)",fontWeight:"700"},children:t});return null==n?Object(r.jsx)("span",{children:a}):Object(r.jsx)(M.a,{placement:"right",delay:{show:150,hide:150},overlay:function(e){return Object(r.jsx)(T.a,Object(L.a)(Object(L.a)({id:"button-tooltip"},e),{},{children:n}))},children:a})};var B=function(e){var t,n=e.text,a=e.onTap,c=Object(i.useState)(0),s=Object(d.a)(c,2),o=s[0],l=s[1];return Object(r.jsx)("span",{onClick:function(){var e=o+1;o<3?l((function(e){return e+1})):(l(0),e=0),a(e)},style:{cursor:"pointer"},children:Object(r.jsx)(F,{color:(t=o,0===t||2===t?"rgb(255 255 255 / 68%)":1===t?"springgreen":3===t?"rgb(255, 71, 71)":void 0),text:n})})};function _(e){var t=e.onSuggest,n=Object(i.useState)(!1),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(i.useState)(!1),l=Object(d.a)(o,2),u=l[0],m=l[1],g=Object(i.useState)([]),O=Object(d.a)(g,2),x=O[0],p=O[1],f=Object(i.useState)([]),y=Object(d.a)(f,2),v=y[0],S=y[1],L=Object(i.useState)(""),T=Object(d.a)(L,2),M=T[0],F=T[1],_=Object(i.useRef)(M);Object(i.useEffect)((function(){_.current=M}),[M]);var P=function(e){W(e)},W=Object(i.useCallback)(A()((function(e){s(!0),b()({method:"post",url:"https://animerecsys.glitch.me/search/".concat(e,"/18"),data:{incgenre:x,excgenre:v},headers:{"Content-Type":"application/json"}}).then((function(n){e===_.current?(s(!1),t(n.data)):s(!0)}))}),1e3),[v,x]);return Object(r.jsxs)(w.a,{className:"gradient-section",style:{minHeight:"40vh"},children:[Object(r.jsxs)(j.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(r.jsxs)(R.a,{size:"lg",style:{maxWidth:"400px"},children:[Object(r.jsx)(C.a,{placeholder:"Search...","aria-label":"Search...","aria-describedby":"basic-addon2",onChange:function(e){F(e.target.value),P(e.target.value)},value:M}),Object(r.jsx)(R.a.Append,{children:Object(r.jsxs)(k.a,{variant:"outline-secondary",onClick:function(){F("")},children:[" ",Object(r.jsx)("i",{className:"fa fa-close"})," "]})})]}),c&&Object(r.jsx)(E.a,{style:{marginLeft:"1rem"},animation:"grow"})]}),Object(r.jsxs)(j.a,{style:{width:"80%",display:"block",textAlign:"center"},children:[Object(r.jsx)("h5",{style:{fontWeight:700,color:"grey",marginTop:"1rem"},children:"Tags"}),(u?N:I).map((function(e,t){return Object(r.jsx)(B,{text:e,onTap:function(e){return function(e,t){var n=u?N:I;if(0===t){var r=v.filter((function(t){return t!==n[e]}));S(r)}if(2===t){var i=x.filter((function(t){return t!==n[e]}));p(i)}1===t&&p([].concat(Object(h.a)(x),[n[e]])),3===t&&S([].concat(Object(h.a)(v),[n[e]]))}(t,e)}},t)})),Object(r.jsx)(k.a,{style:{display:"block",marginTop:"1rem",marginLeft:"auto",marginRight:"auto"},variant:"secondary",size:"sm",onClick:function(){return m((function(e){return!e}))},children:u?"Less":"More"})]})]})}var P=n(118),W=n(117);var z=function(){return Object(r.jsxs)(P.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",children:[Object(r.jsx)(P.a.Brand,{href:"#/",children:"AnimeRecSys"}),Object(r.jsx)(P.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsx)(P.a.Collapse,{id:"responsive-navbar-nav",children:Object(r.jsxs)(W.a,{className:"ml-auto",children:[Object(r.jsx)(o.b,{className:"nav-link",to:"/browse",children:"Browse"}),Object(r.jsx)(o.b,{className:"nav-link",to:"/recommend",children:"Recommendations"})]})})]})};var H=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),s=Object(d.a)(c,2),o=s[0],l=s[1],u=Object(i.useCallback)((function(){b.a.get("https://animerecsys.glitch.me/",{timeout:5e3}).then((function(e){a(e.data)})).catch((function(e){e.message.includes("timeout")&&setTimeout(u,1e3)}))}),[]);return Object(i.useEffect)((function(){u()}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),0===n.length?Object(r.jsx)(v,{height:"calc( 100vh - 56px)"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_,{onSuggest:function(e){l(e)}}),Object(r.jsx)(j.a,{children:Object(r.jsx)("h3",{style:{marginBottom:"2rem"},children:0===o.length?"Popular Shows":"Search Results"})})]}),0===o.length&&0!==n.length&&Object(r.jsx)(y,{anime:n}),0!==o.length&&Object(r.jsx)(y,{anime:o})]})},D=n(37),G=n(68);function J(e){var t=e.href,n=e.text;return Object(r.jsx)("span",{className:"inline-link",onClick:function(){return window.open(t)},children:n})}var q=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{position:"relative",children:[Object(r.jsx)("div",{style:{position:"absolute",top:"1rem",right:"1rem"},children:Object(r.jsx)(k.a,{onClick:function(){return a((function(e){return!e}))},"aria-controls":"fade-nav-buttons fade-description fade-git-link fade-subtitle","aria-expanded":n,variant:"outline-light",style:{borderRadius:"50%"},children:Object(r.jsx)("i",{className:n?"fa fa-home":"fa fa-info-circle"})})}),Object(r.jsx)("img",{alt:"AOJ",src:"/AnimeRecSys/AttackOnJojo.gif",style:{position:"absolute",zIndex:"-1",width:"100vw",height:"100vh",objectFit:"cover"}}),Object(r.jsxs)("div",{className:"brand",style:{color:"lightgray",margin:"auto",position:"absolute",top:"28%",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center"},children:[Object(r.jsx)("h1",{style:{fontSize:"min(13vw,100px)"},children:"AnimeRecSys"}),Object(r.jsx)(D.a,{in:!n,children:Object(r.jsx)("p",{id:"fade-subtitle",children:"There couldn't be a better name..."})}),Object(r.jsx)(G.a,{in:n,children:Object(r.jsx)("div",{id:"fade-description",children:Object(r.jsxs)("p",{children:["This project uses a ",Object(r.jsx)(J,{href:"https://arxiv.org/abs/1708.05031",text:"collaborative filtering"})," based recommender system, built using Tensorflow 2.0, on  ",Object(r.jsx)(J,{href:"https://www.kaggle.com/qvinhdo/myanimelist",text:"this Kaggle"})," dataset. The webapp is built using React, Express and Bull."]})})})]}),Object(r.jsxs)("div",{style:{position:"absolute",bottom:"2rem",left:"50%",transform:"translate(-50%,0)",display:"inline-block",textAlign:"center"},children:[Object(r.jsx)(G.a,{in:n,children:Object(r.jsx)("div",{id:"fade-git-link",children:Object(r.jsxs)("a",{rel:"noreferrer",target:"_blank",className:"btn btn-outline-light",href:"https://github.com/Prakhar314/AnimeRecSys",style:{margin:"0.5rem"},children:[Object(r.jsx)("i",{className:"fa fa-github"})," View on Github"]})})}),Object(r.jsx)(G.a,{in:!n,children:Object(r.jsxs)("div",{id:"fade-nav-buttons",children:[Object(r.jsx)(o.b,{className:"btn btn-outline-light",to:"/browse",style:{margin:"0.5rem"},children:"Browse Animes"}),Object(r.jsx)(o.b,{className:"btn btn-outline-light",to:"/recommend",style:{margin:"0.5rem"},children:"Get Recommendations"})]})})]})]})},V={userAnimeList:JSON.parse(localStorage.getItem("userAnimeList")||"[]"),recsInSync:JSON.parse(localStorage.getItem("recsInSync")||"false")},Y=Object.freeze({IMPORT:Symbol("IMPORT"),ADD_ANIME:Symbol("ADD_ANIME"),REMOVE_ANIME:Symbol("REMOVE_ANIME"),CLEAR:Symbol("CLEAR"),SYNC:Symbol("SYNC")}),Q=Object(i.createContext)(V),K=Q.Provider,$=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){switch(t.type){case Y.ADD_ANIME:return{recsInSync:!1,userAnimeList:[t.payload].concat(Object(h.a)(e.userAnimeList.filter((function(e){return e.id!==t.payload.id}))))};case Y.IMPORT:return{recsInSync:!1,userAnimeList:t.payload};case Y.REMOVE_ANIME:return{recsInSync:!1,userAnimeList:Object(h.a)(e.userAnimeList.filter((function(e){return e.id!==t.payload.id})))};case Y.CLEAR:return{recsInSync:!1,userAnimeList:[]};case Y.SYNC:return Object(L.a)(Object(L.a)({},e),{},{recsInSync:!0});default:throw new Error}}),V),a=Object(d.a)(n,2),c=a[0],s=a[1];return Object(i.useEffect)((function(){localStorage.setItem("userAnimeList",JSON.stringify(c.userAnimeList))}),[c.userAnimeList]),Object(i.useEffect)((function(){localStorage.setItem("recsInSync",JSON.stringify(c.recsInSync))}),[c.recsInSync]),Object(r.jsx)(K,{value:{state:c,dispatch:s},children:t})};function U(e){switch(e){case"R - 17+ (violence & profanity)":return{text:"R-17+",tooltip:"Violence & Profanity",color:"#fc1303"};case"PG-13 - Teens 13 or older":return{text:"PG-13",tooltip:"Teens 13 or Older",color:"#e7f03c"};case"PG - Children":return{text:"PG",tooltip:"Children",color:"#31d65d"};case"R+ - Mild Nudity":return{text:"R+",tooltip:"Mild Nudity",color:"#fc1303"};case"G - All Ages":return{text:"G",tooltip:"All Ages",color:"#31d65d"};default:return{text:e}}}function X(e){return Object(r.jsx)(r.Fragment,{children:e.split(",").map((function(e,t){return Object(r.jsx)(F,{text:e,color:"#e1e3e3"},t)}))})}var Z=function(e){var t=e.mpaa_rating,n=e.score,i=e.genre;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{style:{marginBottom:"0.2rem"},children:[Object(r.jsx)(F,Object(L.a)({},U(t)))," ",Object(r.jsx)(F,{text:n,color:"#46ebda"})]}),Object(r.jsx)("p",{children:X(i)})]})},ee=n(116),te=n(50),ne=n.n(te);var re=function(e){var t=e.children;return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"},children:t})};var ie=function(e){var t=e.anime,n=e.handleClose,a=e.show,c=e.editing,s=Object(i.useContext)(Q).dispatch;return Object(r.jsxs)(ee.a,{show:a,onHide:n,id:"edit-anime-modal",children:[Object(r.jsx)(ee.a.Header,{closeButton:!0,children:Object(r.jsx)(ee.a.Title,{children:!1!==c?"Edit Rating":"Add Rating"})}),Object(r.jsxs)(ee.a.Body,{style:{textAlign:"center"},children:[!t.image_path&&Object(r.jsx)(re,{children:Object(r.jsx)("h3",{style:{fontWeight:200},children:"Nothing Selected"})}),t.image_path&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:t.image_path,alt:t.title,style:{width:"80%"}}),Object(r.jsx)("h3",{style:{marginTop:"1rem"},children:t.title}),Object(r.jsx)(ne.a,{classNames:"mx-auto",size:35,count:5,isHalf:!0,onChange:function(e){t.score=2*e}})]})]}),Object(r.jsxs)(ee.a.Footer,{children:[Object(r.jsx)(k.a,{variant:"secondary",size:"sm",onClick:n,children:"Close"}),!1!==c&&Object(r.jsx)(k.a,{variant:"danger",size:"sm",onClick:function(){n(),s({type:Y.REMOVE_ANIME,payload:t})},children:"Remove"}),Object(r.jsx)(k.a,{variant:"primary",size:"sm",onClick:function(){n(),s({type:Y.ADD_ANIME,payload:t})},children:"Save Changes"})]})]})};function ae(){var e=Object(i.useMemo)((function(){return{cover:"/AnimeRecSys/coverPlaceholder.png",banner:"/AnimeRecSys/bannerPlaceholder.png"}}),[]),t=Object(l.f)().id,n=Object(i.useState)({}),c=Object(d.a)(n,2),s=c[0],o=c[1],u=Object(i.useState)(e),h=Object(d.a)(u,2),O=h[0],x=h[1],p=a.a.useState(window.innerWidth),f=Object(d.a)(p,2),S=f[0],A=f[1],w=Object(i.useState)(!1),R=Object(d.a)(w,2),C=R[0],E=R[1],I=(Object(i.useContext)(Q).state.userAnimeList.filter((function(e){return e.id===t}))[0]||{score:null}).score;return a.a.useEffect((function(){var e=function(){return A(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(i.useEffect)((function(){x(e),b.a.get("https://animerecsys.glitch.me/anime/".concat(t,"/18")).then((function(e){o(e.data)}));var n={id:t};b.a.post("https://graphql.anilist.co",{query:"\n            query ($id: Int) {\n                Media(idMal: $id, type: ANIME) {\n                    coverImage {\n                    large\n                    }\n                    bannerImage\n                }\n            }\n            ",variables:n}).then((function(t){x({banner:t.data.data.Media.bannerImage||e.banner,cover:t.data.data.Media.coverImage.large||e.cover})}))}),[t,e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),s.details&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:O.banner,alt:s.details.title,style:{height:"min(500px,60vw)",width:"100%",objectFit:"cover"}}),Object(r.jsx)(j.a,{children:Object(r.jsxs)(m.a,{children:[Object(r.jsxs)(g.a,{xs:12,md:4,style:{paddingRight:S>768?"0px":"15px",textAlign:S>768?"left":"center"},children:[Object(r.jsx)("div",{style:{display:"flex"},children:Object(r.jsx)("img",{src:O.cover,alt:s.details.title,style:{marginTop:"-120px",boxShadow:"0px 0px 68px -19px black",marginLeft:S>768?"unset":"auto",marginRight:S>768?"unset":"auto"}})}),Object(r.jsxs)("h5",{style:{color:"rgb(108, 117, 125)",fontWeight:"300",marginTop:"2rem"},children:[s.details.title_japanese,", ",s.details.title_english]}),Object(r.jsx)(Z,Object(L.a)({},s.details))]}),Object(r.jsxs)(g.a,{xs:12,md:8,style:{marginLeft:S>768?"15px":"0px",marginRight:"-15px"},children:[Object(r.jsx)("h2",{style:{marginTop:"2rem",marginBottom:"1rem",textAlign:S>768?"left":"center"},children:s.details.title}),Object(r.jsx)("p",{children:s.details.synopsis}),Object(r.jsxs)("div",{className:"text-center text-sm-left",children:[Object(r.jsx)(k.a,{variant:"outline-dark m-1",onClick:function(){return E(!0)},children:null!=I?"Rated ".concat(I):"Rate this Anime"}),Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.myanimelist.net/anime/".concat(t),className:"btn btn-outline-dark m-1",children:"Open in MyAnimeList"})]})]})]})}),Object(r.jsx)(y,{anime:s.recommendations,children:Object(r.jsx)("h3",{style:{marginTop:"2rem",marginBottom:"1rem",textAlign:S>768?"left":"center"},children:"Recommendations"})}),Object(r.jsx)(ie,{anime:{id:s.details.id,title:s.details.title,image_path:O.cover},handleClose:function(){return E(!1)},show:C,editing:!1})]}),null==s.details&&Object(r.jsx)(v,{})]})}var ce=function(e){var t=e.show,n=e.handleClose,a=Object(i.useContext)(Q),c=a.state,s=a.dispatch,o=Object(i.useState)({loading:!1,value:"",currentAnime:{},suggestion:[]}),l=Object(d.a)(o,2),j=l[0],u=l[1],h=Object(i.useRef)(j.value);Object(i.useEffect)((function(){h.current=j.value}),[j.value]);var O=function(e){x(e)},x=Object(i.useCallback)(A()((function(e){u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!0})})),b()({method:"post",url:"https://animerecsys.glitch.me/search/".concat(e,"/5"),headers:{"Content-Type":"application/json"}}).then((function(t){e===h.current?u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!1,suggestion:t.data})})):u((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!0})}))}))}),1e3),[]),p=c.userAnimeList.filter((function(e){return e.id===j.currentAnime.id})),f=0!==p.length&&(null==j.currentAnime.score||j.currentAnime.score===p[0].score);return Object(r.jsxs)(ee.a,{show:t,onHide:n,children:[Object(r.jsx)(ee.a.Header,{closeButton:!0,children:Object(r.jsx)(ee.a.Title,{children:"Rate Anime"})}),Object(r.jsx)(ee.a.Body,{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"0px",paddingTop:"0px"},children:Object(r.jsxs)(m.a,{style:{minHeight:"300px"},children:[Object(r.jsxs)(g.a,{style:{background:"linear-gradient(180deg, rgba(230,250,255,1) 0%, rgba(187,226,255,1) 100%)",paddingTop:"1rem"},children:[Object(r.jsxs)(R.a,{size:"sm",children:[Object(r.jsx)(C.a,{placeholder:"Search","aria-label":"Search...","aria-describedby":"basic-addon2",onChange:function(e){u((function(t){return Object(L.a)(Object(L.a)({},t),{},{value:e.target.value,currentAnime:{}})})),O(e.target.value)},value:j.value}),Object(r.jsx)(R.a.Append,{children:Object(r.jsxs)(k.a,{variant:"outline-secondary",onClick:function(){u((function(e){return Object(L.a)(Object(L.a)({},e),{},{value:"",loading:!1})}))},children:[" ",Object(r.jsx)("i",{className:"fa fa-close"})," "]})})]}),j.loading&&Object(r.jsx)("div",{style:{display:"flex",height:"80%"},children:Object(r.jsx)(E.a,{animation:"grow",style:{margin:"auto"}})}),Object(r.jsxs)("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"},children:[!j.loading&&0!==j.suggestion.length&&j.suggestion.map((function(e,t){return Object(r.jsx)("h6",{style:{padding:"10px",borderTop:0===t?"1px solid gray":"none",borderBottom:"1px solid gray",marginBottom:"5px",cursor:"pointer"},onClick:function(){return t=e,void u((function(e){return Object(L.a)(Object(L.a)({},e),{},{currentAnime:t})}));var t},children:e.title},e.id)})),!j.loading&&0===j.suggestion.length&&Object(r.jsx)(re,{children:Object(r.jsx)("h6",{style:{fontWeight:200},children:"Suggestions will show up here"})})]})]}),Object(r.jsxs)(g.a,{style:{textAlign:"center"},children:[!j.currentAnime.image_path&&Object(r.jsx)(re,{children:Object(r.jsx)("h3",{style:{fontWeight:200},children:"Nothing Selected"})}),j.currentAnime.image_path&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:j.currentAnime.image_path,alt:j.currentAnime.title,style:{width:"80%"}}),Object(r.jsx)("h3",{style:{marginTop:"1rem"},children:j.currentAnime.title}),Object(r.jsx)(ne.a,{classNames:"mx-auto",size:35,count:5,isHalf:!0,onChange:function(e){j.currentAnime.score=2*e,u((function(e){return Object(L.a)({},e)}))}})]})]})]})}),Object(r.jsxs)(ee.a.Footer,{children:[Object(r.jsx)(k.a,{variant:"secondary",size:"sm",onClick:n,children:"Close"}),Object(r.jsx)(k.a,{variant:"primary",size:"sm",onClick:function(){return e=j.currentAnime,void s({type:Y.ADD_ANIME,payload:Object(L.a)({},e)});var e},disabled:null==j.currentAnime.score||f,children:f?"Rated ".concat(p[0].score):"Save Rating"})]})]})},se=n(69),oe=n.n(se);var le=function(e){e.id;var t=e.title,n=e.image,i=e.score;return Object(r.jsxs)(x.a,{style:{border:"none",margin:"0.5rem",backgroundColor:"transparent",cursor:"pointer"},children:[Object(r.jsx)(x.a.Img,{variant:"top",src:n,style:{objectFit:"cover",height:"30vh",borderRadius:"10px",display:"block"}}),Object(r.jsxs)("div",{style:{backgroundColor:"#000000a6",color:"white",fontWeight:700,fontSize:"smaller",position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"10px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"flex-end",paddingBottom:"1rem"},children:[Object(r.jsx)("h1",{style:{position:"absolute",top:"50%",fontWeight:800,transform:"translate( 0 , -50% )"},children:i||10}),t.slice(0,50)]})]})};var de=function(e){var t=e.show,n=e.handleClose,a=Object(i.useContext)(Q).dispatch,c=Object(i.useState)({loading:!1,error:"",value:""}),s=Object(d.a)(c,2),o=s[0],l=s[1];return Object(r.jsxs)(ee.a,{show:t,onHide:n,id:"edit-anime-modal",children:[Object(r.jsx)(ee.a.Header,{closeButton:!0,children:Object(r.jsx)(ee.a.Title,{children:"Import Anime"})}),Object(r.jsxs)(ee.a.Body,{style:{textAlign:"center"},children:[Object(r.jsxs)(R.a,{children:[Object(r.jsx)(C.a,{placeholder:"Enter your MAL id","aria-label":"MAL ID","aria-describedby":"basic-addon2",onChange:function(e){l((function(t){return Object(L.a)(Object(L.a)({},t),{},{value:e.target.value})}))},value:o.value}),Object(r.jsx)(R.a.Append,{children:Object(r.jsx)(k.a,{variant:"outline-secondary",onClick:function(){l((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:""})})),b.a.get("https://animerecsys.glitch.me/import/".concat(o.value)).then((function(e){l((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:""})})),a({type:Y.IMPORT,payload:e.data}),n()})).catch((function(e){console.log(e),l((function(e){return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:"Couldn't fetch MAL"})}))}))},children:" Import "})})]}),o.loading&&Object(r.jsx)(E.a,{variant:"secondary",animation:"grow",className:"m-1"}),Object(r.jsx)("p",{style:{color:"red"},children:o.error})]})]})};function je(e){var t=e.text,n=e.style,i=e.onClick,a=e.width;return Object(r.jsx)(k.a,{variant:"outline-dark",size:a>600?"md":"sm",style:n,onClick:i,children:t})}var ue=function(e){var t=e.onAddAnime,n=Object(i.useContext)(Q),a=n.state,c=n.dispatch,s=f().width,o=Object(i.useState)(!1),l=Object(d.a)(o,2),u=l[0],b=l[1],h=Object(i.useState)({key:0,showModal:!1}),m=Object(d.a)(h,2),g=m[0],O=m[1];return Object(r.jsxs)("div",{className:"gradient-section",style:{minHeight:"45vh",backgroundColor:"lightgrey",paddingTop:"1rem"},children:[Object(r.jsxs)(j.a,{style:{display:"flex"},children:[Object(r.jsxs)("h3",{style:{marginLeft:"1rem",fontWeight:300,fontSize:s>600?"":"25px"},children:["Your List(",a.userAnimeList.length,")"]}),Object(r.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(r.jsx)(je,{style:{marginRight:"5px"},text:"Add Anime",onClick:t,width:s}),0===a.userAnimeList.length?Object(r.jsx)(je,{style:{marginRight:"5px"},text:"Import MAL",onClick:function(){return b(!0)},width:s}):Object(r.jsx)(je,{style:{marginLeft:"5px"},text:"Clear All",onClick:function(){c({type:Y.CLEAR})},width:s})]})]}),Object(r.jsx)(j.a,{children:Object(r.jsx)(oe.a,{arrowLeft:Object(r.jsx)("div",{style:{fontSize:"30px",marginRight:"1rem",fontWeight:700},children:" < "}),arrowRight:Object(r.jsx)("div",{style:{fontSize:"30px",marginLeft:"1rem",fontWeight:700},children:" > "}),arrowDisabledClass:"d-none",hideSingleArrow:!0,data:a.userAnimeList.map((function(e,t){return Object(r.jsx)("div",{className:"menu-item",style:{display:"grid",maxWidth:"21vh"},children:Object(r.jsx)(le,{id:e.id,image:e.image_path,title:e.title,score:e.score})},t)})),selected:g.key,onSelect:function(e){O({key:e,showModal:!0})}})}),g.showModal&&Object(r.jsx)(ie,{anime:Object(L.a)({},a.userAnimeList[g.key]),show:g.showModal,handleClose:function(){return O((function(e){return Object(L.a)(Object(L.a)({},e),{},{showModal:!1})}))}}),Object(r.jsx)(de,{show:u,handleClose:function(){return b(!1)}})]})},be=n(122),he={loading:!1,recommendations:[],error:!1,errorMessage:"",progress:0,queue:0};function me(e,t){switch(t.type){case"REQ_SENT":return{loading:!0,recommendations:[],error:!1,errorMessage:"",progress:0,queue:t.payload.numWait||-1};case"PROGRESS":return Object(L.a)(Object(L.a)({},e),{},{progress:t.payload.progress});case"FINISH":return{loading:!1,recommendations:t.payload.result,error:!1,errorMessage:"",progress:0,queue:0};case"ERROR":return{loading:!1,recommendations:[],error:!0,errorMessage:t.payload.error,progress:0,queue:0};default:return he}}var ge=function(){var e=Object(i.useReducer)(me,he),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(i.useContext)(Q),s=c.state,o=c.dispatch,l=s.userAnimeList;function u(e){e>30&&a({type:"ERROR",payload:{error:"Job didn't finish in time"}}),b.a.get("https://animerecsys.glitch.me/job/",{withCredentials:!0}).then((function(t){"failed"===t.data.state||t.data.reason?a({type:"ERROR",payload:{error:"Failed"}}):null!=t.data.result?a({type:"FINISH",payload:{result:t.data.result}}):(a({type:"PROGRESS",payload:{progress:t.data.progress}}),setTimeout((function(){u(e+1)}),5e3))})).catch((function(e){try{a({type:"ERROR",payload:{error:e.response.data.error}})}catch(t){a({type:"ERROR",payload:{error:"Server Error"}})}}))}return Object(i.useEffect)((function(){s.recsInSync&&(a({type:"REQ_SENT",payload:{}}),b.a.get("https://animerecsys.glitch.me/job/",{withCredentials:!0}).then((function(e){"failed"!==e.data.state?null!=e.data.result?a({type:"FINISH",payload:{result:e.data.result}}):(a({type:"PROGRESS",payload:{progress:e.data.progress}}),setTimeout((function(){u(0)}),5e3)):a({type:"reset"})})).catch((function(e){a({type:"reset"})})))}),[]),Object(r.jsxs)("div",{style:{minHeight:"45vh",position:"relative",paddingBottom:"3rem"},children:[Object(r.jsxs)("div",{style:{textAlign:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50% , -50%)"},children:[n.loading&&(n.progress>0?Object(r.jsx)(be.a,{variant:"info",now:n.progress,animated:!0,style:{minWidth:"200px"}}):Object(r.jsx)(E.a,{animation:"grow",variant:"info"})),n.loading&&n.queue>0&&Object(r.jsxs)("h6",{className:"text-muted",style:{marginTop:"1rem"},children:["Wait Time...",30*n.queue,"s"]}),n.error&&Object(r.jsx)("h6",{className:"text-danger",children:n.errorMessage})]}),0!==n.recommendations.length&&Object(r.jsx)(y,{anime:n.recommendations,style:{margin:"3rem"},children:Object(r.jsx)(j.a,{fluid:!0,children:Object(r.jsx)("h3",{style:{marginBottom:"2rem",marginTop:"2rem"},children:"Recommended"})})}),!n.loading&&Object(r.jsx)(k.a,{variant:"outline-dark",onClick:function(){a({type:"REQ_SENT",payload:{}}),b()({method:"post",url:"https://animerecsys.glitch.me/recommendations/18",data:{animes:Object(h.a)(l.map((function(e){return e.id}))),scores:Object(h.a)(l.map((function(e){return e.score})))},headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){a({type:"REQ_SENT",payload:e.data}),o({type:Y.SYNC}),setTimeout((function(){u(0)}),5e3)})).catch((function(e){try{if("ACTIVE_JOB"===e.response.data.error)return void u(0);a({type:"ERROR",payload:{error:e.response.data.error}})}catch(t){a({type:"ERROR",payload:{error:"Server Error"}})}}))},disabled:l.length<2,style:{position:"absolute",left:"50%",transform:"translate(-50%,0)",bottom:"1rem"},children:l.length<2?"Add "+(2-l.length)+" more":"Get Recommendations"})]})};var Oe=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),Object(r.jsx)(ue,{onAddAnime:function(){return a(!0)}}),Object(r.jsx)(ce,{show:n,handleClose:function(){return a(!1)}}),Object(r.jsx)(ge,{})]})};var xe=Object(l.g)((function(e){var t=e.history,n=e.children;return Object(i.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),Object(r.jsx)(i.Fragment,{children:n})}));var pe=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsx)(xe,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/anime/:id",children:Object(r.jsx)(ae,{})}),Object(r.jsx)(l.a,{path:"/recommend",children:Object(r.jsx)(Oe,{})}),Object(r.jsx)(l.a,{path:"/browse",children:Object(r.jsx)(H,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(q,{})})]})})})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)($,{children:Object(r.jsx)(pe,{})})}),document.getElementById("root")),fe()},75:function(e,t,n){},76:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.fcae8012.chunk.js.map