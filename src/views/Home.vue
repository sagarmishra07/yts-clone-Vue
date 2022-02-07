<template>
  <div>
    <HomeHeader />
    <Trending />
  </div>
</template>

<script>
import HomeHeader from "../components/containers/HomeHeader.vue";

import Trending from "./Trending.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Trending,
  },
};
</script>

<style>
</style>