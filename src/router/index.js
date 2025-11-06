import { createRouter, createWebHistory } from 'vue-router'
import RecordTrashbinData from '@/View/RecordTrashbinData.vue'
import Login from '@/View/Login.vue'
import Register from '@/View/Register.vue'
import AccountSettings from '@/View/AccountSettings.vue'
import ViewData from '@/View/ViewData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/recordTrashbinData',
      name: 'RecordTrashbin',
      component: RecordTrashbinData,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountSettings,
    },
    {
      path: '/viewData',
      name: 'viewData',
      component: ViewData,
    },
  ],
})

export default router
