<template>
  <div class="comp-echarts-pie">
    <div class ="comp-echarts-pie-box" ref="compEchartsPie"></div>
  </div>
</template>
<script>
  export default {
    name: 'compEchartsPie',
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
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 5, name: 'a'},
                        {value: 5, name: 'b'},
                    ]
                }
            ]
          }
        }
      }
    },
    data(){
      return {
        pie: null
      }
    },
    mounted(){
      this.compEchartsPie()
    },
    watch: {
      refreshSwitch(){
        this.compEchartsPie()
      },
    //   option: {
    //     deep: true,
    //     handler: function(){
    //       this.compEchartsPie()
    //     }
    //   }
    },
    methods: {
      compEchartsPie(){
        this.pie = this.$echarts.init(this.$refs.compEchartsPie)
        this.pie.setOption(this.option)
        window.addEventListener("resize",() =>{
          this.pie.resize()
        })
      },
    },
    beforeDestroy() {
      this.pie.dispose()
    }
  }
  
</script>
<style lang = "less">
  .comp-echarts-pie{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .comp-echarts-pie-box{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>

