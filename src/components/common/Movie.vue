<template>
  <div class="card-item">
    <router-link :to="`/movies/${SingleMovie.id}`">
      <img
        :src="SingleMovie.medium_cover_image"
        :alt="SingleMovie.title_long"
      />
    </router-link>
    <h1>{{ SingleMovie.title_long }}</h1>
  </div>
</template>
<script>
export default {
  name: "Movie",
  props: {
    SingleMovie: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.card-item {
  display: flex;

  flex-direction: column;

  margin: 20px;
  width: 50%;
  padding: 0;
}
img {
  border: 3px solid white;
}
img:hover {
  border: 3px solid rgb(94, 214, 94);
  transform: scale(0.95);
  transition: ease-out 1s;
}
h1 {
  font-size: 16px;
}
</style>