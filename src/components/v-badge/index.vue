<template>
  <span v-text="text" :class="['v-badge', {'v-badge-dot': typeof text === 'undefined', 'v-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: [String, Number]
  }
}
</script>

<style lang="less" scoped>

.v-badge {
  display: inline-block;
  text-align: center;
  background: #f74c31;
  color: #fff;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  padding: 0 6px;
  background-clip: padding-box;
  vertical-align: middle;
}
.v-badge-single {
  padding: 0;
  width: 16px;
}
.v-badge-dot {
  height: auto;
  padding: 5px
}
</style>
