import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import RedPocket from "../views/Animation/RedPocket.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/redPocket",
    name: "RedPocket",
    component: RedPocket
  },
  //keepAlive动态缓存
  //
  {
    path: "/page/a",
    name: "A",
    component: () => import("../views/KeepAlive/PageA.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/page/b",
    name: "B",
    component: () => import("../views/KeepAlive/PageB.vue"),
    meta: {
      KeepAlive: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});

export default router;
