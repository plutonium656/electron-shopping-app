import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/shared/MainContainer.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
