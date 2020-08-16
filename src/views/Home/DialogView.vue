<template>
  <div class="DialogView">
      <el-button type="primary" @click="openDialog" >主要按钮</el-button>
      <CompDialog :dialogTitle='dialogTitle' :dialogWidth='dialogWidth' @dialogConfirmButton='dialogConfirmButton' ref="CompDialog"></CompDialog>
  </div>
</template>

<script>

import CompDialog from '@/components/CompDialog'
export default {
  name: 'DialogView',
  components: {
      CompDialog
  },
  data() {
    return {
        dialogTitle:'弹窗',
        dialogWidth: "40%",
        previewData: null,
        showFooter: true,
    }
  },
  methods: {
    openDialog(){
        this.$refs.CompDialog.openDialog()
    },
    dialogConfirmButton(){
        this.$refs.CompDialog.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .DialogView{
    width: 100%;
    height: 100%;
  }
 
</style>