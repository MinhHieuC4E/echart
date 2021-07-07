<template>
    <div class="map-chart">
		<VueECharts :option="option" autoresize ref="chart" />
	</div>
</template>

<script>
import {use} from 'echarts/core'
import {CanvasRenderer} from 'echarts/renderers'
import {MapChart} from 'echarts/charts'
import {TitleComponent, TooltipComponent, ToolboxComponent, VisualMapComponent} from 'echarts/components'
import VueECharts from 'vue-echarts'
import * as echarts from 'echarts'
use([
	CanvasRenderer,
    MapChart,
    TitleComponent,
    TooltipComponent,
    VisualMapComponent,
    ToolboxComponent,
])

// get your map position info and register
import {usaJson} from '@/modules/EChart/components/map-position.js'
echarts.registerMap('USA', usaJson)

export default {
	components: {
		VueECharts,
	},
	props: {
		initData: {
			type: Array,
			default: () => []
		},
	},
	computed: {
		option() {
			return {
				title: {
					text: 'USA Population Estimates (2012)',
					// subtext: '',
					// sublink: '',
					left: 'right',
				},
				tooltip: {
					trigger: 'item',
					showDelay: 0,
					transitionDuration: 0.2,
					formatter: function (params) {
						var value = (params.value + '').split('.')
						value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
						return params.seriesName + '<br/>' + params.name + ': ' + value
					},
				},
				visualMap: {
					left: 'right',
					min: 500000,
					max: 38000000,
					inRange: {
						color: [
							'#313695',
							'#4575b4',
							'#74add1',
							'#abd9e9',
							'#e0f3f8',
							'#ffffbf',
							'#fee090',
							'#fdae61',
							'#f46d43',
							'#d73027',
							'#a50026',
						],
					},
					text: ['High', 'Low'],
					calculable: true,
				},
				toolbox: {
					show: true,
					//orient: 'vertical',
					left: 'left',
					top: 'top',
					feature: {
						dataView: {readOnly: false},
						restore: {},
						saveAsImage: {},
					},
				},
				series: [
					{
						name: 'USA PopEstimates',
						type: 'map',
						roam: true,
						map: 'USA',
						emphasis: {
							label: {
								show: true,
							},
						},
						data: this.initData,
					},
				],
			}
		}
	},
}
</script>