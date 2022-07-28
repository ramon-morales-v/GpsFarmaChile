<template>
  <div class="container-fluid-responsive">
    <h2 class="text-success">Farmacias de turno</h2>
    
    <div class="container-fluid table-responsive{-sm|-md|-lg|-xl|-xxl} ">
      <table class="table table-success table-striped bordered border-success">
        <thead>
          <th class="text-success">Id</th>
          <th class="text-success">Nombre Local</th>
          <th class="text-success">Teléfono</th>
          <th class="text-success">Comuna</th>
          <th class="text-success">Dirección</th>
          <th class="text-success">Hora apertura</th>
          <th class="text-success">Hora cierre</th>
        </thead>
        <tbody>
          <tr v-for="item in farmacias" :key="item.local_id">
            <td>{{ item.local_id }}</td>
            <td>{{ item.local_nombre }}</td>
            <td>{{ item.local_telefono }}</td>
            <td>{{ item.comuna_nombre }}</td>
            <td>{{ item.local_direccion }}</td>
            <td>{{ item.funcionamiento_hora_apertura }}</td>
            <td>{{ item.funcionamiento_hora_cierre }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FarmaciasTurno",
  data: () => ({
    farmacias: null,
  }),
  created() {
    axios
      .get("http://farmanet.minsal.cl/index.php/ws/getLocalesTurnos")
      .then((response) => {
        this.farmacias = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>