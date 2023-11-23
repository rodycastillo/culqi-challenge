import { defineStore } from "pinia";
import { LoginUser } from "../services/CulqiService";
import { UserCulqi, UserInfoDataResponse } from "../interfaces/user";
import { ref } from "vue";

export const appStore = defineStore("appStore", {
  state: () => {
    return {
      isAuth: ref<Boolean>(false),
      isLoading: ref<Boolean>(false),
      user: ref<UserInfoDataResponse>(
        JSON.parse(localStorage.getItem("user")) || {}
      ),
      errMessage: false,
      token: ref<String>(localStorage.getItem("token") || ""),
    };
  },
  getters: {
    errorMessage: (state) => state.errMessage,
  },
  actions: {
    async LoginUserAction(userData: UserCulqi) {
      try {
        const { data } = await LoginUser(userData);
        this.user = data.user;
        this.errMessage = false;
        this.token = data.token;
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      } catch (error) {
        console.error("ERROR", error);
        this.errMessage = true;
      }
    },
  },
});
