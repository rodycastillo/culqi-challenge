<template>
  <div class="w-full h-full flex flex-row">
    <AsideDashboard />
    <main class="w-full h-screen overflow-y-scroll">
      <HeaderTop :names="user.nombre" />
      <section class="w-full h-fit min-h-[835px] pt-8 pb-7 px-6 bg-[#E9EAEC]">
        <div class="bg-white  h-fit rounded-xl min-h-fit p-6 flex flex-col gap-6 overflow-hidden">
          <Header />
          <Search :charges="store.charges" />
          <EmployeesList :employees="store.employees" />
          <Paginatior :page="params.page" :limit="params.limit" :total="store.totalEmployees" />
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
import Skeleton from "../components/skeletons/Skeleton.vue";
import { appStore } from "../stores/appStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "DashboardPage",
  setup() {

    const { user } = appStore();
    const store =
      employeesStore();
    const { isLoaded } = storeToRefs(store);
    const params = reactive<EmployeesParams>({
      limit: 8,
      page: 1,
    });

    onMounted(async () => {
      const token = localStorage.getItem('token');
      if (token) {
        isLoaded.value = true;
        await store.GetEmployeesAction(params, token);
      }
    });

    return {
      params,
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
    HeaderTop,
    Skeleton
  },
});
</script>

<style scoped></style>
