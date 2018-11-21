<template>
    <div class="v-goods">
        <a href="javascript:void(0);" :class="{'v-goods-disabled':disabled}" @click="toUrl">
            <div class="goods-header">
                <div class="goods-img">
                    <img :src="item.picUrl" :key="item.picUrl" />
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <slot name="badge"></slot>{{item.name}}</div>
                <small v-if="isShowBrief" class="brief">{{item.brief || item.name}}</small>
            </div>
        </a>
        <div class="list-price buy">
            <span class="price-new" :class="{'v-goods-disabled':disabled}">￥{{item.retailPrice}}</span>
            <slot name="actionIcon"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        disabled: {
            type: Boolean,
            default: false
        },
        isShowBrief: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        toUrl() {
            this.disabled || this.$router.push({ path: `/product/${this.item.id}` })
        }
    }
}
</script>

<style lang="less" scoped>
.v-goods {
  float: left;
  padding: 3px;
  width: 50%;
  //   margin: 0.935% 0.935% 1.135%;
  box-sizing: border-box;
  position: relative;
  //   background: rgba(255, 255, 255, 1);
  //   background: red;
}
.v-goods-disabled {
  opacity: 0.8;
}

.v-goods a {
  display: block;
  background: rgba(255, 255, 255, 1);
  text-decoration: none;
  color: #222;
  //   padding: 10px;
}

.goods-header {
  position: relative;

  .goods-img {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img[lazy="loading"] {
      background-color: #f1f4f3;
      width: 100% !important;
    }
    img[lazy="error"] {
      width: 100px !important;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
}

.v-goods .content {
  .title {
    height: 33.6px; // 部分标题文字较少，这里需要统一高度
    word-break: break-word;
    white-space: pre-line; //合并空白符序列，但是保留换行符。
    text-align: left;
    height: 31px;
    margin-top: 5px;
    line-height: 16px;
    padding: 0 4px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 500;
    color: rgba(94, 94, 94, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    // 留着以下注释，否则wenpack打包不上
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 2;
  }
  .brief {
    color: #797d82;
    display: block;
    margin-top: 3px;
    text-align: left;
    font-size: 12px;
    padding: 4px;
    box-sizing: border-box;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
}

.list-price {
  height: 34px;
  line-height: 35px;
  position: relative;
  bottom: 0;

  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 1);

  .price-new {
    flex: 1;
    text-align: left;
    color: red;
    font-size: 16px;
  }
}
</style>
