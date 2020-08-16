<template>
  <div class="comp-echarts-line">
    <div class ="comp-echarts-line-box" ref="compEchartsLine"></div>
  </div>
</template>
<script>
  export default {
    name: 'CompEchartsLine',
    props: {
      //刷新的开关
      refreshSwitch: {
        type: Boolean,
      },
      legend: {
        type: Object,
        default(){
          return {

          }
        }
      },
      option: {
        type: Object,
        default() {
          return {
             xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
          }
        }
      }
    },
    data(){
      return {
        line: null
      }
    },
    mounted(){
      this.initRingLine()
    },
    watch: {
      refreshSwitch(){
        this.initRingLine()
      },
      // option: {
      //   deep: true,
      //   handler: function(){
      //     this.initRingLine()
      //   }
      // }
    },
    methods: {
      initRingLine(){
        this.line = this.$echarts.init(this.$refs.compEchartsLine)
        this.line.setOption(this.option)
        window.addEventListener("resize",() =>{
          this.line.resize()
        })
      },
    },
    beforeDestroy() {
      this.line.dispose()
    }
  }
  
</script>
<style lang = "less">
  .comp-echarts-line{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .comp-echarts-line-box{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>

