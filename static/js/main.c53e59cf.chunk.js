(this.webpackJsonpbrowser=this.webpackJsonpbrowser||[]).push([[0],{43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(2),c=i.n(s),a=i(17),r=i.n(a),o=i(8),l=i.n(o),d=i(18),u=i(3),m=i(4),j=i(6),b=i(5),v=i(19),h=i.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,type:"video",key:"AIzaSyAhbbcOw0iOb0lJqMXHp2GQmKHgnJjccEo"}}),p=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onTermSubmit(e.state.term)},e}return Object(m.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"ui segment ",children:Object(n.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"Search Videos"}),Object(n.jsx)("input",{onChange:this.onInputChange,type:"text",value:this.state.term,placeholder:"Search..."})]})})})}}]),i}(c.a.Component),O=function(e){var t=e.video;if(!t)return Object(n.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(n.jsxs)("div",{className:"ui segment",children:[Object(n.jsx)("div",{className:"ui embed",children:Object(n.jsx)("iframe",{title:"video player",src:i,allowFullScreen:!0})}),Object(n.jsx)("h4",{className:"header",children:t.snippet.title}),Object(n.jsx)("p",{children:t.snippet.description})]})},f=(i(43),function(e){var t=e.video,i=e.onVideoSelect;return Object(n.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(n.jsx)("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,i=e.onVideoSelect,s=t.map((function(e){return Object(n.jsx)(f,{video:e,onVideoSelect:i},e.id.videoId)}));return Object(n.jsx)("div",{className:"ui relaxed divided list",children:s})},S=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(l.a.mark((function t(i){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(m.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("tallest buildings")}},{key:"render",value:function(){return console.log(this.state.videos),Object(n.jsxs)("div",{className:"ui container",children:[Object(n.jsx)(p,{onTermSubmit:this.onTermSubmit}),Object(n.jsx)("div",{className:"ui grid",children:Object(n.jsxs)("div",{className:"ui row",children:[Object(n.jsx)("div",{className:"column eleven wide",children:Object(n.jsx)(O,{video:this.state.selectedVideo})}),Object(n.jsx)("div",{className:"column five wide",children:Object(n.jsx)(x,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})]})}}]),i}(c.a.Component);r.a.render(Object(n.jsx)(S,{}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c53e59cf.chunk.js.map