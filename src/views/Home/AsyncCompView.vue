<template>
  <div class="AsyncCompView">
      <el-button type="primary" @click="show=true">异步组件</el-button>
      <div class="AsyncCompBox" v-if="show">
          <CompLater></CompLater>
      </div>
  </div>
</template>

<script>
// import CompLater from '@/components/CompLater'
// import CompLoading from '@/components/CompLoading'
// const CompLoading = () => import("@/components/CompLoading")
// const CompLater = () => ({ 
//   component: import('@/components/CompLater'), 
//   loading: CompLoading, 
//   delay: 500 
// })
export default {
  name: 'AsyncCompView',
  components: {
    CompLater(resolve) {
      require(["@/components/CompLater"], resolve);
    },
  },
 
  data() {
    return {
      show:false
    };
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .AsyncCompView{
    width: 100%;
    height: 100%;
    .AsyncCompBox{
        width: 50%;
        height: 400px;
        line-height: 400px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        border: 1px solid #ccc;
    }
  }
 
</style>