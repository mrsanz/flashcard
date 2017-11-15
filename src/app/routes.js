import { routes as Dashboard } from './dashboard'
import { routes as Landing } from './landing'
import { routes as FireWords } from './fire-words'
import { routes as SignUp } from './sign-up'
import { routes as Login } from './login'

export default [
  ...Dashboard,
  ...Landing,
  ...Login,
  ...FireWords,
  ...SignUp
]
