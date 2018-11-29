import Vue from 'vue'
// 自定义指令， 判断当前点击是否在DOM以外的地方
Vue.directive('clickOutside', {
    bind(el, binding, vnode) {
        el.event = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event)
            }
        }
        document.body.addEventListener('click', el.event)
    },
    unbind(el) {
        document.body.removeEventListener('click', el.event)
    }
})