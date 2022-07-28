<template>
  <nav
    class="navbar navbar-expand-lg max-width: 90% container-fluid"
    style="background-color: #d9f5fb; font-size: x-large"
  >
    <div class="container-fluid text-start">
      <div class="col-6 text-start">
        <router-link to="/login"
          >Quieres encontrar una farmacia,
          <a style="color: gray">Registrate Aquí</a></router-link
        >
      </div>
      <div class="position-relative">
        <router-link to="/ingreso"
          ><button
            class="
              btn btn-success
              d-grid
              gap-2
              d-md-flex
              justify-content-md-end
            "
            type="submit"
          >
            Empezar ahora
          </button>
        </router-link>
      </div>
    </div>
  </nav>

  <img
    src="../assets/img/logoFondo.svg"
    alt="logogps"
    class="img-fluid max-width:100%; a height: 100%;"
    style="
      overflow-x: hidden;
      overflow-y: hidden;
      background-image: url(/assets/img/logoFondo.svg);
    "
    scroll="no"
  />
</template>

<script>
export default {
  setup() {},
};
</script>
