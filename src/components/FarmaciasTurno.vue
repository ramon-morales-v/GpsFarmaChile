 <template>
  <div>
    <h2>Farmacias de turno del pais</h2>
    <div class="container">
      <table class="table table-striped">
        <thead>
          <th scope="col">Id</th>
          <th scope="col">Nombre Local</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Comuna</th>
          <th scope="col">Direccion</th>
          <th scope="col">Hora apertura</th>
          <th scope="col">Hora cierre</th>
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
            <td><input type="text" class="form-control" placeholder="Opina"/><button class="btn btn-success">enviar</button></td>
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

      farmacias: null,

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