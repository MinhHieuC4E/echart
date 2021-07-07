<template>
	<v-select
		class="caption"
		:class="{'mb-4': !noMargin}"
		:items="items"
		:item-text="itemText"
		:item-value="itemValue"
		:disabled="disabled"
		v-bind="$attrs"
		v-model="tempValue"
		outlined
		dense
		:multiple="multiple"
		:menu-props="{ offsetY: true }"
		hide-details
	/>
</template>
<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => [],
		},
		noMargin: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		value: {
			type: [String, Object, Number],
			default: '',
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		itemText: {
			type: String,
			default: 'text',
		},
		itemValue: {
			type: String,
			default: 'value',
		},
		actionCustomValue: {
			type: String,
			default: 'action-custom',
		},
	},
	data() {
		return {
			tempValue: this.value || '',
		}
	},
	watch: {
		tempValue(value) {
			this.$emit('input', value)
			this.$emit('change', value)
		},
		value: {
			handler(value) {
				this.tempValue = value
			},
			immediate: true,
		},
	},
}
</script>
<style lang="scss" scoped>
::v-deep .v-input__slot {
	padding: 0 0 0 12px !important;
	min-height: 30px !important;
	height: 30px;
	.v-input__append-inner {
		margin-top: 0 !important;
		height: 100%;
		align-items: center;
	}
}
</style>