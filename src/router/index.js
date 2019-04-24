import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageLayout from "@/layouts/PageLayout";
import BasicForm from "@/pages/form/BasicForm";
import stepForm from "@/pages/form/stepForm";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/form',
      name: 'form',
      component: PageLayout,
      children: [
        {
          path: '/form/basicForm',
          name: 'basicForm',
          component: BasicForm
        }, {
          path: '/form/stepForm',
          name: 'stepForm',
          component: stepForm
        }
      ]
    }
  ]
})
