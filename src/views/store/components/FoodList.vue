<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="navClick">
            <template #content>
                <div v-for="(item,index) in subItem" class="item-bg" :key="index">
                    <ListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange" />
                </div>
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>
<script>
import FoodListItem from './FoodListItem.vue'
import { reactive, toRefs } from 'vue'
import ListItem from '../../../components/ListItem'
export default {
    props:[
        "index",
        "foodData"
    ],
    components:{
        FoodListItem,
        ListItem
    },
    setup(props){
        let data = reactive({
            activeIndex:0,
            items:[],
            subItem:[]
        })

        //初始化数据
        const initData = ()=>{
            let newArry = []
            props.foodData?.items?.forEach((item,index)=>{
                newArry.push({
                    text:item.text
                })
                if(data.activeIndex === index){
                    data.subItem = item.children;
                }
                
            })
            data.items = newArry
        }

        initData()
        const navClick = (i)=>{
            //console.log(i)
            data.activeIndex = i
            initData()
        }

        const handleAdd=(id)=>{
            data.subItem.forEach((item,index)=>{
                if(item.id === id){
                    item.add = false
                    item.num += 1
                }
            })
        }

        const handleChange =(value,detail)=>{
            data.subItem.forEach(item=>{
                if(item.id === detail.name ){
                    item.num = value
                }
            })
            //console.log(data.subItem)
        }

        return{
           ...toRefs(data),
           navClick,
           handleAdd,
           handleChange
        }
    }
}
</script>