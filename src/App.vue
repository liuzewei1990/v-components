<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <button @click="showActionsheet=true">show ios</button>
    <actionsheet theme="ios" :show-cancel="false" cancel-text="关闭" v-model="showActionsheet" :menus="menus" @on-click-menu="clickMenu">
    </actionsheet>

    <button @click="showActionsheet1=true">show ios header show-cancel</button>
    <actionsheet theme="ios" :show-cancel="true" cancel-text="关闭" v-model="showActionsheet1" :menus="menus1" @on-click-menu="clickMenu">
        <p slot="header" style="text-align:center;">请选择</p>
    </actionsheet>

    <button @click="showActionsheet2=true">show android header</button>
    <actionsheet theme="android" v-model="showActionsheet2" :menus="menus1" @on-click-menu="clickMenu">
      <p slot="header" style="text-align:center;">请选择</p>
    </actionsheet>

    <button @click="showActionsheet3=true">show android</button>
    <actionsheet theme="android" v-model="showActionsheet3" :menus="menus" @on-click-menu="clickMenu"></actionsheet>


    <button @click="showToast">show toast</button>
    <button @click="iosAlert">show iosAlert</button>
    <button @click="iosConfirm">show iosConfirm</button>
    <button @click="iosPrompt">show iosPrompt</button>
    <button @click="iosRemind">show iosRemind</button>


    <cell title="cell组件" :borderLine="true" :topLine="true" style="text-align:center;margin-top:50px;"></cell>
    <cell title="请选择" :topLine="true" desc="我是描述"></cell>
    <cell title="请选择" :topLine="true">
      <span slot="desc" style="color:red;">我是通过slot插槽形式进来的</span>
    </cell>
    <cell title="请上传头像" :topLine="true" desc="" :isLink="true">
      <img slot="desc" width="50" :src="require('./assets/default_user_header.png')" alt="">
    </cell>
    <cell title="请选择地址" :topLine="true" desc="北京市-北京市-朝阳区" :isLink="true">
      <img slot="icon" width="25" :src="require('./assets/no_address.png')" alt="">
    </cell>
    <cell title="匿名用户" :topLine="true" :borderLine="true" desc="2018-11-19">
      <img slot="icon" width="30" style="margin-right:10px;" :src="require('./assets/default_user_header.png')" alt="">
    </cell>
    <cell title="匿名用户" :topLine="true" :borderLine="true" desc="我是描述" :isLink="true">
      <img slot="icon" width="30" style="margin-right:10px;" :src="require('./assets/no_address.png')" alt="">
      <img slot="desc" width="50" :src="require('./assets/default_user_header.png')" alt="">
    </cell>



    <cell title="button组件" :borderLine="true" :topLine="true" style="text-align:center;margin-top:50px;"></cell>
    <v-button type="default" mini>mini</v-button>
    <v-button type="default" mini recta>mini</v-button>
    <v-button type="default">default</v-button>
    <v-button type="default" :disabled="true" :show-loading="true">禁用</v-button>
    <v-button type="default" recta>default</v-button>
    <v-button type="default" plain>default</v-button>

    <v-button type="primary" mini>mini</v-button>
    <v-button type="primary" mini recta>mini</v-button>
    <v-button type="primary">primary</v-button>
    <v-button type="primary" :disabled="true" :show-loading="true">禁用</v-button>
    <v-button type="primary" recta>primary</v-button>
    <v-button type="primary" plain>primary</v-button>

    <v-button type="warn" mini>mini</v-button>
    <v-button type="warn" mini recta>mini</v-button>
    <v-button type="warn">warn</v-button>
    <v-button type="warn" :disabled="true" :show-loading="true">禁用</v-button>
    <v-button type="warn" recta>warn</v-button>
    <v-button type="warn" plain>warn</v-button>

    <v-button style="border-radius:500px;" plain>border-radius:500px;</v-button>


    <cell title="badge徽章组件" :borderLine="true" :topLine="true" style="text-align:center;margin-top:50px;"></cell>
    <badge></badge>
    <badge text="999999"></badge>
    <cell title="请选择" :topLine="true" :borderLine="true">
      <badge slot="desc" text="11"></badge>
      <badge slot="icon" style="margin-right:10px;" text="New"></badge>
    </cell>


    <cell title="checker组件-单选" :desc="radio.checked" :borderLine="true" :topLine="true" style="margin-top:20px;"></cell>
    <checker v-model="radio.checked" type="radio" :radio-required="true" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
        <checker-item v-for="(_item,i) in radio.valueList" :key="i" :value="_item" :disabled="_item.disabled">{{_item.value}}</checker-item>
    </checker>

    <cell title="checker组件-多选" :desc="checkbox.checked" :borderLine="true" :topLine="true" style="margin-top:20px;"></cell>
    <checker v-model="checkbox.checked" type="checkbox" :max="3" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
        <checker-item v-for="(_item,i) in checkbox.valueList" :key="i" :value="_item" :disabled="_item.disabled">{{_item.value}}</checker-item>
    </checker>

  </div>
</template>

<script>
import actionsheet from "./components/v-actionsheet/actionsheet";
import cell from "./components/v-cell";
import button from "./components/v-button";
import badge from "./components/v-badge";
import {Checker, CheckerItem} from "./components/v-checker";
export default {
  name: 'app',
  components:{actionsheet,cell,"v-button":button,badge,Checker, CheckerItem},
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
      msg: 'Welcome to Your Vue.js App',
      radio:{
        checked:{},
        valueList:[
          {
            value:"苹果",
          },
          {
            value:"香蕉",
          },
          {
            value:"甘蔗",
          },
          {
            value:"柚子",
            disabled:true,
          },
        ]
      },
      checkbox:{
        checked:[],
        valueList:[
          {
            value:"苹果",
          },
          {
            value:"香蕉",
          },
          {
            value:"橘子",
          },
          {
            value:"甘蔗",
          },
          {
            value:"柚子",
            disabled:true,
          },
          {
            value:"西瓜",
          },
        ]
      }
    }
  },
    methods:{
      clickMenu(v){
        console.log(v)
      },
      showToast(){
        this.$toast("更新成功")
      },
      iosAlert(){
        this.$iosAlert({
            title: "提示",
            text: "确认退出？",
            input: false,
            placeholder: '',
            cancelText: '取消',
            okText: '确认',
            remindDuration: 650,
            appendChildClass: "",
        })
      },
      iosConfirm(){
          this.$iosConfirm({
            title: "提示",
            text: "确认退出？",
            input: false,
            placeholder: '',
            cancelText: '取消',
            okText: '确认',
            remindDuration: 650,
            appendChildClass: "",
        })
      },
      iosPrompt(){
          this.$iosPrompt({
            title: "提示",
            text: "请输入关闭原因",
            input: false,
            placeholder: '',
            cancelText: '取消',
            okText: '确认',
            remindDuration: 650,
            appendChildClass: "",
        }).then(()=>{
          this.iosRemind();
        })
      },
      iosRemind(){
        this.$iosRemind({
            title: "提示",
            text: "订单已关闭",
            input: false,
            placeholder: '',
            cancelText: '取消',
            okText: '确认',
            remindDuration: 650,
            appendChildClass: "",
        })
      },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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

p{
  color: #fff;
  background: #ff5d5d;
  margin: 0;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}

.checker-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  margin:0 2px;
}
.checker-item-selected {
  border: 1px solid green;
}
.checker-item-disabled{
  background: #efefef;
}
</style>
