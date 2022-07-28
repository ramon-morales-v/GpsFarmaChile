<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-6 container">
        <div class="container">
          <br />
          <br />
          <h2 class="text-success-center" style="font-size: medium">
            Optimiza tu busqueda de farmacias en cualquier emergencia
          </h2>
          <br />
          <br />
          <router-link to="/farmacias"
            ><button class="btn btn-success" type="button">
              Todas las Farmacias
            </button></router-link
          >
          <br />
          <br />
          <router-link to="/turno"
            ><button class="btn btn-success" type="button">
              Farmacias de turno
            </button></router-link
          >
        </div>
      </div>
      <div class="col-6 container">
        <img
          src="../assets/img/logogps.svg"
          alt="logogps"
          height="998"
          width="875"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
