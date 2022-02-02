<template>
  <div>
    <HomeHeader />
    <Trending />
    <Quality />
  </div>
</template>

<script>
import HomeHeader from "../components/containers/HomeHeader.vue";
import Quality from "../views/Quality.vue";
import Trending from "./Trending.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Trending,
    Quality,
  },
};
</script>
<style>
</style>