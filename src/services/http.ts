import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({ baseURL: "http://204.236.203.14:8090/api" });

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
