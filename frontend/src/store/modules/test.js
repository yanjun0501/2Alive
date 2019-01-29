// import { Message } from 'element-ui';
// import {

// } from '../../api/service';

// getters
const getters = {

};
// actions
const actions = {
  // appos({ commit }, payload) {
  //   commit('LOADING_START');
  //   getAppidInfoAppos(payload).then((res) => {
  //     if (res.data.code !== 200) {
  //       Message.error(res.data.message);
  //     } else {
  //       commit('SET_APPOS', { payload: res.data.data });
  //     }
  //     commit('LOADING_STOP');
  //   });
  // },
};
// mutations

const mutations = {
  // SET_ORDER_COUNT(state, { payload }) {
  //   state.count = payload;
  // },
};

const state = {
  // list: [],
  // count: {},
  // details: {},
  // steps: {},
  // appos: [],
  // server: [],
  // loading: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
