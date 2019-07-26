<template>
        <div id="app">
                <Header class="header-fix" title="Vue移动端常用组件库" :right-options="{showMore:true}"></Header>
                <h1>{{ msg }}</h1>
                <h2>Essential Links</h2>

                <Button mini recta @click.native.native="showActionsheet=true">show ios</Button>
                <Actionsheet theme="ios" :show-cancel="false" cancel-text="关闭" v-model="showActionsheet" :menus="menus" @on-click-menu="clickMenu" @on-after-show="ModalHelper.open" @on-after-hide="ModalHelper.close">
                </Actionsheet>

                <Button mini recta @click.native.native="showActionsheet1=true">show ios header show-cancel</Button>
                <Actionsheet theme="ios" :show-cancel="true" cancel-text="关闭" v-model="showActionsheet1" :menus="menus1" @on-click-menu="clickMenu" @on-after-show="ModalHelper.open" @on-after-hide="ModalHelper.close">
                        <p class="actionsheet-header" slot="header" style="text-align:center;">请选择</p>
                </Actionsheet>

                <Button mini recta @click.native="showActionsheet2=true">show android header</Button>
                <Actionsheet theme="android" v-model="showActionsheet2" :menus="menus1" @on-click-menu="clickMenu" @on-after-show="ModalHelper.open" @on-after-hide="ModalHelper.close">
                        <p class="actionsheet-header" slot="header" style="text-align:center;">请选择</p>
                </Actionsheet>

                <Button mini recta @click.native="showActionsheet3=true">show android</Button>
                <Actionsheet theme="android" v-model="showActionsheet3" :menus="menus" @on-click-menu="clickMenu" @on-after-show="ModalHelper.open" @on-after-hide="ModalHelper.close"></Actionsheet>

                <Button mini recta @click.native="showPopup1=true">show bottom Popup</Button>
                <Popup v-model="showPopup1" position="bottom" height="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
                        <p>内容</p>
                </Popup>
                <Button mini recta @click.native="showPopup2=true">show top Popup</Button>
                <Popup v-model="showPopup2" position="top" height="140px" :show-mask="true" :hide-on-blur="true" :is-transparent="false" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
                        <p>内容</p>
                </Popup>
                <Button mini recta @click.native="showPopup3=true">show left Popup</Button>
                <Popup v-model="showPopup3" position="left" width="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
                        <p>内容</p>
                </Popup>
                <Button mini recta @click.native="showPopup4=true">show right Popup</Button>
                <Popup v-model="showPopup4" position="right" width="240px" :show-mask="true" :hide-on-blur="true" :is-transparent="false" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
                        <p>内容</p>
                </Popup>

                <Button mini recta @click.native="showToast">show toast</Button>
                <Button mini recta @click.native="iosAlert">show iosAlert</Button>
                <Button mini recta @click.native="iosModel">show iosModel</Button>
                <Button mini recta @click.native="iosConfirm">show iosConfirm</Button>
                <Button mini recta @click.native="iosPrompt">show iosPrompt</Button>
                <Button mini recta @click.native="iosRemind">show iosRemind</Button>

                <Button mini recta @click.native="showMaskBox">show MaskBox</Button>
                <MaskBox v-model="maskBox" :show-loading="maskBoxLoading" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
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
                <Button type="warn"><i class="icon-tip" style="margin-right:5px;position: relative;top: 1px;"></i>说明</Button>
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
                <Swiper auto height="30px" :loop="true" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
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
                
                <span style="font-size:13px;">以下是transition-group版，几行代码即可实现</span>
                <MsgScroll class="text-scroll"></MsgScroll>
                <MsgScrollX class="text-scroll" text="荧光屏文字荧光屏文字荧光屏文字荧光屏文字荧光屏文字荧光屏文字1" :nbspNum="50"></MsgScrollX>
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
                <br>
                <br>
                <br>
                <br>
                <Cell title="City组件" style="text-align:center;margin-top:50px;"></Cell>
                <Cell title="请选择地区" :desc="cityValue" :isLink="true" @click.native="$refs.City.open()"></Cell>
                <City :city="cityData" :init-value="defaultCityVal" @confirm="cityConfirm" ref="City"></City>

                <Cell title="请选择地区" :desc="cityValue1 || '请选择收货地址'" :isLink="true" @click.native="$refs.CityPopup1.open()"></Cell>
                <CityPopup ref="CityPopup1" :init-value="defaultCityVal1" @confirm="cityConfirm1" @on-show="ModalHelper.open" @on-hide="ModalHelper.close"></CityPopup>

                <Cell title="请选择地区" :desc="cityValue2 || '请选择收货地址'" :isLink="true" @click.native="$refs.CityPopup2.open()"></Cell>
                <CityPopup ref="CityPopup2" :init-value="defaultCityVal2" @confirm="cityConfirm2" @on-show="ModalHelper.open" @on-hide="ModalHelper.close"></CityPopup>
                <br>
                <br>
                <br>
                <br>
                <Cell title="CheckIcon组件" style="text-align:center;margin-top:50px;"></Cell>
                <CheckIcon :value.sync="checkIcon1" flex-direction="column" :scale="1">
                        <span @click="checkIcon1 = !checkIcon1" style="font-size:12px;">我同意入网协议</span>
                </CheckIcon>
                <br />
                <br />
                <CheckIcon :value.sync="checkIcon1" flex-direction="column-reverse" :scale="1">
                        <span @click="checkIcon1 = !checkIcon1" style="font-size:12px;">我同意入网协议</span>
                </CheckIcon>
                <br />
                <CheckIcon slot="desc" :value.sync="checkIcon2" color="#ff9c00">
                        <span @click="checkIcon2 = !checkIcon2" style="color:#ff9c00;">同意不？({{checkIcon2}})</span>
                </CheckIcon>
                <br />
                <CheckIcon slot="desc" :value.sync="checkIcon2" color="#ff9c00" flex-direction="row-reverse">
                        <span @click="checkIcon2 = !checkIcon2" style="color:#ff9c00;">同意不？({{checkIcon2}})</span>
                </CheckIcon>
                <br />
                <CheckIcon slot="desc" :value.sync="checkIcon2" flex-direction="row-reverse" :scale="1.5">
                        <span @click="checkIcon2 = !checkIcon2">大号Icon</span>
                </CheckIcon>
                <br />
                <CheckIcon slot="desc" :value.sync="checkIcon1" :scale="1">
                        <span slot="checked" style="padding:10px 20px; background:red; color:#fff;">选中</span>
                        <span slot="unchecked" style="padding:10px 20px;background:#aaa;">未选中</span>
                        <span @click="$toast('点到了文字哦~~')">点击文字</span>
                </CheckIcon>
                <br />
                <CheckIcon slot="desc" :value.sync="checkIcon2" :scale="1">
                        <span @click="$toast('点到了文字哦~~')">点击文字</span>
                </CheckIcon>
                <Cell title="是否勾选" desc="配合cell组件" @click.native="checkIcon2 = !checkIcon2">
                        <CheckIcon slot="desc" :value.sync="checkIcon2" color="#ff9c00"></CheckIcon>
                </Cell>
                <div class="clearfix">
                        <Goods :item="goods[0]" :isShowBrief="true">
                                <CheckIcon slot="actionIcon" :value.sync="checkIcon2" color="#ff9c00"></CheckIcon>
                        </Goods>
                        <Goods :item="goods[0]" :isShowBrief="true">
                                <CheckIcon slot="actionIcon" :value.sync="checkIcon2" color="#ff9c00"></CheckIcon>
                        </Goods>
                </div>
                <br>
                <br>
                <br>
                <br>
                <Cell title="图片压缩+裁剪一" style="text-align:center;margin-top:50px;"></Cell>
                <img :src="base641" />
                <input type="file" @change="inputFileChange1">

                <Cell title="图片压缩+裁剪二" style="text-align:center;margin-top:50px;"></Cell>
                <img :src="base642" width="100%" />
                <input type="file" @change="inputFileChange2">

                <Cell title="图片压缩+裁剪三" style="text-align:center;margin-top:50px;"></Cell>
                <img :src="base643" width="100%" />
                <input type="file" @change="inputFileChange3">
                <br>
                <br>
                <br>
                <br>
                <Cell title="基于局部滚动条的下拉加载" :borderLine="true" style="text-align:center;margin-top:50px;"></Cell>
                <infiniteScroll class="infinite-scroll-box"></infiniteScroll>
                <Cell title="应用在MaskBox组件上" :borderLine="true" :isLink="true" @click.native="maskBox1 = true" style="margin-top:50px;"></Cell>
                <MaskBox v-model="maskBox1" :defaultcloseBtnVisible="false" :hideOnBlur="false" @on-show="ModalHelper.open" @on-hide="ModalHelper.close">
                        <Header title="获奖名单" :left-options="{showBack:false}"></Header>
                        <infiniteScroll v-if="maskBox1" class="infinite-scroll-box-MaskBox"></infiniteScroll>
                        <Button type="warn" recta @click.native="maskBox1 = false">关闭</Button>
                </MaskBox>
                <Cell title="前往基于body滚动条的下拉加载" :isLink="true" @click.native="$router.push('/infiniteScroll')"></Cell>
                <br>
                <br>
                <br>
                <br>
                <Cell title="局部下拉刷新，上拉加载DEMO" style="text-align:center;margin-top:50px;"></Cell>
                <div style="position:relative;height:500px;">
                        <LoadmorePage></LoadmorePage>
                </div>
                <Cell title="前往下拉刷新，上拉加载DEMO" :isLink="true" @click.native="$router.push('/loadmore')" style="margin-top:50px;"></Cell>
                <br>
                <br>
                <br>
                <br>
                <Cell title="Keyboard组件" style="text-align:center;margin-top:50px;"></Cell>
                <button @click="$refs.key.disorderFn()">调用$refs.key.disorderFn()打乱键盘</button>
                <button @click="maxMoney = 100">点击限制最大输入100元，默认值：99999</button>
                <KeyboardInput @click.native="focus = true" class="ipt" :value="money" :focus="focus"></KeyboardInput>
                <br>
                <Keyboard ref="key" type="money" v-model="money" :fixed="false" :maxMoney="maxMoney" confirmText="确认支付" @confirm="$refs.KeyboardPopup.open()"></Keyboard>
                <KeyboardPopup ref="KeyboardPopup" @confirm="keyboardPopupConfirm" @cancel="$toast('您已取消')" @on-show="ModalHelper.open" @on-hide="ModalHelper.close"></KeyboardPopup>
                <span>数字密码：637031</span>
                <br>
                <br>
                <br>
                <br>
                <KeyboardInput @click.native="focus = true" class="ipt" :value="money1" :focus="focus"></KeyboardInput>
                <button @click="$refs.key1.disorderFn()">调用$refs.key.disorderFn()打乱键盘</button>
                <button @click="maxLength = '10'">点击限制最大输入长度为10,默认值：6</button>
                <Keyboard ref="key1" type="number" v-model="money1" :fixed="false" :maxLength="maxLength" confirmText="确认" @confirm="confirmPay"></Keyboard>
                <br>
                <br>
                <br>
                <br>
                <Cell title="数字动画" style="text-align:center;margin-top:50px;"></Cell>
                <Countup :start-val="0" :end-val="1388.08" :duration="2" :decimals="2" :start="doStart" class="countup"></Countup>
                <Button type="default" plain @click.native="doStart = true">开始</Button>
                <br>
                <br>
                <br>
                <br>
                <Cell title="翻拍抽奖" style="text-align:center;margin-top:50px;"></Cell>
                <Lottery ref="Lottery" :lotteryData="lotteryData"></Lottery>
                <Button @click.native="$refs.Lottery.ceshi">测试</Button>
                <!-- <Button @click.native="$refs.Lottery.init">初始化</Button>
                <Button @click.native="$refs.Lottery.turn">翻牌</Button>
                <Button @click.native="$refs.Lottery.show">明牌</Button>
                <Button @click.native="$refs.Lottery.shuffle">洗牌</Button> -->
                <br>
                <br>
                <Cell title="九宫格抽奖" style="text-align:center;margin-top:50px;"></Cell>
                <LotteryGongge></LotteryGongge>
                <br>
                <br>
                <br>
                
                <Cell title="文本溢出-没有溢出时不显示展开按钮" style="text-align:center;margin-top:50px;"></Cell>
                <EllipsisText clamp="2" text="文本溢出不足2行时文本溢出不足2行时文本溢出不足2行时文本溢出不足2行时"></EllipsisText>
                <Cell title="文本溢出-1行" style="text-align:center;margin-top:5px;"></Cell>
                <EllipsisText clamp="1" text="文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出"></EllipsisText>
                <Cell title="文本溢出-2行" style="text-align:center;margin-top:5px;"></Cell>
                <EllipsisText clamp="2" text="文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出"></EllipsisText>
                <Cell title="文本溢出-3行" style="text-align:center;margin-top:5px;"></Cell>
                <EllipsisText clamp="3" text="文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出"></EllipsisText>
                <Cell title="文本溢出-4行" style="text-align:center;margin-top:5px;"></Cell>
                <EllipsisText clamp="4" text="文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出"></EllipsisText>
                <Cell title="文本溢出-5行" style="text-align:center;margin-top:5px;"></Cell>
                <EllipsisText clamp="5" text="文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出"></EllipsisText>
                <br>
                <br>
                <br>

        </div>
</template>

<script>
let IMG_DEMO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==";
import Actionsheet from "../components/v-actionsheet/actionsheet";
import Cell from "../components/v-cell";
import Button from "../components/v-button";
import Badge from "../components/v-badge";
import { Checker, CheckerItem } from "../components/v-checker";
import { Grid, GridItem } from "../components/v-grid";
import Popup from "../components/v-popup";
import LoadMore from "../components/v-load-more";
import Media from "../components/v-media";
import { Swiper, SwiperItem } from "../components/v-swiper";
import Goods from "../components/v-goods";
import { Tab, TabItem } from '../components/v-tab';
import Header from '../components/v-header';
import Number from '../components/v-number';
import MaskBox from '../components/v-mask-box';
import DateTime from '../components/v-date-time';
import City from '../components/v-city';
import cityData from '../components/v-city/citydata.json';
import CityPopup from '../components/v-city-popup';
import CheckIcon from '../components/v-check-Icon';
import Compress from '../utils/img-compress/compress.js';
import lrz from 'lrz';
import Clipper from "../utils/img-crop/clipper.js";
import "../utils/img-crop/clipper.css";
import AlloyCrop from "../utils/img-crop/alloy-crop.js";
import AlloyCrop1 from "../utils/img-crop/alloy-crop.1.js";

import infiniteScroll from './infiniteScroll.vue'
import LoadmorePage from './loadmore.vue'
import { Keyboard, KeyboardInput } from '../components/v-keyboard';
import KeyboardPopup from '../components/v-keyboard-popup';
import Countup from "../components/v-countup";
import Lottery from "../components/v-lottery"
import MsgScroll from "../components/v-msg-scroll";
import MsgScrollX from "../components/v-msg-scroll-x";
import LotteryGongge from "../components/v-lottery-gongge";
import EllipsisText from "../components/v-ellipsis-text";

export default {
        name: 'app',
        components: { Actionsheet, Cell, Button, Badge, Checker, CheckerItem, Grid, GridItem, Popup, LoadMore, Media, Swiper, SwiperItem, Goods, Tab, TabItem, Header, Number, MaskBox, DateTime, City, CityPopup, CheckIcon, infiniteScroll, LoadmorePage, Keyboard, KeyboardInput, KeyboardPopup, Countup,Lottery,MsgScroll,MsgScrollX,LotteryGongge,EllipsisText },
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
                        maskBox: false,
                        maskBoxLoading: false,
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
                        dateTime1: "",
                        dateTime2: "",
                        dateTime3: "",
                        dateTime4: "",
                        dateTime5: "",
                        cityData: cityData,
                        cityValue: "",
                        defaultCityVal: [{
                                name: '北京',
                                value: '110000'
                        }, {
                                name: '北京市',
                                value: '110100'
                        }, {
                                name: '昌平区',
                                value: '110114'
                        }],

                        cityValue1: "",
                        defaultCityVal1: [],
                        cityValue2: "",
                        defaultCityVal2: [{
                                "code": "130000",
                                "name": "河北省",
                        }, {
                                "code": "130800",
                                "name": "承德市",
                        }, {
                                "code": "130825",
                                "name": "隆化县"
                        }],
                        checkIcon1: true,
                        checkIcon2: false,

                        base641: "",
                        base642: "",
                        base643: "",

                        maskBox1: false,
                        money: "",
                        maxMoney: 99999,
                        money1: "",
                        maxLength: '6',
                        focus: true,
                        doStart: false,
                        lotteryData:[{
                                id: 1,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/2773e125-bd02-4f84-8691-8a7e44cc85d4.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 2,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/92e126b9-e304-48f7-9937-f42c92026b5c.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 3,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/47b41c52-a097-4c75-9ee3-21882f4f6dfe.jpg",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 4,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/eab332f8-5bec-42b7-9f64-82a2ff009e75.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 5,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/24d34cf5-5f1b-493c-89e6-dcc8eaea154c.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 6,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/65413cfe-8a6a-4fb9-8cc7-67382f23fb55.jpg",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 7,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/443c9e09-061b-4ff7-bccb-2b22bc3ab02d.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 8,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/be855646-caf5-4206-8383-0b3d66d10239.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        },
                        {
                                id: 9,
                                front_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/05092963-6f47-4652-92d5-83e2e9262c21.png",
                                back_img: "https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg",
                        }]
                }
        },
        watch: {
                focus(val) {
                        if (val) this.$refs.key.open();
                        else this.$refs.key.close();
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
                iosModel() {
                        this.$iosAlert({
                                text: "本节的内容会在上期搭建的框架基础上进行数据的填充，顺便回顾之前介绍过的插值表达式，本节的内容会在上期搭建的框架基础上进行数据的填充，顺便回顾之前介绍过的插值表达式，属性绑定等知识，本节的数据只是在组件中模拟数据，后面会有专门的章节讲解如何从服务器获取数据。本节的内容会在上期搭建的框架基础上进行数据的填充，顺便回顾之前介绍过的插值表达式，属性绑定等知识，本节的数据只是在组件中模拟数据，后面会有专门的章节讲解如何从服务器获取数据。本节的数据只是在组件中模拟数据，后面会有专门的章节讲解如何从服务器获取数据。",
                                input: false,
                                placeholder: '',
                                okText: '知道了',
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
                showMaskBox() {
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
                cityConfirm(v) {
                        this.cityValue = `${v[0].name}-${v[1].name}-${v[2].name}`;
                },
                cityConfirm1(v) {
                        this.defaultCityVal1 = v;
                        if (v.length) this.cityValue1 = `${v[0].name}-${v[1].name}-${v[2].name}`;
                },
                cityConfirm2(v) {
                        console.log(v)
                        this.defaultCityVal2 = v;
                        if (v.length) this.cityValue2 = `${v[0].name}-${v[1].name}-${v[2].name}`;
                },
                inputFileChange1(event) {
                        let input = event.target;
                        var file = input.files[0];

                        // 4M
                        if (file.size > 4 * 1024 * 1024) {
                                this.$toast("图片大小不能超过4M");
                                input.value = "";
                                return;
                        }

                        if (!/image\/\w+/.test(file.type)) {
                                this.$toast("文件必须为图片！");
                                input.value = "";
                                return;
                        }

                        // 图片大于100kb 去压缩
                        if (file.size < 100 * 1024) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                        let base64 = e.target.result;
                                        this.clipper(base64);
                                }
                                reader.readAsDataURL(file);
                        } else {
                                lrz(file, { width: 750 }).then((result) => {
                                        this.clipper(result.base64);
                                })
                        }
                },
                clipper(base64) {
                        new Clipper({
                                image_src: base64,
                                ok: (base64, canvas) => {
                                        this.base641 = base64;
                                },
                                cancel: () => { },
                                ok_text: "确定",
                                cancel_text: "取消"
                        });
                },
                inputFileChange2(event) {
                        var file = event.target.files[0];
                        lrz(file).then((result) => {
                                new AlloyCrop({
                                        image_src: result.base64,
                                        circle: false, // optional parameters , the default value is false
                                        width: 200, // crop width
                                        height: 200, // crop height
                                        output: 2, // output resolution  --> 400*200
                                        ok: (base64, canvas) => {
                                                this.base642 = base64;
                                        },
                                        cancel: () => { },
                                        ok_text: "确定",
                                        cancel_text: "取消"
                                });
                        });
                },
                inputFileChange3(event) {
                        var file = event.target.files[0];
                        lrz(file).then((result) => {
                                new AlloyCrop1({
                                        image_src: result.base64,
                                        circle: true, // optional parameters , the default value is false
                                        width: 200, // crop width
                                        height: 200, // crop height
                                        output: 1, // output resolution  --> 400*200
                                        ok: (base64, canvas) => {
                                                this.base643 = base64;
                                        },
                                        cancel: () => { },
                                        ok_text: "确定",
                                        cancel_text: "取消"
                                });
                        })
                },
                confirmPay() {

                },
                keyboardPopupConfirm(number) {
                        setTimeout(() => {
                                if (number == "637031") {
                                        this.$iosRemind({
                                                title: "提示",
                                                text: "订单支付成功",
                                                remindDuration: 2000,
                                                appendChildClass: "",
                                        })
                                        this.$refs.KeyboardPopup.close();
                                } else {
                                        this.$refs.KeyboardPopup.error("对不起，您的支付密码不正确，请重新输入。")
                                }
                        }, 2000);
                },
                startLottery(){
                        this.$refs.Lottery.turn();
                }
        }
}
</script>

<style lang="less" scoped>
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
        z-index: 1;
}
.infinite-scroll-box {
        height: 300px;
        overflow-x: hidden;
        overflow-y: auto;
}
.infinite-scroll-box-MaskBox {
        background: #fff;
        width: 300px;
        height: 300px;
        overflow-x: hidden;
        overflow-y: auto;
}
.countup {
        font-size: 24px;
        color: #ff9700;
}
</style>
