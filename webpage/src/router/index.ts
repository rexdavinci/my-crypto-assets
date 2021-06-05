import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Exchanges from '../views/Exchanges.vue';
import Orders from '../views/Orders.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exchanges',
    name: 'Exchanges',
    component: Exchanges,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
