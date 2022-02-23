import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    Movies: [],
    user: [],
    loggedIn: false,
  },
  getters: {
    Allmovies: (state) => {
      return state.Movies;
    },
    trendingMovies: (state) => {
      return state.Movies.filter((movie) => movie.rating > 7.1);
    },
  },
  mutations: {
    async movieFetch(state, payload) {
      state.Movies = await payload;
    },
    async SET_USER(state, currentUser) {
      if (currentUser) {
        state.user = await currentUser;
      } else {
        alert("no user");
      }
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
    async LOGIN({ commit }, details) {
      try {
        await signInWithEmailAndPassword(auth, details.email, details.password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong Password");
            break;
          case "auth/invalid-email":
            alert("Invalid Email Format");
            break;

          default:
            alert("Something Went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/dashboard");
    },
    async LOGOUT() {},
  },
});
