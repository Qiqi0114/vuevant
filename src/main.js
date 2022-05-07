// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button,Col, Row,Search, Tab, Tabs,
   Swipe, SwipeItem,Grid, GridItem,Icon,Tabbar, TabbarItem,
   Sticky,Sidebar, SidebarItem,NavBar,TreeSelect,Card ,ShareSheet,
   Form,Field    } from 'vant';

   Vue.prototype.$axios = axios;
Vue.use(Button).use(Col).use(Row).use(Search).use(Tab)
.use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem)
.use(Tabbar).use(TabbarItem).use(Sticky).use(Sidebar).use(SidebarItem)
.use(NavBar).use(TreeSelect).use(Card).use(ShareSheet).use(Form).use(Field).use(Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
