import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import '../public/fontSize'
import '../public/timeFormat'

Vue.config.productionTip = false
Vue.use(ElementUI)
window.jQuery = $
window.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
