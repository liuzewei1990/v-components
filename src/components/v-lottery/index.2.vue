<template>
  <div>
    <!-- <transition-group tag="div" class="box" name="flip-list">
      <div
        class="item"
        :class="item.animation"
        v-for="(item,index) in lotteryList"
        :key="index"
        data-id="1"
      >
        <img :src="item.front_img" alt>
      </div>
    </transition-group>-->

    <transition-group name="flip-list" tag="div" class="box">
      <div class="item" :class="{'turn':item.isTurn}" v-for="item in lotteryList" v-bind:key="item.id">
        <img v-if="item.isTurn" :src="item.back_img" alt key="back">
        <img v-else :src="item.front_img" alt key="front">
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    // 彩票列表
    lotteryData: Array,
    // 翻牌时间
    turnTime: {
      type: [String, Number],
      default: 300
    },
    // 翻牌速度
    turnSpeed: {
      type: [String, Number],
      default: 50
    }
  },
  data() {
    return {
      lotteryList: [],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 延迟函数
    awaitTime(timer) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
      });
    },

    init() {
      for (const iterator of this.lotteryData) {
        let lottery = { ...iterator };
        lottery["isTurn"] = false;
        lottery["animation"] = "init";
        this.lotteryList.push(lottery);
      }
    },

    // 明牌
    show() {
      this.lotteryList.forEach((lottery, index) => {
        this.awaitTime(200 * index)
          .then(() => {
            lottery["isTurn"] = false;
            return this.awaitTime(2000 / 2);
          })
      });
    },

    // 翻牌
    turn() {
      this.lotteryList.forEach((lottery, index) => {
        this.awaitTime(3000 * index)
          .then(() => {
              
            lottery["isTurn"] = true;
            return this.awaitTime(2000 / 2);
          })
          .then(() => {
            return this.awaitTime(2000);
          })
          .then(() => {
            // 需要将animation动画移除，否则洗牌时 会影响 v-move 的特性
            lottery["animation"] = "";
          });
      });
    },

    // 洗牌
    shuffle() {
      this.awaitTime(0)
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(100);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
        });
    },

    addEvent() {}
  }
};
</script>

<style lang="less" scoped>
// .fade-enter-active,
// .fade-leave-active {
//   transition: transform 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   transform: rotateY(180deg);
// }

.v-enter {
  transform: rotateY(0deg);
}
.v-enter-active {
  transition: transform 5s;
}
.v-enter-to {
  transform: rotateY(180deg);
}

// .v-leave {
//   transform: rotateY(0deg);
// }
// .v-leave-active {
//   transition: transform 5s;
// }
// .v-leave-to {
//   transform: rotateY(180deg);
// }

ul {
  display: flex;
}
.flip-list-move {
  transition: transform 0.3s;
}

.box {
  width: 300px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  background: #ccc;
  perspective: 800px;
}

.box .item {
  width: 100px;
  height: 100px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  line-height: 100px;
  text-align: center;
  /* background-image: url("https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/f3d6e8c7-96d8-4084-bfd2-4fc4063c4ff7.jpg"); */
  /* background-image: url("https://finsuit.oss-cn-beijing.aliyuncs.com/CJ/be855646-caf5-4206-8383-0b3d66d10239.png"); */
  background-size: cover;
  background-repeat: no-repeat;
  //   animation-duration: 1s;
  //   animation-timing-function: linear;

  //   animation-fill-mode: both;
  //   -webkit-animation-fill-mode: both;
}

.box .item img {
  width: 100%;
  height: 100%;
}

.box .checkd {
  box-shadow: inset 0px 0px 10px 3px #0666fc;
}

.box .startBtn {
  background: red;
  color: #fff;
}

.box .init {
  animation: init 0.6s;
}
.box .turn {
  animation: turn 3s both;
}

.both {
}

@keyframes turn {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(180deg);
  }
}

@keyframes zhuan {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

@keyframes init {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

@keyframes do1 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(50px, 180px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(100px, 100px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(130px, 190px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(160px, 80px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(190px, 160px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do2 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-100px, 120px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(-50px, 200px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(100px, 100px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(10px, 80px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(-70px, 60px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do3 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-200px, 150px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(-50px, 200px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(0px, 100px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(-50px, 0px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(-100px, 200px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do4 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(100px, -100px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(200px, -50px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(130px, 80px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(0px, 0px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(40px, 100px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do5 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-100px, -70px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(0px, -100px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(100px, -20px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(40px, 100px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(-100px, 10px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do6 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-120px, -100px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(-200px, 20px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(-100px, 100px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(-50px, 50px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(-150px, -50px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do7 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(100px, -50px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(0px, -120px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(80px, -200px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(200px, -160px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(50px, -100px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do8 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-100px, -50px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(50px, -120px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(-100px, -150px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(-50px, -200px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(50px, -150px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}

@keyframes do9 {
  0% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }

  20% {
    transform: translate3d(-50px, -50px, 0) rotateY(180deg);
  }

  40% {
    transform: translate3d(0px, -120px, 0) rotateY(180deg);
  }

  60% {
    transform: translate3d(-80px, -200px, 0) rotateY(180deg);
  }

  80% {
    transform: translate3d(-180px, -150px, 0) rotateY(180deg);
  }

  99% {
    transform: translate3d(-130px, 0px, 0) rotateY(180deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateY(180deg);
  }
}
</style>
