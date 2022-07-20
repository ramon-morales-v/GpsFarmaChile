<template>
  <main class="home">
    <h1>Home</h1>
        Bienvenido:  {{ $store.state.user.email }}
  </main>
</template>

<script>
export default {
  setup() {

  }
}
</script>
