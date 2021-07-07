<template>
  <v-checkbox
    v-bind="$attrs"
    v-model="tempValue"
    dense
    hide-details
    :false-value="falseValue"
		:true-value="trueValue"
  ></v-checkbox>
</template>
<script>
export default {
  props: {
    falseValue: {
      type: [String, Boolean],
      default: 'N'
    },
    trueValue: {
      type: [String, Boolean],
      default: 'Y'
    },
    value: {
      type: [String, Boolean],
      default: 'N'
    }
  },
  data() {
    return {
      tempValue: this.value || ''
    }
  },
  watch: {
		tempValue(value) {
			this.$emit('input', value)
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