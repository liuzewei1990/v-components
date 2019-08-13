
<template>
  <a class="alink" :href="to" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'alink',
  props: ['to'],
  data() {
    return {
      msg: 'this is from alink.vue'
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.alink {
}
</style>