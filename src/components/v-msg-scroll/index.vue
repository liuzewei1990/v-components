<template>
  <div class="msg-scroll">
    <transition-group tag="div" class="msg-scroll-box">
      <p v-for="(item,index) in list" :key="item.msg">{{item.msg}}</p>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          msg: "零哥章魚 完成传奇世界H5-王者归来任务 获得30金币"
        },
        {
          msg: "做迎而為 兑换【饿了么】畅享美食红包 消耗20金币"
        },
        {
          msg: "基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币"
        }
      ]
    };
  },

  mounted() {
    this.play();
  },

  methods: {
    play() {
      window.requestAnimationFrame(() => {
        let _cache = this.list[0];
        this.list.shift();
        this.list.push(_cache);
        setTimeout(this.play, 2000)
      });
    }
  }
};
</script>

<style scoped>
.msg-scroll {
  height: 30px;
  /* border: 1px solid red; */
  overflow: hidden;
}
.msg-scroll-box {
  margin-top: -30px;
}

.v-move {
  transition: transform 0.3s;
}
.msg-scroll-box p:nth-last-child(1) {
  visibility: hidden;
}
.msg-scroll-box p {
  font-size: 13px;
  text-align: center;
  line-height: 30px;
  background: #fff;
}
</style>
