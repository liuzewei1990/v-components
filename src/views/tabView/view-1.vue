<template>
  <div style="background:#fff;" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="true" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="80">

    <!-- <p class="item" v-for="(item,index) in list" :key="index">{{item}}</p> -->
    <!-- <Media v-for="(item,index) in list" :key="index" pic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" :title="`标题${item}`" desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"></Media> -->
    <Goods v-for="(item,index) in list" :key="index" :item="item" :isShowBrief="false"></Goods>

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
import infiniteScroll from '../../directives/vue-infinite-scroll';
import LoadMore from "../../components/v-load-more";
import Header from '../../components/v-header';
import Goods from "../../components/v-goods";
export default {
  directives: { infiniteScroll, },
  components: { LoadMore, Header, Goods },
  props: ["isTabShow"],
  watch: {
    isTabShow(v) {
      console.log("进入", v);
    }
  },
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
      console.log("init db");

      for (let index = 0; index < 99; index++) {
        this.DB.push({
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        });
      }
    },
    // 模拟接口
    ajaxGetCollectList(query) {
      let DB = [...this.DB];
      let collectList = DB.splice((query.page - 1) * query.size, query.size);
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
