import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/movies/:params",
    name: "SingleMovie",
    component: () => import("../components/containers/SingleMovie.vue"),
  },
  {
    path: "/trending",
    name: "Trending",
    component: () => import("../views/Trending.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "*",
    name: "ErrorPage",
    component: () => import("../components/partials/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
