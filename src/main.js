import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
