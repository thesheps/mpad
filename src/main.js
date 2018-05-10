import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'

import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
