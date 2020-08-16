<template>
  <div class="CompTable">
    <el-table
    :data="tableData"
    @selection-change="handleSelectionChange"
    @current-change="handleCurrentRowChange"
    @row-click = "rowClick"
    style="width: 100%">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>

        <el-table-column
        v-for = "(item,index) in column"
        :key = "index"
        :label = "item.label"
        :show-overflow-tooltip = "showOverflowTooltip"
        :width = "item.width ? item.width : ''"
        >
        <template slot-scope="scope">
            <!--可定制不同插槽实现一个字段的定制化-->
            <div v-if= "item.slot" :class = "item.class" class = "">
                <slot :name = "item.slot" :prop = "scope.row"></slot>
            </div>
        </template>   
        </el-table-column>
    </el-table>
    <div class = "_pagination" v-if = "ifPagination">
      <el-pagination
        ref="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :background = "background"
        :page-size="pageSize"
        :page-sizes="pageSizesSelect"
        :layout="pageLayout"
        :total = "total"
        :size = "pageComponentSize"
        :prev-text = "prevText"
        :next-text = "nextText"
        :disabled="paginationDisabled"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>


export default {
    name: 'CompTable',
    components: {

    },
    props: {
      tableData:{
        type: Array,
        default(){
            return []
        }
      },
      column: {
        type: Array,
        default(){
            return []
        }
      },
      showOverflowTooltip: {
        type: Boolean,
        default: true
      },
      background: {
        type: Boolean,
        default: false,
      },
      pageComponentSize: {
        type: String,
        default: "medium",
      },
      total: {
        type: Number,
        default: 0
      },
      newStylePage: {
        type: Boolean,
        default: false
      },
      differentSizePage: {
        type: Array,
        default(){
          return [5,10,15,20]
        }
      },
      prevText: {
        type: String,
        default(){
          return "上一页"
        },
      },
      nextText: {
        type: String,
        default(){
          return "下一页"
        },
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageNum: {
        type: Number,
        default: 1
      },
      pageSizesSelect: {
        type: Array,
        default(){
          return [5,10,15,20]
        }
      },
      pageLayout: {
        type: String,
        default: "total,sizes, prev, pager, next, jumper"
      },
      paginationDisabled: {
        type: Boolean,
        default: false
      },

    },
    data() {
      return {
        multipleSelection: [],
        ifPagination:true
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.$emit("postSelection",val)
      },
      handleCurrentRowChange(currentRow,oldCurrentRow){
        this.$emit("handleCurrentRowChange",currentRow,oldCurrentRow)
      },
      rowClick(	row, event, column){
        this.$emit("rowClick",row)
      },
      handleSizeChange(val){
        this.$emit("handleSizeChange",val)
      },
      handleCurrentChange(val){
        this.$emit("handleCurrentChange",val)
      },
    }
}
</script>
<style lang="scss">
  .CompTable{
    width: 100%;
    height: 100%;
    ._pagination {
        padding: 12px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        .el-pagination {
            display: flex;
            align-items: center;
        }
        .el-pager li{
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            margin: 0 2px;
        }
        .el-pager li.active {
            border: 1px solid #409eff;
            background: #409eff;
            color: #fff;
        }
    }
  }
 
</style>