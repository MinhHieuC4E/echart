<template>
	<v-btn
		class="caption text-none"
		:class="{'icon-btn': iconBtn}"
		depressed
		:outlined="outlined"
		:dark="dark && !disabled"
		:color="color"
		:loading="loading"
		@click="$emit('click')"
		:disabled="disabled"
		v-bind="$attrs"
		:height="height"
	>
		<v-icon small class="mr-1" v-if="icon && !surffix">
			{{ icon }}
		</v-icon>
		{{ content }}
		<v-icon small class="mr-1" v-if="icon && surffix">
			{{ icon }}
		</v-icon>
	</v-btn>
</template>
<script>
export default {
	props: {
		height: {
			type: String,
			default: '30',
		},
		loading: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: 'primary'
		},
		iconBtn: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		},
		surffix: {
			type: Boolean,
			default: false
		},
		content: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		dark: {
			type: Boolean,
			default: true
		}
	},
}
</script>
<style lang="scss" scoped>
::v-deep.v-btn {
	border-radius: 2px;
	&.icon-btn {
		padding: 0;
		i {
			margin: 0 !important;
		}
	}
}
</style>
