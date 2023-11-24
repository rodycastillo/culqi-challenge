import { defineStore } from "pinia";
import { ref } from "vue";
import { EmployeesInfo, EmployeesParams } from "../interfaces/user";
import { GetEmployees } from "../services/CulqiService";

export const employeesStore = defineStore("employeesStore", {
  state: () => {
    return {
      employees: ref<EmployeesInfo[]>([]),
      errorMessage: ref<Boolean>(false),
      totalEmployees: ref<Number>(0),
      isLoaded: ref<Boolean>(false),
    };
  },
  getters: {
    charges: (state) => state.employees.map((employee) => employee.cargo),
    allEmployees: (state) => state.employees,
  },
  actions: {
    async GetEmployeesAction(params: EmployeesParams, token: String) {
      try {
        const { data, total } = await GetEmployees(params, token);
        this.employees = data;
        this.totalEmployees = total;
        this.errorMessage = false;
        this.isLoaded = false;
      } catch (error) {
        console.log("Error", error);
        localStorage.clear();
        this.errorMessage = true;
      }
    },
  },
});
