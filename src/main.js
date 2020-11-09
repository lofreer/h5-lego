import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import plugin from './plugin'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.prototype.$moment = moment

Vue.use(plugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
