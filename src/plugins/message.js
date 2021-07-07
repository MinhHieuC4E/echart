import BaseMessage from '@/global/BaseMessage.vue'
const message = {
  messageData: {
    isDisplay: false,
    text: '',
    color: 'error'
  },
  close() {
    Object.assign(this.messageData, { isDisplay: false, text: '' })
  },
  show(color, text, timeout) {
    Object.assign(this.messageData, { isDisplay: true, text, color, timeout })
  },
  error(msg) {
    this.show('error', msg)
  },
  success(msg) {
    this.show('success', msg)
  },
  warning(msg) {
    this.show('warning', msg)
  },
  loading(msg, timeout) {
    this.show('white', msg, timeout)
  }
}

export default {
  install(Vue, pluginName = '$message') {
    Vue.prototype[pluginName] = message
    Vue.component('plugin-message', BaseMessage)
  }
}

export { message }
