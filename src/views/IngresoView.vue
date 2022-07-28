<template>
  <div class="container">
    <div>
      <router-link to="inicio" > <img src="../assets/img/logo.svg" /> </router-link>
      <router-view/>
    </div>
    <main>
      <br />
      <!-- <router-link to="/login">Registro</router-link> |
      <router-link to="/inicio">Volver al Inicio</router-link>
      <router-view /> -->
      <section class="forms container">
        <form class="login" @submit.prevent="login">
          <h2 class="text-success">Iniciar sesión con GpsFarmaChile</h2>
          <div class="container">
            <input
              type="email"
              class="btn btn-success"
              placeholder="Email"
              v-model="login_form.email"
              style="color: white"
            />
          </div>
          <div class="container">
            <input
              type="password"
              class="btn btn-success"
              placeholder="Password"
              style="color: white"
              v-model="login_form.password"
            />
          </div>
          <div class="container">
            <a href="#"><p>¿Se te olvidó tu contraseña?</p></a>
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            class="btn btn-success"
            style=""
          />
        </form>
      </section>
      <div class="container">
        <router-link to="/login"
          ><p>
            ¿No tienes cuenta?<a href="#" class="text-dark">Inscribirse</a>
          </p></router-link
        >
      </div>
    </main>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});

    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
};
</script>

<style>
</style>