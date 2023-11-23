import { defineStore } from "pinia";
import { ref } from "vue";
import {
  // EmployeesResponse,
  EmployeesInfo,
  EmployeesParams,
} from "../interfaces/user";
import { GetEmployees } from "../services/CulqiService";

export const employeesStore = defineStore("employeesStore", {
  state: () => {
    return {
      employees: ref<EmployeesInfo[]>([]),
      errorMessage: ref<Boolean>(false),
      totalEmployees: ref<Number>(0),
    };
  },
  getters: {
    charges: (state) => state.employees.map((employee) => employee.cargo),
  },
  actions: {
    async GetEmployeesAction(params: EmployeesParams) {
      try {
        const { data, total } = await GetEmployees(params);
        this.employees = data;
        this.totalEmployees = total;
        this.errorMessage = false;
      } catch (error) {
        console.log("Error", error);
        this.errorMessage = true;
      }
    },
  },
});
