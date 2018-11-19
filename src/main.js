import Vue from 'vue'
import App from './App.vue'

import toast from "./components/v-toast";
Vue.prototype.$toast = (o={})=>{
  let c = {
    duration:5000000,
    message:typeof o === 'string' ? o : o.message,
    position:"bottom",
    className:"",
    iconClass:""
  };
  toast({...c,...o})
};

new Vue({
  el: '#app',
  render: h => h(App)
})
