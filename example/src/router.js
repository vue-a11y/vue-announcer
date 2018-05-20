import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        announcer: 'Home page'
      }
    },
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: {
        announcer: 'About page'
      }
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact,
      meta: {
        announcer: 'Contact page'
      }
    }
  ]
})

export default router
