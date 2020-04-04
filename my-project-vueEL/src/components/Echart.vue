<template>
	<div class="chart" id="homeChart">

	</div>
</template>

<script>
	var echart = require('echarts')
	export default {
		data() {
			return {name: "vue-echarts example"}
		},
		mounted() {
			var myChart = echart.init(document.getElementById('homeChart'));
			myChart.setOption({
				title: {
					text: 'echarts example'
				},
				tooltip: {},
				xAxis: {
					data: ['a', 'b', 'c', 'd', 'e']
				},
				yAxis: {},
				series: [{
					name: 'sales',
					type: 'bar',
					data: [5, 20, 30, 40, 50]
				}]
			})
		},

	}
</script>

<style>
	.chart {
		width: 600px;
		height: 400px;
	}
</style>