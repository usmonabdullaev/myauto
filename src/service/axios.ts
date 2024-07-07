/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const LOCAL_URL = "http://localhost:4444/api";
const BASE_URL = "https://myauto-backend.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: LOCAL_URL,
});

export { axiosInstance };
