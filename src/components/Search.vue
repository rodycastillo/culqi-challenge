<template>
  <div class="w-full h-fit flex justify-between items-center gap-4">
    <div class="relative w-full">
      <input
        class="w-full p-4 border-[1px] border-[#E9EAEC] border-solid rounded-[10px] font-manrope placeholder:text-[#A0AEC0] focus:outline-none bg-search bg-rightP bg-no-repeat bg-white"
        type="text"
        placeholder="Buscar empleado"
      />
    </div>
    <div class="w-[315px]">
      <select
        class="w-full p-4 border-[1px] border-[#E9EAEC] border-solid rounded-[10px] font-manrope disabled:text-[#A0AEC0] focus:outline-none bg-down bg-rightP bg-no-repeat bg-white appearance-none"
        placeholder="Nombre de cargo"
        name=""
        id=""
      >
        <option value="" disabled selected>Nombre de cargo</option>
        <option :value="charge" v-for="(charge, iCharge) in charges" :key="iCharge">{{charge}}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search",
 props: {
  charges: {
    type: Array,
    required: true,
  }
 }
});
</script>
