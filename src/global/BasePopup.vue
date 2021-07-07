<template>
	<v-dialog v-model="sIsOpenPopup" max-width="500" transition="dialog-top-transition">
		<div class="bg">
			<div class="bg-primary d-flex justify-space-between align-center px-5 py-4">
				<span class="color--white title">{{title}}</span>
        <v-icon color="#ffffff" small @click="closePopup">mdi-close</v-icon>
			</div>
			<div class="pa-5" style="min-height: 200px;">
				<div v-if="sIsOpenPopup">
					<slot></slot>
				</div>
			</div>
			<div class="pa-5 pt-0 d-flex justify-center">
				<BaseButton class="mr-2" @click="onSave" :disabled="disableSaveBtn" content="Save" />
				<BaseButton color="grey" @click="closePopup" content="Cancel" />
			</div>
		</div>
	</v-dialog>
</template>
<script>
export default {
	components: {},
	props: {
		title: String,
		acceptButton: {
			type: String,
			default: 'Save'
		},
		disableSaveBtn: Boolean
	},
  data() {
    return {
      sIsOpenPopup: false
    }
  },
	methods: {
		openPopup() {
			this.sIsOpenPopup = true
		},
		closePopup() {
			this.sIsOpenPopup = false
		},
    onSave() {
      this.$emit('onSave')
    }
	},
}
</script>