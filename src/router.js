import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Subtitle from "./views/Subtitle.vue";
import Email from "./views/Email.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/name",
      name: "name",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "name" */ "./views/Name.vue")
    },
    {
      path: "/subtitle",
      name: "subtitle",
      component: Subtitle
    },
    {
      path: "/email",
      name: "email",
      component: Email
    }
  ]
});
