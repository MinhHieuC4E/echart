import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/echart",
  },
  {
    path: "/echart",
    name: 'Test EChart',
    component: () => import(`@/pages/EChart.vue`),
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
