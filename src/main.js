import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
import myMixin from '@/mixin/vueMixin'
import allmethod from '@/utils/allmethod'
import '@/assets/style/style.css'

Vue.use(myMixin);//全局混入
Vue.use(allmethod);//将全局函数当做插件来进行注册

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{
  //需求登录判断
  if(to.meta.auth){
      //未登录
      var isLogin = localStorage.getItem('token');
      if(isLogin){
          next();
      }else{
        next('/Login');
      }
  }else{
    next();
  }
})
