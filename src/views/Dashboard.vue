<template>
  <main>
    <h1>

    Welcome to Dashboard

    {{$store.state.user}}
    </h1>
    </main>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
main {
 padding: 10rem 0rem 0rem 35rem;
}
</style>
