export interface UserCulqi {
  correo: string;
  password: string;
}

export interface UserResponse {
  status: string;
  data: UserDataResponse;
}

export interface UserDataResponse {
  token: string;
  user: UserInfoDataResponse;
}

export interface UserInfoDataResponse {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}
export interface EmployeesParams {
  limit: Number;
  page: Number;
}

export interface EmployeesResponse {
  status: string;
  data: EmployeesInfo[];
  total: number;
}

export interface EmployeesInfo {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}
