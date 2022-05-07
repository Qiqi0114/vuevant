<template>
  <div>
    <van-sticky>
  <!-- header -->
    <van-row style="background:#fff">
      <van-col class="logo">
        <img src="../assets/logo.png" alt="">
      </van-col>
      <van-col >
        <van-search
        class="index_header_search"
          v-model="search_v"
            placeholder="请输入搜索关键词" />
      </van-col>
      <van-col >
        <div class="loginBtn" @click="login">登录</div>
      </van-col>
    </van-row>
  <!-- 滚动的tab按钮列表 -->
    <van-tabs>
      <van-tab v-for="(n,inx) in tabBtnList" :key="inx" :title="n">
      </van-tab>
    </van-tabs>
    </van-sticky>
<!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
    <van-swipe-item v-for="(n,inx) in imgObj" :key=inx >
      <img :src=n />
    </van-swipe-item>
  </van-swipe>
<!-- 滚动条下的广告 -->
  <van-row class="service_info">
    <van-col span="8" >
      <i class="icon icon-1"></i>
      <span>网易自营品牌</span>
    </van-col>
    <van-col span="8">
      <i class="icon icon-2"></i>
      <span>30天无忧退货</span>
    </van-col>
    <van-col span="8">
      <i class="icon icon-3"></i>
      <span>48小时快速退款</span>
    </van-col>
  </van-row>
<!-- 二排，十个栏目图 -->
  <van-grid :column-num="5">
      <van-grid-item
          v-for="(n,inx) in good_icon" :key=inx >
          <img :src="n.imgurl"/>
          <div>{{n.goods_txt}}</div>
      </van-grid-item>
  </van-grid>
<!-- 商品列表 -->
  <div class="goodsListDiv">
    <h1>
      <label>新品首发</label>
      <a href="#">更多</a>
    </h1>
      <van-grid :border="false"  :center="false" column-num="3">
        <van-grid-item
            v-for="(n,inx) in goodsList" :key=inx >
            <div class="goodsDiv">
              <img :src="n.imgurl"/>
            </div>
            <div>{{n.txt}}</div>
        </van-grid-item>
  </van-grid>
  </div>

  <div style="height:2rem;background:#666;font-size:.5rem;
  color:#fff;text-align:center">
    footer div
  </div>

    <!-- 吸底，footer -->
    <footer_bar></footer_bar>

</div>
</template>

<script>
import axios from 'axios'
import footer_bar from './footer_bar.vue'

export default {
  name: 'app_index',
  data () {
    return {
        search_v:'',
        tabBtnList:'',
        imgObj:[
          'https://yanxuan.nosdn.127.net/cdcad3000a9c72e79a66f64cb9d1c0a0.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/9b0b8ddfbe0eece22ba1e9fe38815f1d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/529dc84cb5fd7925beb2744ec20724eb.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/249269cca76296266e13d73d2f2612a2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/8bf692109b422b39dee7c71b543e6cd3.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/static-union/165121909837b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/69d3498ca002bcaacd1f50b1fe2b08d8.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/cdcad3000a9c72e79a66f64cb9d1c0a0.jpg?type=webp&imageView&quality=75&thumbnail=750x0',

        ],
        good_icon:[
          {
            imgurl:require('../assets/good_icon/ser1.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser2.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser3.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser4.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser5.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser6.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser7.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser8.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser9.png'),
            goods_txt:'新品首发'
          },{
            imgurl:require('../assets/good_icon/ser10.gif'),
            goods_txt:'新品首发'
          },
        ],
        goodsList:[
          {
            imgurl:require('../assets/goods_list/list1.png'),
            txt:'开拓者系列 经典爆款护脊人体工学椅',
            price:'1199',
            gradientPrice:1
          }, {
            imgurl:require('../assets/goods_list/list2.png'),
            txt:'【经典升级】新贵轻奢，60支锦眠贡缎四件套',
            price:'496',
            gradientPrice:2
          }, {
            imgurl:require('../assets/goods_list/list3.png'),
            txt:'鸡肉虾仁双重鲜美，猫用浓汤白肉罐头',
            price:'65',
            gradientPrice:3
          }, {
            imgurl:require('../assets/goods_list/list4.png'),
            txt:'快速吸水，2毫米豆腐猫砂  绿茶味 2.6千克',
            price:'88',
            gradientPrice:0
          }, {
            imgurl:require('../assets/goods_list/list5.png'),
            txt:'防晒必备 清爽夏日半透慵懒宽松T恤',
            price:'226',
            gradientPrice:4
          }, {
            imgurl:require('../assets/goods_list/list6.png'),
            txt:'皮酥肉嫩易脱骨，虎皮凤爪 卤香味 175克',
            price:'19',
            gradientPrice:0
          },
        ]
    }
  },
  components:{footer_bar},
  created(){
    axios.get('http://localhost:8081/get_tabbtn_list')
      .then( _d =>{
        console.log( _d.data);
        this.tabBtnList = _d.data;
      });
  },
  methods:{
    login(){
      this.$router.replace('/shopCar')
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 1.4rem; display: inline-block;
  /*        上  右下   左       */
  margin: .1rem 0 0 .1rem;
}
.index_header_search{
  width: 3.8rem;border: 0;margin: .1rem 0 0 .1rem;padding: 0;
}
.van-search__content{
  background: #ededed;
  border-radius: .15rem;
}
.loginBtn{
  margin: .15rem 0 0 .15rem;
  width: .7rem;height: .45rem;color: #f00;
  line-height: .5rem;text-align: center;
  font-size: .25rem;border-radius: .1rem;
  border: 1px solid #f00;
}
.service_info{
  text-align: center;
  height: .6rem; line-height: .6rem;
}
.service_info i.icon{
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  vertical-align: middle;
  width: .42667rem;height: .42667rem;
}
.service_info i.icon_1{
  background-image: url('../assets/guang1.png');
}
.service_info i.icon_2{
  background-image: url('../assets/guang2.png');
}
.service_info i.icon_3{
  background-image: url('../assets/guang3.png');
}
.goodsListDiv{
  /* 清除浮动 */
  clear: both;
  margin: .2rem 0;
}
.goodsListDiv h1{
  display: block; clear: both; margin: 0 0.2rem;
  height: .5rem; line-height: .5rem;
}
.goodsListDiv h1 label{
  float: left; font-size: .3rem;
}
.goodsListDiv h1 a{
  float: right; font-size: .25rem;
}
.goodsDiv{
  width: 100%;
  background: #f4f4f4;
}
</style>
