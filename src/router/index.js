import { createRouter, createWebHashHistory } from "vue-router";
import { Toast } from "vant";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component:()=>import('../views/home/')
        },
        {
            path: '/home',
            component:()=>import('../views/home/')
        },
        {
            path: '/order',
            component:()=>import('../views/order/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/mine',
            component:()=>import('../views/mine/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/cart',
            component:()=>import('../views/cart/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/store',
            component:()=>import('../views/store/')
        },
        {
            path: '/createorder',
            component:()=>import('../views/createOrder/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/address',
            component:()=>import('../views/Address/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/addressedit',
            component:()=>import('../views/addressEdit/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/userinfoedit',
            component:()=>import('../views/userinfoedit/'),
            meta:{
                isAuth:true,
            }
        },
        {
            path: '/login',
            component:()=>import('../views/login/')
        },
        {
            path: '/resgister',
            component:()=>import('../views/resgister/')
        },
    ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        //登录以后，会在localstorage里面存储一个标识
        if(localStorage.isLogin === 'login') {
            next()
        }else{
            next('/login')
            Toast('请先去登录')
        }
    }else{
        next()
    }
})


export default router