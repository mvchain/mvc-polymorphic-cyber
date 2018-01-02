import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import urlData from '../../static/blockConfig';

// 创建axios实例
const service = axios.create({
  baseURL: urlData.url + ':' + urlData.port + urlData.file, // api的base_url
  timeout: 15000 // 请求超时时间
});

// request拦截器
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response;
    if (res.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(res.message)
    } else {
      return response.data;
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);

export default service
