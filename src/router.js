import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/:id",
      name: "detalle",
      component: () => import(/* webpackChunkName: "detalle" */ "./views/DetalleCentro.vue"),
      props: true
    }
  ]
});
