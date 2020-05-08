import Vue from 'vue'
import './main.scss';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import request from './network';
global.request = request;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
