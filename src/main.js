import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import 'bootstrap'
import HelloWorld from "./views/HelloWorld";
import Carousel from './views/Carousel'
import Form from "./views/Form";

Vue.config.productionTip = false

const routes = [
  {path: '/', component: HelloWorld},
  {path: '/carousel', component: Carousel},
  {path: '/form', component: Form}
]

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
