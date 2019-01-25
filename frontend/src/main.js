import Vue from 'vue';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(io('http://localhost:3002'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
