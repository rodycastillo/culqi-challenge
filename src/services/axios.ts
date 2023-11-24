import axios, { AxiosInstance } from "axios";

const baseURL: string =
  "https://fepruebatecnicaculqi-backend-production.up.railway.app";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const axiosInstanceAuth: AxiosInstance = axios.create({ baseURL });
