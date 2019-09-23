import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Component from '@/components/component'
import Syncparent from '@/components/sync/parent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sync',
      name: 'Syncparent',
      component: Syncparent
    },
    {
      path: '/com',
      name: 'Component',
      component: Component
    }
  ]
})
