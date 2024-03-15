import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  ABOUTUS = 'AboutUs',
  HOME = 'Home',
  PROGRAMS = 'Program'
}

export const routes = [
  {
    path: '/About',
    name: RouteName.ABOUTUS,
    component: () => import('../pages/about-us-page.vue')
  }, 
  {
    path: '/Program',
    name: RouteName.PROGRAMS,
    component: () => import('../pages/programs-page.vue')
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
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    },
  });

  export default router;