<template>
  <div>
    <Swiper :list="swiperList" height="200px"></Swiper>
    <Goods v-for="(item,index) in list" :key="index" :item="item" :isShowBrief="false"></Goods>
  </div>
</template>

<script>
let IMG_DEMO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==";
import { Swiper, SwiperItem } from "../../components/v-swiper";
import Goods from "../../components/v-goods";
export default {
  components: { Swiper, SwiperItem, Goods },
  data() {
    return {
      text: "",
      swiperList: [
        {
          title: "标题1",
          img: IMG_DEMO,
        },
        {
          title: "标题2",
          img: IMG_DEMO,
        },
        {
          title: "标题3",
          img: IMG_DEMO,
        },
      ],
      list: [
        {
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        },
        {
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        }, {
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        }, {
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        }, {
          picUrl: "http://img14.360buyimg.com/n7/jfs/t29869/274/250211057/439907/9d333f20/5bece01eN2313d689.jpg!q70.dpg",
          name: "博锐剃须刀电动充电式刮胡刀剃胡须刀男士便携往复式刀头水洗博锐PS173 标配+1个刀网（店长推荐",
          brief: "男女大盘时尚双显多功能防水防震运动电子潮流男表 黑金GA-110GB-1A",
          retailPrice: "88.88"
        }
      ]
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