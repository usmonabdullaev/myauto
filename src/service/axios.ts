/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const BASE_URL = "http://localhost:4444/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcyMDQ5ODUxNywiZXhwIjoxNzIzMDkwNTE3fQ.XzGRc6QW4TdMkatriMLHfpnBXoeb_7-uR9dG5wg46_0",
  },
});

export { axiosInstance };
