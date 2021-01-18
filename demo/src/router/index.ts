import * as VueRouter from 'vue-router'
import routes from './routes'

export const router =  VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router