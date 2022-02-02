<template>
  <div class="container">
    <div v-for="moviedetails in SingleMovie" :key="moviedetails.id">
      <div class="left-section">
        <div class="details">
          <h1>{{ moviedetails.title_long }}</h1>
          <img :src="moviedetails.medium_cover_image" alt="No Image" />
        </div>

        <div class="background">
          <img :src="moviedetails.background_image" alt="s" />
        </div>

        <p>Quality:{{ moviedetails.quality }}</p>
      </div>
      <div class="right-section">
        <h2>{{ moviedetails.description_full }}</h2>
        <p>{{ moviedetails.downloads }} downloads</p>
        <p>Rating:{{ moviedetails.rating }}</p>
        <span>Year:{{ moviedetails.year }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleMovie",
  data() {
    return {
      id: this.$route.params.id,
      SingleMovie: [],
    };
  },

  created() {
    this.SingleMovie = this.$store.getters.Allmovies.filter(
      (mov) => mov.id == this.id
    );
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
.container .left-section {
  float: left;
}
.container .right-section {
  float: right;
}
.container .right-section h2 {
  width: 60%;

  padding: -15% 0% 0% 25%;
  text-align: left;
  text-justify: inter-word;
}
.background {
  padding: 15% 0% 0% 10%;
}

img {
  border: 3px solid rgb(94, 214, 94);
}
</style>