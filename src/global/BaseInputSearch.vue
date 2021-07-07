<template>
	<div class="d-flex align-center">
		<BaseInput
			v-model="textSearch"
			:placeholder="placeholder"
			class="input-search"
			hide-details
			@keyup.native.enter="$emit('onSearch', textSearch)"
		/>
		<BaseButton
			class="ml-1"
			icon="mdi-magnify"
			@click="$emit('onSearch', textSearch)"
		/>
	</div>
</template>
<script>
export default {
	props: {
		value: String,
		label: String,
		placeholder: String,
	},
	data() {
		return {
			textSearch: ''
		}
	}
}
</script>
<style lang="scss" scoped>
::v-deep.input-search {
	.v-input__slot {
		min-height: 30px !important;
	}
}
</style>
