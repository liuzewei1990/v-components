<template>
  <div class="msg-scroll">
    <transition-group tag="div" class="msg-scroll-box">
      <p v-for="(item,index) in list" :key="item">{{item.msg}}</p>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          msg: "哪里看了看收藏发大水出生地吃是1"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是2"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是3"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是4"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是5"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是6"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是7"
        },
        {
          msg: "哪里看了看收藏发大水出生地吃是8"
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
        setTimeout(this.play,2500)
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
  transition: transform 0.5s;
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
