(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(12),a(3)),i=a(4),s=a(5),h=a(6);var u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"Robot"}),r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h3",null,a)))},m=function(e){var t=e.robots,a=t.map((function(e,a){return r.a.createElement(u,{key:t[a].id,name:t[a].name,id:t[a].id,email:t[a].email})}));return r.a.createElement("div",null,a)};function d(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("h1",{className:"blue lego f1"},"RoboFriends"),r.a.createElement("input",{type:"search",placeholder:"Search robots...",onChange:t,className:"bg-lightest-blue pa3 br3 shadow-3 b--light-blueblue"}),r.a.createElement("hr",{width:"100%",className:"light-blue"}))}var b=function(e){return r.a.createElement("div",{style:{border:"solid 2px black",overflowY:"scroll",height:"70vh"}},e.children)},f=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(m,{robots:t})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4f75afd1.chunk.js.map