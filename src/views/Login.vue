<template>
  <main>
    <div>KTM Bees</div>
    <header>Login From Here</header>

    <header>
      <form @submit.prevent="userLogin()">
        <input type="text" placeholder="Email" v-model="user.email" />
        <input type="password" placeholder="Password" v-model="user.password" />
        <button>Submit</button>
      </form>
    </header>
  </main>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      await this.$store.dispatch("LOGIN", this.user);
    },
  },
};
</script>

<style scoped>
main {
  padding: 20rem;
}
</style>
