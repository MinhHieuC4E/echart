import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import global from '@/global/index.js'
import pluginHelper from '@/helpers/pluginHelper.js'
import utils from '@/helpers/utils.js'
import vuetify from '@/plugins/vuetify'
import message from '@/plugins/message'
import confirm from '@/plugins/confirm'
import '@/assets/scss/main.scss'

global.import()
Vue.config.productionTip = false
Vue.config.performance = true
Vue.config.devtools = true

sync(store, router, {moduleName: '$route'})
Vue.use(
	pluginHelper.create({
		$utils: utils,
		$message: message,
		$confirm: confirm
	})
)

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
