import {
  EmployeesParams,
  EmployeesResponse,
  UserCulqi,
  UserResponse,
} from "../interfaces/user";
import { axiosInstance, axiosInstanceAuth } from "./axios";

export const LoginUser = async (user: UserCulqi): Promise<UserResponse> => {
  const response = await axiosInstance.post("/auth/login", user);
  return response.data;
};

export const GetEmployees = async ({
  limit,
  page,
}: EmployeesParams): Promise<EmployeesResponse> => {
  const response = await axiosInstanceAuth.get(
    `/empleados?limit=${limit}&page=${page}`
  );
  return response.data;
};
