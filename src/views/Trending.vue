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
