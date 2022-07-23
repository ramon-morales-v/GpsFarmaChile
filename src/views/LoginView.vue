<template>
  <main class="login">
	<br>
    <p>Si estas registrado</p>
    <router-link to="/ingreso">Ingresa aqui</router-link> |
    <router-link to="/inicio">Volver al Inicio</router-link>
    <router-view />
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Registro Usuarios</h2>
        <input
          type="email"
          placeholder="Correo"
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="Registrar" />
        <p>Registrate con:</p>
        <button @click="googleSignIn">
          <img src="../assets/img/logo-google.png" alt="Google" />
        </button>
      </form>
    </section>
  </main>
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