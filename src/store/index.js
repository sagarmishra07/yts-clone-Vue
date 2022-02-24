import Vue from "vue";
import Vuex from "vuex";
import movie from "./movieModule";
import user from "./userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user,
    movie: movie,
  },
});
