import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '@/views/login.vue'

import Home from '@/views/Home.vue'

<<<<<<< HEAD
import Welcome from '@/views/welcome.vue'

import Users from '@/views/users/users.vue'

=======
>>>>>>> d47c9d17bf34076c250316392e880de4b190a7b0
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
<<<<<<< HEAD
      redirect: {
        name: 'login'
      }
=======
      redirect: { name: 'login' }
>>>>>>> d47c9d17bf34076c250316392e880de4b190a7b0
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
<<<<<<< HEAD
      component: Home,
      redirect: {
        name: 'welcome'
      },
      children: [
        {
          name: 'welcome',
          path: 'welcome',
          component: Welcome
        },
        {
          name: 'users',
          path: 'users',
          component: Users
        }
      ]
=======
      component: Home
>>>>>>> d47c9d17bf34076c250316392e880de4b190a7b0
    }
  ]
})

export default router
