import Vue from 'vue'
import Root from './components/Root.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Root)
}).$mount('#root')
