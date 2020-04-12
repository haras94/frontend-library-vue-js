import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import DetailProduk from '../views/DetailProduk.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/DetailProduk',
    name: 'DetailProduk',
    component: DetailProduk,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
