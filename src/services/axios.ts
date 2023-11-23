import axios, { AxiosInstance } from "axios";
// import { appStore } from "../stores/appStore";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://fepruebatecnicaculqi-backend-production.up.railway.app",
  headers: {
    "Content-type": "application/json",
  },
});

// const { token } = appStore();
// console.log(token);
const token = localStorage.getItem("token");
export const axiosInstanceAuth: AxiosInstance = axios.create({
  baseURL: "https://fepruebatecnicaculqi-backend-production.up.railway.app",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
