import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import AnimeDetails from "../views/AnimeDetails.vue";
import AnimeWatching from "../views/AnimeWatching.vue";
import BlogDetails from "../views/BlogDetails.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/categories",
    component: Categories,
  },
  {
    path: "/anime-details",
    component: AnimeDetails,
  },
  {
    path: "/anime-watching",
    component: AnimeWatching,
  },
  {
    path: "/blog-detals",
    component: BlogDetails,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/blog",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
