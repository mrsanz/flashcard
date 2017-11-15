import Vue from 'vue'
import Router from 'vue-router'
import firebase from '../firebase'
import { routes } from '../app'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next({ path: '/login' })
  } else if (!requiresAuth && currentUser) {
    next({ path: '/dashboard' })
  }
  next()
})

export default router
