import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 不在这里引用
// require('./assets/css/base.css')

// 独立组件分page放views
// 公共组件放components
