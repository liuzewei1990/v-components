<template>
  <div>
    <transition-group :name="transitionName" tag="div" class="box">
      <!-- 洗牌矩阵变换 -->
      <div class="shuffle" v-for="(item,index) in lotteryList" v-bind:key="item.id" @click="selectLottery($event,item,index)" >
        <!-- 3d翻牌 -->
        <div class="item" :class="[{'turn':item.isTurn},{'loading':item.loading},{'infinite':item.loading}]" >
          <img class="back" :src="item.back_img" alt key="back">
          <img class="front" :src="item.front_img" alt key="front">
        </div>
        <!-- 中奖特效 -->
        <div class="item shadow" :class="{'checkd':item.checkd}"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    // 彩票列表
    lotteryData: Array
  },
  data() {
    return {
      lotteryList: [],
      // 点击抽奖时只可点击一次   
      isFlag:false,
      transitionName:""
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

    // 初始化
    init() {
      this.lotteryList = [];
      this.isFlag = false;
      this.transitionName = "flip-list";
      this.lotteryData.forEach((data, index) => {
        let lottery = { ...data };
        lottery["isTurn"] = false;
        lottery["checkd"] = false;
        lottery["loading"] = false;

        this.lotteryList.push(lottery);

        this.awaitTime(10 * index).then(() => {
          lottery["isTurn"] = false;
          return this.awaitTime(2000 / 2);
        });
      });
    },

    // 翻牌
    turn() {
      this.lotteryList.forEach((lottery, index) => {
        this.awaitTime(50 * index)
          .then(() => {
            lottery["isTurn"] = true;
            return this.awaitTime(200 / 2);
          })
          .then(() => {
            // 需要将animation动画移除，否则洗牌时 会影响 v-move 的特性
            // lottery["animation"] = "";
          });
      });
    },

    // 洗牌
    shuffle() {
      if (!this.lotteryList[0].isTurn) return;
      this.awaitTime(0)
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        })
        .then(() => {
          this.lotteryList = _.shuffle(this.lotteryList);
          return this.awaitTime(200);
        });
    },

    
    // 明牌
    show() {
      this.lotteryList.forEach((lottery, index) => {
        this.awaitTime(10 * index).then(() => {
          lottery["isTurn"] = false;
          return this.awaitTime(2000 / 2);
        });
      });
    },

    // 抽奖
    selectLottery($event, lottery,index) {

      if (lottery.isTurn && lottery.loading === false && !this.isFlag) {
          
        this.transitionName = "";
        const A = {...this.lotteryList[index]};
        lottery.loading = this.isFlag = true;
        lottery.front_img = lottery.back_img;

        this.api().then(dataId => {

            const findIndex = this.lotteryList.findIndex(item => item.id == dataId);

            this.lotteryList[index] = this.lotteryList[findIndex];
            this.lotteryList[findIndex] = A;

            this.lotteryList[index].isTurn = this.lotteryList[index].isTurn = false;
            this.lotteryList[index].checkd = true;

            // 明牌
            this.show();

        });
      }
    },

    // api
    api() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(3);
        }, 1000);
      });
    },

    ceshi(){
        this.awaitTime(10).then(()=>{
            this.init();
            return this.awaitTime(1000);
        }).then(()=>{
            this.turn();
            return this.awaitTime(1000);
        }).then(()=>{
            this.shuffle();
            return this.awaitTime(1000);
        }).then(()=>{
        })
    }
  }
};
</script>

<style lang="less" scoped>
.flip-list-move {
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;
}

.box {
  width: 300px;
  height: 300px;
  margin: 10px auto;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  background: #ccc;
  perspective: 800px;
  -webkit-perspective: 800px;
}

.box .shuffle {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  line-height: 100px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;

  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;

  position: relative;

}

.box .item {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  line-height: 100px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;

  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;

  position: relative;

  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.box .item img,
.box .shadow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.box .item .front {
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
}

.box .item .back {
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  z-index: -1;
}

.box .checkd {
  box-shadow: inset 0px 0px 10px 3px #0666fc;
  -webkit-box-shadow: inset 0px 0px 10px 3px #0666fc;
}

.box .startBtn {
  background: red;
  color: #fff;
}

.box .init {
  animation: init 0.6s;
  -webkit-animation: init 0.6s;
}
.box .turn {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}

.box .loading {
  animation: zhuan 0.5s linear;
  -webkit-animation: zhuan 0.5s linear;
}

@keyframes zhuan {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

@-webkit-keyframes zhuan {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

.box .infinite {
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite; /* Safari 和 Chrome */
}
</style>
