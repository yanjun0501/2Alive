(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b69da61"],{"0a07":function(t,e,s){},"52df":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-panel"},[s("div",{staticClass:"message-list"},t._l(t.msgList,function(e,n){return s("div",{key:n,staticClass:"message"},["sys"===e.type?s("div",{staticClass:"sys-message"},[t._v("\n        "+t._s(e.content)+"\n      ")]):s("div",{class:"my"===e.type?"my-message":"normal-message"},["my"!==e.type?s("span",{staticClass:"normal-message-user"},[t._v("\n          "+t._s(e.user)+":\n        ")]):t._e(),s("span",{staticClass:"message-content"},[t._v("\n          "+t._s(e.content)+"\n        ")])])])}),0),s("div",{staticClass:"user-control"},[s("el-input",{attrs:{placeholder:"在此输入消息"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.emitMsg(e):null}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},i=[],o=(s("c5f6"),s("8055")),a=s.n(o),c={},u=new a.a("http://localhost:3002",c),r={data:function(){return{content:"",socket:u,msgList:[],userList:[],userCount:0}},props:{username:{type:String,default:""},id:{type:Number,default:""}},updated:function(){this.scrollToBottom()},methods:{emitMsg:function(){this.socket.send(this.content),this.content=""},scrollToBottom:function(){var t=this;this.$nextTick(function(){var e=t.$el.querySelector(".message-list");e.scrollTop=e.scrollHeight})},sendMessage:function(){this.socket.send(this.content),this.content=""},leaveRoom:function(){this.socket.emit("leave")}},watch:{},mounted:function(){this.scrollToBottom();var t=this;console.log(this.socket),this.socket.on("connect",function(){console.log("test",t.username,t.$route.query.id),t.socket.emit("join",t.username,t.$route.query.id)}),this.socket.on("msg",function(e,s){e===t.username?t.msgList.push({user:e,content:s,type:"my"}):t.msgList.push({user:e,content:s,type:"msg"})}),this.socket.on("sys",function(e,s){t.msgList.push({user:"",content:e,type:"sys"}),t.userCount=s.length,t.userList=s,console.log("test",s)})}},l=r,d=(s("f1f6"),s("2877")),m=Object(d["a"])(l,n,i,!1,null,null,null);m.options.__file="chatPanel.vue";e["a"]=m.exports},b256:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-detail-container"},[s("div",{staticClass:"player-container"},[s("div",{ref:"dplayer"})]),s("div",{staticClass:"chat-container"},[s("chat-panel",{attrs:{username:t.user.username,id:t.detail.id}})],1)])},i=[],o=s("cebc"),a=(s("cadf"),s("551c"),s("097d"),s("2f62")),c=s("f7a5"),u=s.n(c),r=(s("ba56"),s("eccb"),s("52df")),l={components:{ChatPanel:r["a"]},watch:{detail:function(t){var e=this,s=new u.a({container:e.$refs.dplayer,screenshot:!0,video:{url:t.url,thumbnails:t.thumbnails},danmaku:{api:"http://localhost:1207/v3/bilibili?cid=10492"}});this.player=s}},mounted:function(){this.$store.dispatch("media/find",{id:this.$route.query.id})},data:function(){return{player:""}},computed:Object(o["a"])({},Object(a["b"])({detail:function(t){return t.media.detail},user:function(t){return t.user.user},loading:function(t){return t.media.loading}}))},d=l,m=(s("d9e0"),s("2877")),f=Object(m["a"])(d,n,i,!1,null,null,null);f.options.__file="detail.vue";e["default"]=f.exports},b6cf:function(t,e,s){},d9e0:function(t,e,s){"use strict";var n=s("0a07"),i=s.n(n);i.a},f1f6:function(t,e,s){"use strict";var n=s("b6cf"),i=s.n(n);i.a}}]);