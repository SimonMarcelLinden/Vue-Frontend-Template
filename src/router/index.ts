import store from '@/store';
import Vue from 'vue'
import i18n from '@/i18n';

import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home.view.vue'
import Login from '@/views/login/login.view.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: i18n.t('modules.dashboard.title.singular') },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: i18n.t('modules.authentication.login.title') },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  console.log( to.meta.title );

  const publicPages = ['/login', '/register', '/blank'];
  const authRequired = !publicPages.includes(to.path);
  const isAuthenticated = store.getters['authentication/isAuthenticated'];

  if (authRequired && !isAuthenticated) {
     return next('/login');
  }

  next();
});

export default router;
