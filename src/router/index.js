import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/services/:service',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    props: true
  },
  {
    path: '/news-events',
    name: 'NewsEvents',
    component: () => import('../views/NewsEvents.vue')
  },
  {
    path: '/careers/:career',
    name: 'Careers',
    component: () => import('../views/Careers.vue'),
    props: true,
  },
  {
    path: '/careers/:career/apply',
    name: 'ApplyJob',
    component: () => import('../views/ApplyJob.vue'),
    props: true,
  },
  {
    path: '/news-events/:event',
    name: 'EventDetail',
    component: () => import('../views/EventDetail.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/secret-portal',
    name: 'SecretPortal',
    component: () => import('../views/SecretPortal.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import('../views/Publications.vue')
  },
  {
    path: '/terms-of-use',
    name: 'TermsOfUse',
    component: () => import('../views/TermsOfUse.vue')
  },
  {
    path: '/phoo-portal',
    name: 'PhooPortal',
    component: () => import('../views/PhooPortal.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404Page.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  }
})

export default router
