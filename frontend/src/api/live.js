import axios from 'axios';
import { stringify } from 'querystring';
import './interceptors';

const API = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const getRoomList = () => axios.get(`${API}/api/room/list`);

export const roomUpdate = params => axios.put(`${API}/api/room/update`, params);

export const addRoom = params => axios.post(`${API}/api/room/add`, params);

export const deleteRoom = params => axios.delete(`${API}/api/room/delete`, {
  data: params,
});

export const findRoom = params => axios.get(`${API}/api/room/find?${stringify(params)}`);

export const findRoomByUser = params => axios.get(`${API}/api/room/user?${stringify(params)}`);

