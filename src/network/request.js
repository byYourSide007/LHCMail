import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL : "http://152.136.185.210:7878/api/hy66",
    // baseURL : "http://123.207.32.32:8000",
    timeout : 5000,
  });
  //2.1 axios请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  },error => {
    console.log(error);
  });
  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  },error => {
    console.log(error);
  });

  return instance(config);
}//request