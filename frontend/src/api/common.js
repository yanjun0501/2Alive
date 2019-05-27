import axios from 'axios';
import { stringify } from 'querystring';
import './interceptors';

const API = 'http://localhost:3000';
// const DANMAKU_API = 'localhost:1207/v3';

axios.defaults.withCredentials = true;

export const userRegister = params => axios.post(`${API}/api/user/add`, params);

export const userLogin = params => axios.post(
  `${API}/api/user/login`,
  params,
  {
    headers: {
      'Authorization-Token': localStorage.getItem('token'),
    },
  },
);

export const userInfo = params => axios.get(`${API}/api/user/info?${stringify(params)}`);

export const userUpdate = params => axios.put(`${API}/api/user/update`, params);

export const postMessage = params => axios.post(`${API}/api/message/post`, params);

// export const postDanmaku = params => axios.post(`${DANMAKU_API}`, params);

// export const getDanmaku = params => axios.get(`${DANMAKU_API}`, params);

