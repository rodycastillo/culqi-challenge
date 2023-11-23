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

export const GetEmployees = async (
  { limit, page }: EmployeesParams,
  token: String
): Promise<EmployeesResponse> => {
  const response = await axiosInstanceAuth.get(
    `/empleados?limit=${limit}&page=${page}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
