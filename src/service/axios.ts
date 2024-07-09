/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const LOCAL_URL = "http://192.168.1.2:4444/api";
const BASE_URL = "https://myauto-backend.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcyMDQ5ODUxNywiZXhwIjoxNzIzMDkwNTE3fQ.XzGRc6QW4TdMkatriMLHfpnBXoeb_7-uR9dG5wg46_0",
  },
});

export { axiosInstance };
