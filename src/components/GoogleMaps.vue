<template>
  <div id="tabla-personas">
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas" :key="persona.id">
          <td>{{ persona.nombre}}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 export default {
  name: 'tabla-personas',
  props: {
    personas: Array,
  },
}
</script>

<style scoped></style>