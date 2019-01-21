import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import auth from '@/components/Auth'
import zhousheng from '@/components/zhousheng'
Vue.use(Router)
console.log(456)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/auth',
      name: 'Auth',
      component: auth
    },
    {
      path: '/zhousheng',
      name: 'zhousheng',
      component: zhousheng
    }
  ]
})
