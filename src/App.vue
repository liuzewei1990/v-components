<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <button @click="showActionsheet=true">show ios</button>
    <actionsheet theme="ios" :show-cancel="false" cancel-text="关闭" v-model="showActionsheet" :menus="menus" @on-click-menu="clickMenu">
    </actionsheet>

    <button @click="showActionsheet1=true">show ios header show-cancel</button>
    <actionsheet theme="ios" :show-cancel="true" cancel-text="关闭" v-model="showActionsheet1" :menus="menus1" @on-click-menu="clickMenu">
        <p slot="header">请选择</p>
    </actionsheet>

    <button @click="showActionsheet2=true">show android header</button>
    <actionsheet theme="android" v-model="showActionsheet2" :menus="menus1" @on-click-menu="clickMenu">
      <p slot="header">请选择</p>
    </actionsheet>

    <button @click="showActionsheet3=true">show android</button>
    <actionsheet theme="android" v-model="showActionsheet3" :menus="menus" @on-click-menu="clickMenu"></actionsheet>

  </div>
</template>

<script>
import actionsheet from "./components/v-actionsheet/actionsheet";
export default {
  name: 'app',
  components:{actionsheet},
  data () {
    return {
      
      showActionsheet: false,
      showActionsheet1: false,
      showActionsheet2: false,
      showActionsheet3: false,
      menus: { 
        "1": '男', 
        "2": '女' 
      },  
      menus1: [
        {
          label: '苹果',
          type: 'primary',
          value: '苹果'
        },
        {
          label: '香蕉',
          type: 'warn',
          value: '香蕉'
        },
        {
          label: '西瓜-禁用的',
          type: 'disabled',
          value: '西瓜'
        },
        {
          label: '葡萄',
          value: '葡萄'
        },
        {
          label: '苹果',
          type: 'primary',
          value: '苹果'
        },
        {
          label: '香蕉',
          type: 'warn',
          value: '香蕉'
        },
        {
          label: '西瓜-禁用的',
          type: 'disabled',
          value: '西瓜'
        },
        {
          label: '葡萄',
          value: '葡萄'
        },
        {
          label: '以上水果任选其一（包邮）',
          type: 'info',
          value: '橘子'
        },
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods:{
    clickMenu(v){
      console.log(v)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
p{
  color: #fff;
  background: #ff5d5d;
  margin: 0;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
</style>
