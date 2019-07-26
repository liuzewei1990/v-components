<template>
  <!-- 答案解析 -->
  <div class="ellipsis-text-box">
    <!-- 正本 -->
    <p class="ellipsis-text" ref="ellipsis-text" :class="[{'ellipsis-text-is-hidden':topicDescIsHidden},`ellipsis-text-clamp-${clamp}`]">
      {{text}}
    </p>
    <!-- 副本 -->
    <p class="ellipsis-text ellipsis-text-bit ellipsis-text-is-hidden" ref="ellipsis-text-bit" :class="`ellipsis-text-clamp-${clamp}`">
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
      我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度我是占位符用来获取两行文本的高度
    </p>
    <!-- 展开按钮 -->
    <i class="ellipsis-text-icon" v-show="isShowEllipsisTextBtn" :class="{'ellipsis-text-icon-flag':!topicDescIsHidden}" @click="topicDescIsHidden = !topicDescIsHidden"></i>
  </div>

</template>

<script>
export default {
  props: {
    text: String,
    clamp: {
      type: String,
      default: "1"
    }
  },
  mounted() {
    //   + 5 是容误差
    if (this.$refs["ellipsis-text"].clientHeight > this.$refs["ellipsis-text-bit"].clientHeight + 5) {
      this.isShowEllipsisTextBtn = true;
      this.topicDescIsHidden = true;
    }
  },
  data() {
    return {
      // 默认不隐藏
      topicDescIsHidden: false,
      isShowEllipsisTextBtn: false
    }
  }
}
</script>

<style lang="less" scoped>
.ellipsis-text-box {
  background-color: #fff;
  .ellipsis-text {
    font-size: 13px;
    color: #666;
    line-height: 19px;
  }

  .ellipsis-text-bit {
    position: absolute;
    left: 0;
    top: -10000px;
  }

  .ellipsis-text-is-hidden {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    // 留着以下注释，否则wenpack打包不上
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
  }

  .ellipsis-text-clamp-1 {
    /* autoprefixer: on */
    -webkit-line-clamp: 1;
  }
  .ellipsis-text-clamp-2 {
    /* autoprefixer: on */
    -webkit-line-clamp: 2;
  }
  .ellipsis-text-clamp-3 {
    /* autoprefixer: on */
    -webkit-line-clamp: 3;
  }
  .ellipsis-text-clamp-4 {
    /* autoprefixer: on */
    -webkit-line-clamp: 4;
  }
  .ellipsis-text-clamp-5 {
    /* autoprefixer: on */
    -webkit-line-clamp: 5;
  }

  .ellipsis-text-icon {
    display: block;
    // width: 22px;
    // height: 24px;
    padding: 6px;
    margin-top: 10px;
    box-sizing: border-box;
    background-image: url("./more.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    transform: rotate(0deg);
  }

  .ellipsis-text-icon-flag {
    transform: rotate(180deg);
  }
}
</style>
