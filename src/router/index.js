import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import About from '@/components/about'
import Contact from '@/components/contact'
import QuizTop from '@/components/quizTop'
import QuizJoushiki01 from '@/components/quizjoushiki01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/quiz',
      name: 'QuizTop',
      component: QuizTop
    },
    {
      path: '/quizjoushiki01',
      name: 'QuizJoushiki01',
      component: QuizJoushiki01
    },
  ]
})
