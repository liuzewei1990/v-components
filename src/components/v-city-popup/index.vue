<template>
        <Popup v-model="isVisibile" @on-show="$emit('on-show')" @on-hide="$emit('on-hide')" position="bottom" height="auto" :show-mask="true" :hide-on-blur="true" :is-transparent="false">

                <div class="city-nav">
                        <a :class="{crt:currNavSelectdIndex == index}" v-for="(item,index) in selectdCityVal" :key="index" @click="handleClickNav(index)" href="javascript:void(0);">{{item.name}}</a>
                </div>
                <div class="city-container">
                        <ul class="city-content" :class="currNavSelectdIndex==2?'cityselect-next':'cityselect-prev'">
                                <li class="city-item">
                                        <div class="city-item-box">
                                                <a :class="{crt:selectdCityVal[0] && selectdCityVal[0].code == item.code}" @click="handleClick_sheng(item,index)" href="javascript:void(0);" v-for="(item,index) in shengData" :key="index">{{item.name}}</a>
                                        </div>
                                </li>
                                <li class="city-item">
                                        <div class="city-item-box">
                                                <a :class="{crt:selectdCityVal[1] && selectdCityVal[1].code == item.code}" @click="handleClick_shi(item,index)" href="javascript:void(0);" v-for="(item,index) in shiData" :key="index">{{item.name}}</a>
                                        </div>
                                </li>
                                <li class="city-item">
                                        <div class="city-item-box">
                                                <a :class="{crt:selectdCityVal[2] && selectdCityVal[2].code == item.code}" @click="handleClick_qu(item,index)" href="javascript:void(0);" v-for="(item,index) in quData" :key="index">{{item.name}}</a>
                                        </div>
                                </li>
                        </ul>
                </div>
        </Popup>
</template>

<script>
import Popup from '../v-popup'
import cityData from './citydata.json'
export default {
        components: { Popup },
        props: {
                initValue: {
                        type: Array,
                        default: () => { return []; }
                }
        },
        data() {
                return {
                        isVisibile: false,
                        currNavSelectdIndex: 0,
                        cityData: cityData,
                        shengData: [],
                        shiData: [],
                        quData: [],
                        selectdCityVal: [],
                }
        },
        created() {
                this.$emit("confirm", this.initValue);
        },
        methods: {
                init() {
                        this.shengData = this.cityData;
                        if (this.selectdCityVal.length == 0) {
                                this.shiData = [];
                                this.quData = [];
                        }
                        if (this.selectdCityVal.length > 0) {
                                this.selectdCityVal[0] && (this.shiData = this.shengData.find(item => item.code == this.selectdCityVal[0].code).children);
                                this.selectdCityVal[1] && (this.quData = this.shiData.find(item => item.code == this.selectdCityVal[1].code).children);
                        }
                        if (this.selectdCityVal.length < 3) {
                                this.selectdCityVal.push({ name: "请选择" })
                        }
                },
                open() {
                        this.isVisibile = true;
                        this.selectdCityVal = JSON.parse(JSON.stringify(this.initValue));
                        this.init();
                        this.handleClickNav(this.selectdCityVal.length - 1);
                        console.info("初始化:city数据");
                },
                handleClickNav(index) {
                        this.currNavSelectdIndex = index;
                },
                handleClick_sheng(item, index) {
                        if (this.selectdCityVal[0].code == item.code) return;
                        this.selectdCityVal = [];
                        this.selectdCityVal[0] = { name: item.name, code: item.code };
                        this.handleClickNav(1);
                        this.init();
                },
                handleClick_shi(item, index) {
                        if (this.selectdCityVal[1].code == item.code) return;
                        this.selectdCityVal.splice(2, 1);
                        this.selectdCityVal[1] = { name: item.name, code: item.code };
                        this.handleClickNav(2);
                        this.init();
                },
                handleClick_qu(item, index) {
                        if (this.selectdCityVal[2].code == item.code) return;
                        this.selectdCityVal[2] = { name: item.name, code: item.code };
                        this.close();
                },
                close() {
                        this.$emit("confirm", this.selectdCityVal);
                        this.isVisibile = false;
                }
        }
}
</script>

<style lang="less" scoped>
.city-nav {
        width: 100%;
        overflow: hidden;
        display: flex;
        background: #fff;
        padding-left: 10px;
        box-sizing: border-box;
        position: relative;
        &::before {
                content: "";
                position: absolute;
                z-index: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #d3d3d3;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
        }
        a {
                font-size: 13px;
                color: #222;
                display: block;
                height: 40px;
                line-height: 46px;
                padding: 0 10px;
                position: relative;
                margin-right: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 40%;
        }
        a.crt {
                color: #f23030;
                &:after {
                        content: "";
                        width: 100%;
                        height: 2px;
                        background-color: #f23030;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        z-index: 2;
                }
        }
}

.city-container {
        height: 350px;
        overflow: hidden;
        .city-content {
                list-style-type: none;
                padding: 0;
                display: flex;
                width: 100%;
                height: 100%;
                transition: transform 0.3s, -webkit-transform 0.3s;
        }
        .cityselect-prev {
                transform: translate(0, 0);
        }
        .cityselect-next {
                transform: translate(-50%, 0);
        }
        .city-item {
                display: inline-block;
                margin: 0;
                width: 50%;
                display: block;
                height: inherit;
                width: 50%;
                flex: 0 0 50%;
                overflow-y: auto;
                overflow-x: hidden;
                // -webkit-overflow-scrolling: touch;
                background-color: #fff;
        }

        .city-item-box {
                width: 100%;
                // height: 100%;
                display: block;
                padding: 0 10px 20px 20px;
                box-sizing: border-box;
                a {
                        color: #333;
                        font-size: 13px;
                        height: 40px;
                        // line-height: 40px;
                        // overflow: hidden;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        position: relative;
                        z-index: 1;
                        padding-right: 10px;
                        box-sizing: border-box;
                        &::before {
                                content: "";
                                position: absolute;
                                z-index: 0;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 1px;
                                border-bottom: 1px solid #e8e8e8;
                                -webkit-transform: scaleY(0.5);
                                transform: scaleY(0.5);
                                -webkit-transform-origin: 0 100%;
                                transform-origin: 0 100%;
                        }
                }
                a.crt {
                        color: #f23030;
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTOQ6OtQqKuQ4O/8AAOM4O+Q4POI4OuM4O+Q4O+M4O+M5POQ4O+M4O+U4OuU2POQ4POQ4O+Q5O+Q5POG6XjYAAAATdFJOUwAvBl4BstwRzseW9XvrRR2+iVGqKQ+qAAAAaUlEQVQY023PSQ6AIBBEUSZpBhGTuv9dnRAiVq869VdPKXZmj3RXCTxYlMp2nbGxXTxWtrsFi2NhhRe2b8ia7bXAUllEam+M8pWZNyAIlUkY5SsbZZa95S9rhcjuQmVX4bKzdNlcuuy5A/z7BLUpU+pnAAAAAElFTkSuQmCC);
                        background-size: 12px auto;
                        background-position: right 0px bottom 15px;
                        background-repeat: no-repeat;
                }
        }

        .city-item:nth-child(2n) {
                background-color: #f5f5f5;
        }
}
</style>
