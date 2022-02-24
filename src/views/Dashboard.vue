<template>
  <main>
    <h1>Email:{{ userData.email }} UID:{{ userData.uid }}</h1>
    <button @click="signOut()">Logout</button>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    userData() {
      return this.$store.state.user.user;
    },
  },
 
  methods: {
    signOut() {
      this.$store.dispatch("LOGOUT");
    },
  },
 
};
</script>

<style scoped>
main {
  padding: 10rem 0rem 0rem 35rem;
}
</style>
