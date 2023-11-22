import { UserCulqi } from "../interfaces/user";
import axiosInstance from "./axios";

export const LoginUser = async (user: UserCulqi) =>
  await axiosInstance.post("/auth/login", user);

export const GetEmployees = async (data: any) => {
  await axiosInstance.get("/empleados", data);
};
