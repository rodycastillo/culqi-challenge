<template>
  <div class="w-full h-full flex flex-row">
    <AsideDashboard />
    <main class="w-full h-screen overflow-y-scroll">
      <HeaderTop :names="user.nombre" />
      <section class="w-full h-fit min-h-[835px] pt-8 pb-7 px-6 bg-[#E9EAEC]">
        <div class="bg-white rounded-xl min-h-[835px] p-6 flex flex-col gap-6">
          <!-- Header -->
          <Header />
          <!-- Finder -->
          <Search :charges="store.charges" />
          <!-- Result -->
          <EmployeesList :employees="store.employees" />
          <!-- Pagination -->
          <Paginatior :limit="8" :total="48" />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { employeesStore } from "../stores/employeesStore";
import { EmployeesParams } from "../interfaces/user";
import EmployeesList from "../components/EmployeesList.vue";
import Search from "../components/Search.vue";
import Paginatior from "../components/Paginatior.vue";
import Header from "../components/Header.vue";
import AsideDashboard from "../components/Aside.vue";
import HeaderTop from "../components/HeaderTop.vue";
import { appStore } from "../stores/appStore";

export default defineComponent({
  name: "DashboardPage",
  setup() {

    const { user } = appStore();
    const params = reactive<EmployeesParams>({
      limit: 8,
      page: 1,
    });
    onMounted( async() => {
      await store.GetEmployeesAction(params);
    });  
    const store =
      employeesStore();  
    return {
      store,
      user
    };
  },
  components: {
    EmployeesList,
    Search,
    Paginatior,
    Header,
    AsideDashboard,
    HeaderTop
  },
});
</script>

<style scoped></style>
