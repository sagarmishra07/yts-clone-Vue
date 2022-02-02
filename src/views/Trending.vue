<template>
  <section>
    <h1>Trending Movies</h1>
    <div class="container">
      <div v-for="SingleMovie in MovieList" :key="SingleMovie.id" class="card">
        <Movie :SingleMovie="SingleMovie" />
      </div>
    </div>
  </section>
</template>
<script>
import Movie from "../components/common/Movie.vue";
export default {
  name: "Trending",
  components: {
    Movie,
  },

  computed: {
    MovieList() {
      return this.$store.getters.trendingMovies;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  padding: 3rem 0rem 0rem 3rem;
}
h1 {
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 5%;
  color: rgb(94, 214, 94);
  font-size: 28px;
}
</style>