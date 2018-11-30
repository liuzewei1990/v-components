<template>
  <div class="loadmore-page">
    <div class="header" ref="header">
      <Header>演示</Header>
      <div>
        当前查询条件
        {{query}}
      </div>
      <button @click="testClick('西瓜')">设置搜索条件 西瓜</button>
      <button @click="testClick('苹果')">设置搜索条件 苹果</button>
    </div>
    <div class="content">
      <ScrollRefreshBox :top="0" :api="ajaxGetCollectList" @watchDataList="watchDataList" :query="query" ref="scrollLoadmoreBox">
        <p class="item" v-for="(item,index) in list" :key="index">{{item}}</p>
      </ScrollRefreshBox>
    </div>
  </div>
</template>

<script>
import ScrollRefreshBox from '../components/v-scroll-refresh-box';
import Header from '../components/v-header';
export default {
  components: { ScrollRefreshBox, Header },
  data() {
    return {
      DB: [], // 模拟数据库
      status: "", // 加载状态
      top: 0,
      list: [],
      query: { page: 1, limit: 20, type: "苹果" }
    }
  },
  created() {
    this.initDB();
  },
  mounted() {
    this.setTop();
  },
  methods: {
    setTop() {
      this.top = this.$refs.header.offsetHeight;
    },
    watchDataList(list) {
      this.list = list;
    },
    testClick(type) {
      this.query["type"] = type;
      this.$refs.scrollLoadmoreBox.triggerPullToRefresh();
    },
    // 初始化数据库
    initDB() {
      for (let index = 0; index < 99; index++) {
        this.DB.push(index);
      }
    },
    // 模拟接口
    ajaxGetCollectList(query) {
      console.log({ ...query })
      let DB = [...this.DB]
      let collectList = DB.splice((query.page - 1) * query.limit, query.limit);
      return {
        collectList: collectList,
        totalPages: Math.ceil(this.DB.length / query.limit),
      }
    },
  }
}
</script>
<style lang="less" scoped>
.loadmore-page {
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
}
.header {
}
.content {
  flex: 1;
  position: relative;
  height: 100%;
}
.item {
  line-height: 30px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
</style>
