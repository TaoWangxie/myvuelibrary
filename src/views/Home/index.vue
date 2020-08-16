<template>
  <div class="Home">
    <el-container class="h100">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="240px">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <el-main class="home-main">
              <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Menu from '@/components/Menu'

export default {
  name: 'Home',
  components: {
    Menu
  },
  data() {
      return {

      };
    },
    mounted(){

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
  .Home{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .home-main{
      width: 100%;
      height: calc(100vh - 60px);
    }
    .h100{
      height: 100%;
    }
    .tree-box{
      width: 100%;
      height: 100%;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
    }
  }



  .el-header{
    background-color: #409EFF;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #303133;
    color: #333;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  // .box-card {
  //   width: 100%;
  //   height: 100%;
  //   box-sizing: border-box;
  // }
 
</style>
