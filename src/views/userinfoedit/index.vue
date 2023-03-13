<template>
    <div>
        <Header />
        <div>
            <van-field v-model="name" label="用户名" placeholder="请输入用户名" />
            <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" disabled />
            <van-field v-model="pass" label="密码" placeholder="请输入密码" />
        </div>
        <van-button type="primary" color="#ffc400" round block class="save-btn" @click="save">保存</van-button>
        <van-button type="primary" color="#ffc400" round block class="save-btn" @click="logOut">退出登录</van-button>
    </div>
</template>
<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
export default {
    components: {
        Header,
    },
    setup(){
        const router = useRouter()
        const data = reactive({
            name:"",
            sign: "就是这样",
            pass:""
        })

        const save=()=>{
            if(data.name && data.pass){
                let userInfo = JSON.parse(localStorage.userInfo)
                let newUserInfo = {
                    user:data.name || userInfo.name,
                    pass:data.pass || userInfo.pass,
                }
                localStorage.setItem("userInfo",JSON.stringify(newUserInfo))
                Toast('修改成功')
                router.push('/mine')
            }else{
                Toast('请输入内容')
            }
        }

        const logOut=()=>{
            localStorage.removeItem('isLogin')
            Toast('退出成功')
            router.push('/home')
        }

        return{
            ...toRefs(data),
            save,
            logOut
        }
    }
}
</script>
<style lang="less" scoped>
.save-btn {
    width: 80%;
    margin: 20px auto;
}
</style>