<template>
	<div>
		<div class="mb-5">
			<v-btn @click="tab = 0">map</v-btn>
			<v-btn @click="tab = 1">tree</v-btn>
			<v-btn @click="tab = 2">sankey</v-btn>
		</div>
		<div class="chart">
			<MapChart v-if="tab === 0" :initData="mapSampleData" />
			<TreeChart v-else-if="tab === 1" :initData="treeSampleData" />
			<SankeyChart v-else-if="tab === 2" :initData="sankeySampleData" />
		</div>
	</div>
</template>
<script>
import MapChart from '@/modules/EChart/components/MapChart'
import TreeChart from '@/modules/EChart/components/TreeChart'
import SankeyChart from '@/modules/EChart/components/SankeyChart'
export default {
	components: {
		MapChart,
		TreeChart,
		SankeyChart,
	},
	data() {
		return {
			tab: 1,
			treeSampleData: {
				position: 'manager',
				name: 'A',
				label: {
					rich: {
						headLine: {
							width: '100%',
							height: 5,
							backgroundColor: '#ff00ff',
						},
						avatar: {
							width: 75,
							height: 75,
							
							backgroundColor: {
								image:
									'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
							},
						},
						name: {
							padding: [-100, 0, 0, 90],
							fontSize: 14,
							color: '#808080',
						},
						position: {
							padding: [-70, 0, 0, 90],

							fontWeight: 'bold',
							fontSize: 14,
						},
					},
				},
				children: [
					{
						position: 'manager',
						name: 'A1',
						label: {
							rich: {
								headLine: {
									width: '100%',
									height: 5,
									backgroundColor: '#00ff00',
								},
								avatar: {
									width: 75,
									height: 75,
									
									backgroundColor: {
										image:
											'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
									},
								},
								name: {
									padding: [-100, 0, 0, 90],
									fontSize: 14,
									color: '#808080',
								},
								position: {
									padding: [-70, 0, 0, 90],

									fontWeight: 'bold',
									fontSize: 14,
								},
							},
						},
						children: [
							{
								position: 'manager',
								name: 'A1.1',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
								children: [
									{
										position: 'employee',
										name: 'A1.1.2',
										label: {
											rich: {
												headLine: {
													width: '100%',
													height: 5,
													backgroundColor: '#00ffff',
												},
												avatar: {
													width: 75,
													height: 75,
													
													backgroundColor: {
														image:
															'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
													},
												},
												name: {
													padding: [-100, 0, 0, 90],
													fontSize: 14,
													color: '#808080',
												},
												position: {
													padding: [-70, 0, 0, 90],

													fontWeight: 'bold',
													fontSize: 14,
												},
											},
										},
									},
								],
							},
							{
								position: 'manager',
								name: 'A1.2',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
								children: [
									{
										position: 'employee',
										name: 'A1.2.1',
										label: {
											rich: {
												headLine: {
													width: '100%',
													height: 5,
													backgroundColor: '#00ffff',
												},
												avatar: {
													width: 75,
													height: 75,
													
													backgroundColor: {
														image:
															'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
													},
												},
												name: {
													padding: [-100, 0, 0, 90],
													fontSize: 14,
													color: '#808080',
												},
												position: {
													padding: [-70, 0, 0, 90],

													fontWeight: 'bold',
													fontSize: 14,
												},
											},
										},
									},
								],
							},
						],
					},
					{
						position: 'manager',
						name: 'A2',
						label: {
							rich: {
								headLine: {
									width: '100%',
									height: 5,
									backgroundColor: '#00ff00',
								},
								avatar: {
									width: 75,
									height: 75,
									
									backgroundColor: {
										image:
											'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
									},
								},
								name: {
									padding: [-100, 0, 0, 90],
									fontSize: 14,
									color: '#808080',
								},
								position: {
									padding: [-70, 0, 0, 90],
									fontWeight: 'bold',
									fontSize: 14,
								},
							},
						},
						children: [
							{
								position: 'manager',
								name: 'A2.2',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
								children: [
									{
										position: 'employee',
										name: 'A2.2.1',
										label: {
											rich: {
												headLine: {
													width: '100%',
													height: 5,
													backgroundColor: '#00ffff',
												},
												avatar: {
													width: 75,
													height: 75,
													
													backgroundColor: {
														image:
															'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
													},
												},
												name: {
													padding: [-100, 0, 0, 90],
													fontSize: 14,
													color: '#808080',
												},
												position: {
													padding: [-70, 0, 0, 90],

													fontWeight: 'bold',
													fontSize: 14,
												},
											},
										},
									},
								],
							},
						],
					},
					{
						position: 'manager',
						name: 'A3',
						label: {
							rich: {
								headLine: {
									width: '100%',
									height: 5,
									backgroundColor: '#00ff00',
								},
								avatar: {
									width: 75,
									height: 75,
									
									backgroundColor: {
										image:
											'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
									},
								},
								name: {
									padding: [-100, 0, 0, 90],
									fontSize: 14,
									color: '#808080',
								},
								position: {
									padding: [-70, 0, 0, 90],

									fontWeight: 'bold',
									fontSize: 14,
								},
							},
						},
						children: [
							{
								position: 'manager',
								name: 'A3.1',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
								children: [
									{
										position: 'employee',
										name: 'A3.1.1',
										label: {
											rich: {
												headLine: {
													width: '100%',
													height: 5,
													backgroundColor: '#00ffff',
												},
												avatar: {
													width: 75,
													height: 75,
													
													backgroundColor: {
														image:
															'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
													},
												},
												name: {
													padding: [-100, 0, 0, 90],
													fontSize: 14,
													color: '#808080',
												},
												position: {
													padding: [-70, 0, 0, 90],

													fontWeight: 'bold',
													fontSize: 14,
												},
											},
										},
									},
								],
							},
						],
					},
					{
						position: 'manager',
						name: 'A4',
						label: {
							rich: {
								headLine: {
									width: '100%',
									height: 5,
									backgroundColor: '#00ff00',
								},
								avatar: {
									width: 75,
									height: 75,
									
									backgroundColor: {
										image:
											'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
									},
								},
								name: {
									padding: [-100, 0, 0, 90],
									fontSize: 14,
									color: '#808080',
								},
								position: {
									padding: [-70, 0, 0, 90],

									fontWeight: 'bold',
									fontSize: 14,
								},
							},
						},
						children: [
							{
								position: 'employee',
								name: 'A4.1',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
							},
							{
								position: 'employee',
								name: 'A4.2',
								label: {
									rich: {
										headLine: {
											width: '100%',
											height: 5,
											backgroundColor: '#0000ff',
										},
										avatar: {
											width: 75,
											height: 75,
											
											backgroundColor: {
												image:
													'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
											},
										},
										name: {
											padding: [-100, 0, 0, 90],
											fontSize: 14,
											color: '#808080',
										},
										position: {
											padding: [-70, 0, 0, 90],

											fontWeight: 'bold',
											fontSize: 14,
										},
									},
								},
							},
						],
					},
				],
			},
			mapSampleData: [
				{name: 'Alabama', value: 4822023},
				{name: 'Alaska', value: 731449},
				{name: 'Arizona', value: 6553255},
				{name: 'Arkansas', value: 2949131},
				{name: 'California', value: 38041430},
				{name: 'Colorado', value: 5187582},
				{name: 'Connecticut', value: 3590347},
				{name: 'Delaware', value: 917092},
				{name: 'District of Columbia', value: 632323},
				{name: 'Florida', value: 19317568},
				{name: 'Georgia', value: 9919945},
				{name: 'Hawaii', value: 1392313},
				{name: 'Idaho', value: 1595728},
				{name: 'Illinois', value: 12875255},
				{name: 'Indiana', value: 6537334},
				{name: 'Iowa', value: 3074186},
				{name: 'Kansas', value: 2885905},
				{name: 'Kentucky', value: 4380415},
				{name: 'Louisiana', value: 4601893},
				{name: 'Maine', value: 1329192},
				{name: 'Maryland', value: 5884563},
				{name: 'Massachusetts', value: 6646144},
				{name: 'Michigan', value: 9883360},
				{name: 'Minnesota', value: 5379139},
				{name: 'Mississippi', value: 2984926},
				{name: 'Missouri', value: 6021988},
				{name: 'Montana', value: 1005141},
				{name: 'Nebraska', value: 1855525},
				{name: 'Nevada', value: 2758931},
				{name: 'New Hampshire', value: 1320718},
				{name: 'New Jersey', value: 8864590},
				{name: 'New Mexico', value: 2085538},
				{name: 'New York', value: 19570261},
				{name: 'North Carolina', value: 9752073},
				{name: 'North Dakota', value: 699628},
				{name: 'Ohio', value: 11544225},
				{name: 'Oklahoma', value: 3814820},
				{name: 'Oregon', value: 3899353},
				{name: 'Pennsylvania', value: 12763536},
				{name: 'Rhode Island', value: 1050292},
				{name: 'South Carolina', value: 4723723},
				{name: 'South Dakota', value: 833354},
				{name: 'Tennessee', value: 6456243},
				{name: 'Texas', value: 26059203},
				{name: 'Utah', value: 2855287},
				{name: 'Vermont', value: 626011},
				{name: 'Virginia', value: 8185867},
				{name: 'Washington', value: 6897012},
				{name: 'West Virginia', value: 1855413},
				{name: 'Wisconsin', value: 5726398},
				{name: 'Wyoming', value: 576412},
				{name: 'Puerto Rico', value: 3667084},
			],
			sankeySampleData: {
				nodes: [
					{name: "Agricultural 'waste'"},
					{name: 'Bio-conversion'},
					{name: 'Liquid'},
					{name: 'Losses'},
					{name: 'Solid'},
					{name: 'Gas'},
					{name: 'Biofuel imports'},
					{name: 'Biomass imports'},
					{name: 'Coal imports'},
					{name: 'Coal'},
					{name: 'Coal reserves'},
					{name: 'District heating'},
					{name: 'Industry'},
					{name: 'Heating and cooling - commercial'},
					{name: 'Heating and cooling - homes'},
					{name: 'Electricity grid'},
					{name: 'Over generation / exports'},
					{name: 'H2 conversion'},
					{name: 'Road transport'},
					{name: 'Agriculture'},
					{name: 'Rail transport'},
					{name: 'Lighting & appliances - commercial'},
					{name: 'Lighting & appliances - homes'},
					{name: 'Gas imports'},
					{name: 'Ngas'},
					{name: 'Gas reserves'},
					{name: 'Thermal generation'},
					{name: 'Geothermal'},
					{name: 'H2'},
					{name: 'Hydro'},
					{name: 'International shipping'},
					{name: 'Domestic aviation'},
					{name: 'International aviation'},
					{name: 'National navigation'},
					{name: 'Marine algae'},
					{name: 'Nuclear'},
					{name: 'Oil imports'},
					{name: 'Oil'},
					{name: 'Oil reserves'},
					{name: 'Other waste'},
					{name: 'Pumped heat'},
					{name: 'Solar PV'},
					{name: 'Solar Thermal'},
					{name: 'Solar'},
					{name: 'Tidal'},
					{name: 'UK land based bioenergy'},
					{name: 'Wave'},
					{name: 'Wind'},
				],
				// all links of nodes
				links: [
					{
						source: "Agricultural 'waste'",
						target: 'Bio-conversion',
						value: 124.729,
					},
					{source: 'Bio-conversion', target: 'Liquid', value: 0.597},
					{source: 'Bio-conversion', target: 'Losses', value: 26.862},
					{source: 'Bio-conversion', target: 'Solid', value: 280.322},
					{source: 'Bio-conversion', target: 'Gas', value: 81.144},
					{source: 'Biofuel imports', target: 'Liquid', value: 35},
					{source: 'Biomass imports', target: 'Solid', value: 35},
					{source: 'Coal imports', target: 'Coal', value: 11.606},
					{source: 'Coal reserves', target: 'Coal', value: 63.965},
					{source: 'Coal', target: 'Solid', value: 75.571},
					{source: 'District heating', target: 'Industry', value: 10.639},
					{
						source: 'District heating',
						target: 'Heating and cooling - commercial',
						value: 22.505,
					},
					{
						source: 'District heating',
						target: 'Heating and cooling - homes',
						value: 46.184,
					},
					{
						source: 'Electricity grid',
						target: 'Over generation / exports',
						value: 104.453,
					},
					{
						source: 'Electricity grid',
						target: 'Heating and cooling - homes',
						value: 113.726,
					},
					{
						source: 'Electricity grid',
						target: 'H2 conversion',
						value: 27.14,
					},
					{source: 'Electricity grid', target: 'Industry', value: 342.165},
					{
						source: 'Electricity grid',
						target: 'Road transport',
						value: 37.797,
					},
					{source: 'Electricity grid', target: 'Agriculture', value: 4.412},
					{
						source: 'Electricity grid',
						target: 'Heating and cooling - commercial',
						value: 40.858,
					},
					{source: 'Electricity grid', target: 'Losses', value: 56.691},
					{
						source: 'Electricity grid',
						target: 'Rail transport',
						value: 7.863,
					},
					{
						source: 'Electricity grid',
						target: 'Lighting & appliances - commercial',
						value: 90.008,
					},
					{
						source: 'Electricity grid',
						target: 'Lighting & appliances - homes',
						value: 93.494,
					},
					{source: 'Gas imports', target: 'Ngas', value: 40.719},
					{source: 'Gas reserves', target: 'Ngas', value: 82.233},
					{
						source: 'Gas',
						target: 'Heating and cooling - commercial',
						value: 0.129,
					},
					{source: 'Gas', target: 'Losses', value: 1.401},
					{source: 'Gas', target: 'Thermal generation', value: 151.891},
					{source: 'Gas', target: 'Agriculture', value: 2.096},
					{source: 'Gas', target: 'Industry', value: 48.58},
					{source: 'Geothermal', target: 'Electricity grid', value: 7.013},
					{source: 'H2 conversion', target: 'H2', value: 20.897},
					{source: 'H2 conversion', target: 'Losses', value: 6.242},
					{source: 'H2', target: 'Road transport', value: 20.897},
					{source: 'Hydro', target: 'Electricity grid', value: 6.995},
					{source: 'Liquid', target: 'Industry', value: 121.066},
					{
						source: 'Liquid',
						target: 'International shipping',
						value: 128.69,
					},
					{source: 'Liquid', target: 'Road transport', value: 135.835},
					{source: 'Liquid', target: 'Domestic aviation', value: 14.458},
					{
						source: 'Liquid',
						target: 'International aviation',
						value: 206.267,
					},
					{source: 'Liquid', target: 'Agriculture', value: 3.64},
					{source: 'Liquid', target: 'National navigation', value: 33.218},
					{source: 'Liquid', target: 'Rail transport', value: 4.413},
					{source: 'Marine algae', target: 'Bio-conversion', value: 4.375},
					{source: 'Ngas', target: 'Gas', value: 122.952},
					{source: 'Nuclear', target: 'Thermal generation', value: 839.978},
					{source: 'Oil imports', target: 'Oil', value: 504.287},
					{source: 'Oil reserves', target: 'Oil', value: 107.703},
					{source: 'Oil', target: 'Liquid', value: 611.99},
					{source: 'Other waste', target: 'Solid', value: 56.587},
					{source: 'Other waste', target: 'Bio-conversion', value: 77.81},
					{
						source: 'Pumped heat',
						target: 'Heating and cooling - homes',
						value: 193.026,
					},
					{
						source: 'Pumped heat',
						target: 'Heating and cooling - commercial',
						value: 70.672,
					},
					{source: 'Solar PV', target: 'Electricity grid', value: 59.901},
					{
						source: 'Solar Thermal',
						target: 'Heating and cooling - homes',
						value: 19.263,
					},
					{source: 'Solar', target: 'Solar Thermal', value: 19.263},
					{source: 'Solar', target: 'Solar PV', value: 59.901},
					{source: 'Solid', target: 'Agriculture', value: 0.882},
					{source: 'Solid', target: 'Thermal generation', value: 400.12},
					{source: 'Solid', target: 'Industry', value: 46.477},
					{
						source: 'Thermal generation',
						target: 'Electricity grid',
						value: 525.531,
					},
					{source: 'Thermal generation', target: 'Losses', value: 787.129},
					{
						source: 'Thermal generation',
						target: 'District heating',
						value: 79.329,
					},
					{source: 'Tidal', target: 'Electricity grid', value: 9.452},
					{
						source: 'UK land based bioenergy',
						target: 'Bio-conversion',
						value: 182.01,
					},
					{source: 'Wave', target: 'Electricity grid', value: 19.013},
					{source: 'Wind', target: 'Electricity grid', value: 289.366},
				],
			},
		}
	},
}
</script>
<style scoped>
.chart > div {
	height: calc(100vh - 56px);
}
</style>
