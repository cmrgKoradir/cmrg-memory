(this["webpackJsonpcmrg-memory"]=this["webpackJsonpcmrg-memory"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),i=n(11),l=n(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(21),m=n(6),s=(n(27),r.a.createContext([])),d=r.a.createContext([]),f=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)([]),u=Object(m.a)(l,2),f=u[0],p=u[1];return r.a.createElement(s.Provider,{value:[o,i]},r.a.createElement(d.Provider,{value:[f,p]},t))},p=n(18),h=n(20),E=(n(28),function(e,t,n){if(!(t.length>=2)){var a=document.querySelector(e);a.classList.contains("flipped")||(a.classList.add("flipped"),n([].concat(Object(h.a)(t),[a])))}}),v=function(e){var t=e.children,n=e.id,c=e.pairId,o=Object(a.useContext)(d),i=Object(m.a)(o,2),l=i[0],u=i[1];return r.a.createElement("div",{className:"card ".concat(n),pairid:c,onClick:function(){return E(".".concat(n),l,u)}}," ",r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"front"}),r.a.createElement("div",{className:"back"},t)))},g=function(e){var t=e.id,n=e.pairId,a=e.info;return r.a.createElement(v,{id:t,pairId:n},r.a.createElement("img",{src:a.image,alt:""}))},b={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},w=function(e){var t=e.id,n=e.pairId,a=e.info;return r.a.createElement(v,{id:t,pairId:n},r.a.createElement("div",{style:b},r.a.createElement("strong",null,a.name),a.nickName&&r.a.createElement("span",null,'"',a.nickName,'"'),r.a.createElement("span",null,a.position)))},y=function(e){return x(e.flatMap((function(e){var t=e.id,n="card".concat(t,"_image"),a="card".concat(t,"_text");return Array.of(r.a.createElement(g,{key:n,id:n,pairId:t,info:e}),r.a.createElement(w,{key:a,id:a,pairId:t,info:e}))})))},x=function(e){var t,n=Array.from(e),a=n.length-1,r=Object(p.a)(n.keys());try{for(r.s();!(t=r.n()).done;){var c=t.value,o=Math.floor(Math.random()*(a-c+1)+c),i=n[c];n[c]=n[o],n[o]=i}}catch(l){r.e(l)}finally{r.f()}return n},j=function(e,t){var n,a;if(!(e.length<2)){if(e.length>2)throw Error("Illegal State: More than two cards selected at a time");var r=null!==(n=parseInt(e[0].getAttribute("pairid")))&&void 0!==n?n:null;if(null==r)throw console.log(e),Error("Expected ".concat(e[0]," to have pairId but does not."));var c=null!==(a=parseInt(e[1].getAttribute("pairid")))&&void 0!==a?a:null;if(null==c)throw console.log(e),Error("Expected ".concat(e[1]," to have pairId but does not."));r===c?setTimeout((function(){t([]),e.forEach((function(e){return e.classList.add("hidden")}))}),1200):setTimeout((function(){e.forEach((function(e){return e.classList.remove("flipped")})),t([])}),1200)}},O={width:"100%",height:"100%",display:"flex",flexWrap:"wrap",padding:".25rem",justifyContent:"space-evenly",alignItems:"center"},I=function(){var e=Object(a.useContext)(s),t=Object(m.a)(e,1)[0],n=Object(a.useContext)(d),c=Object(m.a)(n,2),o=c[0],i=c[1];Object(a.useEffect)((function(){j(o,i)}),[o,i]);var l=Object(a.useState)(y(t)),u=Object(m.a)(l,2),f=u[0],p=u[1];return Object(a.useEffect)((function(){return p(y(t))}),[t,p]),r.a.createElement("div",{className:"memory",style:O},!t&&r.a.createElement("h1",{className:"loadingNotice"},"Fetching data..."),f)};var k=function(){var e=Object(a.useContext)(s),t=Object(m.a)(e,2)[1];return Object(a.useEffect)((function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/www.comerge.net/team").then((function(e){return e.text()})).then((function(e){var t=(new DOMParser).parseFromString(e,"text/html").querySelectorAll(".portrait");return Array.from(t).map((function(e){var t;return{name:e.querySelector(".intro strong").innerText,nickName:null===(t=e.querySelector(".intro p"))||void 0===t?void 0:t.innerText,position:e.querySelector(".role").innerText,image:e.querySelector(".imageSlider img").src.replace(window.location.host,"www.comerge.net")}}))})).then((function(e){return e.map((function(e,t){return Object(u.a)({id:t},e)}))})).then((function(t){return e(t)}))}(t)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},r.a.createElement(I,null)))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is a simple memory game meant as an exercise to get familiar with JavaScript, React and PWAs."),r.a.createElement("p",null,"It will crawl ",r.a.createElement("a",{href:"https://www.comerge.net/team"},"the Comerge Team Page")," for updates when it's online and use the profiles there to populate the cards with."))},C={display:"flex",flexDirection:"column",alignItems:"center",padding:".25em",background:"#333",color:"white"},N={color:"white"},A=function(){return r.a.createElement("header",{style:C},r.a.createElement("h1",null,"CMRG Memory"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/",style:N},"Home")," | ",r.a.createElement(i.b,{to:"/about",style:N},"About")))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(i.a,{basename:"/cmrg-memory"},r.a.createElement(l.a,{path:"/",component:A}),r.a.createElement(l.a,{exact:!0,path:"/",component:k}),r.a.createElement(l.a,{path:"/about",component:S})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0f5eb8b3.chunk.js.map