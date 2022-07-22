 <template>
  <div>
    <h2>Farmacias de turno del pais</h2>
    <div class="container">
      <table class="table">
        <thead>
          <th>Id</th>
          <th>Nombre Local</th>
          <th>Teléfono</th>
          <th>Comuna</th>
          <th>Direccion</th>
          <th>Hora apertura</th>
          <th>Hora cierre</th>
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
  components: {},
  data: ()=> ({

      farmacias: null

  }),
  created() {

      axios
        .get("http://farmanet.minsal.cl/index.php/ws/getLocalesTurnos")
        .then( (response) => {
          this.farmacias = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

  },
};
</script>