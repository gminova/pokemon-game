(this["webpackJsonppet-store"]=this["webpackJsonppet-store"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),c=(n(28),n(7)),u=n(1),m=n(18);function s(){var e=Object(m.a)(["\n  text-align: center;\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return s=function(){return e},e}var i=n(19).a.div(s()),p=n(11),g=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Enter your name:"),r.a.createElement("input",{onChange:function(e){return o(e.target.value)}}),r.a.createElement("h2",null,n),n&&r.a.createElement(c.b,{to:"/vocabulary"},r.a.createElement("button",{onClick:function(){localStorage.setItem("pokemonUser",JSON.stringify({userName:n,score:0,userPokemons:[]}))}},"Let's GO!")))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome Back,"," ",JSON.parse(localStorage.getItem("pokemonUser")||JSON.stringify({userName:"Guest"})).userName),r.a.createElement(c.b,{to:"/vocabulary"},r.a.createElement("button",null,"Let's GO!")),r.a.createElement("button",{onClick:function(){return localStorage.removeItem("pokemonUser"),void location.reload()}},"Log Out & Delete Data"))},f=function(){var e=localStorage.getItem("pokemonUser");return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(E,null)||r.a.createElement(g,{text:"Some text"}))},k=function(){return JSON.parse(localStorage.getItem("pokemonUser")||"")},h=[{kanji:"\u5c71",readings:[{text:"\u3044\u3061",type:!1},{text:"\u306b",type:!1},{text:"\u3055\u3093",type:!1},{text:"\u3084\u307e",type:!0}]}],v=function(){var e,t,n=(e=1,t=807,Math.floor(Math.random()*(t-e+1)+e)),o=JSON.stringify({userName:"Guest",score:0,userPokemons:[]}),l=Object(a.useState)(JSON.parse(localStorage.getItem("pokemonUser")||o)),c=Object(p.a)(l,2),u=c[0],m=c[1];null===localStorage.getItem("pokemonUser")&&(localStorage.setItem("pokemonUser",o),m(k()));var s=function(){var e;!function(e){var t=k();t.score=e,localStorage.setItem("pokemonUser",JSON.stringify(t))}((e=JSON.parse(localStorage.getItem("pokemonUser")||"").score,e+1)),m(k())},i=h[0].readings.map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return e.type?s():alert(e.type)}},r.a.createElement("button",null,e.text))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,"User name: ",u.userName),r.a.createElement("li",null,"Score: ",u.score),r.a.createElement("li",null,"Pokemons:",u.userPokemons.length)),r.a.createElement("p",null,"\u6b63\u3057\u3044\u8aad\u307f\u65b9\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044"),r.a.createElement("p",null,h[0].kanji),r.a.createElement("ol",null,i),r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:"pokemon"}))},S=function(){return r.a.createElement(i,null,r.a.createElement(c.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/vocabulary"},r.a.createElement(v,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.83b08dc8.chunk.js.map