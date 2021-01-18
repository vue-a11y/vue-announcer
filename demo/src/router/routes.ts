import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

export default [
  {
    name: 'home',
    path: '/', 
    component: Home,
    meta: {
      announcer: {
        message: 'Homepage'
      }
    }
  },
  {
    name: 'about',
    path: '/about', 
    component: About 
  },
  {
    name: 'post',
    path: '/post/:id', 
    component: () => import('../pages/Post.vue'),
    meta: {
      announcer: {
        skip: true
      }
    }
  },
  {
    name: 'contact',
    path: '/contact', 
    component: () => import('../pages/Contact.vue'),
    meta: {
      announcer: {
        message: "contact page",
        politeness: "assetive",
        routeComplement: "has fully loaded"
      }
    }
  }
]
