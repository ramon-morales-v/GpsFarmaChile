<template>
<div id='map'>
  <GoogleMaps />
  </div>
</template>
<script>
import GoogleMaps from "@/components/GoogleMaps.vue";

export default {
    
        name: 'map',
      components: {
        GoogleMaps,
      },
    
  
  data() {
    return {
      personas: [
        {
          id: 1,
          nombre: 'Jon',
          apellido: 'Nieve',
          email: 'jon@email.com',
        },
        {
          id: 2,
          nombre: 'Tyrion',
          apellido: 'Lannister',
          email: 'tyrion@email.com',
        },
        {
          id: 3,
          nombre: 'Daenerys',
          apellido: 'Targaryen',
          email: 'daenerys@email.com',
        },
      ],
    }
  },
}
</script>