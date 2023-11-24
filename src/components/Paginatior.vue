<template>
  <div class="flex justify-between items-center" v-if="isLoaded">
    <nav class="w-fit">
      <ul class="w-fit flex flex-row justify-start items-center">
        <li class="mr-6">
          <button
            class="w-8 h-8 flex justify-center items-center rounded-[8px] border-solid border-[1px] border-[#F1F2F4] hover:bg-[#f8f8f8]">
            <img src="../assets/icons/left.svg" alt="">
          </button>
        </li>
        <li>
          <button class="w-8 h-8 flex justify-center items-center rounded-[8px] bg-[#f8f8f8]">
            <span class="text-[#111827] font-manrope font-semibold text-xs">1</span>
          </button>
        </li>
        <li>
          <button class="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[#f8f8f8]">
            <span class="text-[#111827] font-manrope font-semibold text-xs">2</span>
          </button>
        </li>
        <li>
          <button class="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[#f8f8f8]">
            <span class="text-[#111827] font-manrope font-semibold text-xs">3</span>
          </button>
        </li>
        <li>
          <button class="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[#f8f8f8]">
            <span class="text-[#111827] font-manrope font-semibold text-xs">...</span>
          </button>
        </li>
        <li>
          <button class="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[#f8f8f8]">
            <span class="text-[#111827] font-manrope font-semibold text-xs">10</span>
          </button>
        </li>
        <li class="ml-6">
          <button
            class="w-8 h-8 flex justify-center items-center rounded-[8px] border-solid border-[1px] border-[#F1F2F4] hover:bg-[#f8f8f8]">
            <img src="../assets/icons/right.svg" alt="">
          </button>
        </li>
      </ul>
    </nav>
    <div class="flex justify-center items-center gap-4">
      <p class="font-manrope text-[#687588] font-medium text-xs leading-5">Mostrando 1 a {{ limit }} de {{ total }}
        registros</p>

      <select
        class="border-[1px] border-[#E9EAEC] font-manrope border-solid rounded-[10px] pl-3 pr-8 py-3 bg-sub focus:outline-none bg-rightP bg-no-repeat bg-white appearance-none"
        name="" id="">
        <option value="">Mostrar 10</option>
        <option value="">Mostrar 9</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Paginator',
  props: ['limit', 'total', "page"],
  setup() {
    const isLoaded = ref(false);

    setTimeout(() => {
      isLoaded.value = true;
    }, 1000);

    return {
      isLoaded
    }
  },
})
</script>