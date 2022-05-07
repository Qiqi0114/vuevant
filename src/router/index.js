import Vue from 'vue'
import Router from 'vue-router'
import app_index from '@/components/app_index'
import cateList from '@/components/cateList'
import worthBuy from '@/components/worthBuy'
import shopCar from '@/components/shopCar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app_index',
      component: app_index
    },
    {
      path: '/cateList',
      name: 'cateList',
      component: cateList
    },
    {
      path: '/worthBuy',
      name: 'worthBuy',
      component: worthBuy
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
  ]
})
