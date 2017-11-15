import Vue from 'vue'
import { App } from './app'
import router from './router'
import store from './store'
import firebase from './firebase'

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
