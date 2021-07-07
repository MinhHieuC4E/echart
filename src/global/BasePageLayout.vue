<template>
	<div class="page-container bg">
		<div class="page-header">
			<slot name="page-header"></slot>
		</div>
		<div v-if="!loading" class="page-content__wrapper">
      <slot name="page-content"></slot>
    </div>
		<v-progress-linear indeterminate v-else />
	</div>
</template>
<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>
<style lang="scss" scoped>
.page-container {
	min-height: 100vh;
	.page-header {
		position: sticky;
		z-index: 1;
		top: 0;
		left: 0;
		height: 40px;
    display: flex;
    align-items: center;
		width: 100%;
		background: #000000;
		color: white;
    > div {
      width: 100%;
			max-width: 1200px;
			margin: 0 auto;
    }
	}
	.page-content__wrapper {
		padding: 8px;
		width: 100%;
		> div {
			max-width: 1200px;
			margin: 0 auto;
		}
	}
}
</style>
