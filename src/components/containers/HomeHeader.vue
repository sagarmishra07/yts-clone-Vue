<template>
  <div class="container">
    <h1>Download YTS YIFY Movies:HD smallest size</h1>
    <p>Welcome to the official YTS.MX (.LT) website.</p>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8% 0% 0% 0%;
  font-size: 20px;
}

p {
  position: absolute;
  padding: 6% 0% 0% 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  font-size: 17px;
  text-align: center;
  text-justify: inter-word;
}
h1 {
  font-size: 35px;
  color: rgb(94, 214, 94);
}

@media only screen and (min-width: 800px) {
  h1 {
    font-size: 25px;
    justify-content: center;
    align-items: center;
  }
}
</style>

