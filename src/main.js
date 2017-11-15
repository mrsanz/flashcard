import Vue from 'vue'
import { App } from './app'
import router from './router'
import store from './store'
import fire from './fire'

Vue.config.productionTip = false

Vue.prototype.$fire = fire

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
