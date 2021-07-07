<template>
	<div class="tree-chart" @contextmenu.prevent style="position: relative">
		<v-btn @click="back" style="position: absolute">Back</v-btn>
		<VueECharts
			:option="option"
			@click.right="handleClick"
			autoresize
			ref="chart"
		/>
	</div>
</template>

<script>
import {use} from 'echarts/core'
import {CanvasRenderer} from 'echarts/renderers'
import {TreeChart} from 'echarts/charts'
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
} from 'echarts/components'
import VueECharts from 'vue-echarts'

use([
	CanvasRenderer,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	TreeChart,
])
export default {
	components: {
		VueECharts,
	},
	props: {
		initData: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			detailMode: false,
			detailModeOption: {
				label: {
					width: 200,
					height: 80,
					backgroundColor: 'white',
					shadowColor: '#595953',
					shadowBlur: 5,
					formatter: function (params) {
						return `{headLine|}\n{avatar|}\n{name|${params.data.name}}\n{position|${params.data.position}}`
					},
				},
			},
			defaultOption: {
				label: {
					position: 'top',
					rotate: -90,
					verticalAlign: 'middle',
					align: 'right',
					fontSize: 10,
				},
			},
			selectedNode: {}
		}
	},
	beforeUpdate() {
		this.$refs.chart.clear()
	},
	computed: {
		option() {
			return {
				tooltip: {
					trigger: this.detailMode ? '' : 'item',
					triggerOn: 'mousemove',
					formatter: function (params) {
						// tooltip format
						return params.name
					},
				},
				series: [
					{
						type: 'tree',
						data: [(this.detailMode ? this.selectedNode : this.initData)],
						left: '2%',
						right: '2%',
						top: '8%',
						bottom: '20%',
						orient: 'vertical',
						expandAndCollapse: true,
						initialTreeDepth: this.detailMode ? undefined : 2,
						silent: false,
						...(this.detailMode ? this.detailModeOption : this.defaultOption),
						animationDurationUpdate: 750,
					},
				],
			}
		},
	},
	methods: {
		handleClick(node) {
			this.detailMode = true
			this.selectedNode = node.data
		},
		back() {
			this.detailMode = false
			this.selectedNode = {}
		}
	},
}
</script>