<template>
  <div class="tab-view">

    <Tab class="tabs" :animate="true" v-model="bindTabIndex" :scroll-threshold="5" :line-width="2" bar-active-color="#f230cd" active-color="#f230cd" custom-bar-width="20px">
      <TabItem :selected="index==0" v-for="(item,index) in tabList" :key="index">{{item.tabName}}</TabItem>
    </Tab>

    <Swiper class="views" height="100%" v-model="bindTabIndex" :loop="false" :auto="false" :showDots="false" :minMovingDistance="500">
      <SwiperItem v-for="(item,index) in tabList" :key="index">
        <div class="view">

          <!-- <keep-alive> -->
          <component v-if="item.isTabLoad" :is="item.tabComponent" :isTabShow="tabList[bindTabIndex].tabComponent === item.tabComponent"></component>
          <!-- </keep-alive> -->

        </div>
      </SwiperItem>
    </Swiper>

  </div>
</template>

<script>
import { Tab, TabItem } from '../../components/v-tab';
import { Swiper, SwiperItem } from "../../components/v-swiper";

import view1 from "./view-1.vue";
import view2 from "./view-2.vue";
import view3 from "./view-3.vue";
import view4 from "./view-4.vue";
import view5 from "../loadmore.vue";

export default {
  components: { Tab, TabItem, Swiper, SwiperItem, view1, view2, view3, view4, view5 },
  data() {
    return {
      bindTabIndex: 0,
      tabList: [
        {
          tabName: "精选商品",
          tabComponent: "view1",
          isTabLoad: false,
        },
        {
          tabName: "精选图文",
          tabComponent: "view2",
          isTabLoad: false,
        },
        {
          tabName: "新手推荐",
          tabComponent: "view3",
          isTabLoad: false,
        },
        {
          tabName: "精选文章",
          tabComponent: "view4",
          isTabLoad: false,
        },
        {
          tabName: "精选知道",
          tabComponent: "view5",
          isTabLoad: false,
        },
      ]
    }
  },
  watch: {
    bindTabIndex(i) {
      this.loadTabComponent(i)
    }
  },
  mounted() {
    this.loadTabComponent(this.bindTabIndex);
  },
  methods: {
    loadTabComponent(index) {
      this.tabList[index].isTabLoad = true;
    }
  }
}
</script>

<style lang="less" scoped>
.tab-view {
  //   position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .tabs {
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .views {
    flex: 1;
    padding-top: 44px;
  }

  .view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>