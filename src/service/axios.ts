/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const BASE_URL = "http://localhost:4444/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcyMDYxNDkxNCwiZXhwIjoxNzIzMjA2OTE0fQ.WH8Bk5Q1EiwxgW9IXg5LwTZFkp8NfmopJ_BmsRGx3sc",
  },
});

export { axiosInstance };
