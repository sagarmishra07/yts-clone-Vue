<template>
  <section>
    <h1>All Movies</h1>
    <div class="container">
      <div v-for="SingleMovie in AllMovies" :key="SingleMovie.id" class="card">
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
    AllMovies() {
      return this.$store.state.movie.Movies;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

h1 {
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 7%;
  font-size: 28px;
  color: rgb(94, 214, 94);
}
</style>
