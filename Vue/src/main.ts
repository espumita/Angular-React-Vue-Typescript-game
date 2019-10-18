import Vue from 'vue'
import Board from './components/Board.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Board)
}).$mount('#root')
