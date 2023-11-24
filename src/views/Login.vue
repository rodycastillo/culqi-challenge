<template>
  <div class="w-screen h-fit flex items-center lg:flex-col lg:gap-[30px]">
    <section class="w-1/2 h-full lg:w-full lg:flex lg:max-h-[350px]">
      <picture class="w-full h-[667px] block lg:h-[350px] lg:w-1/2">
        <img class="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/5ba9/9cca/72304f8f5e6598a1fc3f541d868a3889?Expires=1701648000&Signature=QzlmUS68Vq0YyUNKDWdY-aGtpjoW7Rd0WGcuNevk47~f27XMnIqCqI7HG2JtZc5zO9~C23T9kxxm7QxNZD45914v1tSXW2a3t7CPWbcdiRLjcQVs23C~fYAlmyQX09jify0MeScMl~yPaoYnRUB3AUSVUXPKNtP2t9af3cMsEEJ2CGQxbbs-al0UFqOIzKaAUH8mFM8xvHx-Xj-vLDQMVblS3BCGqC7tLhXuGGZx4oVPa~bt75c0Psd-j2oZ4QiaQsnwSkL1kq6YS8nfJ9OYo3lENsCL7xOqH0bEVlKpbGCmtEgDjvJ6oC87~1tHQCo92o0m-TTVAADfR-6froZ39A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
      </picture>

      <hgroup class="border-solid h-fit border-t-[5px] lg:border-t-[0px] lg:border-l-[5px] bg-[#111827] border-[#27A376] lg:w-1/2 lg:h-[350px]">
          <div class="flex flex-col gap-[24px] max-w-[620px] mx-auto py-12 lg:px-8 md:p-4 ">
            <img class="w-[117.75px] h-[36px]" src="../assets/icons/culqi.svg" alt="culqi brand" />
            <p class="text-white font-bold text-5xl lg:text-2xl md:text-xl sm:text-[19px] font-manrope tracking-[-.5px] leading-[120%]">Dale más power ⚡ a tus empleados hoy 💪</p>
            <p class="text-white font-normal font-manrope text-lg md:text-xs leading-[150%]">Te ayudamos a gestionarlos de manera más sencilla</p>
          </div>
      </hgroup>

    </section>
    <section class="w-1/2 bg-white h-full flex items-center flex-col justify-center lg:w-full">
      <hgroup>
        <h1 class="text-[#111827] text-center text-2xl font-bold font-manrope">Inicia sesión</h1>
      </hgroup>
      <form @submit.prevent="handleSubmit" class="w-[480px] mx-auto lg:w-[90%]">
        <dl class="w-full">
          <dt class=" w-full mt-6 mb-3">
            <label for="emailCQ" class="text-[#111827] text-sm font-medium font-manrope">
              Correo electrónico<span class="text-[#E03137]">*</span>
            </label>
          </dt>
          <dd class="w-full">
            <input type="email" name="emailCQ" id="emailCQ" v-model.trim="v1$.correo.$model" placeholder="Ingresa el correo electrónico" class="rounded-[10px] py-4 px-5 border-solid border-2 border-[#e9eAEC] w-full font-normal not-italic text-sm placeholder:text-[#A0AEC0] focus:outline-1 focus:outline-[#0CAF60] font-manrope" />
          </dd>
        </dl>
        <dl class="w-full">
          <dt class=" w-full mt-6 mb-3">
            <label for="passwordCQ" class="text-[#111827] text-sm font-medium font-manrope">
              Contraseña<span class="text-[#E03137]">*</span>
            </label>
          </dt>
          <dd class=" w-full">
            <input type="password" name="passwordCQ" id="passwordCQ" v-model.trim="v1$.password.$model" placeholder="Ingresa la contraseña" class="rounded-[10px] p-4 w-full border-solid border-2 border-[#e9eAEC] font-normal not-italic text-sm placeholder:text-[#A0AEC0] font-manrope"/>
          </dd>
        </dl>
        <dl class="w-full" v-if="errMessage">
          <dd class="mt-8">
            <p class="text-left text-[#E03137] font-normal text-xs font-manrope">
              <img src="../assets/icons/exclamation.svg" class="w-[19px] h-[19px] inline-block"/>  Correo o contraseña incorrectos
            </p>
          </dd>
        </dl>
        <dl class=" w-full">
          <dt class=" w-full my-8">
            <button type="submit" class="w-full bg-[#111827] text-base tracking-[.3px] text-white font-bold py-4 text-center rounded-[10px] cursor-pointer disabled:opacity-[0.7] font-manrope" :disabled="v1$.$invalid">Iniciar sesión</button>
          </dt>
          <dd>
            <p class="text-center text-[#A0AEC0] font-medium text-sm font-manrope">
              ¿Eres nuevo aquí? <span class="text-[#27A376] cursor-pointer">Crea una cuenta</span>
            </p>
          </dd>
        </dl>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, toRef } from "vue";
import { UserCulqi } from "../interfaces/user";
import { appStore } from "../stores/appStore";
import { useRouter } from "vue-router";
import { required, email } from '@vuelidate/validators';
import { useVuelidate } from "@vuelidate/core"



export default defineComponent({
  name: "LoginPage",
  setup() {
    const app = appStore();
    onMounted(()=> {
      if(app.token) {
        return router.push({ path: '/' })
      }
    })
    const router = useRouter();
    const user = reactive<UserCulqi>({
      correo: "",
      password: "",
    });

    const rules = {
      correo: {
        required,
        email
      },
      password: {
        required,
      }
    }

    const v1$ = useVuelidate(rules, {
      correo: toRef(user, "correo"),
      password: toRef(user, "password"),
    })

    const handleSubmit = async () => {
      v1$.value.$touch();
      if (v1$.value.$invalid) return;
      await app.LoginUserAction(user);
      router.push({ path: '/' })
    };

    const { errMessage }  = toRefs(app);
    
    return {
      handleSubmit,
      errMessage,
      v1$
    };
  },
});
</script>

<style scoped></style>
