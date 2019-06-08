import Vue from 'vue'
import Router from 'vue-router'
import Page from './components/Page'
import Present from './components/Present'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/r/:roomId/:timeId',
      name: 'Present',
      component: Present
    },
    {
      path: '/p/:roomId',
      name: 'Page',
      component: Page
    }
  ]
})
