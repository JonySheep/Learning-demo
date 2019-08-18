import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
        path: '/param/:index',
        name: 'param',
        component: () => import('./views/Param.vue'),
      },
      {
          path: '/nest',
          component: () => import('./views/Nest.vue'),
          children: [{
              path: 'nest1',
              component: () => import('./views/Nest/Nest1.vue'),
              redirect: 'nest2'
          }, {
              path: 'nest2',
              component: () => import('./views/Nest/Nest2.vue'),
          }, ]
      }
  ]
})
