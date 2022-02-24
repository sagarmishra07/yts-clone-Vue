import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  async created() {
    await this.$store.dispatch("movieFetch");
    this.$store.dispatch("AUTH_STATE");
  },
  render: (h) => h(App),
}).$mount("#app");
