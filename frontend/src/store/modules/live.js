import { Message } from 'element-ui';
import {
  getRoomList,
  roomUpdate,
  addRoom,
  deleteRoom,
  findRoom,
  findRoomByUser,
} from '../../api/live';

const getters = {

};

const actions = {
  list({ commit }, payload) {
    commit('LOADING_START');
    getRoomList(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOMS_LIST', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  find({ commit }, payload) {
    commit('LOADING_START');
    findRoom(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_DETAIL', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  findByUser({ commit }, payload) {
    commit('LOADING_START');
    findRoomByUser(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_SETTING', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  findSet({ commit }, payload) {
    commit('LOADING_START');
    findRoom(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_SETTING', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  update({ commit }, payload) {
    commit('LOADING_START');
    roomUpdate(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_SETTING', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  delete({ commit }, payload) {
    commit('LOADING_START');
    deleteRoom(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_SETTING', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
  add({ commit }, payload) {
    commit('LOADING_START');
    addRoom(payload).then((res) => {
      if (res.data.code !== 200) {
        Message.error('请求错误');
      } else {
        commit('SET_ROOM_SETTING', { payload: res.data.data });
      }
      commit('LOADING_STOP');
    });
  },
};

const mutations = {
  SET_ROOMS_LIST(state, { payload }) {
    state.roomList = payload;
  },
  SET_ROOM_DETAIL(state, { payload }) {
    state.detail = payload;
  },
  SET_ROOM_SETTING(state, { payload }) {
    state.setting = {
      stream: '' || payload.stream,
      status: payload.room_status || 2,
      room_name: '' || payload.room_name,
      owner_name: '' || payload.owner_name,
      type: '' || payload.type,
      id: '' || payload.id,
    };
  },
  LOADING_START(state) {
    state.loading = true;
  },
  LOADING_STOP(state) {
    state.loading = false;
  },
};

const state = {
  roomList: [
    {
      id: '',
      room_name: '',
      owner_name: '',
      type: '',
    },
  ],
  // detail: {
  //   room_status: '',
  //   stream: '',
  //   id: '',
  //   room_name: '',
  //   owner_name: '',
  //   type: '',
  // },
  detail: {
    id: 0,
  },
  setting: {
    room_status: '',
    stream: '',
    status: 2,
    room_name: '',
    owner_name: '',
    type: '',
    id: '',
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
