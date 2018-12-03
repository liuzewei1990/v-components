<template>
  <a class="v-media-box" href="javascript:void(0);">
    <div class="v-media-hd" v-if="pic">
      <img :src="pic" alt="">
    </div>
    <div class="v-media-bd">
      <h4 class="v-media-bd__title">{{title}}</h4>
      <p class="v-media-bd__desc">{{desc}}</p>
    </div>
    <div class="v-media-link"></div>
  </a>
</template>

<script>
export default {
  props: ["pic", "title", "desc"]
}
</script>

<style lang="less" scoped>
.v-media-box {
  background: #fff;
  text-decoration: none;
  color: #000000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #e3e5e9;
    color: #e3e5e9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    left: 10px;
  }

  .v-media-hd {
    margin-right: 0.8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    img {
      width: 100%;
      max-height: 100%;
      vertical-align: top;
    }
  }
  .v-media-bd {
    flex: 1;
    min-width: 0;
    text-align: left;
    .v-media-bd__title {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-size: 17px;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
    }
    .v-media-bd__desc {
      margin: 0;
      padding: 0;
      color: #808080;
      font-size: 13px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
