<template>
  <aside
    class="w-fit h-full min-h-screen bg-[#fff] min-w-[280px] border-r-[1px] border-solid border-[#E9EAEC] flex flex-col justify-between items-center py-6 px-8"
  >
    <div class="w-full">
      <img
        class="mx-auto w-[117px] h-[36px]"
        src="../assets/images/culqi.svg"
        alt=""
      />
      <ul class="w-full mt-7">
        <li class="flex py-4 items-center gap-[10px] cursor-pointer">
          <img
            class="w-[20px] h-[20px]"
            src="../assets/icons/employees.svg"
            alt=""
          />
          <span
            class="inline-block text-[#00A19B] font-bold font-manrope text-sm"
            >Empleados</span
          >
        </li>
        <li class="flex py-4 items-center gap-[10px] cursor-pointer">
          <img
            class="w-[20px] h-[20px]"
            src="../assets/icons/recluting.svg"
            alt=""
          />
          <span class="inline-block text-[#000] font-bold font-manrope text-sm"
            >Reclutamiento</span
          >
        </li>
      </ul>
    </div>

    <div class="w-full">
      <button
        @click="logOut"
        class="border-[#000] rounded-[10px] py-4 border-[1px] border-solid text-center min-w-[216px] font-bold font-manrope text-sm cursor-pointer"
      >Salir
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
// import { appStore } from '../stores/appStore';

export default defineComponent({
  name: "AsideDashboard",
  setup() {
    const router = useRouter()
    // const {token} = appStore()

    const logOut = () => {
      localStorage.clear();
      router.push({ name: 'Login' })
    };

    return { logOut };
  },
});
</script>

<style scoped></style>
