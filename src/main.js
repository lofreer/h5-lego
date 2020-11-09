import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.prototype.$editor = true

Vue.use(ElementUI, {
  size: 'small'
})

const eventBus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue()
  }
}
Vue.use(eventBus)

new Vue({
  render: h => h(App)
}).$mount('#app')
