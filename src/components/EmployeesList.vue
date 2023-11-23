<template>
  <table class="w-full">
    <tr class="w-full bg-[#fafafa] rounded-[10px]">
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left rounded-[10px]"
      >
        Nombre
      </th>
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left"
      >
        Nombre cargo
      </th>
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left"
      >
        Departamento
      </th>
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left"
      >
        Oficina
      </th>
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left"
      >
        Cuenta
      </th>
      <th
        class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-right rounded-[10px]"
      >
        Acciones
      </th>
    </tr>

    <tr
      data-testid="employee"
      class="w-full border-b-[1px] border-[#E9EAEC] border-solid"
      v-for="(employee, iEmployee) in employees"
      :key="iEmployee"
    >
      <td class="w-1/6 py-5 px-4">
        <p
          class="font-manrope text-sm font-medium leading-[19px] text-[#111827]"
        >
          {{ employee.nombre }}
        </p>
        <span
          class="font-manrope text-[12px] font-medium leading-[19px] text-[#A0AEC0]"
          >{{ employee.correo }}</span
        >
      </td>
      <td class="w-1/6 py-5 px-4">
        <p
          class="font-manrope text-sm font-medium leading-[19px] text-[#111827]"
        >
          {{ employee.cargo }}
        </p>
      </td>
      <td class="w-1/6 py-5 px-4">
        <p
          class="font-manrope text-sm font-medium leading-[19px] text-[#111827]"
        >
          {{ employee.departamento }}
        </p>
      </td>
      <td class="w-1/6 py-5 px-4">
        <p
          class="font-manrope text-sm font-medium leading-[19px] text-[#111827]"
        >
          {{ employee.oficina }}
        </p>
      </td>
      <td class="w-1/6 py-5 px-4">
        <p
          class="font-manrope text-sm font-medium leading-[19px] text-[#111827]"
        >
          {{ employee.estadoCuenta }}
        </p>
      </td>
      <td class="w-1/6 py-5 px-4">
        <div class="flex gap-[10px] justify-end items-center">
          <button
            class="flex justify-center items-center w-[30px] h-[30px] bg-[#27A376] rounded-[8px]"
          >
            <img src="../assets/icons/watch.svg" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-[30px] h-[30px] bg-[#2f78EE] rounded-[8px]"
          >
            <img src="../assets/icons/edit.svg" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-[30px] h-[30px] bg-[#E03137] rounded-[8px]"
          >
            <img src="../assets/icons/delete.svg" alt="" />
          </button>
        </div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EmployeesInfo } from '../interfaces/user';

export default defineComponent({
  props: {
    employees: {
      type: Array<EmployeesInfo>,
      required: true,
      default() {
        return [
          {
            id: 2,
            nombre: "Pristia Candra",
            correo: "pristia@culqi.com",
            cargo: "UI UX Designer",
            departamento: "Team Product",
            oficina: "Culqi Office",
            estadoCuenta: "Activada",
          },
        ];
      },
    },
  },
});
</script>
