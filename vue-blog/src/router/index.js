import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/logReg/login'
import Register from '@/components/logReg/register'
import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
