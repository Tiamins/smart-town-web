<template>
  <div class="wrap">
    <div class="main">
      <div class="search" @click="handleSearch">
       <van-search placeholder="请输入搜索关键词"  shape="round" placeholder-style="text-align: center"></van-search>
    </div>
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      circular="true"
      interval="2000"
      duration="500"
    >
      <block v-for="(item, index) in bannerUrl" :index="index" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <div class="nav-list">
      <block v-for="(item, index) in navInfo" :key="index">
        <div class="nav" @click="handleNav(item.url)">
          <van-icon :name="item.type" :color="item.color" size="80rpx"/>
          <div class="nav-title">{{item.title}}</div>
        </div>
      </block>  
    </div>
      
    </div>
    <div class="divider"></div> 
    <div class="main">
      <div class="hot-new-list">
        <block v-for="(item, index) in hotNewInfo" :key="index">
            <div class="hot-new" @click="handleNav(item.url)">
                <van-icon :name="item.type" :color="item.color" size="80rpx"/>
                <div class="desc">
                  <image :src="item.src" alt="图片" />
                </div>
            </div>
          </block>  
      </div>
    </div>
    <div class="divider"></div>
    <div class="main">
      <van-divider contentPosition="center">推荐</van-divider>
      <div class="recommend-list">
        <block v-for="(item, index) in recommendInfo" :key="index">
            <brandItem :item="item" />
            <van-divider />
        </block>
      </div>
    </div> 
  </div>
</template>

<script>
import brandItem from '../../components/brandItem.vue'
import { loginUrl } from '../../components/constants/index'

export default {
  data() {
    return {
      bannerUrl: [
        { url: "/static/images/town1.jpg" },
        { url: "/static/images/town2.jpg" },
        { url: "/static/images/town3.jpg" }
      ],
      navInfo: [
        {type: 'send-gift', title: '景点门票', color: '#409EFF', url: '../spot/main'},
        {type: 'wap-home', title: '酒店', color: '#E76262', url: '../hotel/main'},
        {type: 'invition', title: '民宿', color: '#DD8154', url: '../hotel/main'},
        {type: 'todo-list', title: '攻略', color: '#E3B168', url: '../hotel/main'},
        {type: 'coupon', title: '美食', color: '#F56C6C', url: '../hotel/main'},
        {type: 'shop', title: '购物', color: '#D77820', url: '../hotel/main'},
        {type: 'smile', title: '休闲娱乐', color: '#DE5C92', url: '../hotel/main'},
        {type: 'friends', title: '行程定制', color: '#5BA775', url: '../hotel/main'},
      ],
       hotNewInfo: [
        {type: 'hot', color: '#efefef', src: '/static/images/food1.jpeg', url: '../spot/main'},
        {type: 'new', color: '#efefef', src: '/static/images/beach1.jpeg', url: '../hotel/main'},
      ],
      recommendInfo: [
        {id: '30', name: '东夷客栈', category: 2, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/kezhan.jpg'},
        {id: '10', name: 'Tomacado花厨Tomacado花厨Tomacado花厨Tomacado花厨Tomacado花厨', category: 4, type: 2, avgPrice: '120.00', score: '3.5', headIcon: '/static/images/westfood.jpeg'},
        {id: '07', name: '东夷海洋馆', category: 0, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/sea1.jpg'},
        {id: '11', name: '胖哥俩蟹肉煲', category: 4, type: 0, avgPrice: '120.00', score: '3', headIcon: '/static/images/pangfood.jpg'},
        {id: '12', name: '宽板凳火锅', category: 4, type: 3, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/hotpot.jpg'},
        {id: '20', name: '悦湾大酒店', category: 2, type: 1, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/hotel3.jpeg'},
      ]
    }
  },
  components: {
    brandItem
  },

  created () {
   const token = mpvue.getStorageSync("token");
    if (token){
      wx.checkSession({
        success: () => {
        },
        fail: () => {
          this.$openWin(loginUrl)
        }
      })
    } else {
      this.$openWin(loginUrl)
    }
  },
  
  methods: {
    handleSearch() {
      let url = "../search/main?type=home";
      wx.navigateTo({ url });
    },
    handleNav(url){
      wx.navigateTo({url})
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.slide-image {
  width: 100%;
  height: 300rpx;
}
.nav-list{
  margin-top: 30rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.nav{
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
}
.nav-title{
  color: #4f4f4f;
  font-size: 28rpx;
}
.hot-new-list{
  margin-top: 20rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-new{
  width: 49.2%;
  height: 200rpx;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20rpx;
  justify-content: space-between;
  border-radius: 5rpx;
}
.hot-new:nth-child(odd){
  background-image: linear-gradient(160deg, #a200ff 20%,#cf3700 80%);
}
.hot-new:nth-child(even){
  background-image: linear-gradient(160deg, #447c73 20%,#008cff 80%);
}
.desc{
  display: flex;
  align-items: center;
  image{
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    align-items: center;
    margin-right: 20rpx;
  }
}
</style>