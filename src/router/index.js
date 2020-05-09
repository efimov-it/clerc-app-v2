import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import mainPage from '../views/main';
import dealView from '../views/dealView';

  const routes = [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/deal/:id',
      name: 'dealView',
      component: dealView
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
