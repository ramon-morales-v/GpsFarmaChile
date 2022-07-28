<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <form @submit.prevent="enviarMensaje">
        <div class="form-group">
          <label>Opinion de farmacia</label>
          <!--<input type="text" class="form-control" v-model="user.message" required>-->
          <textarea
            class="form-control"
            v-model="message.message"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Enviar</button>
        </div>
      </form>
      <table
        class="
          table
          table-bordered
          table-responsive-sm
          table-responsive-md
          table-responsive-lg
        "
      >
        <thead>
        </thead>
        <tbody>
          <tr v-for="message in listamensajes" :key="message.key">
            <td>
              {{ message.message }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db, ref, set, push } from "../firebase/index";

export default {
  data() {
    return {
      message: {},
    };
  },

  methods: {
    enviarMensaje(event) {
      event.preventDefault();

      const ListaMensajeRef = ref(db, "mensaje");
      const nuevoMensajeRef = push(ListaMensajeRef);
      set(nuevoMensajeRef, {
        mensaje: this.message.message,
      })
        .then(function () {
          alert("Mensaje creado exitosamente!");
        })
        .catch(function (error) {
          alert("Error guardando: ", error);
        });
    },
  },
};
</script>
