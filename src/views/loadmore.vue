<template>
        <div class="loadmore-page">
                <div class="header" ref="header">
                        <Header>演示</Header>
                        <div>
                                当前查询条件
                                {{query}}
                        </div>
                        <button @click="testClick('西瓜')">设置搜索条件 西瓜</button>
                        <button @click="testClick('苹果')">设置搜索条件 苹果</button>
                </div>
                <div class="content">
                        <ScrollRefreshBox :top="0" :api="ajaxGetCollectList" :query="query" ref="scrollLoadmoreBox">
                                <template slot-scope="scope">
                                        <Media v-for="(item,index) in scope.list" :key="index" pic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" :title="`标题${item}`" desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"></Media>
                                </template>
                        </ScrollRefreshBox>
                </div>
        </div>
</template>

<script>
import ScrollRefreshBox from '../components/v-scroll-refresh-box/index.vue';
import Header from '../components/v-header';
import Media from "../components/v-media";
export default {
        components: { ScrollRefreshBox, Header, Media },
        data() {
                return {
                        DB: [], // 模拟数据库
                        status: "", // 加载状态
                        top: 0,
                        //   list: [],
                        query: { page: 1, limit: 20, type: "苹果" }
                }
        },
        created() {
                this.initDB();
        },
        mounted() {
                this.setTop();
        },
        methods: {
                setTop() {
                        this.top = this.$refs.header.offsetHeight;
                },
                testClick(type) {
                        this.query["type"] = type;
                        this.$refs.scrollLoadmoreBox.triggerPullToRefresh();
                },
                // 初始化数据库
                initDB() {
                        for (let index = 0; index < 99; index++) {
                                this.DB.push(index);
                        }
                },
                // 模拟接口
                ajaxGetCollectList(query) {
                        console.log({ ...query })
                        let DB = [...this.DB]
                        let collectList = DB.splice((query.page - 1) * query.limit, query.limit);
                        return {
                                collectList: collectList,
                                totalPages: Math.ceil(this.DB.length / query.limit),
                        }
                },
        }
}
</script>
<style lang="less" scoped>
.loadmore-page {
        background: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
}
.header {
}
.content {
        flex: 1;
        position: relative;
        height: 100%;
}
.item {
        line-height: 30px;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
}
</style>
