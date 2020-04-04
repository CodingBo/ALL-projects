import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/TabTest'
Vue.use(Router)
console.log(Tab)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    }
  ]
})
