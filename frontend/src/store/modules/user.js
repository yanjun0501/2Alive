import { Message } from 'element-ui';
import router from '../../router';
import {
  userRegister,
  userLogin,
  userUpdate,
  userInfo,
  postMessage,
} from '../../api/common';

const getters = {

};

const actions = {
  register({ commit }, payload) {
    commit('LOADING_START');
    userRegister(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('注册失败');
      } else {
        commit('SET_USER', { payload: res.data.data });
        router.push('/media/list');
      }
      commit('LOADING_STOP');
    });
  },
  login({ commit }, payload) {
    commit('LOADING_START');
    userLogin(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('登录失败');
      } else {
        commit('SET_USER', { payload: res.data.data });
        localStorage.setItem('username', res.data.data.username);
        router.push('/media/list');
      }
      commit('LOADING_STOP');
    });
  },
  info({ commit }, payload) {
    commit('LOADING_START');
    userInfo(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_USER', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  update({ commit }, payload) {
    commit('LOADING_START');
    userUpdate(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_USER', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  send({ commit }, payload) {
    commit('LOADING_START');
    postMessage(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_USER', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
};

const mutations = {
  SET_USER(state, { payload }) {
    state.user = payload;
  },
  LOADING_START(state) {
    state.loading = true;
  },
  LOADING_STOP(state) {
    state.loading = false;
  },
};

const state = {
  user: {
    username: '' || localStorage.getItem('username'),
    role_id: '',
  },
  loading: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
