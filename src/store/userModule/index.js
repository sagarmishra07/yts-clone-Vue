import router from "../../router/index";

import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  state: {
    user: null,
    loggedIn: false,
  },

  mutations: {
    async SET_USER(state, currentUser) {
      if (currentUser) {
        state.user = await currentUser;
      } else {
        state.user = null;
      }
    },
    loggedStatus(state, status) {
      state.loggedIn = status;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async LOGIN({ commit }, details) {
      await signInWithEmailAndPassword(auth, details.email, details.password)
        .then(() => {
          router.replace({
            name: "Dashboard",
          }),
            commit("SET_USER", auth.currentUser);
          commit("loggedStatus", true);
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    async LOGOUT({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      commit("loggedStatus", false);
      router.push("/login");
    },
  },
};
