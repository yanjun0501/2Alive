import axios from 'axios';
import { stringify } from 'querystring';
import './interceptors';

const API = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const getMediaList = () => axios.get(`${API}/api/media/list`);

export const getMediaById = params => axios.get(`${API}/api/media/item?${stringify(params)}`);

