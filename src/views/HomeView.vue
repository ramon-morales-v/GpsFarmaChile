<template>
  <main class="home">
    <h1>Home</h1>
        Bienvenido:  {{ $store.state.user.email }}
  </main>
  <router-link to="/farmacias">Farmacias</router-link> |
  <router-link to="/turno">Farmacia de turno</router-link>

  <router-view/>
</template>

<script>
export default {
  setup() {

  }
}
</script>
