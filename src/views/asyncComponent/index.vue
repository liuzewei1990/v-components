<template>
    <div>

        <div id="example1"></div>
        父组件
        <div id="example2"></div>
        <AsyncComponent2 v-if="show"></AsyncComponent2>
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
            console.log("AsyncComponent1", AsyncComponent1);

            const Constructor = Vue.extend(AsyncComponent1);

            console.log("Constructor", Constructor);

            const example1 = new Constructor();

            console.log("example1", example1);

            example1.$mount("#example2")
        }, 2000);

        setTimeout(() => {
            this.show = true;
        }, 3000);

    }
}
</script>

<style>
</style>
