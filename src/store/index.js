import Vue from "vue";
import Vuex from "vuex";
import { MOVIES } from "../utils/MockData/Movies";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Movies: MOVIES,
  },
  getters: {
    Allmovies: (state) => {
      return state.Movies;
    },
    trendingMovies: (state) => {
      return state.Movies.filter((movie) => movie.downloads > 100000);
    },
    quality: (state) => {
      return state.Movies.filter((movie) => movie.quality == "4k");
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
