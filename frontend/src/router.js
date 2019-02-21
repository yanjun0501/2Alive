import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./App.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/home.vue'),
          children: [
            {
              path: '/home/edu',
              name: 'edu',
              component: () => import('./views/class/edu.vue'),
            },
            {
              path: '/home/acg',
              name: 'live',
              component: () => import('./views/class/acg.vue'),
            },
            {
              path: '/home/other',
              name: 'media',
              component: () => import('./views/class/media.vue'),
            },
          ],
        },
        {
          path: '/live',
          name: 'live',
          component: () => import('./views/live.vue'),
          children: [
            {
              path: '/live/edu',
              name: 'edu',
              component: () => import('./views/class/edu.vue'),
            },
            {
              path: '/live/acg',
              name: 'live',
              component: () => import('./views/class/acg.vue'),
            },
            {
              path: '/live/other',
              name: 'media',
              component: () => import('./views/class/media.vue'),
            },
          ],
        },
      ],
    },
  ],
});
