<template>

  <div
    class="
      container-fluid
      d-flex
      justify-content-center
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <h2 class="text-success" >Lista Opiniones de las farmacias de turno</h2>
  </div>
  <table
    class="
      table
      table-bordered
      table-responsive-sm
      table-responsive-md
      table-responsive-lg
     table table-success table-striped bordered border-success"
  >
    <thead>
      <tr>
        <th class="text-success">Correo electronico</th>
        <th class="text-success">Opinion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="mensaje in listamensajes" :key="mensaje.key">
        <th> {{ $store.state.user.email }} </th>
        <th>{{ mensaje.mensaje }}</th>
      </tr>
    </tbody>
  </table>
  
</template>
<script>
/* import { auth } from "../firebase/index";*/
import {
  ref,
  get,
  child,
  getDatabase,
  app,
  arreglomensajes,
} from "../firebase/index";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
    setup(){
        const store = useStore();
        onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
    },
  data() {
    return {
      listamensajes: arreglomensajes,
    };
  },
  created() {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, "mensaje")).then((snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        arreglomensajes.push({
          key: childData.childKey,
          email: childData.email,
          mensaje: childData.mensaje,
        });
      });
    })
    .catch((error) => {
        console.error(error);
      });
  },
};

</script>