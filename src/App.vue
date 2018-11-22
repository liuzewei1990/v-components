<template>
    <div id="app">
        <Header class="header-fix" title="Vue移动端常用组件库" :right-options="{showMore:true}"></Header>
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

        <button @click="showMaskBox">show MaskBox</button>
        <MaskBox v-model="maskBox" :show-mask="true" :show-loading="maskBoxLoading">
            <img width="100" :src="IMG_DEMO" alt="">
        </MaskBox>
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
            <img slot="desc" width="50" style="border-radius:50%;" :src="IMG_DEMO" alt="">
        </Cell>
        <Cell title="请选择地址" :topLine="true" desc="北京市-北京市-朝阳区" :isLink="true">
            <img slot="icon" width="30" style="margin-right:10px;" :src="IMG_DEMO" alt="">
        </Cell>
        <Cell title="匿名用户" :topLine="true" :borderLine="true" desc="2018-11-19">
            <img slot="icon" width="30" style="margin-right:10px;" :src="IMG_DEMO" alt="">
        </Cell>
        <Cell title="匿名用户" :topLine="true" :borderLine="true" desc="我是描述" :isLink="true">
            <img slot="icon" width="30" style="margin-right:10px;" :src="IMG_DEMO" alt="">
            <img slot="desc" width="50" style="border-radius:50%;" :src="IMG_DEMO" alt="">
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
        <Cell title="请选择" :topLine="true" :borderLine="true" :isLink="true">
            <Badge slot="desc" text="11"></Badge>
            <Badge slot="icon" style="margin-right:10px;" text="New"></Badge>
        </Cell>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Checker组件" style="text-align:center;margin-top:50px;"></Cell>
        <Cell title="单选" :desc="radio.checked"></Cell>
        <Checker v-model="radio.checked" type="radio" :radio-required="true" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
            <CheckerItem v-for="(_item,i) in radio.valueList" :key="i" :value="_item" :disabled="_item.disabled">{{_item.value}}</CheckerItem>
        </Checker>
        <Cell title="多选" :desc="checkbox.checked"></Cell>
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
        <br>
        <Swiper height="90px" dotsPosition="center" :auto="true">
            <SwiperItem v-for="(item,index) in mediaList" :key="index">
                <Media :pic="item.imgUrl" :title="item.title" :desc="item.desc"></Media>
            </SwiperItem>
        </Swiper>
        <Swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
            <SwiperItem>
                <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
            </SwiperItem>
            <SwiperItem>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </SwiperItem>
            <SwiperItem>
                <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
            </SwiperItem>
            <SwiperItem>
                <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </SwiperItem>
            <SwiperItem>
                <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </SwiperItem>
            <SwiperItem>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </SwiperItem>
        </Swiper>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Goods组件" style="text-align:center;margin-top:50px;"></Cell>
        <div class="goods-list clearfix">
            <Goods v-for="(item,index) in goods.slice(0,2)" :key="index" :item="item"></Goods>
        </div>
        <div class="goods-list clearfix">
            <Goods v-for="(item,index) in goods.slice(0,2)" :key="index" :item="item">
                <Badge slot="badge" style="margin-right:5px;" text="京东物流"></Badge>
                <Button slot="actionIcon" type="default" mini recta style="margin-right:8px;line-height: 25px;">看相似</Button>
            </Goods>
        </div>
        <div class="goods-list clearfix">
            <Goods v-for="(item,index) in goods" :key="index" :item="item" :isShowBrief="false" style="width:33.33%;"></Goods>
        </div>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Tab组件" style="text-align:center;margin-top:50px;"></Cell>
        <Tab class="tabs" :animate="false">
            <TabItem :selected="index==0" v-for="(item,index) in tabList" :key="index">{{item}}</TabItem>
        </Tab>
        <br>
        <Tab class="tabs" :animate="true" bar-position="top">
            <TabItem :selected="index==0" v-for="(item,index) in tabList" :key="index">{{item}}</TabItem>
        </Tab>
        <br>
        <Tab class="tabs" :animate="true" :scroll-threshold="5" :line-width="2" bar-active-color="#f230cd" active-color="#f230cd" custom-bar-width="20px">
            <TabItem :selected="index==0" :disabled="index==3" v-for="(item,index) in tabList" :key="index">{{item}}</TabItem>
        </Tab>
        <br>
        <Tab class="tabs" :animate="true" v-model="bindTabIndex" :scroll-threshold="5" :line-width="2" bar-active-color="#f230cd" active-color="#f230cd" custom-bar-width="20px">
            <TabItem :selected="index==0" v-for="(item,index) in tabList" :key="index">{{item}}</TabItem>
        </Tab>
        <Swiper height="90px" v-model="bindTabIndex" :auto="true" dotsPosition="center">
            <SwiperItem v-for="(item,index) in tabList" :key="index">
                <Media :pic="IMG_DEMO" :title="item" :desc="item"></Media>
            </SwiperItem>
        </Swiper>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Header组件" style="text-align:center;margin-top:50px;"></Cell>
        <Header title="个人中心" :left-options="{showBack:false}"></Header>
        <br>
        <Header title="个人中心"></Header>
        <br>
        <Header title="个人中心" :left-options="{showBack:true,backText:'后退'}">
            <span slot="right">编辑</span>
        </Header>
        <br>
        <br>
        <br>
        <br>
        <Cell title="Number组件" style="text-align:center;margin-top:50px;"></Cell>
        <Number v-model="number" :min="0" :max="10" :step="2" :fillable="true" width="100px" button-style="square"></Number>
        <Number v-model="number" :min="0" :max="10" :step="0.2" :fillable="false" width="50px" button-style="round"></Number>
        <Cell title="购买数量" :topLine="true">
            <Number slot="desc" v-model="number" :min="0" :max="10" :step="1" :fillable="false" width="50px" button-style="square"></Number>
        </Cell>
        <Cell :topLine="true">
            <span slot="desc">个</span>
            <Number slot="icon" v-model="number" :min="0" :max="10" :step="1" :fillable="false" width="50px" button-style="square"></Number>
        </Cell>
        <br>
        <br>
        <br>
        <br>
        <Cell title="DateTime组件" style="text-align:center;margin-top:50px;"></Cell>
        <Cell title="日期+时间" :desc="dateTime1 || '未设置'" :isLink="true" @click.native="$refs.DateTime1.show()"></Cell>
        <DateTime ref="DateTime1" type="dateTime" :showTodayButton="false" :value="dateTime1" color='#f6662e' @confirm="dateTimeSelect1"></DateTime>
        <Cell title="日期" :desc="dateTime2 || '未设置'" :isLink="true" @click.native="$refs.DateTime2.show()"></Cell>
        <DateTime ref="DateTime2" type="date" :showTodayButton="false" :value="dateTime2" color='#f6662e' @confirm="dateTimeSelect2"></DateTime>
        <Cell title="时间" :desc="dateTime3 || '未设置'" :isLink="true" @click.native="$refs.DateTime3.show()"></Cell>
        <DateTime ref="DateTime3" type="time" :showTodayButton="false" :value="dateTime3" color='#f6662e' @confirm="dateTimeSelect3"></DateTime>
        <Cell title="年" :desc="dateTime4 || '未设置'" :isLink="true" @click.native="$refs.DateTime4.show()"></Cell>
        <DateTime ref="DateTime4" type="year" :showTodayButton="false" :value="dateTime4" color='#f6662e' @confirm="dateTimeSelect4"></DateTime>
        <Cell title="月" :desc="dateTime5 || '未设置'" :isLink="true" @click.native="$refs.DateTime5.show()"></Cell>
        <DateTime ref="DateTime5" type="month" :showTodayButton="false" :value="dateTime5" color='#f6662e' @confirm="dateTimeSelect5"></DateTime>
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
import { Swiper, SwiperItem } from "./components/v-swiper";
import Goods from "./components/v-goods";
import { Tab, TabItem } from './components/v-tab';
import Header from './components/v-header';
import Number from './components/v-number';
import MaskBox from './components/v-maskBox';
import DateTime from 'vue-date-time-m';
export default {
    name: 'app',
    components: { Actionsheet, Cell, Button, Badge, Checker, CheckerItem, Grid, GridItem, Popup, LoadMore, Media, Swiper, SwiperItem, Goods, Tab, TabItem, Header, Number,MaskBox,DateTime },
    data() {
        return {
            IMG_DEMO: IMG_DEMO,
            showActionsheet: false,
            showActionsheet1: false,
            showActionsheet2: false,
            showActionsheet3: false,
            showPopup1: false,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
            maskBox:false,
            maskBoxLoading:false,
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
            ],
            goods: [
                {
                    picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
                    name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
                    brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
                    retailPrice: "88.88"
                },
                {
                    picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
                    name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
                    retailPrice: "88.88"
                },
                {
                    picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
                    name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
                    retailPrice: "88.88"
                },
            ],
            tabList: ["全部", "待付款", "待发货", "待收货", "待评价"],
            bindTabIndex: 0,
            number: 0,
            dateTime1:"",
            DateTime2:"",
            dateTime3:"",
            dateTime4:"",
            dateTime5:"",
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
        showMaskBox(){
            this.maskBox = this.maskBoxLoading = true;
            setTimeout(() => {
                this.maskBoxLoading = false;
            }, 1000);
        },
        dateTimeSelect1(val) {
            this.dateTime1 = val;
        },
        dateTimeSelect2(val) {
            this.dateTime2 = val;
        },
        dateTimeSelect3(val) {
            this.dateTime3 = val;
        },
        dateTimeSelect4(val) {
            this.dateTime4 = val;
        },
        dateTimeSelect5(val) {
            this.dateTime5 = val;
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
  padding: 10px;
  box-sizing: border-box;

  background: #f2f2f2;
}
.clearfix:after {
  clear: both;
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
* {
  margin: 0;
  padding: 0;
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
  background: #fff;
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
  border: 1px solid red;
}
.checker-item-disabled {
  background: #efefef;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  background: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.goods-list {
}
.header-fix {
  position: fixed !important;
  width: 100%;
  top: 0;
  left: 0;
  background: #fafafa;
  zoom: 1;
  z-index: 1000;
}
</style>
