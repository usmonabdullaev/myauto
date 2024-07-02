import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4444/",
  headers: {
    "Content-Type": "application/json",
    token: "$2a$12$OuVaxu7DOkqfJzhBwJD6Oeidb.gdSiUYaXmXVOVrlEE0iYH0R4bpK",
  },
});

export { axiosInstance };
