import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import '@/assets/styles/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, /* 原本是router: router，但是基于ES6语法，键值相同时可以直接显示一个就可以了 */
  components: { App }, /* 原本是App: App，但是基于ES6语法，键值相同时可以直接显示一个就可以了 */
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

/* 路由就是根据不同的地址,返回不同的内容给用户 */
