<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/partials/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  async created() {
    await this.$store.dispatch("movieFetch");
  },
};
</script>
<style>
body {
  color: snow;
  font-family: coral, Arial, Helvetica, "Lucida Grande", sans-serif;
  letter-spacing: 0.09em;

  background-size: 204vh;
  background-color: #201d1d;
  opacity: 0.8;
}
</style>
