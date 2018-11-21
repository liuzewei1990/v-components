<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

        <button @click="showActionsheet=true">show ios</button>
        <Actionsheet theme="ios" :show-cancel="false" cancel-text="关闭" v-model="showActionsheet" :menus="menus" @on-click-menu="clickMenu">
        </Actionsheet>

        <button @click="showActionsheet1=true">show ios header show-cancel</button>
        <Actionsheet theme="ios" :show-cancel="true" cancel-text="关闭" v-model="showActionsheet1" :menus="menus1" @on-click-menu="clickMenu">
            <p class="actionsheet-header" slot="header" style="text-align:center;">请选择</p>
        </Actionsheet>

        <button @click="showActionsheet2=true">show android header</button>
        <Actionsheet theme="android" v-model="showActionsheet2" :menus="menus1" @on-click-menu="clickMenu">
            <p class="actionsheet-header" slot="header" style="text-align:center;">请选择</p>
        </Actionsheet>

        <button @click="showActionsheet3=true">show android</button>
        <Actionsheet theme="android" v-model="showActionsheet3" :menus="menus" @on-click-menu="clickMenu"></Actionsheet>

        <button @click="showPopup1=true">show bottom Popup</button>
        <Popup v-model="showPopup1" position="bottom" height="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false">
            <p>内容</p>
        </Popup>
        <button @click="showPopup2=true">show top Popup</button>
        <Popup v-model="showPopup2" position="top" height="40px" :show-mask="true" :hide-on-blur="true" :is-transparent="false">
            <p>内容</p>
        </Popup>
        <button @click="showPopup3=true">show left Popup</button>
        <Popup v-model="showPopup3" position="left" width="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false">
            <p>内容</p>
        </Popup>
        <button @click="showPopup4=true">show right Popup</button>
        <Popup v-model="showPopup4" position="right" width="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false">
            <p>内容</p>
        </Popup>

        <button @click="showToast">show toast</button>
        <button @click="iosAlert">show iosAlert</button>
        <button @click="iosConfirm">show iosConfirm</button>
        <button @click="iosPrompt">show iosPrompt</button>
        <button @click="iosRemind">show iosRemind</button>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Cell组件" style="text-align:center;margin-top:50px;"></Cell>
        <Cell title="请选择" :topLine="true" desc="我是描述"></Cell>
        <Cell title="请选择" :topLine="true">
            <span slot="desc" style="color:red;">我是通过slot插槽形式进来的</span>
        </Cell>
        <Cell title="请上传头像" :topLine="true" desc="" :isLink="true">
            <img slot="desc" width="50" :src="require('./assets/default_user_header.png')" alt="">
        </Cell>
        <Cell title="请选择地址" :topLine="true" desc="北京市-北京市-朝阳区" :isLink="true">
            <img slot="icon" width="25" :src="require('./assets/no_address.png')" alt="">
        </Cell>
        <Cell title="匿名用户" :topLine="true" :borderLine="true" desc="2018-11-19">
            <img slot="icon" width="30" style="margin-right:10px;" :src="require('./assets/default_user_header.png')" alt="">
        </Cell>
        <Cell title="匿名用户" :topLine="true" :borderLine="true" desc="我是描述" :isLink="true">
            <img slot="icon" width="30" style="margin-right:10px;" :src="require('./assets/no_address.png')" alt="">
            <img slot="desc" width="50" :src="require('./assets/default_user_header.png')" alt="">
        </Cell>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Button组件" style="text-align:center;margin-top:50px;"></Cell>
        <Button type="default" mini>mini</Button>
        <Button type="default" mini recta>mini</Button>
        <Button type="default">default</Button>
        <Button type="default" :disabled="true" :show-loading="true">禁用</Button>
        <Button type="default" recta>default</Button>
        <Button type="default" plain>default</Button>

        <Button type="primary" mini>mini</Button>
        <Button type="primary" mini recta>mini</Button>
        <Button type="primary">primary</Button>
        <Button type="primary" :disabled="true" :show-loading="true">禁用</Button>
        <Button type="primary" recta>primary</Button>
        <Button type="primary" plain>primary</Button>

        <Button type="warn" mini>mini</Button>
        <Button type="warn" mini recta>mini</Button>
        <Button type="warn">warn</Button>
        <Button type="warn" :disabled="true" :show-loading="true">禁用</Button>
        <Button type="warn" recta>warn</Button>
        <Button type="warn" plain>warn</Button>
        <Button style="border-radius:500px;" plain>border-radius:500px;</Button>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Badge徽章组件" style="text-align:center;margin-top:50px;"></Cell>
        <Badge></Badge>
        <Badge text="999999"></Badge>
        <Cell title="请选择" :topLine="true" :borderLine="true">
            <Badge slot="desc" text="11"></Badge>
            <Badge slot="icon" style="margin-right:10px;" text="New"></Badge>
        </Cell>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Checker组件" style="text-align:center;margin-top:50px;"></Cell>
        <Cell title="单选" :desc="radio.checked" style="margin-top:20px;"></Cell>
        <Checker v-model="radio.checked" type="radio" :radio-required="true" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
            <CheckerItem v-for="(_item,i) in radio.valueList" :key="i" :value="_item" :disabled="_item.disabled">{{_item.value}}</CheckerItem>
        </Checker>
        <Cell title="多选" :desc="checkbox.checked" style="margin-top:20px;"></Cell>
        <Checker v-model="checkbox.checked" type="checkbox" :max="3" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
            <CheckerItem v-for="(_item,i) in checkbox.valueList" :key="i" :value="_item" :disabled="_item.disabled">{{_item.value}}</CheckerItem>
        </Checker>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Grid组件" style="text-align:center;margin-top:50px;"></Cell>
        <Grid :no-border="false" :show-lr-borders="true" :show-vertical-dividers="true" :cols="3">
            <GridItem :label="item.name" :icon="item.iconUrl" v-for="(item,index) in gridList" :key="index">
                <!-- <img slot="icon" :src="item.iconUrl"> -->
            </GridItem>
        </Grid>
        <br>
        <br>
        <br>
        <br>
        <Cell title="LoadMore组件" style="text-align:center;margin-top:50px;"></Cell>
        <LoadMore tip="努力加载中" :show-loading="true"></LoadMore>
        <LoadMore tip="暂无数据" :show-loading="false"></LoadMore>
        <LoadMore tip="" :show-loading="false"></LoadMore>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Media组件" style="text-align:center;margin-top:50px;"></Cell>
        <Media v-for="(item,index) in mediaList" :key="index" :pic="item.imgUrl" :title="item.title" :desc="item.desc"></Media>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Swiper组件" style="text-align:center;margin-top:50px;"></Cell>
        <Swiper :list="swiperList" height="200px"></Swiper>
    </div>
</template>

<script>
let IMG_DEMO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==";
import Actionsheet from "./components/v-actionsheet/actionsheet";
import Cell from "./components/v-Cell";
import Button from "./components/v-button";
import Badge from "./components/v-badge";
import { Checker, CheckerItem } from "./components/v-checker";
import { Grid, GridItem } from "./components/v-grid";
import Popup from "./components/v-popup";
import LoadMore from "./components/v-loadMore";
import Media from "./components/v-media";
import { Swiper } from "./components/v-swiper";
export default {
    name: 'app',
    components: { Actionsheet, Cell, Button, Badge, Checker, CheckerItem, Grid, GridItem, Popup, LoadMore, Media, Swiper },
    data() {
        return {

            showActionsheet: false,
            showActionsheet1: false,
            showActionsheet2: false,
            showActionsheet3: false,
            showPopup1: false,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
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
            radio: {
                checked: {},
                valueList: [
                    {
                        value: "苹果",
                    },
                    {
                        value: "香蕉",
                    },
                    {
                        value: "甘蔗",
                    },
                    {
                        value: "柚子",
                        disabled: true,
                    },
                ]
            },
            checkbox: {
                checked: [],
                valueList: [
                    {
                        value: "苹果",
                    },
                    {
                        value: "香蕉",
                    },
                    {
                        value: "橘子",
                    },
                    {
                        value: "甘蔗",
                    },
                    {
                        value: "柚子",
                        disabled: true,
                    },
                    {
                        value: "西瓜",
                    },
                ]
            },
            gridList: [
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
                {
                    name: "苹果",
                    iconUrl: IMG_DEMO
                },
            ],
            mediaList: [
                {
                    imgUrl: IMG_DEMO,
                    title: "标题一",
                    desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                },
                {

                    imgUrl: IMG_DEMO,
                    title: "标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一",
                    desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状星球有一定的形状星球有一定的形状，有自己的运行轨道。"
                },
                {

                    imgUrl: IMG_DEMO,
                    title: "标题一",
                    desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
                },
            ],
            swiperList: [
                {
                    title: "标题1",
                    img: IMG_DEMO,
                },
                {
                    title: "标题2",
                    img: IMG_DEMO,
                },
                {
                    title: "标题3",
                    img: IMG_DEMO,
                },
            ]
        }
    },
    methods: {
        clickMenu(v) {
            console.log(v)
        },
        showToast() {
            this.$toast("更新成功")
        },
        iosAlert() {
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
        iosConfirm() {
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
        iosPrompt() {
            this.$iosPrompt({
                title: "提示",
                text: "请输入关闭原因",
                input: false,
                placeholder: '',
                cancelText: '取消',
                okText: '确认',
                remindDuration: 650,
                appendChildClass: "",
            }).then(() => {
                this.iosRemind();
            })
        },
        iosRemind() {
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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

.actionsheet-header {
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
  margin: 0 2px;
}
.checker-item-selected {
  border: 1px solid green;
}
.checker-item-disabled {
  background: #efefef;
}
</style>
