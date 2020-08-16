<template>
  <div class="comp-echarts-bar">
    <div class ="comp-echarts-bar-box" ref="compEchartsBar"></div>
  </div>
</template>
<script>
  export default {
    name: 'CompEchartsBar',
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
            title : {
              text: '',
              subtext: ''
            },
            tooltip : {
              trigger: 'item',  //悬浮提示框不显示
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            grid:{   //绘图区调整
              left: 30,
              top: 30,
              bottom: 30,
            },
            xAxis : [
              {
                name: "",
                show:true,
                type : 'category',
                data : ["ModbusTCP","modbusRtu","数据透传"],
                axisTick:{    //坐标轴小标记
                  show: false,
                  type: "dashed"
                },
                axisLine: {
                  lineStyle: {
                    color: "#55C9FF"
                  }
                },
              }
            ],
            yAxis : [
              {
                type : 'value',

                // axisLine:{show:false},     //坐标轴
                axisTick:{    //坐标轴小标记,即刻度线
                  show:true,
                  type: ""
                },
                axisLine: {
                  lineStyle: {
                    color: "#55C9FF"
                  }
                },
                nameTextStyle: {
                  color: "#ffffff",
                  fontStyle: 'italic',
                  fontSize: 16
                }
              }
            ],
            series : [
              {
                name:'66',
                type:'bar',
                tooltip:{show:true},

                barMinHeight:5,  //最小柱高
                barWidth: 12,  //柱宽度
                // barMaxWidth:100,   //最大柱宽度
                data: [20,50,80],
                itemStyle:{
                  color:'#3AC498'
                }
              }
            ]
          }
        }
      }
    },
    data(){
      return {
        bar: null
      }
    },
    mounted(){
      this.initRingBar()
    },
    watch: {
      refreshSwitch(){
        this.initRingBar()
      },
    },
    methods: {
      initRingBar(){
        this.bar = this.$echarts.init(this.$refs.compEchartsBar)
        this.bar.setOption(this.option)
        window.addEventListener("resize",() =>{
          this.bar.resize()
        })
      },
    },
    beforeDestroy() {
      this.bar.dispose()
    }
  }
</script>
<style lang = "less">
  .comp-echarts-bar{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .comp-echarts-bar-box{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>

