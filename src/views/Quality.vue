<template>
  <section>
    <h1>4k Movies</h1>
    <div class="container">
      <div
        v-for="SingleMovie in All4kMovies"
        :key="SingleMovie.id"
        class="card"
      >
        <Movie :SingleMovie="SingleMovie" />
      </div>
    </div>
  </section>
</template>
<script>
import Movie from "../components/common/Movie.vue";
export default {
  name: "Quality",
  components: {
    Movie,
  },
  computed: {
    All4kMovies() {
      return this.$store.getters.quality;
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
.card-item {
  display: flex;
  border-radius: none;
  flex-direction: column;

  margin: 20px;
  height: auto;
  padding: 0;
}
.card-item img {
  border: 5px solid white;
}
.card-item h1 {
  font-size: 18px;
}
.card-item h2 {
  font-size: 13px;
}
</style>