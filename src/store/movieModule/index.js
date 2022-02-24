import axios from "axios";
export default {
  state: {
    Movies: [],
    TrendingMovies: [],
  },

  mutations: {
    async movieFetch(state, payload) {
      state.Movies = await payload;
    },
    async trendingMovies(state, payload) {
      state.TrendingMovies = await payload.filter(
        (movie) => movie.rating > 7.1
      );
    },
  },
  actions: {
    async movieFetch(context) {
      try {
        const res = await axios.get("https://yts.mx/api/v2/list_movies.json");

        context.commit("movieFetch", res?.data?.data?.movies ?? "Empty fetch");
        context.commit(
          "trendingMovies",
          res?.data?.data?.movies ?? "Empty fetch"
        );
      } catch (error) {
        console.log("Error in ", error ?? "could not get data");
      }
    },
  },
};
