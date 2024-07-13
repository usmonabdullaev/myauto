import axios from "axios";

const BASE_URL = "http://localhost:4444/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const token = localStorage.getItem("token");

const axiosToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { axiosInstance, axiosToken };
