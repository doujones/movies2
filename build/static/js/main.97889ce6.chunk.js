(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},31:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=a(8),i=a(9),s=a(11),u=a(10),m=a(12),v=a(42),h=a(29),p=a(30),d=a(43),f="MOVIES";var E=a(14),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={query:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"search",value:function(){var e=this,t="https://api.themoviedb.org/3/search/movie?api_key=".concat("7075b84d7a366d07155c781517df8b0e","&language=en-US&page=1&include_adult=false&query=").concat(this.state.query);console.log(t),fetch(t,{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.props.movies(t.results)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{inline:!0,className:"col-md-12 col-md-offset-4"},r.a.createElement(h.a,null,"",r.a.createElement(p.a,{type:"text",placeholder:"Will's Movies",onChange:function(t){return e.setState({query:t.target.value})}}),"",r.a.createElement(d.a,{bsStyle:"success text-center",onClick:function(){return e.search()}},"Submit"))))}}]),t}(n.Component),O=Object(E.b)(null,{movies:function(e){return{type:f,items:e}}})(b),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={favorited:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayFav",value:function(){var e=this;return this.state.favorited?r.a.createElement("span",{className:"fa-heart",onClick:function(){return e.setState({favorited:!e.state.favorited})}}):r.a.createElement("span",{className:"fa-heart-empty",onClick:function(){return e.setState({favorited:!e.state.favorited})}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-12 col-sm-3"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342"+this.props.movie.poster_path,alt:""}),r.a.createElement("div",{className:"caption"},r.a.createElement("h3",null,this.props.movie.title),r.a.createElement("p",null,this.props.movie.overview),r.a.createElement("p",null,"Release Date - ",this.props.movie.release_date),r.a.createElement("p",null,"Ratings - ",r.a.createElement("span",{className:"badge badge-default"},r.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},this.props.movie.vote_average))),r.a.createElement("p",null,this.displayFav()))))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Movie Results"),r.a.createElement(O,null),this.props.movies.map(function(e){return r.a.createElement(j,{movie:e,key:e.id})}))}}]),t}(n.Component);var g=Object(E.b)(function(e){return console.log(e),{movies:e.movies}},null)(y),w=(a(25),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"William's Movies"))),r.a.createElement("div",{className:"row"},r.a.createElement(g,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(13);var k=Object(N.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return console.log("Movies are ",t.items),t.items;default:return e}}}),_=Object(N.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION);o.a.render(r.a.createElement(E.a,{store:_},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.97889ce6.chunk.js.map