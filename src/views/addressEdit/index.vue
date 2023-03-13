<template>
    <div>
        <Header :title="address" />
        <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" :address-info="addressInfo" />
    </div>
</template>
<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from "vue-router"
import { Toast } from 'vant';
export default {
    components: {
        Header,
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        const data = reactive({
            areaList: {
                province_list: {
                    110000: "广东省",
                    120000: "浙江省",
                },
                city_list: {
                    110100: "广州市",
                    110200: "深圳市",
                    120100: "杭州市",
                    120200: "宁波市",
                },
                county_list: {
                    110101: "天河区",
                    110102: "海珠区",
                    120102: "上城区",
                    130102: "下城区",
                }
            },
            addressInfo:{

            },
        })

        const onSave = (content) => {
            //新增 或者 编辑
            if(route.query.type === "add"){
                store.commit('addaddress',content)
            }else{
                store.commit('editaddress',content)
            }
            Toast('保存成功')
            setTimeout(()=>{
                router.push('/address')
            },1000)
        }
        const onDelete = (content) => {
            store.commit('deleteaddress',content)
            Toast('删除成功')
            setTimeout(()=>{
                router.push('/address')
            },1000)

        }

        const init=()=>{
            store.state.userAddress.forEach((item)=>{
                if(item.id === Number(route.query.id)){
                    data.addressInfo = item;
                }
            })
        }

        onMounted(()=>{
            init()
        })

        const address = computed(()=>{
            return route.query.type === 'add'? '地址新增':'地址编辑'
        })

        return {
            ...toRefs(data),
            onSave,
            onDelete,
            address
        }
    }
}
</script>
<style lang="less" scoped>
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-switch--on {
    background-color: #ffc400;
}
</style>