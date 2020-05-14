import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import mainPage from '../views/main';
import dealView from '../views/dealView';
import objectView from '../views/objectView';
import usersList from '../views/usersList';

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
    },
    {
      path: '/objects/:id',
      name: 'objectView',
      component: objectView
    },
    {
      path: '/users/',
      name: 'usersList',
      component: usersList
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
