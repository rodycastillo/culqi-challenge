<template>
  <div class="overflow-scroll">
    <table class="w-full min-w-[780px]">
      <template v-if="isLoaded">
        <tr class="w-full bg-[#fafafa] rounded-[10px]">
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left rounded-[10px]">
            Nombre
          </th>
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left">
            Nombre cargo
          </th>
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left">
            Departamento
          </th>
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left">
            Oficina
          </th>
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-left">
            Cuenta
          </th>
          <th class="w-1/6 py-5 px-4 font-manrope text-xs font-bold text-[#687588] leading-5 text-right rounded-[10px]">
            Acciones
          </th>
        </tr>
      </template>
      <template v-if="!isLoaded">
        <tr class="w-full bg-[#fafafa]">
          <th v-for="i in Array(6)" :key="i" class="py-5 px-4 w-1/6">
            <Skeleton class="animate-pulse rounded-[10px] w-full h-[20px]" />
          </th>
        </tr>
      </template>

      <template v-if="isLoaded">
        <tr data-testid="employee" class="w-full border-b-[1px] border-[#E9EAEC] border-solid"
          v-for="(employee, iEmployee) in employees" :key="iEmployee">
          <td class="w-1/6 py-5 px-4">
            <p class="font-manrope text-sm font-medium leading-[19px] text-[#111827]">
              {{ employee.nombre }}
            </p>
            <span class="font-manrope text-[12px] font-medium leading-[19px] text-[#A0AEC0]">{{ employee.correo }}</span>
          </td>
          <td class="w-1/6 py-5 px-4">
            <p class="font-manrope text-sm font-medium leading-[19px] text-[#111827]">
              {{ employee.cargo }}
            </p>
          </td>
          <td class="w-1/6 py-5 px-4">
            <p class="font-manrope text-sm font-medium leading-[19px] text-[#111827]">
              {{ employee.departamento }}
            </p>
          </td>
          <td class="w-1/6 py-5 px-4">
            <p class="font-manrope text-sm font-medium leading-[19px] text-[#111827]">
              {{ employee.oficina }}
            </p>
          </td>
          <td class="w-1/6 py-5 px-4">
            <p class="font-manrope text-sm font-medium leading-[19px] text-[#111827]">
              {{ employee.estadoCuenta }}
            </p>
          </td>
          <td class="w-1/6 py-5 px-4">
            <div class="flex gap-[10px] justify-end items-center">
              <button class="flex justify-center items-center w-[30px] h-[30px] bg-[#27A376] rounded-[8px]">
                <img src="../assets/icons/watch.svg" alt="" />
              </button>
              <button class="flex justify-center items-center w-[30px] h-[30px] bg-[#2f78EE] rounded-[8px]">
                <img src="../assets/icons/edit.svg" alt="" />
              </button>
              <button class="flex justify-center items-center w-[30px] h-[30px] bg-[#E03137] rounded-[8px]">
                <img src="../assets/icons/delete.svg" alt="" />
              </button>
            </div>
          </td>
        </tr>
      </template>

      <template v-if="!isLoaded">
        <tr class="w-full" v-for="p in Array(8)" :key="p">
          <td v-for="i in Array(6)" :key="i" class="w-1/6 py-5 px-4">
            <Skeleton class="animate-pulse rounded-[10px] w-full h-[20px]" />
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { EmployeesInfo } from '../interfaces/user';
import Skeleton from "./skeletons/Skeleton.vue";

export default defineComponent({
  props: {
    employees: {
      type: Array<EmployeesInfo>,
      required: true,
    }
  },
  setup() {
    const isLoaded = ref(false);

    setTimeout(() => {
      isLoaded.value = true;
    }, 1000);

    return {
      isLoaded
    }
  },
  components: { Skeleton }
});
</script>
