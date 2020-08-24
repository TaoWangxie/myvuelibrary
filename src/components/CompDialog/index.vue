<template>
  <el-dialog
    class="CompDialog"
    :visible.sync="dialogVisible"
    :title ="dialogTitle"
    :width="dialogWidth"
    :close-on-click-modal="true"
    @open="openCallBack"
    @close="closeCallBack"
  >
    <div slot = "title" v-if ="!dialogTitle">
      <div class = "selfDialogTitle">
        <slot name = "VTitle"></slot>
      </div>
    </div>
    <div>
    <slot></slot>
    <!-- 预览信息 -->
    <!-- <div v-if='!!previewData' class="previewResult">

    </div> -->
    </div>
    <div v-if='!previewData && showFooter' class="bottomLine"></div>
    <div v-if='!previewData && showFooter' slot="footer" class="dialog-footer">
      <slot name="footer">
        <el-button class = "venus-button-default" size = "medium" v-if="dialogCancelText !='null'" @click="dialogCancelButton">{{dialogCancelText}}</el-button>
        <el-button size = "medium" type="primary" :loading="loading" @click="dialogConfirmButton">{{dialogConfirmText}}</el-button>
      </slot>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    name: "CompDialog",
    props: {
      // 设置Dialog的宽度
      dialogWidth: {
        type: String,
        default() {
          return '40%'
          // return '40%'
        }
      },
      // 取消按钮是否为重置
      isReset:{
        type:Boolean,
        default:false
      },
      // 设置Dialog的标题
      dialogTitle: {
        type: String
      },
      // 设置Dialog取消标题, 当值为'null' 是，不显示该按钮
      dialogCancelText: {
        type: String,
        default() {
          return "取消"
        }
      },
      // 设置Dialog确认标题
      dialogConfirmText: {
        type: String,
        default() {
          return "确定"
        }
      },
      // 当设置预览数据的时候，开启预览模式，不显示'取消' '确定' 按钮
      previewData: {
        type: Array,
      },
      previewDataShowHtml: {
        type: Boolean,
        default : false
      },
      closeOnClickModal:{
        type: Boolean,
        default : true
      },
      loading:{
        type: Boolean,
        default : false
      },
      showFooter:{
        type: Boolean,
        default : true
      }
    },
    data() {
      return {
        // 控制Dialog开关
        dialogVisible: false
      }
    },
    watch: {
    	dialogVisible:{
            handler(val){
                if(val){
                    this.$nextTick(() => {
                    this.$emit('opened')
                    });
                }
            }
        }
    },
    methods: {
      // 打开Dialog
      openDialog() {
        this.dialogVisible = true
      },
      // 关闭Dialog
      closeDialog() {
        this.dialogVisible = false
      },
      // 取消按钮的回调
      dialogCancelButton() {
        if(!this.isReset)
          this.dialogVisible = false
        this.$emit("dialogCancelButton")
      },
      // 确认按钮的回调
      dialogConfirmButton() {
        // this.dialogVisible = false
        this.$emit("dialogConfirmButton")
      },
      // 关闭Dialog的回调
      closeCallBack() {
        this.dialogVisible = false
        this.$emit('close')
      },
      // 成功打开Dialog的回调
      openCallBack() {
        this.$emit('open')
      },
    }
  }
</script>
<style lang="scss">
  .CompDialog {
    .selfDialogTitle{
      padding-bottom: 20px;
      border-bottom: 1px solid #E5E5E5;
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .el-dialog__body {
      padding: 30px 20px 10px;
    }

    .previewResult {
      font-size: 16px;
    }
    .bottomLine{
      height: 1px;
      margin-left: -20px;
      margin-right: -20px;
      background-color: #E5E5E5;
    }
  }
</style>
