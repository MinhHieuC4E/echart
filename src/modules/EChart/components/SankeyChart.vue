<template>
	<div class="sankey-chart">
		<VueECharts :option="option" autoresize ref="chart" />
	</div>
</template>

<script>
import {use} from 'echarts/core'
import {CanvasRenderer} from 'echarts/renderers'
import {SankeyChart} from 'echarts/charts'
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
	SankeyChart,
])

export default {
	components: {
		VueECharts,
	},
	props: {
		initData: {
			type: Object,
			default: () => {}
		},
	},
	computed: {
		option() {
			return {
				title: {
					text: 'Node Align Left',
				},
				tooltip: {
					trigger: 'item',
					triggerOn: 'mousemove',
				},
				animation: false,
				series: [
					{
						type: 'sankey',
						emphasis: {
							focus: 'adjacency',
						},
						nodeAlign: 'right',
						data: this.initData.nodes,
						links: this.initData.links,
						lineStyle: {
							color: 'source',
							curveness: 0.5,
						},
					},
				],
			}
		}
	},
}
</script>