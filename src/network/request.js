import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL : "http://152.136.185.210:7878/api/hy66",
    // baseURL : "http://123.207.32.32:8000",/*原先的接口，现在已经废弃*/
    timeout : 5000,
  });
  //2.1 axios请求拦截器
  instance.interceptors.request.use(config => {
    //可以在这里进行数据处理
    return config;
  },error => {
    console.log(error);
  });
  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    //可以在这里进行数据处理
    return res.data;
  },error => {
    console.log(error);
  });

  return instance(config);
}//request