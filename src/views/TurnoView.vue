<template>
  <div class="turno">
    <h1>aqui farmacias de turno</h1>
    <FarmaciasTurno />
  </div>
</template>

<script>

import FarmaciasTurno from '@/components/FarmaciasTurno.vue'

export default {
  name: 'TurnoView',
  components: {

    FarmaciasTurno
}
}
</script>