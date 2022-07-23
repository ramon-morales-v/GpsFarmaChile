<template>
 <!--  <main class="home">
    <h1>Optimiza tu busqueda de farmacias en cualquier emergencia</h1>
       <p class="text-success"> Bienvenido:  {{ $store.state.user.email }}</p>
  </main>
  <router-link to="/farmacias">Farmacias</router-link> |
  <router-link to="/turno">Farmacia de turno</router-link>

  <router-view/> -->
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1>Optimiza tu busqueda de farmacias en cualquier emergencia</h1>
        <router-link to="/farmacias">Farmacias</router-link> |
  <router-link to="/turno">Farmacia de turno</router-link>
  <router-view/>
      </div>
      <div class="col">
        <img src="../assets/img/logogps.svg" alt="logogps" height="998" width="875" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>
