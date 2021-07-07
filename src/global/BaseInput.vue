<template>
	<v-text-field
		v-bind="$attrs"
		class="caption"
		outlined
		dense
		:prepend-icon="preventIcon"
		:prepend-inner-icon="prependInnerIcon"
		:rules="rules"
		:type="type"
		v-model="data"
		:placeholder="placeholder"
		:disabled="disabled"
		:hint="hint"
		:background-color="background"
		@keydown="keydown"
	></v-text-field>
</template>
<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		background: {
			type: String,
			default: '',
		},
		rules: {
			type: Array,
			default: () => [],
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number],
			default: '',
		},
		hint: {
			type: String,
			default: '',
		},
		preventIcon: {
			type: String,
			default: undefined,
		},
		prependInnerIcon: {
			type: String,
			default: undefined,
		},
		positiveInteger: Boolean
	},
	data() {
		return {
			data: '',
		}
	},
	mounted() {
		this.data = this.value
	},
	methods: {
		keydown(event) {
			if (this.positiveInteger && this.type === 'number') {
				if (event.keyCode == 8
					|| event.keyCode == 0
					|| event.keyCode == 13
					|| event.keyCode >= 48 && event.keyCode <= 57
				)	{
					return
				} else event.preventDefault()
			}
		}
	},
	watch: {
		data() {
			this.$emit('input', this.type === 'number' ? Number(this.data) : this.data)
		},
		value() {
			this.data = this.value
		},
	},
}
</script>
<style lang="scss" scoped>
::v-deep .v-input__slot {
	min-height: 30px !important;
	height: 30px;
}
</style>