import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
import myMixin from '@/mixin/vueMixin'
import allmethod from '@/utils/allmethod'

Vue.use(myMixin);//全局混入
Vue.use(allmethod);//将全局函数当做插件来进行注册

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
