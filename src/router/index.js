import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import mainPage from '../views/main';

  const routes = [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
