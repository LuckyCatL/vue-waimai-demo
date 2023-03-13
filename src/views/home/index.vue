<template>
    <div class="upfoot">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>11111</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主要内容区域 -->
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text" />
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item, index) in big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(item, index) in small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs class="van-tabs" color="#ffc400">
                    <van-tab v-for="(item, index) in centent_nav_list" :title="item.tab" :key="index">
                        <NavList :navList="item.data" />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import NavList from '@/components/NavList'
import { reactive, toRefs, onMounted } from 'vue'
//import axios from 'axios'
import { getApiHomeData } from '../../api/api'
export default {
    components: {
        Footer,
        NavList
    },
    setup() {
        let data = reactive({
            big_sort: [],
            small_sort: [],
            centent_nav_list: [],
        })
        //const active = ref(0);
        const getHomeData = () => {

            getApiHomeData().then((res) => {
                //console.log(res)
                data.big_sort = res.big_sort
                data.small_sort = res.small_sort
                data.centent_nav_list = res.centent_nav_list
            })


            // axios.get('/home/getHomeData').then((res)=>{
            //     //console.log(res);
            //     const {code,data} = res.data
            //     if(code == 200){
            //         data.big_sort = this.data.big_sort
            //         this.data.small_sort = data.small_sort
            //         this.data.centent_nav_list = data.centent_nav_list
            //     }
            // })
        }

        onMounted(() => {
            getHomeData()
        })

        return {
            ...toRefs(data),
            //active
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    background-image: linear-gradient(#ffc400, #fff);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 40px 20px;

    .text {
        font-size: 20px;
        font-weight: 600;
    }

    .location {
        span {
            margin: 0 5px;
        }

        font-size: 14px;
    }
}

.main {
    margin-top: -30px;
    font-size: 12px;

    .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;

        .search {
            position: relative;

            input {
                width: 100%;
                border: 1px solid #ffc400;
                border-radius: 20px;
                height: 30px;
            }

            .search-text {
                position: absolute;
                right: -6px;
                top: 1px;
                background-color: #ffc400;
                border-radius: 16px;
                width: 50px;
                height: 32px;
                line-height: 32px;
                font-size: 15px;
                text-align: center;
            }
        }

        .sort {
            padding: 20px 0;

            .big-sort {
                display: flex;

                div {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    flex-flow: column;
                    align-items: center;

                    .icon {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 5px;
                    }
                }
            }

            .small-sort {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;

                div {
                    display: flex;
                    justify-content: center;
                    flex-flow: column;
                    align-items: center;
                    width: 20%;
                }

                .icon {
                    width: 30px;
                    height: 30px;
                    margin: 20px;
                }
            }
        }
    }

    .van-tabs {
        padding: 0 20px 10px;
    }
}

//样式穿透 
/deep/ .van-tabs__wrap {
    border-radius: 10px;
}
</style>