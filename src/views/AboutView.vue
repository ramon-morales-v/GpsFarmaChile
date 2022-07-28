<template>

  <div class="container-fluid">
    <OpinionesTurno/>
    <MostrarOpiniones/>

  </div>
</template>
<script>
import OpinionesTurno from "../components/OpinionesTurno.vue";
import MostrarOpiniones from "../components/MostrarOpiniones.vue";
export default {
  components:{ OpinionesTurno, MostrarOpiniones}
};
</script >