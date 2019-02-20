(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/casalogo.dabe3c86.svg"},21:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(27),a(5)),s=a(6),i=a(8),m=a(7),u=a(9),d=a(39),h=a(41),p=a(38),E=a(37),g=a(10),v=(a(28),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={searchQuery:""},e.handleChange=e.handleChange.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({searchQuery:t})}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("input",{name:"searchQuery",onChange:this.handleChange}))}}]),t}(r.a.Component)),b=a(18),f=a.n(b),N=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm mha-nav p-5"},r.a.createElement(E.a,{to:"/"},r.a.createElement("img",{src:f.a,height:"40",alt:"logo",className:"d-inline-block align-top"})),r.a.createElement(v,null)))},k=function(e){return e.json().then(function(t){return e.ok?t:Promise.reject(t)})},y="https://api.iextrading.com/1.0",j=(a(31),function(){return r.a.createElement("div",{className:"Loading"})}),O=a(40),w=Object(O.a)(function(e){var t=e.mostActive,a=e.renderChangePercent,n=e.history;return r.a.createElement("div",{className:"container card bg-dark"},r.a.createElement("div",{className:"card-header text-info"},r.a.createElement("h5",null,"Most Active Stocks Right Now")),r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-striped table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Latest Price"),r.a.createElement("th",{scope:"col"},"Sector"),r.a.createElement("th",null,"Change Percent"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.companyName,onClick:function(){return n.push("/stock/".concat(e.symbol,"/quote"))}},r.a.createElement("td",null,e.companyName),r.a.createElement("td",null,e.latestPrice),r.a.createElement("td",null,e.sector),r.a.createElement("td",null,a(e.changePercent)))})))))}),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={loading:!1,mostActive:[],error:null},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("".concat(y,"/stock/market/list/mostactive")).then(k).then(function(t){e.setState({mostActive:t,loading:!1})}).catch(function(t){e.setState({error:t.errorMessage,loading:!1})})}},{key:"renderChangePercent",value:function(e){return e>0?r.a.createElement("span",{className:"percent-raised"},e,"% \u2191"):e<0?r.a.createElement("span",{className:"percent-fallen"},e,"% \u2193"):r.a.createElement("span",null,e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,n=e.mostActive;return t?r.a.createElement("div",{className:"loading-container"},r.a.createElement(j,null)):a?r.a.createElement("div",{className:"error"},a):r.a.createElement(w,{mostActive:n,renderChangePercent:this.renderChangePercent})}}]),t}(r.a.Component),P=(a(33),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",{className:"NotFound-title"},"Oops ! Page not found"),r.a.createElement(E.a,{to:"/",className:"NotFound-link"},"Go to homepage"))}),x=a(16),S=(a(34),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={result:[],news:[{}],peers:[],loading:!1,error:null},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.symbol;this.setState({loading:!0}),Promise.all([fetch("".concat(y,"/stock/").concat(t,"/quote")),fetch("".concat(y,"/stock/").concat(t,"/news")),fetch("".concat(y,"/stock/").concat(t,"/peers"))]).then(function(e){var t=Object(x.a)(e,3),a=t[0],n=t[1],r=t[2];return Promise.all([a.json(),n.json(),r.json()])}).then(function(t){var a=Object(x.a)(t,3),n=a[0],r=a[1],c=a[2];console.log(r),e.setState({result:n,news:r,peers:c,loading:!1,error:null})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,n=e.result,c=(e.news,e.peers,this.state.news.map(function(e,t){return r.a.createElement("a",{href:e.url,rel:"noreferrer noopener",target:"_blank"},r.a.createElement("li",{className:"list-group-item list-group-item-success",key:e.headline},e.headline," - ",e.source))})),l=this.state.peers.map(function(e,t){return r.a.createElement("span",{className:"badge badge-pill badge-info",key:t},e)});return t?r.a.createElement("div",{className:"loading-container"},r.a.createElement(j,null)):a?r.a.createElement("div",{className:"error"},a):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card bg-dark text-white m-3 col-md-4 mx-auto"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,n.companyName," (",n.symbol,")")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item list-group-item-dark"},r.a.createElement("b",null,"Market Cap"),": ",n.marketCap),r.a.createElement("li",{className:"list-group-item list-group-item-dark"},r.a.createElement("b",null,"Latest Price"),": ",n.latestPrice),r.a.createElement("li",{className:"list-group-item list-group-item-dark"},r.a.createElement("b",null,"YTDChange"),": ",n.ytdChange),r.a.createElement("li",{className:"list-group-item list-group-item-dark"},r.a.createElement("b",null,"Sector"),": ",n.sector),r.a.createElement("li",{className:"list-group-item list-group-item-dark"},r.a.createElement("b",null,"Related ..."),": ",l)))),r.a.createElement("div",{className:"card bg-success text-white m-3 col-md-5 mx-auto"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,"News")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},c))))}}]),t}(r.a.Component)),A=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{path:"/",component:C,exact:!0}),r.a.createElement(p.a,{path:"/stock/:symbol/quote",component:S,exact:!0}),r.a.createElement(p.a,{component:P})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.bbd7f104.chunk.js.map