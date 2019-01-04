import axios from 'axios';

import querystring from 'querystring';
import message from 'util/message'
axios.defaults.baseURL = "http://localhost:3000";
interface config {
    method: 'post' | 'put' | 'delete' | 'patch',
    data: any,
}
interface response{
    status: number,
    data: {
        code: number,
        message: string,
        result:any,
    }
}
// 拦截器
axios.interceptors.request.use(
  (config:config) => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = querystring.stringify(config.data);
    }
    // config.headers = {
    //   authorization: `Bearer ${localStorage.getItem('toKen')}`,
    // };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response:response) => {
    if (response.status) {
      if (response.data.code == 1) {
        message("success",response.data.message);
      } else {
        message("errorr",response.data.message);
      }
      return response.data.result;
    } else {
      message("error",response.data.message);
    }
    return response
  },
  error => {
    message("error",error.response.data.message);
    return error.response.data
  }
);


export default  axios

