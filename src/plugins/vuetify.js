import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

const opts = {
	theme: {
		// dark: true,
		themes: {
			light: {
				primary: '#3852f3',
				secondary: '#3c73d9',
				third: '#c8dbff',
				forth: '#01256b',
				anchor: '#8c9eff',
				error: '#ff0b16',
				success: '#00dd51',
				warning: '#ffc900',
				gray: '#cfcdd3',
				purple: '#5955de',
				pink: '#ff004f',
				orange: '#ff8f00',
				'drak-gray': '#908e95',
				'light-gray': '#f2f2f2'
			}
		}
	},
}

export default new Vuetify(opts)
