import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Router from 'vue-router'
import DefaultPage from '@/components/DefaultPage'
import Operations from '@/components/Operations'
import RegisterItem from '@/components/Register'
import LoginItem from '@/components/Login'

Vue.use(Router)
Vue.use(Buefy,
  {
    defaultIconPack: 'fas'
  })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage
    },
    {
      path: '/Operations',
      name: 'Operations',
      component: Operations
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterItem
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginItem
    }
  ]
})
