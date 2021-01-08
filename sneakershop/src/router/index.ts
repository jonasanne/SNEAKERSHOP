import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  //shoe routes
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "Home" */ '../presentations/shoes/views/Home.vue'),
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import(/* webpackChunkName: "Home" */ '../presentations/shoes/views/Cart.vue'),
	},
	{
		path: '/detail:id',
		name: 'detail',
		component: () => import(/* webpackChunkName: "Home" */ '../presentations/shoes/views/Details.vue'),
	},

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
