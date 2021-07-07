<template>
	<v-app id="app">
		<transition
			appear
			enter-active-class="animated slideInUp"
			leave-active-class="animated fadeOut"
		>
			<router-view />
		</transition>
		<BaseMessage />
		<BaseConfirm />
	</v-app>
</template>
<script>
export default {
	name: 'App'
}
</script>
<style lang="scss">
#app {
	font-family: Roboto, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
