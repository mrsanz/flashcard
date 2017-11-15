import { default as Dashboard } from './Dashboard'

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]
