import axios from "axios";

const BASE_URL = "http://localhost:4444/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosToken = axios.create({
  baseURL: BASE_URL,
});

axiosToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosToken };
