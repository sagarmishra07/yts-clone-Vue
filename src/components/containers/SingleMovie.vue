<template>
  <section>
    <div v-for="moviedetails in SingleMovie" :key="moviedetails.slug">
      <div class="container">
        <div class="left-section">
          <img
            :src="moviedetails.medium_cover_image"
            :alt="moviedetails.title_long"
          />
        </div>
        <div class="center-section">
          <div class="title">
            <h1>{{ moviedetails.title }}</h1>
            <p>{{ moviedetails.year }}</p>
          </div>
          <div
            class="genres"
            v-for="(genres, key) in moviedetails.genres"
            :key="key"
          >
            <h5>
              {{ genres }}
            </h5>
          </div>
          <div class="Quality">
            <span>Available in:</span>
            <div v-for="(torrent, key) in moviedetails.torrents" :key="key">
              <p>{{ torrent.quality }}.WEB Size:{{ torrent.size }}</p>
            </div>
          </div>
        </div>
        <!-- similar movie -->
      </div>
      <div class="description">
        <h1>{{ moviedetails.description_full }}</h1>
      </div>
      <SimilarMovie :id="moviedetails.id" />
    </div>
  </section>
</template>
<script>
import SimilarMovie from "../containers/SimilarMovies.vue";
export default {
  name: "SingleMovie",
  data() {
    return {
      slug: this.$route.params.params,
    };
  },
  components: {
    SimilarMovie,
  },
  computed: {
    SingleMovie() {
      return this.$store.getters.Allmovies.filter(
        (mov) => mov.slug === this.slug
      );
    },
  },
};
</script>
<style scoped>
.container {
  margin: 2% 0% 0% 11%;
  padding: 2% 0% 0% 2%;
  display: flex;

  width: 100%;
}

h2 {
  width: 60%;

  padding: -15% 0% 0% 25%;
  text-align: left;
  text-justify: inter-word;
}

img {
  border: 3px solid rgb(226, 231, 226);
}
img:hover {
  border: 3px solid rgb(94, 214, 94);
}
h5 {
  display: flex;
  flex-direction: row;
}
</style>
