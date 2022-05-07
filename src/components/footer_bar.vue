<template>
  <div>
    <!-- 吸底，footer -->
  <van-tabbar v-model="footer_active">
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/cateList" icon="search" dot>分页</van-tabbar-item>
    <van-tabbar-item to="/worthBuy" icon="friends-o" badge="5">值得买</van-tabbar-item>
    <van-tabbar-item to="/shopCar" icon="setting-o" badge="20">购物车</van-tabbar-item>
    <van-tabbar-item to="/shopCar" icon="setting-o" badge="20">个人</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'footer_bar',
  data(){
    return{
      footer_active:'',//若为0则没有标签栏显示
    }
  }
}
</script>
