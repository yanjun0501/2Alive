import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login',
      component: () => import('./App.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/login.vue'),
        },
        {
          path: '/media',
          name: 'media',
          component: () => import('./views/media.vue'),
          children: [
            {
              path: '/media/list',
              name: 'mediaList',
              component: () => import('./views/media/list.vue'),
            },
            {
              path: '/media/detail',
              name: 'mediaDetail',
              component: () => import('./views/media/detail.vue'),
            },
          ],
        },
        {
          path: '/live',
          name: 'live',
          component: () => import('./views/live.vue'),
          children: [
            {
              path: '/live/list',
              name: 'liveList',
              component: () => import('./views/live/list.vue'),
            },
            {
              path: '/live/detail',
              name: 'liveDetail',
              component: () => import('./views/live/detail.vue'),
            },
            {
              path: '/live/webrtc',
              name: 'liveWebRTC',
              component: () => import('./views/live/webrtc.vue'),
            },
          ],
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('./views/setting.vue'),
          children: [
            {
              path: '/setting/webrtc',
              name: 'liveWebRtc',
              component: () => import('./views/setting/webrtc.vue'),
            },
            {
              path: '/setting/rtmp',
              name: 'liveRtmp',
              component: () => import('./views/setting/rtmp.vue'),
            },
          ],
        },
      ],
    },
  ],
});
