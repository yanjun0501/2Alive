import { Message } from 'element-ui';
import {
  postMessage,
} from '../../api/live';


const getters = {

};

const actions = {
  send({ commit }, payload) {
    commit('LOADING_START');
    postMessage(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('ADD_MESSAGE', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
};

const mutations = {
  ADD_MESSAGE(state, { payload }) {
    state.user.push(payload);
  },
  LOADING_START(state) {
    state.loading = true;
  },
  LOADING_STOP(state) {
    state.loading = false;
  },
};

const state = {
  messageList: [],
  loading: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
