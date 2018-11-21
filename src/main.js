import Vue from 'vue'
import App from './App.vue'

// 解决ios不支持按钮:active伪类的方法
document.body.addEventListener('touchstart', function () { });
import toast from "./components/v-toast";
Vue.prototype.$toast = (o = {}) => {
    let c = {
        duration: 5000,
        message: typeof o === 'string' ? o : o.message,
        position: "bottom",
        className: "",
        iconClass: ""
    };
    toast({ ...c, ...o })
};


import vueAlertView from './components/v-confirm'
Vue.use(vueAlertView);



new Vue({
    el: '#app',
    render: h => h(App)
})
