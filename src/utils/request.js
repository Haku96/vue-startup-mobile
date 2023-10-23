import axios from "axios";
import { getToken } from "./auth";
import { BASE_URL, TIME_OUT } from "./config";
import { showToast } from "vant";

const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // send cookies when cross-domain requests
  // withCredentials: true
});

service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // JWT Authorization
    // modify it according to the actual situation
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // do something after response done
    if (res.code !== 20000) {
      showToast({
        message: res.msg || "Error",
      });

      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    showToast({
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export default service;
