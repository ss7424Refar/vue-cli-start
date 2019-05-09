import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
// import BootstrapVueModal from '@/components/bootstrapVueModal'

Vue.use(Router)

export default new Router({
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
    }
    // {
    //   path: '/Modal',
    //   name: 'Modal',
    //   component: BootstrapVueModal
    // }
  ]
})
