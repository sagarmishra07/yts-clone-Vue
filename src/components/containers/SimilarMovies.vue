<template>
  <section>
    <h1>Similar Movies</h1>
    <div v-for="(singlemovie, key) in SimilarMovies" :key="key">
      <Movie :SingleMovie="singlemovie" />
    </div>
  </section>
</template>
<script>
import Movie from "../common/Movie.vue";
export default {
  name: "SimilarMovies",
  props: {
    id: {
      type: Number,
    },
    components: {
      Movie,
    },
  },
  created() {
    this.$store.dispatch("fetchSimilarMovies", this.id);
  },
  computed: {
    SimilarMovies() {
      return this.$store.getters.similarMovies;
    },
  },
};
</script>
<style></style>
