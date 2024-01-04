import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'pageMain',
          meta: { isAuth: true, name: 'Страница юзера' },
          component: MainPage,
          children: []
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  console.log(to, from)
})

export default router
