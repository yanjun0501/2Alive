import Vue from 'vue';
// import io from 'socket.io-client';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player';
import App from './App.vue';
import router from './router';
import store from './store';

window.Hls = require('hls.js');

Vue.use(Element);

Vue.use(VideoPlayer);
Vue.config.productionTip = false;
// Vue.use(io('http://localhost:3002'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
