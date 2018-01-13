<template>
	<el-table :data="tableData" :header-row-style="{'background':'#eff7f7'}" border>
		<el-table-column prop="date" align="center" v-if="" label="日期"></el-table-column>
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
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: []
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
        this.tableData = response.data.columns
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      var _selfData = this.tableData
      _selfData.splice(index,1)
      this.tableData = _selfData
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
</style>