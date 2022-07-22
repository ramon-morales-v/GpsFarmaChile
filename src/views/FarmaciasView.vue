<template>
  <div class="farmacias">

    <TodasFarmacias />
  </div>
</template>

<script>
import TodasFarmacias from "@/components/TodasFarmacias.vue";

export default {
  name: "FarmaciasView",
  components: {
    TodasFarmacias,
  },
};
</script>