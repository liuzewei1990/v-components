<template>
  <div class="main-lottery">
    <div class="lottery-box lamp-animation">
      <div class="lottery-main">
        <canvas id="canvas" width="500px / @scale" height="375px / @scale"></canvas>
        <div class="btn" @click="startGame">
          <p>点击抽奖</p>
          <span>你有1次抽奖机会</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import bj1 from "./prize-1.png";
import bj2 from "./prize-2.png";
import bj3 from "./prize-3.png";
import bj4 from "./prize-4.png";
import Sudoku from "./Sudoku.js";
import Audio from "./Audio.js";
export default {
  data() {
    return {
      context: "",
      sudoku: "",
      audio: ""
    };
  },

  mounted() {
    this.initLottery();
  },

  methods: {
    initLottery() {
      var canvas = document.getElementById("canvas");
      this.context = canvas.getContext("2d");

      let audio = (this.audio = new Audio());
      this.sudoku = new Sudoku({
        sudokuSize: canvas.width,
        sudokuItemRadius: 8, // 方块圆角阔值
        sudokuItemPadding: 5,
        sudokuItemScale: 1.4,
        sudokuItemMargin: 12,
        sudokuItemShadowOffsetY: 6,

        sudokuItemUnactiveColor: "#fff", // 方块背景颜色
        // sudokuItemUnactiveTxtColor:"#fff", // 文字颜色
        sudokuItemUnactiveShadowColor: "#ffcec0", // 方块阴影颜色

        sudokuItemActiveColor: "#ffe201", // 跳动方块颜色
        // sudokuItemActiveTxtColor:"#fff", // 跳动方块文字颜色
        sudokuItemActiveShadowColor: "#f79c00", // 跳动方块阴影颜色

        // buttonColor:"#000", // 按钮背景颜色
        // buttonTxtColor:"#fff", // 按钮文字颜色
        // buttonShadowColor:"#ccc", // 按钮阴影颜色

        duration: 3000, //中奖后动画停止的时间
        velocity: 500, // 动画结尾转动速率
        speed: 50, // loading = true 状态下转动的速度
        hasButton: "false", // 九宫格是否自带按钮
        // delaultActiveIndex:5, // 当前已中奖的方块

        awards: [
          { type: "image", content: bj1 },
          { type: "image", content: bj3 },
          { type: "image", content: bj4 },
          { type: "image", content: bj2 },
          { type: "image", content: bj1 },
          { type: "image", content: bj2 },
          { type: "image", content: bj3 },
          { type: "image", content: bj1 }
        ],

        finish: function(index) {
          console.log("九宫格中奖结果：", index);
        },

        onClick() {
          chou();
        },

        nextTick(nextIndex) {
          // console.log(nextIndex)
          audio.start = 14;
          audio.play();
          // audioSprite.play("dust")
        }
      });

      this.sudoku.render(canvas, this.context);
      this.sudoku.setDefaultActive(3, this.context);
    },

    startGame() {
      if (!this.sudoku) return;
      this.sudoku.luckyDraw(this.context);
      this.api().then(data => {
        console.log("后台中奖结果：", data);
        this.sudoku.prize(data);
      });
    },

    api() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(5);
        }, Math.ceil(Math.random() * 2) * 1000);
      });
    }
  }
};
</script>


<style lang="less" scoped>
@scale: 2.3;

.main-lottery {
  background: #fff;
  padding: 40px / @scale 0px / @scale;
}

.lottery-box {
  width: 710px / @scale;
  height: 579px / @scale;
  margin: 0 auto;
  background: #feaca9 url("./lamp.png") no-repeat;
  background-size: 99.5% 99.5%;
  background-position: center center;
  border-radius: 20px / @scale;
  display: flex;
  align-items: center;
  border: 10px / @scale solid #feaca9;
  box-sizing: border-box;
}

.lottery-main {
  width: 638px / @scale;
  height: 499px / @scale;
  background: #e25341;
  margin: 0 auto;
  border-radius: 20px / @scale;
  position: relative;
  border: 5px / @scale solid #e25341;
  /* box-sizing: border-box; */
}

.lottery-main canvas {
  width: 638px / @scale;
  height: 499px / @scale;
}

.lottery-main .btn {
  width: 200px / @scale;
  height: 146px / @scale;
  border-radius: 10px / @scale;
  /* background: #ffe201; */
  background: repeating-linear-gradient(
    -45deg,
    #ffd901 0,
    #ffd901 5px / @scale,
    #ffe201 0,
    #ffe201 20px / @scale
  );

  color: #fff;
  box-shadow: 0px / @scale 10px / @scale 1px / @scale 0px / @scale #f79c00;
  /* line-height: 153px / @scale; */
  position: absolute;
  left: 219px / @scale;
  top: 170px / @scale;
  color: #d92a00;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.lottery-main .btn p {
  font-size: 34px / @scale;
  font-weight: 600;
  line-height: 60px / @scale;
}

.lottery-main .btn span {
  font-size: 22px / @scale;
}

/* 跑马灯 */
.lamp-animation {
  animation: lamp 0.5s linear infinite;
}

@keyframes lamp {
  0% {
    background-image: url("./lamp.png");
  }

  100% {
    background-image: url("./lamp2.png");
  }
}
</style>
