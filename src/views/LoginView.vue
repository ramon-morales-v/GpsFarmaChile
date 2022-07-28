<template>
  <div class="container">
    <div>
      <router-link to="inicio" > <img src="../assets/img/logo.svg" /> </router-link>
      <router-view/>
    </div>
    <main class="login">
      <br />
      <!-- <h2 class="text-success">Registrate con GpsFarmaChile</h2> -->
      <!-- <router-link to="/ingreso">Ingresa aqui</router-link> |
      <router-link to="/inicio">Volver al Inicio</router-link>
      <router-view /> -->
      <section class="forms container">
        <form class="register" @submit.prevent="register">
          <h2 class="text-success">Registrate con GpsFarmaChile</h2>
          <div class="container">
            <input
              type="email"
              placeholder="Email"
              class="btn btn-success"
              style="color: white"
              v-model="register_form.email"
            />
          </div>
          <div class="container">
            <input
              type="password"
              placeholder="Contraseña"
              class="btn btn-success"
              style="color: white"
              v-model="register_form.password"
            />
          </div>

          <input
            type="submit"
            value="Registrarse"
            class="btn btn-outline-success"
          />
          <div class="container">
            <p class="text-success">
              Crea tu cuenta de<a href="#" class="text-dark"
                >GpsFarmaChile con:</a
              >
            </p>
          </div>
          <button @click="googleSignIn">
            <img
              src="../assets/img/logoGoogle.svg"
              alt="Google"
              style="line-height: 0; border: 0"
            />
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      register_form,

      register,
    };
  },
};
</script>