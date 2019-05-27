import axios from 'axios';
import { Message } from 'element-ui';

axios.interceptors.request.use(config => config, (err) => {
  console.log(err);
  return Promise.resolve(err);
});

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response;
  } else if (response.status === 401) {
    return Promise.reject(response);
  } else if (response.status === 403) {
    return response;
  }
  return response;
}, (error) => {
  if (error.response) {
    if (error.response.status > 399 && error.response.status < 500) {
      Message.error('请求错误');
      if (error.response.status === 401) {
        console.log(error.response);
      } else {
        console.log(error.response);
      }
    } else if (error.response.status > 499) { // 500以上系统错误
      Message.error('服务器异常');
    }
  } else if (error.request) {
    if (error.message.toString().indexOf('Gateway') !== -1) {
      console.log(error.request);
    } else {
      console.log(error.request);
    }
  } else {
    console.log(error.request);
  }
  return Promise.reject(error);
});
