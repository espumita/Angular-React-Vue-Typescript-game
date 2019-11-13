import Vue from 'vue'
import Root from './components/Root.vue'
import configStore from './store/configStore'

Vue.config.productionTip = false
const store = configStore()

new Vue({
  store,
  render: h => h(Root)
}).$mount('#root')
