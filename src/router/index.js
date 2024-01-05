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
import OurStuedntProjectViewVue from '@/views/OurStudentProjectView.vue'
import RenewPasswordViewVue from '@/views/RenewPasswordView.vue'
import CreateAccountViewVue from '@/views/CreateAccountView.vue'
import ResetPasswordViewVue from '@/views/ResetPasswordView.vue'
// import DashboardHomeViewVue from '@/views/DashboardHomeView.vue'
import ExamHistoryViewVue from '@/views/ExamHistoryView.vue'
import CreateExamViewVue from '@/views/CreateExamView.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/renew-pass',
    name: 'renew-pass',
    component: RenewPasswordViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/create-acccount',
    name: 'create-acccount',
    component: CreateAccountViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordViewVue,
    meta: {
      requiresAuth: false
    },
    props: true,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/student-projects',
    name: 'student-projects',
    component: OurStuedntProjectViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/all-mondai',
    name: 'all-mondai',
    component: AllQuestionsViewVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'user-profile',
    component: UserProfileViewVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-exam',
    name: 'create-exam',
    component: CreateExamViewVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/exam-result/:examId',
    name: 'exam-result-by-id',
    component: ExamResultDetailsViewVue,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/web-pamphlet',
    name: 'web-pamphlet',
    component: PamphletViewVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/all-years-schedule',
    name: 'all-years-schedule',
    component: AllYearsScheduleViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/selected-years-schedule/:year/:grade',
    name: 'selected-years-schedule',
    component: ScheduleViewVue,
    props: true,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/all-mondai/questions/:specific',
    name: 'questions',
    component: QuestionsViewVue,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/all-mondai/questions/:specific/:chapter',
    name: 'questions-chapter',
    component: QuestionChaperViewVue,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/exam/history',
    name: 'user-exam-history',
    component: ExamHistoryViewVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: 'not-found',
    component: ErrorPage,
    meta: {
      requiresAuth: false
    }
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
    if (routes[routeNameCheck].meta.requiresAuth && store.getters.acquireUserID == null) {
      next({ name: 'home', replace: true })
    } else {
      next()
    }
  } else {
    next({ name: 'not-found', replace: true })
  }
  store.state.alertMsg.status = null
  store.state.alertMsg.message = null
  store.state.alertMsg.time = null
  store.state.alertMsg.extraMsg = null
})

export default router
