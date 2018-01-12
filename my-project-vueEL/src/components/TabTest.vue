<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" class="zhbhwy">
		<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
	</el-tabs>
</template>
<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			ready() {
				this.$http.get("http://g.cn").then(     
					response => {
					console.log(response.body);
				},      response => {
					console.log(response);
				});

			},
			handleClick(tab, event) {
				this.ready()
				      console.log(tab, event);
			},
			testfun:function(){
				console.log(123)
				
			}
			

		}
	};
</script>

<style>
</style>