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
      beforeEnter (to, from, next) {
        router.app.$announcer.setComplementRoute('has loaded')

        next()
      },
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        announcer: 'Home page'
      }
    },
    {
      beforeEnter (to, from, next) {
        router.app.$announcer.setComplementRoute('has loaded')

        next()
      },
      name: 'about',
      path: '/about',
      component: About,
      meta: {
        announcer: 'About page'
      }
    },
    {
      beforeEnter (to, from, next) {
        router.app.$announcer.setComplementRoute('has fully loaded')

        next()
      },
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
