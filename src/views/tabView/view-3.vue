<template>
  <div>{{text}}</div>
</template>

<script>
import Goods from "../../components/v-goods";
export default {
  components: { Goods },
  data() {
    return {
      text: "",
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.text = "hi word"
    }
  }
}
</script>

<style lang="less" scoped>
</style>