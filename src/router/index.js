import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import asyncload from './asyncload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    home,
    asyncload,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

