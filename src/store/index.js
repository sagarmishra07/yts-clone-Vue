import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Movies: [],
    SimilarMovies: [],
  },
  getters: {
    Allmovies: (state) => {
      return state.Movies;
    },
    trendingMovies: (state) => {
      return state.Movies.filter((movie) => movie.rating > 7.1);
    },
    similarMovies: (state) => {
      return state.SimilarMovies;
    },
  },
  mutations: {
    async movieFetch(state, payload) {
      state.Movies = await payload;
    },
    async similarMovies(state, payload) {
      state.SimilarMovies = await payload;
    },
  },
  actions: {
    async movieFetch(context) {
      try {
        const res = await axios.get("https://yts.mx/api/v2/list_movies.json");

        context.commit("movieFetch", res?.data?.data?.movies ?? "Empty fetch");
      } catch (error) {
        console.log("Error in ", error ?? "could not get data");
      }
    },
    async fetchSimilarMovies(context, movieId) {
      try {
        const res = await axios.get(
          `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`
        );
        context.commit("similarMovies", res?.data?.data?.movies ?? []);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  modules: {},
});
