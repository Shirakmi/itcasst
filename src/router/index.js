import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '@/views/login.vue'

import Home from '@/views/Home.vue'

import Welcome from '@/views/welcome.vue'

import Users from '@/views/users/users.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
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
    }
  ]
})

export default router
