<template>
  <div class="EchartsView">
    <el-card class="box-card">
      <el-tabs v-model="activeNameBar">
        <el-tab-pane label="柱状图" name="bar">
          <el-row>
            <el-col :span="24">
              <div class="echartsBarBox">
                <CompEchartsBar :option="BarOption" :refreshSwitch="refreshSwitch"></CompEchartsBar>
                
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card class="box-card">
      <el-tabs v-model="activeNameLine">
        <el-tab-pane label="折线图" name="line">
          <el-row>
            <el-col :span="24">
              <div class="echartsLineBox">
                <CompEchartsLine :option="LineOption" :refreshSwitch="refreshSwitch"></CompEchartsLine>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
   
  </div>
</template>

<script>

import CompEchartsBar from '@/components/CompEchartsBar'
import CompEchartsLine from '@/components/CompEchartsLine'

export default {
  name: 'EchartsView',
  components: {
    CompEchartsBar,
    CompEchartsLine
  },
  data() {
    return {
      activeNameBar: 'bar',
      activeNameLine: 'line',
      refreshSwitch:true,
      BarOption : {
          color: ['#3398DB'],
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '1%',
              right: '2%',
              bottom: '2%',
              top: '6%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '直接访问',
                  type: 'bar',
                  barWidth: '30%',
                  data: [10, 52, 200, 334, 390, 330, 220]
              }
          ]
      },
      LineOption:{
        grid: {
              left: '1%',
              right: '2%',
              bottom: '2%',
              top: '6%',
              containLabel: true
          },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
      }
    };
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
  .EchartsView{
    width: 100%;
    height: 100%;
    .echartsBarBox{
      width: 100%;
      height: 260px;
    }
    .echartsLineBox{
      width: 100%;
      height: 260px;
    }

    .box-card {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
  }
 
</style>