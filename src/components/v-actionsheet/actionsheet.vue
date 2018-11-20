<template>
    <div>

        <transition name="v-actionsheet-mask">
            <div class="mask mask_transparent" @click="onClickingMask" v-show="show"></div>
        </transition>

        <!-- 安卓样式 -->
        <div class="skin_android" v-if="theme === 'android'">
            <transition name="v-android-actionsheet" @after-enter="$emit('on-after-show')" @after-leave="$emit('on-after-hide')">
                <div class="v-actionsheet" v-show="show">
                    <div v-if="hasHeaderSlot">
                        <slot name="header"></slot>
                    </div>
                    <div class="v-actionsheet__menu">
                        <div class="v-actionsheet__cell" :class="`v-actionsheet-menu-${text.type || 'default'}`" v-for="(text, key) in menus" :key="key" @click="onMenuClick(text, key)" v-html="text.label || text">
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- ios样式 -->
        <div class="v-actionsheet" :class="{'v-actionsheet_toggle': show}" v-else ref="iOSMenu">
            <div v-if="hasHeaderSlot">
                <slot name="header"></slot>
            </div>
            <div class="v-actionsheet__menu">

                <div class="v-actionsheet__cell" :class="`v-actionsheet-menu-${text.type || 'default'}`" v-for="(text, key) in menus" :key="key" @click="onMenuClick(text, key)" v-html="text.label || text">
                </div>
            </div>
            <div class="v-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
                <div class="v-actionsheet__cell">{{cancelText || '取消'}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'actionsheet',
    mounted() {
        this.hasHeaderSlot = !!this.$slots.header
        this.$nextTick(() => {
            this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd)
        })
    },
    props: {
        value: Boolean,
        showCancel: Boolean,
        cancelText: String,
        theme: {
            type: String,
            default: 'ios'
        },
        menus: {
            type: [Object, Array],
            default: () => ({})
        },
        closeOnClickingMask: {
            type: Boolean,
            default: true
        },
        closeOnClickingMenu: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            hasHeaderSlot: false,
            show: false
        }
    },
    methods: {
        onTransitionEnd() {
            this.$emit(this.show ? 'on-after-show' : 'on-after-hide')
        },
        onMenuClick(text, key) {
            if (typeof text === 'string') {
                this.emitEvent('on-click-menu', key, text)
            } else {
                if (text.type !== 'disabled' && text.type !== 'info') {
                    if (text.value || text.value === 0) {
                        this.emitEvent('on-click-menu', text.value, text)
                    } else {
                        this.emitEvent('on-click-menu', '', text)
                        this.show = false
                    }
                }
            }
        },
        onClickingMask() {
            this.$emit('on-click-mask')
            this.closeOnClickingMask && (this.show = false)
        },
        emitEvent(event, menu, item) {
            if (event === 'on-click-menu' && !/.noop/.test(menu)) {
                let _item = item
                if (typeof _item === 'object') {
                    _item = JSON.parse(JSON.stringify(_item))
                }
                this.$emit(event, menu, _item)
                this.$emit(`${event}-${menu}`)
                this.closeOnClickingMenu && (this.show = false)
            }
        }
    },
    watch: {
        show(val) {
            this.$emit('input', val)
        },
        value: {
            handler: function (val) {
                this.show = val
            },
            immediate: true
        }
    },
    beforeDestroy() {
        this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd)
    }
}
</script>

<style lang="less" scoped>

.mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
}

.mask_transparent{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}


.v-actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    backface-visibility: hidden;
    z-index: 5000;
    width: 100%;
    background-color:#efeff4;
    transition: transform .3s;
}
.v-actionsheet__menu{
    background-color: #FFFFFF;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.v-actionsheet__action {
    margin-top: 6px;
    background-color: #FFFFFF;
}
.v-actionsheet__cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
     &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    &:active{
        background-color: #eee;
    }
    &:first-child{
        &:before{
            display: none;
        }
    } 
}


/* 安卓样式 */
.skin_android{
     .v-actionsheet {
        position: fixed;
        left: 50%;
        top: 50%;
        bottom: auto;
        transform: translate(-50%, -50%);
        width: 274px;
        box-sizing: border-box;
        backface-visibility: hidden;
        background: transparent;
        transition: transform .3s;
    }
    .v-actionsheet__action{
        display: none;
    }
    .v-actionsheet__menu {
        // border-radius: 2px;
        box-shadow: 0 6px 30px 0 rgba(0,0,0,.1);
    }
    .v-actionsheet__cell {
        padding: 13px 24px;
        font-size: 16px;
        line-height: 1.4;
        text-align: left;
        &:first-child {
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
        }
        &:last-child {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
        }
    } 
}

.v-actionsheet_toggle{
    transform: translate(0, 0);
}



 .v-actionsheet-menu-primary {
   color: #1aad19;
 }
 .v-actionsheet-menu-warn {
   color: #e64340;
 }
 .v-actionsheet-menu-default {
   color: #000;
 }
 .v-actionsheet-menu-disabled {
   color: #ccc;
 } 
.v-actionsheet-mask-enter,
.v-actionsheet-mask-leave-active,
.v-android-actionsheet-enter,
.v-android-actionsheet-leave-active {
  opacity: 0;
}
.v-actionsheet-mask-leave-active,
.v-actionsheet-mask-enter-active,
.v-android-actionsheet-leave-active,
.v-android-actionsheet-enter-active {
  transition: opacity 300ms !important;
}
</style>
