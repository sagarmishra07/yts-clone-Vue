import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movies.vue";

import Trending from "../views/Trending.vue";
import SingleMovie from "../components/containers/SingleMovie.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movie,
  },
  {
    path: "/movies/:params",
    name: "SingleMovie",
    component: SingleMovie,
  },
  {
    path: "/trending",
    name: "Trending",
    component: Trending,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
