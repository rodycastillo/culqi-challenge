<template>
  <template v-if="isLoaded">
    <div class="w-full h-fit flex justify-between items-center gap-4">
      <div class="relative w-full">
        <input
          v-model="user"
          class="w-full p-4 border-[1px] border-[#E9EAEC] border-solid rounded-[10px] font-manrope placeholder:text-[#A0AEC0] focus:outline-none bg-search bg-rightP bg-no-repeat bg-white"
          type="text" placeholder="Buscar empleado" />
      </div>
      <div class="w-[315px]">
        <select v-model="selected" @change="filterByRole"
          class="w-full p-4 border-[1px] border-[#E9EAEC] border-solid rounded-[10px] font-manrope disabled:text-[#A0AEC0] focus:outline-none bg-down bg-rightP bg-no-repeat bg-white appearance-none"
          placeholder="Nombre de cargo" name="" id="">
          <option value="" selected>Nombre de cargo</option>
          <option :value="charge" v-for="(charge, iCharge) in charges" :key="iCharge">{{ charge }}</option>
        </select>
      </div>
    </div>
  </template>
  <template v-if="!isLoaded">
    <div class="flex w-full gap-4">
      <Skeleton class="w-1/3 h-[36px] rounded-[100px]" v-for="i in Array(3)" :key="i" />
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Skeleton from './skeletons/Skeleton.vue';

export default defineComponent({
  name: "Search",
  props: {
    charges: {
      type: Array,
      required: true,
    }
  },
  setup() {
    const isLoaded = ref(false);
    setTimeout(() => {
      isLoaded.value = true;
    }, 1000);

    const selected = ref<string>("");
    const user = ref<string>("");

    const filterByRole = () => {
      console.log(selected.value);
    }

    return {
      isLoaded,
      selected,
      user,
      filterByRole
    };
  },
  components: { Skeleton }
});
</script>
