<template>
  <nav>
    <div class="logo">
      <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="" />
    </div>
    <div v-for="(nav, key) in NavItems" :key="key">
      <li @click="routeChange(nav.routeName)">{{ nav.label }}</li>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      NavItems: [
        {
          routeName: "/",
          label: "Home",
        },

        {
          routeName: "/movies",
          label: "Browse Movies",
        },
        {
          routeName: "/trending",
          label: "Trending",
        },

        {
          routeName: "/login",
          label: "Login",
        },
        {
          routeName: "/register",
          label: "Register",
        },
      ],
    };
  },
  computed: {
    getCurrentRoutes() {
      return this.$route.path;
    },
  },

  methods: {
    routeChange(routeName) {
      if (routeName === this.getCurrentRoutes) return;
      this.$router.push(routeName);
    },
  },
};
</script>
<style scoped>
nav {
  color: snow;
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  width: 100%;
  height: 8vh;
  margin: 0px;
  padding: 0px;
  background: #272626;
  position: fixed;
  top: 0;
  z-index: 6;
}
li {
  display: flex;
  list-style-type: none;
  color: snow;
  font-size: 1rem;
  cursor: pointer;
}
li:hover {
  color: rgb(94, 214, 94);
}

li:active {
  color: teal;
}

.logo {
  padding-left: 3%;
}
</style>
>
