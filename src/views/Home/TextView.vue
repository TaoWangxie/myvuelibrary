<template>
  <div class="TextView">
      <div>
      <span>{{date}}</span><el-button type="primary" @click="getTime" >当前时间</el-button>
      </div>
      <div>
      <span>{{msg}}</span><el-button type="primary" @click="show" >混入</el-button>
      </div>
      <div>
      <el-button type="primary" @click="vuwShow" >全局混入</el-button>
      </div>
      <div>
      <el-button type="primary" @click="all" >全局方法</el-button>
      </div>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/utils'
import { Mixins } from '@/mixin/mixins'

export default {
  name: 'TextView',
  mixins: [Mixins],
  components: {

  },
  data() {
    return {
        date:''
    };
  },
  created() {
      console.log('组件自身的钩子函数');
    },
  methods: {
    getTime(){
        this.date = dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
    },
    all(){
        this.$back() //全局方法
    }
  }
}
</script>
<style lang="scss" scoped>
  .TextView{
    width: 100%;
    height: 100%;
  }
 
</style>