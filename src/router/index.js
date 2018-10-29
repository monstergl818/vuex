import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import count2 from '@/components/count2'
import count1 from '@/components/count1'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/count',
        component:count
    },
    {
        path:'/count2',
        component:count2
    },{
        path:'/count1',
        component:count1
    }
  ]
})
