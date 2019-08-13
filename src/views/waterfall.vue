<template>
  <div class="page-waterfall">
    <Waterfall :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="some-info">{{props.value.title}}({{props.index}})</p>
      </div>

      <!--       <div slot="loading" slot-scope="{isFirstLoad}">
        <div slot="loading" v-if="isFirstLoad">first-loading...</div>
        <div v-else="v-else">loading...</div>
      </div> -->

      <!-- <div slot="waterfall-head">waterfall-head</div> -->

      <!-- <div slot="waterfall-over">waterfall-over</div> -->
    </Waterfall>
  </div>
</template>

<script>
import Waterfall from "../components/v-waterfall-easy"

// https://github.com/lfyfly/vue-waterfall-easy
export default {
  components: {
    Waterfall
  },
  data() {
    return {
      imgsArr: [],
      group: 0,// request param
    }
  },
  methods: {
    async getData() {
      let data = await this.api();
      this.imgsArr = this.imgsArr.concat(data);
    },
    async api() {
      let list = [];
      for (let index = 0; index < 20; index++) {
        list.push({
          src: "http://dummyimage.com/200x" + (200 + Math.random() * 100),
          href: "http://baidu.com",
          title: "再见只是陌生人",
        });
      }
      return list;
    }
  },
  created() {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
.page-waterfall {
  height: 100vh;

  .img-info {
    padding: 20px 10px;
    color: #333;
    p {
      font-size: 14px;
    }
  }
}
</style>
