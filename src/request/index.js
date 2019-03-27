
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios; // 特殊情况下可以使用this.$axios，一般使用自定义的
// 自定义封装的 request,
const request = axios.create({
  baseURL : '',//所有接口主域名，
  timeout: 10000, // 请求超时时间
});
// 请求时前的拦截器
request.interceptors.request.use(
  // 配置信息
  (config)=>{
    // 可以在此处为请求设置请求头
    return config
  },
  // 请求出错
  (error)=>{
    return error
  }
);
// 返回前的拦截器
request.interceptors.response.use(
  // 请求成功返回的数据
  (response)=>{
    return response
  },
  // 返回数据出错
  (error)=>{
    return error
  }
);
export default request
