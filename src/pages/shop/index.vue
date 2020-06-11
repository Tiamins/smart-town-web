<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div>
      <div class="spot-list">
        <block v-for="(item, index) in shopList" :key="index">
             <div class="spot" @click="handleSpot">
               <brandItem :item="item" />
               <div v-if="index < shopList.length-1">
                 <van-divider />
               </div>
             </div>
        </block>
        <van-divider contentPosition="center">加载完毕，没有更多数据</van-divider>
      </div>
    </div>
  </div>
</template>

<script>
import brandItem from '../../components/brandItem.vue'
// import { getSpotList } from '@/services/api.js'
export default {
  data() {
    return {
      // spotList: [],
      shopList: [
        {id: '30', name: '牛肉堂', category: 5, type: "食物特产", avgPrice: '60.00', score: '4.5', headIcon: '/static/images/shop1.jpg'},
        {id: '10', name: '古意面包坊', category: 5, type: "食物特产", avgPrice: '12.00', score: '3.5', headIcon: '/static/images/shop2.jpg'},
        {id: '07', name: '东夷纸画', category: 5, type: "艺术", avgPrice: '58.00', score: '4.5', headIcon: '/static/images/shop3.jpg'},
        {id: '11', name: '流音摄影馆', category: 5, type: "摄影", avgPrice: '200.00', score: '3', headIcon: '/static/images/shop4.jpg'},
        {id: '12', name: '回忆皮影铺', category: 5, type: "艺术", avgPrice: '80.00', score: '4.5', headIcon: '/static/images/shop5.jpg'},
        // {id: '20', name: '东夷老酸奶', category: 5, type: "食物特产", avgPrice: '10.00', score: '2.5', headIcon: '/static/images/shop6.jpg'},
        // {id: '20', name: '繁星灯笼店', category: 5, type: "工艺特产", avgPrice: '20.00', score: '2.5', headIcon: '/static/images/shop7.jpg'},
      ],
    }
  },

  components: {
    brandItem,
  },

  methods: {
    handleSearch() {
      let url = "../search/main?type=spot";
      wx.navigateTo({ url });
    },
  },

  async mounted() {
    // const spot = await getSpotList(); 
    // this.spotList = spot.list.map((item) => {
    //   const temp = {
    //     id: item.spotId,
    //     score: (Math.floor(Math.random() * 10)) / 2,
    //     name: item.spotName,
    //     headIcon: item.spotPic,
    //     category: 0,
    //     type: item.spotType,
    //     avgPrice: item.spotAvgPrice,

    //   };
    //   return temp;
    // });
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
</style>