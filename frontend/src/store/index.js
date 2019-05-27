import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
import live from './modules/live';
import media from './modules/media';
import user from './modules/user';
import message from './modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    live,
    media,
    user,
    message,
  },
  plugins,
});
