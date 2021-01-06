import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  //shoe routes
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "Home" */ '../presentations/shoes/views/Home.vue'),
	}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
