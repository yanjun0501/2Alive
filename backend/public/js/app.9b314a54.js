(function(e){function n(n){for(var a,o,u=n[0],i=n[1],d=n[2],s=0,l=[];s<u.length;s++)o=u[s],r[o]&&l.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09dded8a":"9d49e2d5","chunk-14576f31":"9602d0a5","chunk-26e4b762":"d435615d","chunk-350101b0":"ec0677a4","chunk-4e8455f8":"c5ccff59","chunk-544f6630":"5baf3d2f","chunk-caa76acc":"8cba0cc6","chunk-4af9ada5":"f85fab5d","chunk-ce090e84":"952cc5e4","chunk-0158f8e6":"0e333994","chunk-1b69da61":"07a54dfc","chunk-46aaf83e":"6937ac32","chunk-03d32dc5":"2afd7547","chunk-45782eda":"a3c955b4"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-09dded8a":1,"chunk-14576f31":1,"chunk-26e4b762":1,"chunk-350101b0":1,"chunk-4e8455f8":1,"chunk-544f6630":1,"chunk-4af9ada5":1,"chunk-ce090e84":1,"chunk-0158f8e6":1,"chunk-1b69da61":1,"chunk-03d32dc5":1,"chunk-45782eda":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-09dded8a":"70cf7c06","chunk-14576f31":"98425eb9","chunk-26e4b762":"50c38d99","chunk-350101b0":"9f8ac547","chunk-4e8455f8":"98425eb9","chunk-544f6630":"6f0ed12d","chunk-caa76acc":"31d6cfe0","chunk-4af9ada5":"60ecae20","chunk-ce090e84":"bf3e1ef3","chunk-0158f8e6":"e0a7b269","chunk-1b69da61":"e0a7b269","chunk-46aaf83e":"31d6cfe0","chunk-03d32dc5":"ac424ac3","chunk-45782eda":"ac424ac3"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===a||s===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise(function(n,t){a=r[e]=[n,t]});n.push(a[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e),d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,t[1](c)}r[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"3dfd":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],r={components:{},updated:function(){null===localStorage.getItem("username")&&this.$router.push("/login")}},c=r,u=(t("5c0b"),t("2877")),i=Object(u["a"])(c,a,o,!1,null,null,null);i.options.__file="App.vue";n["default"]=i.exports},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),o=t("5c96"),r=t.n(o),c=(t("0fae"),t("d6d3")),u=t.n(c),i=t("3dfd"),d=t("8c4f");a["default"].use(d["a"]);var s=new d["a"]({routes:[{path:"/",name:"index",redirect:"/login",component:function(){return Promise.resolve().then(t.bind(null,"3dfd"))},children:[{path:"/login",name:"login",component:function(){return t.e("chunk-544f6630").then(t.bind(null,"dd7b"))}},{path:"/media",name:"media",component:function(){return t.e("chunk-14576f31").then(t.bind(null,"10cf"))},children:[{path:"/media/list",name:"mediaList",component:function(){return t.e("chunk-26e4b762").then(t.bind(null,"61dd"))}},{path:"/media/detail",name:"mediaDetail",component:function(){return Promise.all([t.e("chunk-caa76acc"),t.e("chunk-ce090e84"),t.e("chunk-1b69da61")]).then(t.bind(null,"b256"))}}]},{path:"/live",name:"live",component:function(){return t.e("chunk-4e8455f8").then(t.bind(null,"50a5"))},children:[{path:"/live/list",name:"liveList",component:function(){return t.e("chunk-09dded8a").then(t.bind(null,"dff6"))}},{path:"/live/detail",name:"liveDetail",component:function(){return Promise.all([t.e("chunk-caa76acc"),t.e("chunk-ce090e84"),t.e("chunk-0158f8e6")]).then(t.bind(null,"d3fc"))}},{path:"/live/webrtc",name:"liveWebRTC",component:function(){return Promise.all([t.e("chunk-caa76acc"),t.e("chunk-ce090e84"),t.e("chunk-46aaf83e"),t.e("chunk-45782eda")]).then(t.bind(null,"1c95"))}}]},{path:"/setting",name:"setting",component:function(){return t.e("chunk-350101b0").then(t.bind(null,"79d9"))},children:[{path:"/setting/webrtc",name:"liveWebRtc",component:function(){return Promise.all([t.e("chunk-caa76acc"),t.e("chunk-ce090e84"),t.e("chunk-46aaf83e"),t.e("chunk-03d32dc5")]).then(t.bind(null,"6273"))}},{path:"/setting/rtmp",name:"liveRtmp",component:function(){return Promise.all([t.e("chunk-caa76acc"),t.e("chunk-4af9ada5")]).then(t.bind(null,"d306"))}}]}]}]}),l=t("2f62"),f=t("b054"),p=t.n(f),h=[p()()],m=t("bc3a"),T=t.n(m),g=t("b383"),_=(t("6b54"),t("795b")),S=t.n(_);T.a.interceptors.request.use(function(e){return e},function(e){return console.log(e),S.a.resolve(e)}),T.a.interceptors.response.use(function(e){return 200===e.status?e:401===e.status?S.a.reject(e):(e.status,e)},function(e){return e.response?e.response.status>399&&e.response.status<500?(o["Message"].error("请求错误"),e.response.status,console.log(e.response)):e.response.status>499&&o["Message"].error("服务器异常"):e.request?(e.message.toString().indexOf("Gateway"),console.log(e.request)):console.log(e.request),S.a.reject(e)});var O="http://localhost:3000";T.a.defaults.withCredentials=!0;var v=function(){return T.a.get("".concat(O,"/api/room/list"))},A=function(e){return T.a.put("".concat(O,"/api/room/update"),e)},b=function(e){return T.a.post("".concat(O,"/api/room/add"),e)},k=function(e){return T.a.delete("".concat(O,"/api/room/delete"),{data:e})},I=function(e){return T.a.get("".concat(O,"/api/room/find?").concat(Object(g["stringify"])(e)))},y=function(e){return T.a.get("".concat(O,"/api/room/user?").concat(Object(g["stringify"])(e)))},L={},D={list:function(e,n){var t=e.commit;t("LOADING_START"),v(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOMS_LIST",{payload:e.data.data}),t("LOADING_STOP")})},find:function(e,n){var t=e.commit;t("LOADING_START"),I(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_DETAIL",{payload:e.data.data}),t("LOADING_STOP")})},findByUser:function(e,n){var t=e.commit;t("LOADING_START"),y(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_SETTING",{payload:e.data.data}),t("LOADING_STOP")})},findSet:function(e,n){var t=e.commit;t("LOADING_START"),I(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_SETTING",{payload:e.data.data}),t("LOADING_STOP")})},update:function(e,n){var t=e.commit;t("LOADING_START"),A(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_SETTING",{payload:e.data.data}),t("LOADING_STOP")})},delete:function(e,n){var t=e.commit;t("LOADING_START"),k(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_SETTING",{payload:e.data.data}),t("LOADING_STOP")})},add:function(e,n){var t=e.commit;t("LOADING_START"),b(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_ROOM_SETTING",{payload:e.data.data}),t("LOADING_STOP")})}},E={SET_ROOMS_LIST:function(e,n){var t=n.payload;e.roomList=t},SET_ROOM_DETAIL:function(e,n){var t=n.payload;e.detail=t},SET_ROOM_SETTING:function(e,n){var t=n.payload;e.setting={stream:t.stream,status:t.room_status||2,room_name:t.room_name,owner_name:t.owner_name,type:t.type,id:t.id}},LOADING_START:function(e){e.loading=!0},LOADING_STOP:function(e){e.loading=!1}},N={roomList:[{id:"",room_name:"",owner_name:"",type:""}],detail:{id:0},setting:{room_status:"",stream:"",status:2,room_name:"",owner_name:"",type:"",id:""},loading:!1},G={namespaced:!0,state:N,getters:L,actions:D,mutations:E},R="http://localhost:3000";T.a.defaults.withCredentials=!0;var M=function(){return T.a.get("".concat(R,"/api/media/list"))},P=function(e){return T.a.get("".concat(R,"/api/media/item?").concat(Object(g["stringify"])(e)))},w={},j={list:function(e,n){var t=e.commit;t("LOADING_START"),M(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_MEDIA_LIST",{payload:e.data.data}),t("LOADING_STOP")})},find:function(e,n){var t=e.commit;t("LOADING_START"),P(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_MEDIA_DETAIL",{payload:e.data.data}),t("LOADING_STOP")})}},x={SET_MEDIA_LIST:function(e,n){var t=n.payload;e.mediaList=t},SET_MEDIA_DETAIL:function(e,n){var t=n.payload;e.detail=t},LOADING_START:function(e){e.loading=!0},LOADING_STOP:function(e){e.loading=!1}},C={mediaList:[{item_id:"",name:"",url:"",type:""}],detail:{id:0},loading:!1},U={namespaced:!0,state:C,getters:w,actions:j,mutations:x},q="http://localhost:3000";T.a.defaults.withCredentials=!0;var B=function(e){return T.a.post("".concat(q,"/api/user/add"),e)},$=function(e){return T.a.post("".concat(q,"/api/user/login"),e,{headers:{"Authorization-Token":localStorage.getItem("token")}})},J=function(e){return T.a.get("".concat(q,"/api/user/info?").concat(Object(g["stringify"])(e)))},W=function(e){return T.a.put("".concat(q,"/api/user/update"),e)},z=function(e){return T.a.post("".concat(q,"/api/message/post"),e)},H={},F={register:function(e,n){var t=e.commit;t("LOADING_START"),B(n).then(function(e){200!==e.data.code?o["Message"].error("注册失败"):(t("SET_USER",{payload:e.data.data}),s.push("/media/list")),t("LOADING_STOP")})},login:function(e,n){var t=e.commit;t("LOADING_START"),$(n).then(function(e){200!==e.data.code?o["Message"].error("登录失败"):(t("SET_USER",{payload:e.data.data}),localStorage.setItem("username",e.data.data.username),s.push("/media/list")),t("LOADING_STOP")})},info:function(e,n){var t=e.commit;t("LOADING_START"),J(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_USER",{payload:e.data.data}),t("LOADING_STOP")})},update:function(e,n){var t=e.commit;t("LOADING_START"),W(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_USER",{payload:e.data.data}),t("LOADING_STOP")})},send:function(e,n){var t=e.commit;t("LOADING_START"),z(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("SET_USER",{payload:e.data.data}),t("LOADING_STOP")})}},K={SET_USER:function(e,n){var t=n.payload;e.user=t},LOADING_START:function(e){e.loading=!0},LOADING_STOP:function(e){e.loading=!1}},Q={user:{username:localStorage.getItem("username"),role_id:""},loading:!1},V={namespaced:!0,state:Q,getters:H,actions:F,mutations:K},X={},Y={send:function(e,n){var t=e.commit;t("LOADING_START"),(void 0)(n).then(function(e){200!==e.data.code?o["Message"].error("请求错误"):t("ADD_MESSAGE",{payload:e.data.data}),t("LOADING_STOP")})}},Z={ADD_MESSAGE:function(e,n){var t=n.payload;e.user.push(t)},LOADING_START:function(e){e.loading=!0},LOADING_STOP:function(e){e.loading=!1}},ee={messageList:[],loading:!1},ne={namespaced:!0,state:ee,getters:X,actions:Y,mutations:Z};a["default"].use(l["a"]);var te=new l["a"].Store({modules:{live:G,media:U,user:V,message:ne},plugins:h});window.Hls=t("ba56"),a["default"].use(r.a),a["default"].use(u.a),a["default"].config.productionTip=!1,new a["default"]({router:s,store:te,render:function(e){return e(i["default"])}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var a=t("5e27"),o=t.n(a);o.a},"5e27":function(e,n,t){}});