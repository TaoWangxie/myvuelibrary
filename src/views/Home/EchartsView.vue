<template>
  <div class="EchartsView">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <el-tabs v-model="activeNamePie1">
            <el-tab-pane label="饼图" name="pie1">
              <el-row>
                <el-col :span="24">
                  <div class="echartsBox">
                    <div class="echartsPieBox">
                      <CompEchartsPie :option="PieOption1" :refreshSwitch="refreshSwitchPie1"></CompEchartsPie>

                    </div>
                    <div class="echartsPieBox">
                      <div class="refreshSwitchBox">
                        <span class="refreshTime">{{pieRefreshTime1}}</span>
                        <!-- <span class="refreshSwitchBtn" @click="pieRefresh1">刷新</span> -->
                        <el-button type="primary" @click="pieRefresh1" size="small" class="refreshSwitchBtn">刷新</el-button>
                      </div>
                      <div class="EchartslegendBox">
                        <div class="legendBox">
                          
                          <div>{{pieValueph1}}</div>
                          <div><span class="legendPh"></span></div>
                        </div>
                        <div class="legendBox">
                        
                          <div>{{pieValuepc1}}</div>
                          <div><span class="legendPc"></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-tabs v-model="activeNamePie2">
            <el-tab-pane label="饼图" name="pie2">
              <el-row>
                <el-col :span="24">
                  <div class="echartsBox">
                    <div class="echartsPieBox">
                      <CompEchartsPie :option="PieOption2" :refreshSwitch="refreshSwitchPie2"></CompEchartsPie>

                    </div>
                    <div class="echartsPieBox">
                      <div class="refreshSwitchBox">
                        <span class="refreshTime">{{pieRefreshTime2}}</span>
                        <!-- <span class="refreshSwitchBtn" @click="pieRefresh1">刷新</span> -->
                        <el-button type="primary" @click="pieRefresh2" size="small" class="refreshSwitchBtn">刷新</el-button>
                      </div>
                      <div class="EchartslegendBox">
                        <div class="legendBox">
                          
                          <div>{{pieValueph2}}</div>
                          <div><span class="legendPh"></span></div>
                        </div>
                        <div class="legendBox">
                        
                          <div>{{pieValuepc2}}</div>
                          <div><span class="legendPc"></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <el-tabs v-model="activeNameBar">
        <el-tab-pane label="柱状图" name="bar">
          <el-row>
            <el-col :span="24">
              <div class="echartsBarBox">
                <CompEchartsBar :option="BarOption" :refreshSwitch="refreshSwitchBar"></CompEchartsBar>
                
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
                <CompEchartsLine :option="LineOption" :refreshSwitch="refreshSwitchLine"></CompEchartsLine>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
   
  </div>
</template>

<script>
import { dateFormat , debounce } from '@/utils/utils'


import CompEchartsBar from '@/components/CompEchartsBar'
import CompEchartsLine from '@/components/CompEchartsLine'
import CompEchartsPie from '@/components/CompEchartsPie'

export default {
  name: 'EchartsView',
  components: {
    CompEchartsBar,
    CompEchartsLine,
    CompEchartsPie
  },
  data() {
    return {
      activeNameBar: 'bar',
      activeNameLine: 'line',
      activeNamePie1: 'pie1',
      activeNamePie2: 'pie2',
      refreshSwitchPie1:true,
      refreshSwitchPie2:true,
      refreshSwitchBar:true,
      refreshSwitchLine:true,
      pieRefreshTime1:'',
      pieRefreshTime2:'',
      pieValueph1:1,
      pieValuepc1:1,
      pieValueph2:1,
      pieValuepc2:1,
      isRefresh1:true,
      isRefresh2:true,
      timer1:null,
      timer2:null,
    };
  },
  computed:{
    BarOption(){
      return {
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
        }
    },
    LineOption(){
      return {
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
    },
    PieOption1(){
      return {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          color:[{
            type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFD26F' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FF8D5E' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          },{
            type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFE9D5' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FFE9D5' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          }],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {
                value: this.pieValueph1,
                name: '手机'
              },
              {
                value: this.pieValuepc1,
                name: '电脑'
              },
          ]
        }
      ]
      }
    },
    PieOption2(){
      return {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          color:[{
            type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFD26F' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FF8D5E' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          },{
            type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFE9D5' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FFE9D5' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          }],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {
                value: this.pieValueph2,
                name: '手机'
              },
              {
                value: this.pieValuepc2,
                name: '电脑'
              },
          ]
        }
      ]
      }
    }
  },
  mounted(){
    this.pieRefreshTime1 = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")
    this.pieRefreshTime2 = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")
    this.pie1()
    this.pie1()
  },
  methods: {
    pieRefresh1(){
      if(this.isRefresh1){
        this.pieRefreshTime1 = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")
        this.pie1()
        this.refreshSwitchPie1 = !this.refreshSwitchPie1
        this.isRefresh1 = false
      }else{
        this.$message({
            type: 'warning',
            message: "请5秒后再点击刷新"
          })
        if(this.timer1){
            clearTimeout(this.timer1) 
        }
        this.timer1 = setTimeout(() => {
            this.isRefresh1 = true;//响应后延迟几秒回复正常；
        }, 5000)
      }
    },
    pieRefresh2(){
      if(this.isRefresh2){
        this.pieRefreshTime2 = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")
        this.pie2()
        this.refreshSwitchPie2 = !this.refreshSwitchPie2
        this.isRefresh2 = false
      }else{
        this.$message({
            type: 'warning',
            message: "请5秒后再点击刷新"
          })
        if(this.timer2){
            clearTimeout(this.timer2) 
        }
        this.timer2 = setTimeout(() => {
            this.isRefresh2 = true;//响应后延迟几秒回复正常；
        }, 5000)
      }
    },
    // pieRefresh2: debounce(function(){
    //   alert(222)
    // },1000),

    pie1(){
      this.pieValueph1 ++
      // this.pieValuepc ++
    },
    pie2(){
      this.pieValuepc2 ++
      // this.pieValuepc ++
    }

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
    .echartsPieBox{
      flex: 1;
      height: 200px;
    }
    .echartsBox{
      width: 100%;
      display: flex;
    }
    .refreshSwitchBox{
      flex: 1;
      height: 50px;
      line-height: 50px;
      .refreshTime{
        display: inline-block;
        width: calc(100% - 60px);
        height: 100%;
        font-size: 16px;
        text-align: center;
        color: #666;
      }
      .refreshSwitchBtn{
        // display: inline-block;
      }
    }
    .EchartslegendBox{
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      .legendBox{
        display: inline-block;
        width: 40%;
        height: 50px;
        text-align: center;
        div{
          width: 100%;
          height: 25px;
        }
        .legendPh,.legendPc{
          display: inline-block;
          width: 40px;
          height: 20px;
          margin: 0 auto;
          background-color: #FF8D5E;
          border-radius: 4px;
        }
        .legendPc{
          background-color: #FFE9D5;
        }
      }
    }

    .box-card {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
  }
 
</style>