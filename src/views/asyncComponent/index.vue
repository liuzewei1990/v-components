<template>
    <div>

        <div id="postion-A"></div>
        <div>抽奖模块</div>
        <div id="positon-B"></div>
    </div>
</template>

<script>
//正常加载
// import index from '../pages/index.vue'
// import view from '../pages/view.vue'

//懒加载
// const index = resolve => require(['../pages/index.vue'], resolve)
// const view = resolve => require(['../pages/view.vue'], resolve)

//懒加载 - 按组
// const index = r => require.ensure([], () => r(require('../pages/index.vue')), 'group-index')
// const view = r => require.ensure([], () => r(require('../pages/view.vue')), 'group-view')

// 懒加载 - 按组 import，基于ES6 import的特性
// const index = () => import('../pages/index.vue')
// const view = () => import('../pages/view.vue')

import AsyncComponent1 from "./asyncComponent-1.vue"
import AsyncComponent2 from "./asyncComponent-2.vue"
import Vue from "vue"
export default {
    components: { AsyncComponent2 },
    data() {
        return {
            show: false
        }
    },
    mounted() {
        setTimeout(() => {
            const V = "A";
            if (V == "A") {
                this.asyncComponentMount(AsyncComponent1, "#postion-A");
            } else {
                this.asyncComponentMount(AsyncComponent1, "#postion-B");
            }
        }, 2000);
    },

    methods: {
        asyncComponentMount(Component, id) {
            const Constructor = Vue.extend(Component);
            const example = new Constructor();
            example.$mount(id)
            example.v = "111";
        }
    }
}
</script>

<style>
</style>
