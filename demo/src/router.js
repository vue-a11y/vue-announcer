import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import Login from '@/pages/Login'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        announcer: {
          complementRoute: 'has loaded'
        }
      }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'post',
      path: '/posts/:id',
      component: Post,
      meta: {
        announcer: {
          skip: true
        }
      }
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact,
      meta: {
        announcer: {
          message: 'contact page',
          politeness: 'assetive',
          complementRoute: 'has fully loaded'
        }
      }
    }
  ]
})

export default router
