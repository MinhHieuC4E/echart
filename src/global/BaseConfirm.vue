<template>
  <v-dialog
    :persistent="dialog.persistent"
    v-model="dialog.state"
    max-width="400px"
  >
    <v-card>
      <v-card-title class="subtitle-2 break-word">
        {{ dialog.title }}
      </v-card-title>
      <v-card-text>
        <span v-if="dialog.text" class="body">{{ dialog.text }}</span>
        <slot></slot>
      </v-card-text>
      <v-card-actions :class="dialog.hideCancel ? 'justify-end' : 'justify-space-between'" class="d-flex pt-0 px-5 pb-5">
        <BaseButton
          v-show="!dialog.hideOk"
          :color="dialog.confirmColor || 'primary'"
          @click="done"
          :content="dialog.okText"
        />
        <BaseButton
          v-show="!dialog.hideCancel"
          color="grey"
          @click="cancel"
          :content="dialog.cancelText"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: this.$confirm.confirmData,
    }
  },
  methods: {
    done() {
      this.dialog.done()
      this.dialog.state = false
    },
    cancel() {
      this.$confirm.cancel()
    },
  },
}
</script>
<style lang="scss" scoped>
.break-word {
  word-break: break-word;
}
</style>
