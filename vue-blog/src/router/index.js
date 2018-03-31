import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Login from '@/components/logReg/login'
import Register from '@/components/logReg/register'
import Collection from '@/components/collection/collection'
import Admin from '@/components/Admin/admin'
import Collections from '@/components/Admin/collections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/collection',
      component: Collection
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/admin',
      component: Admin,
      redirect: '/admin/collections',
      children: [
        {
          path: 'collections',
          component: Collections
        }
      ]
    }
  ]
})
