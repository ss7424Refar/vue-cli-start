import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Modal from '@/components/Modal'
import Toasts from '@/components/Toasts'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/Toasts',
      name: 'Toasts',
      component: Toasts
    },
    {
      path: '/Grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
