<template>
    <div>
        <Header title="订单" />
        <div>
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in navData" :key="index">
                    <div v-if="item==='全部' && store.state.orderListEnd.length">
                        <div v-for="(i, index) in store.state.orderListEnd" :key="index">
                            <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
                        </div>
                    </div>
                    <div v-else>
                        <Empty />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '../../components/Header.vue';
import { useStore } from "vuex"
import { reactive, toRefs } from "vue"
import Empty from '../../components/Empty.vue';
export default {
    components: {
        Footer,
        Header,
        Empty
    },
    setup() {
        const store = useStore()
        const data = reactive({
            navData: ['全部', '交易完成', '待付款', '代发货', '已发货'],
        })

        return {
            ...toRefs(data),
            store,
        }
    }
}
</script>
<style lang="less" scoped></style>