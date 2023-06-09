import AllQuestionsViewVue from '@/views/AllQuestionsView.vue'
import ContactUsViewVue from '@/views/ContactUsView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import UserProfileViewVue from '@/views/UserProfileView.vue'
import PamphletViewVue from '@/views/PamphletView.vue'
import QuestionsViewVue from '@/views/QuestionsView.vue'
import QuestionChaperViewVue from '@/views/QuestionChaperView.vue'
import ErrorPage from '@/views/404.vue'
import AllYearsScheduleViewVue from '@/views/AllYearsScheduleView.vue'
import ScheduleViewVue from '@/views/ScheduleView.vue'
import ExamResultDetailsViewVue from '@/views/ExamResultDetailsView.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
    loginFlg: false
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsViewVue,
    loginFlg: false
  },
  {
    path: '/all-mondai',
    name: 'all-mondai',
    component: AllQuestionsViewVue,
    loginFlg: true
  },
  {
    path: '/profile',
    name: 'user-profile',
    component: UserProfileViewVue,
    loginFlg: true
  },
  {
    path: '/exam-result/:examId',
    name: 'exam-result-by-id',
    component: ExamResultDetailsViewVue,
    props: true,
    loginFlg: true
  },
  {
    path: '/web-pamphlet',
    name: 'web-pamphlet',
    component: PamphletViewVue,
    loginFlg: true
  },
  {
    path: '/all-years-schedule',
    name: 'all-years-schedule',
    component: AllYearsScheduleViewVue,
    loginFlg: false
  },
  {
    path: '/selected-years-schedule',
    name: 'selected-years-schedule',
    component: ScheduleViewVue,
    loginFlg: false
  },
  {
    path: '/all-mondai/questions/:specific',
    name: 'questions',
    component: QuestionsViewVue,
    props: true,
    loginFlg: true
  },
  {
    path: '/all-mondai/questions/:specific/:chapter',
    name: 'questions-chapter',
    component: QuestionChaperViewVue,
    props: true,
    loginFlg: true
  },
  {
    path: '/404',
    name: 'not-found',
    component: ErrorPage,
    loginFlg: false
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash, top: 120 }
  }

  return savedPosition || { top: 0, left: 0 }
}

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  const routeNameCheck = routes.findIndex((route) => to.name == route.name)
  if (routeNameCheck != -1) {
    if (routes[routeNameCheck].loginFlg && store.getters.acquireUserID == null) {
      next({ name: 'home', replace: true })
    } else {
      next()
    }
  } else {
    next({ name: 'not-found', replace: true })
  }
})

export default router
