<template>
  <div class="w-full h-fit flex justify-between items-center flex-wrap">
    <hgroup>
      <h1 class="font-manrope text-[#111827] text-2xl leading-8 font-bold">
        Empleados
      </h1>
      <p class="font-manrope font-medium mt-2 text-sm" v-if="isLoaded">
        Gestiona tus empleados
      </p>
    </hgroup>

    <template v-if="isLoaded">
      <div class="flex gap-[20px]">
        <button
          class="bg-white border-solid border-[1px] py-4 px-6 rounded-[10px] border-[#111827] flex items-center gap-[8px]">
          <img src="../assets/icons/download.svg" alt="" />
          <span class="text-[#111827] font-bold font-manrope text-base">Descargar</span>
        </button>
        <button class="bg-[#111827] flex items-center gap-[8px] py-4 px-6 rounded-[10px]">
          <img src="../assets/icons/plus.svg" alt="" />
          <span class="text-white font-bold font-manrope text-base">Nuevo</span>
        </button>
      </div>
    </template>
    <template v-if="!isLoaded">
        <Skeleton class="w-[100px] h-8 rounded-[100px]"/>
    </template>


  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Skeleton from './skeletons/Skeleton.vue';

export default defineComponent({
    name: "Header",
    setup() {
        const isLoaded = ref(false);
        setTimeout(() => {
            isLoaded.value = true;
        }, 1000);
        return {
            isLoaded
        };
    },
    components: { Skeleton }
});
</script>
