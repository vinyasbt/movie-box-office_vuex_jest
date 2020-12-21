import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue"
import About from "../views/About.vue"
// import AboutEpisode from "../views/AboutEpisode.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:id",
    name: "About",
    component: About
  },
  {
    path: '*',
    name: "PageNotFound",
    component: PageNotFound
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;