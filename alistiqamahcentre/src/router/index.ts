import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  ABOUTUS = 'AboutUs',
  HOME = 'Home'
}

export const routes = [
  {
    path: '/About',
    name: RouteName.ABOUTUS,
    component: () => import('../pages/about-us-page.vue')
  },
    {
        path: '/',
        name: RouteName.HOME,
        component: () => import('../pages/home-page.vue')
    }
]; 

const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  });

  export default router;