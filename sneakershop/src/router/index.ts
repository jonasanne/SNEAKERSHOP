import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  //shoe routes
  {
    alias: "/",
    path: "/home",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "Home" */ "../presentations/shoes/views/Home.vue"
      ),
  },
  {
    path: "/cart",
    name: "cart",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "Home" */ "../presentations/shoes/views/Cart.vue"
      ),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "Home" */ "../presentations/shoes/views/Details.vue"
      ),
  },
  {
    path: "/ar/:id",
    name: "ar",
    component: () =>
      import(
        /* webpackChunkName: "Home" */ "../presentations/shoes/views/Ar.vue"
      ),
  },
  {
    path: "/*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "../presentations/shared/views/NotFound.vue"
      ),
  },
];

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
