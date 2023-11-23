<template>
        <header
        class="min-h-[96px] w-full border-b-[1px] border-solid border-[#E9EAEC] bg-[#fff] py-6 px-8 flex justify-end items-center">
        <div class="flex gap-3 justify-center items-center">
          <div class="h-[32px] w-[32px] bg-[#EB6F25] rounded-full flex justify-center items-center">
            <span class="text-white font-manrope font-bold">CQ</span>
          </div>
          <p class="font-manrope text-black text-xs font-bold">{{ names }}</p>
        </div>
      </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "HeaderTop",
  props: {
    names: {
      type: String,
      required: true,
    }
  },
})
</script>