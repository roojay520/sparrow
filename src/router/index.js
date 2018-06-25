import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const constRouterMap = [
  {
    path: '/',
    name: 'layout',
    meta: { auth: false },
    redirect: '/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/Test'),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomePage'),
      },
    ],
  },
];

export default new Router({
  linkActiveClass: 'active',
  routes: [...constRouterMap],
});
