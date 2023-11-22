import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://fepruebatecnicaculqi-backend-production.up.railway.app",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
