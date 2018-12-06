<template>
  <scroller :style="`top: ${top}px`" ref="scroller" refreshText="下拉刷新" refreshLayerColor="#aaa" loadingLayerColor="#aaa" :minContentHeight="0" noDataText="没有更多了" width="100%" height="100%" :snapping="false" :snap-height="50" :animationDuration="150" :on-refresh="loadTop" :on-infinite="loadBottom" @onScroll="onScroll" refresh-layer-color="#4b8bf4" loading-layer-color="#ec4949">
    <!-- custom refresh spinner, use default `spinner` & viewBox 0,0,64,64 class -->
    <svg class="spinner" style="stroke: #4b8bf4;" slot="refresh-spinner" viewBox="0 0 64 64">
      <g stroke-width="7" stroke-linecap="round">
        <line x1="10" x2="10" y1="27.3836" y2="36.4931">
          <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
          <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
        </line>
        <line x1="24" x2="24" y1="18.6164" y2="45.3836">
          <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
          <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
        </line>
        <line x1="38" x2="38" y1="16.1233" y2="47.8767">
          <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
          <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
        </line>
        <line x1="52" x2="52" y1="16" y2="48">
          <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
          <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
        </line>
      </g>
    </svg>

    <slot :list="list" :status="status"></slot>

    <!-- custom infinite spinner -->
    <svg class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
      <g>
        <circle cx="16" cy="32" stroke-width="0" r="3">
          <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
          <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
        </circle>
        <circle cx="32" cy="32" stroke-width="0" r="3.09351">
          <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
          <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
        </circle>
        <circle cx="48" cy="32" stroke-width="0" r="4.09351">
          <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
          <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
        </circle>
      </g>
    </svg>
  </scroller>
</template>
  
<script>
import VueScroller from './index.js'
export default {
  components: {
    scroller: VueScroller.Scroller
  },
  props: {
    top: Number,
    api: {
      type: Function,
      default: () => { }
    },
    query: {
      type: Object,
      default() {
        return {
          limit: 20,
          page: 1
        };
      }
    },
  },
  data() {
    return {
      status: "",
      list: [],
    };
  },
  computed: {
    // 返回true禁用下拉加载
    infiniteDisabled() {
      return this.status == '请求中' || this.status == '没有更多' || this.status == '暂无数据' || this.status == '请求失败';
    }
  },
  mounted() {
    // this.$refs.scroller.triggerPullToRefresh(); //手动启动下拉刷新
    // this.$refs.scroller.finishPullToRefresh();
    // this.$refs.scroller.finishInfinite(true); // 停止无限加载
  },

  methods: {
    onScroll({ left, top, zoom }) {
      console.log({ left, top, zoom })
    },
    // 调用api加载数据的方法
    loadApiData(query) {
      try {
        this.status = "请求中";
        return new Promise((res, rej) => {
          let data = this.api(query);
          res(data)
        })
      } catch (error) {
        this.status = "请求失败";
      }
    },

    // 检查数据的方法
    checkData(data) {
      if (this.list.length === 0) {
        this.status = "暂无数据";
      } else if (this.query.page >= data.totalPages) {
        this.status = "没有更多";
        this.$refs.scroller.finishInfinite(true); // 停止无限加载
      } else {
        this.status = "请求更多";
        this.query.page++;
      }
    },

    //下拉刷新操作
    loadTop(done) {
      //   this.query = { ...this.propsQuery };
      this.query.page = 1;
      this.loadApiData(this.query).then(data => {
        setTimeout(() => {
          this.list = data.collectList;
          done();
          this.checkData(data);
          this.$emit("refresh");
        }, 500);
      });
    },

    //上拉加载操作
    loadBottom(done) {
      console.log("infiniteDisabled:", this.infiniteDisabled)
      if (this.infiniteDisabled) {
        done(true)
        return;
      };
      this.loadApiData(this.query).then(data => {
        setTimeout(() => {
          this.list = this.list.concat(data.collectList);
          done();
          this.checkData(data);
        }, 500);
      });
    },

    // 手动触发上拉刷新，用于重新设置搜索条件后使用
    triggerPullToRefresh() {
      this.$refs.scroller.scrollTo(0, 0, false); // false 不需要animeta效果
      // 这里延迟一下,否则滚动条不会置0
      setTimeout(() => {
        this.$refs.scroller.triggerPullToRefresh();
      }, 200);
    }
  }
};
</script>

<style lang="less">
</style>