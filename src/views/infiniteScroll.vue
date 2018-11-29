<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-immediate-check="true" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="80">

    <p class="item" v-for="(item,index) in list" :key="index">{{item}}</p>

    <div style="min-height:80px; overflow: hidden;">
      <LoadMore v-if="status=='请求中'" tip="努力加载中..." :showLoading="true"></LoadMore>
      <LoadMore v-if="status=='没有更多'" tip="没有更多了" :showLoading="false"></LoadMore>
      <LoadMore v-if="status=='请求失败'" tip="加载失败，点我重试" :showLoading="false" @click.native="loadMore"></LoadMore>
      <!-- <Nodata v-if="status=='暂无数据'" :imgurl="require('@src/assets/img/bg_empty_data.png')" content='暂无收藏记录'></Nodata> -->
    </div>
  </div>
</template>

<script>
// 下拉加载更多指令
import infiniteScroll from '../directives/vue-infinite-scroll';
import LoadMore from "../components/v-load-more";
export default {
  directives: { infiniteScroll },
  components: { LoadMore },
  data() {
    return {
      DB: [], // 模拟数据库
      status: "", // 加载状态
      query: {
        page: 1,
        size: 20
      },
      list: [],
    }
  },
  computed: {
    // 返回true禁用下拉加载
    infiniteDisabled() {
      return this.status == '请求中' || this.status == '没有更多' || this.status == '暂无数据' || this.status == '请求失败';
    }
  },
  created() {
    this.initDB();
  },
  methods: {
    // 请求函数
    loadMore() {
      try {
        this.status = "请求中";
        setTimeout(() => {
          let data = this.ajaxGetCollectList(this.query);
          this.setData(data);
        }, 500);
      } catch (error) {
        this.status = "请求失败";
      }
    },
    // 设置数据
    setData(data) {
      this.list = this.list.concat(data.collectList);
      // 是否有更多数据
      if (this.list.length === 0) {
        this.status = "暂无数据";
      } else if (this.query.page >= data.totalPages) {
        this.status = "没有更多";
      } else {
        this.status = "请求更多";
        this.query.page++;
      }
    },
    // 初始化数据库
    initDB() {
      for (let index = 0; index < 99; index++) {
        this.DB.push(index);
      }
    },
    // 模拟接口
    ajaxGetCollectList(query) {
      let collectList = this.DB.splice((query.page - 1) * query.size, query.size);
      return {
        collectList: collectList,
        totalPages: Math.ceil(this.DB.length / query.size),
      }
    },
  }

}
</script>

<style lang="less" scoped>
.item {
  line-height: 30px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
</style>
