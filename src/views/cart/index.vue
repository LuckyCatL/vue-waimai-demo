<template>
    <div>
        <Header title="购物车" :edit="true"/>
        <CartDetail v-if="isShow" :changeShow="changeShow"/>
        <Empty v-else/>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import Empty from '../../components/Empty.vue';
import Header from '../../components/Header.vue'
import CartDetail from './components/CartDetail.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

export default {
    components: {
        Footer,
        Empty,
        Header,
        CartDetail
    },
    setup(){
        const isShow = ref(true)
        const store = useStore() 

        const init = ()=>{
            if(store.state.cartList.length === 0) {
                isShow.value = false
            }
            
        }

        onMounted(()=>{
            init()
        })

        const changeShow=()=>{
            isShow.value =false
        }

        return{
            isShow,
            changeShow
        }
    }
}
</script>
<style lang="less" scoped></style>