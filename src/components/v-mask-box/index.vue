<template>
  <div class="box-example" :class="{'box-example-bg':!isTransparent}" v-show="visible" @click="close">
    <div class="box-content">
      <i v-if="showLoading" class="weui-loading"></i>
      <slot v-else></slot>
    </div>
    <slot name="footer">
      <div v-show="defaultcloseBtnVisible" class="boxClose" v-if="!isTransparent" @click="visible = false"></div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    isTransparent: {
      type: Boolean,
      default: false
    },
    defaultcloseBtnVisible: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      key: true,
    };
  },
  watch: {
    value(val) {
      this.visible = val;
      if (this.visible) this.$emit("on-show");
      else this.$emit("on-hide");
    },
    visible(val) {
      this.$emit("input", val);
      if (val && this.key) {
        this.key = false;
        this.$emit("once-visible", val);
      }
    }
  },
  created() {
    this.visible = this.value;
  },
  methods: {
    close() {
      if (this.hideOnBlur) this.visible = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "./weui-loading.less";
@keyframes fideIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.box-example {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  animation: fideIn 0.2s linear;
}
.box-example-bg {
  background: rgba(0, 0, 0, 0.6);
}
.box-content {
  max-width: 300px;
  text-align: center;
  margin: auto;
}
.boxClose {
  //   background: url("../../assets/images/close.png") no-repeat;
  background-size: 100%;
  width: 35px;
  height: 35px;
  margin: 8vw auto;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #fff;
    border-radius: 500px;
    transform: rotate(45deg);
    transform-origin: center center;
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #fff;
    border-radius: 500px;
    transform: rotate(-45deg);
    transform-origin: center center;
  }
}
</style>
