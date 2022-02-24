import router from "../../router/index";

import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default {
  state: {
    user: [],
  },

  mutations: {
    async SET_USER(state, currentUser) {
      if (currentUser) {
        state.user = await currentUser;
      } else {
        state.user = [];
      }
    },

    CLEAR_USER(state) {
      state.user = [];
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
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    AUTH_STATE({ commit }) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("SET_USER", user);
        } else {
          commit("CLEAR_USER", user);
        }
      });
    },

    async LOGOUT({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");

      router.push("/login");
    },
  },
};
