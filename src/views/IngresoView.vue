<template>
  <main class="login">
    <br>
    <router-link to="/login">Registro</router-link> |
    <router-link to="/inicio">Volver al Inicio</router-link>
    <router-view />
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2>Ingreso</h2>
        <input type="email" placeholder="Correo" v-model="login_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
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