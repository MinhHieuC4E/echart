import BaseConfirm from '@/global/BaseConfirm.vue'
const _initConfirmData = {
  title: "",
  text: "",
  okText: "Ok",
  persistent: false,
  confirmColor: "",
  cancelText: "Cancel",
  hideCancel: false,
  hideOk: false,
  done() {},
  cancel() {},
};

const confirm = {
	confirmData: {state: false},
	show(dialogData = {}) {
		this.confirmData.state = true
		Object.assign(this.confirmData, {
			..._initConfirmData,
			...dialogData
		})
	},
	cancel() {
		this.confirmData.state = false
		this.confirmData.cancel()
		setTimeout(() => {
			Object.assign(this.confirmData, _initConfirmData)
		}, 500)
	}
}

export default {
	install(Vue, pluginName = '$confirm') {
		Vue.prototype[pluginName] = confirm
		Vue.component('plugin-confirm', BaseConfirm)
	}
}
export {confirm}
