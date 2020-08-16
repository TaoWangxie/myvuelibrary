<template>
  <div class="Breadcrumb">
        <el-row>
          <el-col :span="4">
            <div class="tree-box">
              <el-tree 
              :data="treeData" 
              :props="defaultProps" 
              node-key="id" 
              @node-click="handleNodeClick">
              </el-tree>
            </div>
          </el-col>
          <el-col :span="20">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item in breadOption" :key="item.id">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
  </div>
</template>

<script>


export default {
  name: 'Breadcrumb',
  components: {

  },
  data() {
    return {
      treeData: [
        {
          id:100,
          label: '一级 1',
          children: [{
            id:110,
            label: '二级 1-1',
            children: [{
              id:111,
              label: '三级 1-1-1'
            }]
          }]
        }, {
          id:200,
          label: '一级 2',
          children: [{
            id:210,
            label: '二级 2-1',
            children: [{
              id:211,
              label: '三级 2-1-1'
            }]
          }, {
            id:300,
            label: '二级 2-2',
            children: [{
              id:310,
              label: '三级 2-2-1'
            }]
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      breadOption:[]
    };
  },
  methods: {
      handleNodeClick(data,node) {
        this.breadOption=[];
        /*临时变量nodeData储存被点击节点的node信息，判断如果此节点有父节点，
        那么将相关信息添加到面包屑的首位，并将父节点赋值给临时节点，继续判断该节点是否有父节点*/
        let nodeData=node;
        while (nodeData.parent!=null){
          this.breadOption.unshift({'name':nodeData.data.label});
          nodeData=nodeData.parent;
        }
        console.log(this.breadOption)
      }
    }
}
</script>
<style lang="less" scoped>
  .Breadcrumb{
    width: 100%;
    height: 100%;
  }
 
</style>