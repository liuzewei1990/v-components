<template>
    <div class="vux-popup-header" :class="showBottomBorder ? 'vux-1px-b' : ''">
        <div class="vux-popup-header-left" @click="$emit('on-click-left')">
            <slot name="left-text">{{ leftText }}</slot>
        </div>
        <div class="vux-popup-header-title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="vux-popup-header-right" @click="$emit('on-click-right')">
            <slot name="right-text">{{ rightText }}</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup-header',
    props: {
        leftText: String,
        rightText: String,
        title: String,
        showBottomBorder: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="less" scoped>

.vux-popup-header {
  //   display: flex;
  position: relative;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  background-color: #fbf9fe;
}
.vux-popup-header-title {
  //   flex: 1;
  margin: 0 88px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color:#222;
}
.vux-popup-header-left {
  //   flex: 0.1;
  position: absolute;
  top: 12px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  padding-left: 15px;
  color:#828282;
}
.vux-popup-header-right {
  //   flex: 0.1;
  position: absolute;
  top: 12px;
  right: 0;
  display: block;
  font-size: 14px;
  line-height: 21px;
  padding-right: 15px;
  color: #04BE02;
}
.vux-popup-header.vux-1px-b:after {
  border-color: #d9d9d9;
}
.vux-1px-b{
    position: relative;
    &::after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e3e5e9;
        color: #e3e5e9;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
}
</style>
