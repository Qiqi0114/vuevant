<template>
  <div>
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="sidebar">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    </div>
    <div>
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </van-swipe>
    </div>
    </div>

      <!-- 吸底，footer -->
    <footer_bar></footer_bar>
  </div>
</template>

<script>
import footer_bar from './footer_bar.vue'
export default {
 name: 'cateList',
 data(){
   return{
     value: '',
   }
 },
  components:{footer_bar},
}
</script>

<style>
.sidebar{
  float: left;
}
.swipe{
  width: 5rem;
  float: right;
}
</style>
