<template>
	<div class="date-picker" :class="{'mb-4': !noMargin}">
		<v-menu
			:close-on-content-click="false"
			:nudge-top="25"
			transition="scale-transition"
			offset-y
		>
			<template v-slot:activator="{on}">
				<v-text-field
					v-model="sDateTime"
					dense
					outlined
					class="caption"
          hide-details
          :disabled="disabled"
          v-click-outside="checkValid"
				>
          <template v-slot:append>
            <v-icon v-on="on">mdi-calendar</v-icon>
          </template>
        </v-text-field>
			</template>
      <div class="bg-white">
        <v-date-picker
          v-model="sDate"
          :range="false"
          no-title
          @change="updateDateTime"
        />
        <v-time-picker
          class="time-picker"
          v-model="sTime"
          use-seconds
          format="24hr"
          width="250"
          @change="updateDateTime"
        />
      </div>
		</v-menu>
	</div>
</template>
<script>
import dayjs from 'dayjs'
export default {
	props: {
    value: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    noMargin: Boolean,
	},
	data() {
		return {
      sDate: '',
      sTime: '',
			sDateTime: '',
		}
	},
	watch: {
		value: {
			handler(value) {
        if (value) {
          let toDay = dayjs(new Date).format('YYYY-MM-DD HH:mm:ss')
          const trueDateTime = dayjs(value).isValid()
            ? dayjs(value).format('YYYY-MM-DD HH:mm:ss')
            : toDay
          let getDateAndTime = trueDateTime.split(' ')
          this.sDate = getDateAndTime[0]
          this.sTime - getDateAndTime[1]
          this.sDateTime = value.indexOf('now') === 0 ? value : trueDateTime
        } else this.reset()
      }, immediate: true
		},
	},
	methods: {
    updateDateTime() {
      this.sDateTime = `${this.sDate} ${this.sTime}`
    },
    checkValid() {
      this.$emit('input', this.sDateTime)
    },
    reset() {
      this.sDateTime = ''
      this.sDate = ''
      this.sTime = ''
    }
	},
}
</script>
<style lang="scss" scoped>
::v-deep.time-picker {
  .v-picker__title {
    border-radius: 0 !important;
    padding: 4px 16px;
    .v-time-picker-title {
      display: flex;
      justify-content: center;
    }
    .v-time-picker-title__time {
      > * {
        font-size: 24px;
        height: 40px;
      }
    }
  }
  .v-picker__body {
    background: #f6f7f8;
    height: 250px;
  }
}
::v-deep .v-input__slot {
	padding: 0 8px 0 12px !important;
	min-height: 30px !important;
	height: 30px;
	.v-input__append-inner {
		margin-top: 0 !important;
		height: 100%;
		align-items: center;
	}
}
</style>
