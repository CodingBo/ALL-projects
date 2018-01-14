<template>
	<div class="block">
	<el-table :data="tableData" :header-row-style="{'background':'#eff7f7'}" border>
	    <el-table-column prop="id" align="center" label="序号"></el-table-column>
		<el-table-column prop="date" align="center" label="日期"></el-table-column>
		<el-table-column prop="pnum" align="center" label="单号"></el-table-column>
		<el-table-column prop="name" align="center" label="姓名"></el-table-column>
		<el-table-column prop="address" align="center" label="地址"></el-table-column>
		<el-table-column prop="state" align="center" label="状态"></el-table-column>
		<el-table-column align="center" label="操作">
			<template slot-scope="scope">
	        	<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        	<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	    	</template>
		</el-table-column>
	</el-table>
	<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="curpage" :page-sizes="pageSizes" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
	</div>
</template>

<script>
import axios from 'axios'
var _selfData = []
export default {
  data() {
    return {
      tableData: [],
      pageSizes: [],
      pageSize: 10, // 默认每页10条数据
      curpage: 1,
      total: 0
    }
  },
  created() {
    this.request()
  },
  updated() {
  },
  methods: {
    request() {
      axios.get('/users').then(response => {
        _selfData = response.data.columns
        this.pageSizes = [10, 20, 30, 40]
        this.total = response.data.columns.length
        this.updateTables(1, 10)
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      _selfData.splice(index, 1)
      this.total = _selfData.length
      this.updateTables(this.curpage, this.pageSize)
    },
    handleCurrentChange(val) {
      this.updateTables(val, this.pageSize)
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.updateTables(this.curpage, val)
    },
    updateTables(currentPage, pageSize) {
      const startIndex = (currentPage - 1) * pageSize
      const endIndex = (startIndex + pageSize) > _selfData.length - 1 ? _selfData.length - 1 : (startIndex + pageSize)
      this.tableData = _selfData.slice(startIndex, endIndex)
    }
  }
}
</script>
<style>
	.el-table {
		width: 100%;
		margin-top: 20px;
	}
	.header-class{
		background: #f00;
	}
	.el-pagination{
		margin-top: 10px;
		text-align: right;
	}
</style>