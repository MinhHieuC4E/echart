<template>
  <div class="loading">
    <slot v-if="customDisplay" name="object-inside"></slot>
    <div v-else class="color--white relative dots-loading" style="white-space: nowrap;">
      {{title}}
      <span style="--i:4">.</span>
      <span style="--i:7">.</span>
      <span style="--i:10">.</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    customDisplay: Boolean,
    title: {
      type: String,
      default: 'Loading'
    },
  }
}
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.dots-loading {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  font-size: 20px;
  span {
    margin-left: 4px;
    font-size: 32px;
    display: inline-block;
    animation: loading 3s infinite;
    animation-delay: calc(.1s * var(--i))
  }
}
@keyframes loading {
  0%,50%,100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-8px);
  }
}
/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>