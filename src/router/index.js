import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movies.vue";
import About from "../views/About.vue";
import Trending from "../views/Trending.vue";
import SingleMovie from "../components/containers/SingleMovie.vue";
import Quality from "../views/Quality.vue";
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
    path: "/movies/:id",
    name: "SingleMovie",
    component: SingleMovie,
  },
  {
    path: "/trending",
    name: "Trending",
    component: Trending,
  },
  {
    path: "/4k",
    name: "Quality",
    component: Quality,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
