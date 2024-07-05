import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://myauto-backend.onrender.com/",
});

export { axiosInstance };
