<template>
<nav class="nav" style="background-color: #e3f2fd;">
  <div id="nav" v-if="$store.state.user">
    <a class="text-success"><router-link to="/"><img src="./assets/img/logo.png" alt="Logo Gps" height="70" width="70"/></router-link></a> |
    <a class="text-success"><router-link to="/about">Sobre mi</router-link> </a> |
    <a class="text-success" @click="$store.dispatch('logout')">Cerrar Sesion</a> |
    <a class="text-success"> Bienvenido:  {{ $store.state.user.email }} </a>
  </div>
  </nav>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>