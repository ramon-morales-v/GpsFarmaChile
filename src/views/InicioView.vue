<template>
  <main class="inicio">
    <h1>Inicio</h1>

  </main>
  <router-link to="/login">Registrate</router-link> |
  <router-link to="/ingreso">Inicia sesion</router-link>

  <router-view/>
</template>

<script>
export default {
  setup() {

  }
}
</script>