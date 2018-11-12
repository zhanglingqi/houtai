import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/contect/home'
import homePage from '@/views/home/homePage'
import organizaTion from '@/views/organization/organizaTion'
import orGan from '@/views/organization/organ/orGan'
import member from '@/views/member/memBer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: homePage
        },
        {
          path: '/organizaTion',
          name: 'organizaTion',
          component: organizaTion,
           children: [
               {
                 path: '/orGan',
                 name: 'orGan',
                 component: orGan
               }

           ]
        },
        {
          path: '/member',
          name: 'member',
          component: member
        }
      ]
    }
  ]
})
