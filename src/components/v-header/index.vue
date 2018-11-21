<template>
    <div class="v-header">
        <div class="v-header-left">
            <slot name="overwrite-left">
                <transition :name="transition">
                    <a class="v-header-back" href="javascript:void(0)" v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}</a>
                </transition>
                <transition :name="transition">
                    <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
                </transition>
            </slot>
            <slot name="left"></slot>
        </div>
        <h1 class="v-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle" :style="headerStyle">
            <slot>
                <transition :name="transition">
                    <span v-show="title">{{title}}</span>
                </transition>
            </slot>
        </h1>
        <div class="v-header-title-area" v-if="shouldOverWriteTitle">
            <slot name="overwrite-title"></slot>
        </div>
        <div class="v-header-right">
            <a class="v-header-more" href="javascript:void(0)" @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import objectAssign from 'object-assign'
export default {
    name: 'x-header',
    props: {
        headerStyle: String,
        leftOptions: Object,
        title: String,
        transition: String,
        noLoading: Boolean,
        rightOptions: {
            type: Object,
            default() {
                return {
                    showMore: false
                }
            }
        }
    },
    beforeMount() {
        if (this.$slots['overwrite-title']) {
            this.shouldOverWriteTitle = true
        }
    },
    computed: {
        _leftOptions() {
            return objectAssign({
                showBack: true,
                preventGoBack: false
            }, this.leftOptions || {})
        }
    },
    methods: {
        onClickBack() {
            this.$nextTick(() => {
                if (this._leftOptions.preventGoBack) {
                    this.$emit('on-click-back')
                } else {
                    this.$router ? this.$router.back() : window.history.back()
                }
            })

        }
    },
    data() {
        return {
            shouldOverWriteTitle: false
        }
    }
}
</script>

<style lang="less" scoped>
.v-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background: #fafafa;
  color: #757575;
  a {
    text-decoration: none;
    color: #999;
  }
  &::after {
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
.v-header .v-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  // color: red;
}
.v-header-title-area,
.v-header .v-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-header .v-header-title > span {
  display: inline-block;
}
.v-header .v-header-left,
.v-header .v-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  // color: red;
}
.v-header .v-header-left a,
.v-header .v-header-left button,
.v-header .v-header-right a,
.v-header .v-header-right button {
  float: left;
  margin-right: 8px;
  // color: red;
}
.v-header .v-header-left a:active,
.v-header .v-header-left button:active,
.v-header .v-header-right a:active,
.v-header .v-header-right button:active {
  opacity: 0.5;
}
.v-header .v-header-left {
  left: 18px;
}
.v-header .v-header-left .v-header-back {
  padding-left: 16px;
}
.v-header .v-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.v-header .v-header-right {
  right: 15px;
}
.v-header .v-header-right a,
.v-header .v-header-right button {
  margin-left: 8px;
  margin-right: 0;
}
.v-header .v-header-right .v-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.v-header-fade-in-right-enter-active {
  animation: fadeinR 0.5s;
}
.v-header-fade-in-left-enter-active {
  animation: fadeinL 0.5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeinL {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
