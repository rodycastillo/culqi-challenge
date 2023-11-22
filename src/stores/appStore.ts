import { defineStore } from "pinia";
import { LoginUser, GetEmployees } from "../services/CulqiService";
import { UserCulqi, EmployersParameters } from "../interfaces/user";

export const appStore = defineStore("appStore", {
  state: () => {
    return {
      isAuth: false,
      isLoading: false,
      user: null,
      employees: null,
      errMessage: false,
      token: null,
    };
  },
  getters: {
    listEmployees: (state) => state.employees,
    errorMessage: (state) => state.errMessage,
  },
  actions: {
    async LoginUserAction(userData: UserCulqi) {
      try {
        const {
          data: {
            data: { token, user },
          },
        } = await LoginUser(userData);
        this.user = user;
        this.errMessage = false;
        this.isLoading = false;
        this.token = token;
        localStorage.setItem("token", token);
      } catch (error) {
        console.error(error);
        this.errMessage = true;
      }
    },
    async GetEmployeesAction(params: EmployersParameters) {
      try {
        const data: any = await GetEmployees(params);
        this.employees = data;
      } catch (error) {
        this.errMessage = true;
      }
    },
  },
});
