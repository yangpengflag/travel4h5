import Vue from 'vue'
import Router from 'vue-router'
import fastClick from 'fastclick'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)
// 部分手机或机型会存在click事件300ms延迟问题，解决办法是引入fastclick
// 在项目目录下执行：npm install fastclick --save ，在开发和线上环境都可以使用
fastClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
