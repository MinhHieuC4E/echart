<template>
	<v-color-picker
    v-model="color"
    :mode="mode"
    hide-mode-switch
    :width="width"
    :canvas-height="height"
  ></v-color-picker>
</template>
<script>
  export default {
    props: {
      width: {
        type: [String, Number],
        default: 230
      },
      height: {
        type: [String, Number],
        default: 100
      },
      value: {
        type: [String, Object],
        default: ''
      },
      type: {
        type: String,
        default: 'hex',
        validator: value => {
          return value.match(/(hex|hexa|rgb|rgba|hsl|hsla')/)
        },
      },
    },
    data: () => ({
      modes: ['hexa', 'hsla', 'rgba'],
      mode: 'hexa',
      hex: '#FF00FF',
      hexa: '#FF00FFFF',
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      rgb: {r: 255, g: 0, b:255},
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsl: {h: 300, s: 1, l: 0.5},
    }),
    computed: {
      color: {
        get () {
          this.$emit('input', this[this.type])
          return this[this.type]
        },
        set (v) {
          this[this.type] = v
        },
      },
    },
    watch: {
      type: {
        handler(value) {
          this.mode = this.modes.find(v => {
            return v.indexOf(value) !== -1
          })
        }, immediate: true
      },
      value: {
        handler(value) {
          if (!value) return
          this[this.type] = value
        }, immediate: true
      }
    }
  }
</script>
<style lang="scss" scoped>
::v-deep.v-color-picker {
  border-radius: 2px;
  .v-color-picker__controls {
    padding: 0;
    .v-color-picker__preview {
      padding: 8px 0;
    }
    .v-color-picker__edit {
      margin-top: 0;
      .v-color-picker__input {
        > :last-child {
          display: none;
        }
        > input {
          margin-bottom: 0;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>