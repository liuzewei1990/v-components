<template>
  <div class="v-dialog-wrapper">
    <div class="v-dialog">
      <div class="v-dialog__header">
        <div class="v-dialog__title">标题</div>
      </div>
      <div class="v-dialog__body">
        内容
      </div>
      <div class="v-dialog__footer">
        底部
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.v-dialog-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow: auto;
  right: 0;
  top: 0;
}
</style>
