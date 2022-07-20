<template>
  <div class="farmacias">
    <h1>aqui todas las farmacias</h1>
    <TodasFarmacias />
  </div>
</template>

<script>

import TodasFarmacias from '@/components/TodasFarmacias.vue'

export default {
  name: 'FarmaciasView',
  components: {
    
    TodasFarmacias
}
}
</script>