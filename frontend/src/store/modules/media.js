import { Message } from 'element-ui';
import {
  getMediaList,
  getMediaById,
} from '../../api/media';


const getters = {

};

const actions = {
  list({ commit }, payload) {
    commit('LOADING_START');
    getMediaList(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_MEDIA_LIST', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  find({ commit }, payload) {
    commit('LOADING_START');
    getMediaById(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_MEDIA_DETAIL', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
};

const mutations = {
  SET_MEDIA_LIST(state, { payload }) {
    state.mediaList = payload;
  },
  SET_MEDIA_DETAIL(state, { payload }) {
    state.detail = payload;
  },
  LOADING_START(state) {
    state.loading = true;
  },
  LOADING_STOP(state) {
    state.loading = false;
  },
};

const state = {
  mediaList: [
    {
      item_id: '',
      name: '',
      url: '',
      type: '',
    },
  ],
  // detail: {
  //   item_id: '',
  //   name: '',
  //   url: '',
  //   type: '',
  // },
  detail: {
    id: 0,
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
