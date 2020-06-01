(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},36:function(e,a,t){e.exports=t(66)},41:function(e,a,t){},42:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),o=t.n(c),r=(t(41),t(15)),s=t(16),i=t(18),m=t(17),u=t(19),d=t(10);t(42);var v=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Google Books"),l.a.createElement("ul",{className:"nav justify-content-end"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(d.b,{className:"nav-link active",to:"/search"},"Search")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(d.b,{className:"nav-link",to:"/saved"},"Saved"))))};var h=function(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e,{style:{padding:40}}))};var f=function(e){var a=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return l.a.createElement("div",Object.assign({className:a},e))};var E=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",null,"(React) Google Books Search "),l.a.createElement("p",null,"Search for and Save Books of Interest")))};t(14);var g=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))},p=t(11),b=t.n(p);t(65);function k(e){var a=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},a))}var N=t(12);t(33);N.a.configure();var w=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={search:"",APIKey:"AIzaSyAKnOrsH2cU8UYpqKVSpfHtXbwrb0XRgWM",books:[],display:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleInputChange",value:function(e){e.preventDefault(),this.setState({search:e.target.value})}},{key:"handleSearch",value:function(e){var a=this;e.preventDefault(),console.log(this.state.search),console.log("Reached here"),b.a.get("https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q="+this.state.search+"&key="+this.state.APIKey).then(function(e){console.log(e),a.setState({books:e.data.items,display:!0}),console.log(a.state.title)})}},{key:"handleSave",value:function(e){var a={title:e.target.dataset.title,authors:e.target.dataset.author,description:e.target.dataset.desc,image:e.target.dataset.image,link:e.target.dataset.vol};console.log("saved:",a),b.a.post("/api/save",a).then(function(e){console.log("after save",e),N.a.success("Saved successfully!")})}},{key:"render",value:function(){var e=this;if(console.log(this.state.books),this.state.display)var a=l.a.createElement("h3",null,"Results");return l.a.createElement(g,null,l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(v,null))),l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(E,null))),l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement("h3",null,"Book Search"),l.a.createElement("form",{className:"form-inline"},l.a.createElement("input",{type:"text",className:"searchbox",placeholder:"Search",onChange:this.handleInputChange.bind(this)}),l.a.createElement("button",{className:"searchbutton",onClick:this.handleSearch.bind(this)},"Search")))),l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},a,l.a.createElement(k,null,this.state.books.map(function(a,t){return l.a.createElement("div",{className:"card mb-3",key:t},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:a.volumeInfo.imageLinks.smallThumbnail,className:"card-img",alt:"..."})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.volumeInfo.title),l.a.createElement("p",{className:"card-text"},"Author:",a.volumeInfo.authors),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Description: ",a.volumeInfo.description)),l.a.createElement("button",{className:"view"},l.a.createElement("a",{href:a.volumeInfo.canonicalVolumeLink,target:"_blank",style:{textDecoration:"none",color:"black"}},"View")),l.a.createElement("button",{className:"save","data-id":a.id,"data-title":a.volumeInfo.title,"data-author":a.volumeInfo.authors,"data-desc":a.volumeInfo.description,"data-image":a.volumeInfo.imageLinks.smallThumbnail,"data-vol":a.volumeInfo.canonicalVolumeLink,onClick:e.handleSave.bind(e)},"Save")))))})))))}}]),a}(l.a.Component);N.a.configure();var y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={search:"",APIKey:"AIzaSyAKnOrsH2cU8UYpqKVSpfHtXbwrb0XRgWM",saved:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"getSavedBooks",value:function(){var e=this;b.a.get("/api/loadbooks").then(function(a){console.log("got back books",a),e.setState({saved:a.data})})}},{key:"handleDelete",value:function(e){var a=this,t=e.target.dataset.id;console.log("delete",t),b.a.delete("/api/remove/"+t).then(function(e){console.log("deleted",e),a.getSavedBooks(),N.a.error("Deleted!")})}},{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(v,null))),l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(E,null))),l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement("h3",null,"Saved Books"),l.a.createElement(k,null,this.state.saved.map(function(a,t){return l.a.createElement("div",{className:"card mb-3",key:t},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:a.image,className:"card-img",alt:"..."})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.title),l.a.createElement("p",{className:"card-text"},"Author:",a.authors),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Description: ",a.description)),l.a.createElement("button",{className:"view"},l.a.createElement("a",{href:a.link,target:"_blank",style:{textDecoration:"none",color:"black"}},"View")),l.a.createElement("button",{className:"save","data-id":a._id,onClick:e.handleDelete.bind(e)},"Delete")))))})))))}}]),a}(l.a.Component),S=t(8);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(S.a,{exact:!0,path:"/",component:w}),l.a.createElement(S.a,{exact:!0,path:"/search",component:w}),l.a.createElement(S.a,{exact:!0,path:"/saved",component:y})))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.e24cea8e.chunk.js.map