import vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import DetailProduk from './views/DetailProduk.vue';
import LandingPage from './views/LandingPage.vue';

vue.use(VueRouter);

const routes = [
  {
    path: '/Register',
    name: 'register',
    component: Register,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/DetailProduk/:id',
    name: 'DetailProduk',
    component: DetailProduk,
    props: true,
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
