import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: 'index',
            path: '/',
            component: require('./views/index.vue').default
        },
        {
            name: 'infiniteScroll',
            path: '/infiniteScroll',
            component: require('./views/infiniteScroll.vue').default
        },
        {
            name: 'loadmore',
            path: '/loadmore',
            component: require('./views/loadmore.vue').default
        },
        {
            name: 'asyncComponent',
            path: '/asyncComponent',
            component: require('./views/asyncComponent/index.vue').default
        }
    ]
})
