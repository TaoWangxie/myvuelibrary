<template>
  <div class="TableView">
    <el-card class="box-card">
      <div class="projectBoxHeader">
        <div class="projectBoxHeaderLeft">
          <el-input :placeholder="searchPlaceHolder" class="searchInputStyle" @keyup.enter.native="searchProjectUp" size="medium" v-model="searchParam"></el-input>
          <el-button type="primary" @click="searchProject()" size="small" class="searchBtn">{{"搜索"}}</el-button>
        </div>
        <div class="projectBoxHeaderRight">
          <el-button  type="primary" size="small" @click="add()"
                    >{{"添加"}}
          </el-button>
          <el-button type="danger" size="small" @click='batchDeleteProject'
                    :disabled="this.deleteProjectList.length === 0">
            {{"批量删除"}}
          </el-button>
        </div>
      </div>
      <CompTable 
      v-loading="loading"
      :tableData="contactUsersList"
      :column="column" 
      :total="total"
      :pageSize="limit"
      :pageNum="pageNum"
      @postSelection="postSelection"
      >
        <!-- 关联ICCID -->
        <template slot="name" slot-scope="{ prop }">
          <span>{{prop.name}}</span>
        </template>
        <!-- 创建时间 -->
        <template slot="age" slot-scope="{ prop }">
          <span>{{prop.age}}</span>
        </template>
        <!-- 创建时间 -->
        <template slot="sex" slot-scope="{ prop }">
          <span>{{prop.sex}}</span>
        </template>
        <!-- 操作 -->
        <template slot="action" slot-scope="{ prop }">
          <div>
            <el-button size="mini" type="primary" @click="edit(prop)">
              {{'编辑'}}
            </el-button>
            <el-button size="mini" type="warning" @click="deleteProjec(prop)">
              {{"删除"}}
            </el-button>
          </div>
        </template>
      </CompTable>
    </el-card>
      <CompDialog
        ref = "projectDialog"
        :dialogTitle='dialogTitle'
        @dialogConfirmButton="submitForm"
        :dialogWidth="'40%'"
        :showFooter="showFooter"
        >

         <el-form
          :model="projectData"
          ref="projectData"
          :rules="rules"
          label-width="150px"
        >
          <!-- 设备名称 -->
          <el-form-item class="positionRletavie" label="名称" prop="name">
            <el-input
              class="Input400"
              v-model="projectData.name"
              :placeholder="addPlaceHolder"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        
      </CompDialog>
  </div>
  
</template>

<script>
import CompTable from '@/components/CompTable'
import CompDialog from '@/components/CompDialog'

import auth from '@/utils/auth';
import { getLang , timeStampChange , dateFormat } from '@/utils/utils';

export default {
  name: 'TableView',
  components: {
    CompTable,
    CompDialog
  },
  data() {
    return {
      loading:false,
      searchParam:"",
      searchPlaceHolder:"请输入搜索内容",
      addPlaceHolder:"请输入名称",
      deleteProjectList:[],
      contactUsersList: [],
      showFooter:true,
      dialogTitle:'添加项目',
      nowtime:'',
      eidtName:null, //编辑form中项目名称
      offset: 0,
      limit: 10,
      total: 0,
      projectData: {
        name: '',
      },
      column: [
          {
            label: "姓名",
            prop: "",
            slot: "name",
            width: ""
          },
          {
            label:"年龄",
            prop: "",
            slot: "age",
            width: ""
          },
          {
            label: "性别",
            prop: "",
            slot: "sex",
            width: ""
          },
          {
            label: "操作",
            prop: "",
            slot: "action",
            width: ""
          }
        ],
      list:[
        {
          id: 1,
          name:'张三',
          age: 20,
          sex: "男",
        },
        {
          id: 2,
          name:'李四',
          age: 20,
          sex: "男",
        },
        {
          id: 3,
          name:'王五',
          age: 20,
          sex: "男",
        },
        {
          id: 4,
          name:'小明',
          age: 20,
          sex: "男",
        },
        
      ],
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
         }
    };
  },
  // 计算属性
    computed: {
      pageNum: function () {
        if(false){
          return (this.offset / this.limit) + 1
        }else{
          return this.offset
        }
      }
    },
    // vue生命周期-vue实例挂载到dom之后
    mounted() {
      this.contactUsersList = this.list
      this.total =  Object.keys(this.contactUsersList).length
    },
    methods: {
    //搜索输入
      searchProjectUp(){

      },
      //项目查询
      searchProject(){
        // getLang()
        // auth.aaa()
        let time = new Date();
        console.log(dateFormat(time, "yyyy-MM-dd hh:mm:ss"))//调用
      },
      getTime(){
				setInterval(()=>{
					this.nowtime = new Date();
				},1000)
      },
      //项目添加

      add(){
        this.$refs.projectDialog.openDialog()
        this.addEditTitle = "添加项目";
        this.eidtName = ''
        this.projectData.name = ''
      },
      addProject(params){
        var hasName=this.contactUsersList.some(function (item) {
            if(item.name===params.projectName){
                return true
            }
          })
        if(!hasName){
          this.loading = true
          this.nowtime = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")//调用
          console.log(this.nowtime)
          this.contactUsersList.unshift({
            id:100,
            date: this.nowtime,
            name:params.projectName,
          })
          this.$refs.projectDialog.dialogVisible = false
          this.total =  Object.keys(this.contactUsersList).length
          this.loading = false
          this.$message({
            type: 'success',
            message: "成功"
          })
        }else{
            this.$confirm("添加吗","提示",{
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: 'warning'
            }).then(()=>{
              this.projectData.name = ''
            }).catch(()=>{})
        }
        // console.log(this.contactUsersList)
       
      },
      //项目批量删除
      batchDeleteProject(){
        this.$confirm("删除",{
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: 'warning'
            }).then(action=>{
              this.loading = true
              this.deleteProjectList.forEach(items => {
                this.contactUsersList.some((item, i) =>{
                  if(item.name === items){
                    this.contactUsersList.splice(i, 1)
                    return true;
                  }
                }) 
              })
              this.total =  Object.keys(this.contactUsersList).length
              this.loading = false
              this.$message({
                type: 'success',
                message: "删除成功"
              })
              
          }).catch(()=>{})
      },
      //项目删除
      deleteProjec(val){
        this.$confirm("删除吗",{
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: 'warning'
            }).then(action=>{
              this.loading = true
              this.contactUsersList.some((item, i) =>{
              if(item.name == val.name){
                this.contactUsersList.splice(i, 1)
                return true;
              }
            }) 
            this.total =  Object.keys(this.contactUsersList).length
            this.loading = false
            this.$message({
              type: 'success',
              message: "删除成功"
            })
            
          }).catch(()=>{})
      },
      //项目编辑
      edit(val){
        console.log(val)
        this.$refs.projectDialog.openDialog()
        this.addEditTitle = "编辑";
        // this.projectAdd = false
        this.projectData.name = val.name
        this.eidtName = val.name
      },
      editProject(params){
        this.contactUsersList.forEach(item => {
          if (item.name === this.eidtName) {
            this.$set(item, 'name', params.projectName)
            this.$message({
              type: 'success',
              message: "编辑成功"
            })
          }
          this.$refs.projectDialog.dialogVisible = false
          // this.$set(item, 'name', params.projectName)
        })
      },


      //添加项目确定按钮点击
      submitForm(){
        
        this.$refs.projectData.validate((valid) => {
          if(valid) {

            let params={
              projectName:this.projectData.name,
            }

            if(!this.eidtName){
              this.addProject(params)
            }else{
              this.editProject(params)
            }
       
          }else {
            console.log('error submit!!');
            return false;
          }

        })
        
      },
      handleSizeChange(){
        
      },
      handleCurrentChange(){

      },
      //row选中触发
      postSelection(val){
        this.deleteProjectList = []
        if (!!val) {
            this.deleteProjectList = val.map(function (item) {
              return item.name
            })
          }
          console.log(this.deleteProjectList)
      },
        
    },
    // vue生命周期-vue实例销毁之后
    destroyed() {
    },
  }

</script>
<style lang="scss" scoped>
  .TableView{
    width: 100%;
    height: 100%;
    .box-card {
      width: 100%;
      height: calc(100vh - 60px);
      box-sizing: border-box;
      margin-bottom: 20px;
      .projectBoxHeader{
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .projectBoxHeaderLeft{
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          .searchInputStyle {
            width: 300px;
          }
          .searchBtn{
            margin-left: 10px;
            font-size: 14px;
            border-radius: 4px;
            min-width: 60px;
            // width: 60px;
          }
          .el-input__inner{
            height: 36px;
            line-height: 36px;
          }
          .projectStyle{
            display: inline-block;
            padding-right: 10px;
            .el-input{
              width: 100%;
            }
          }
          .tipSetting {
            margin-left: 20px;
          }

          .alarmContacsGroupLink {
            font-size: 10px;
          }
        }
        .projectBoxHeaderRight{
          // width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .el-input {
            width: 32%;
          }
          .projectStyle{
            display: inline-block;
            padding-right: 5px;
            .el-input{
              width: 100%;
            }
          }
        }
    }
    .projectBoxBody{
      margin-top: 20px;
    }
    
    .positionRletavie{
      position: relative;
    }
    
  }
  }
 
</style>
<style>
  .Input400{
    width: 400px;
  }
  @media screen and(max-width: 1600px) {
      .Input400 {
        width: 200px;
      }
    }
</style>