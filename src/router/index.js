import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/integrations",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Integrations.vue")
  },
  {
    path: "/forms",
    component: () => import("../views/Forms.vue")
  },
  {
    path: "/settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/support",
    component: () => import("../views/Support.vue")
  },
  {
    path: "/my-account",
    component: () => import("../views/Account.vue")
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({ path: "/login" });
    } else { next(); }
  } else { next(); }
})

export default router;
