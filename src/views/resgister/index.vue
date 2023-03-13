<template>
    <div class="register">
        <Header title="注册" />
        <div class="img">美团</div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="pass" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="onSubmit" color="#ffc400">
                    注册
                </van-button>
                <van-button round block type="info" class="register" @click="toLogin" color="#ffc400">
                    去登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import Header from '../../components/Header.vue';
import { useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';
import { Toast } from 'vant';
export default {
    components: {
        Header,
    },
    setup() {
        const router = useRouter()

        const data = reactive({
            username: "",
            password: "",
        })

        const toLogin = () => {
            router.push('/login')
        }

        const onSubmit = (val) => {
           // console.log(val)
            if (localStorage.userInfo) {
                let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                if (userInfo['user'] === val['user']) {
                    Toast('该用户已经存在')
                    return;
                }

            } else {
                register(val)
            }
        }

        const register = (val) => {
            localStorage.setItem('userInfo', JSON.stringify(val))
            Toast('注册成功')
            router.push('/login')
        }

        return {
            ...toRefs(data),
            toLogin,
            onSubmit
        }
    }
}
</script>
<style lang="less" scoped>
.register {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>