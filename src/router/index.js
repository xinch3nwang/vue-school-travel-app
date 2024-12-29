import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/destination/:id/:slug', name: 'destinationshow', component: ()=>import('@/views/DestinationShow.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: 'vue-school-active-link',  // 别名
})

export default router