<template>
    <div class="footer">
        <router-view />
        <van-tabbar route placeholder active-color="#ffc400">
            <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>

</script>
<style scoped>

</style>