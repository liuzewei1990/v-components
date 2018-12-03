import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 解决ios不支持按钮:active伪类的方法
document.body.addEventListener('touchstart', function () { });
import toast from "./components/v-toast";
Vue.prototype.$toast = (o = {}) => {
    let c = {
        duration: 5000,
        message: typeof o === 'string' ? o : o.message,
        position: "center",
        className: "",
        iconClass: ""
    };
    toast({ ...c, ...o })
};


import vueAlertView from './components/v-confirm'
Vue.use(vueAlertView);

Vue.prototype.ModalHelper = (function (bodyCls) {
    var scrollTop;
    return {
        open: function () {
            scrollTop = document.scrollingElement.scrollTop;
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + 'px';
        },
        close: function () {
            document.body.classList.remove(bodyCls);
            // scrollTop lost after set position:fixed, restore it back.
            document.scrollingElement.scrollTop = scrollTop;
        }
    };
})('modal-open');

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
