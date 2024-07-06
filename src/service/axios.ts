import axios from "axios";

// const LOCAL_URL = "http://localhost:4444/";
const BASE_URL = "https://myauto-backend.onrender.com/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance };
