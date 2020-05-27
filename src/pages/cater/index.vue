<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div>
      <div class="spot-list">
        <block v-for="(item, index) in caterList" :key="index">
             <div class="spot" @click="handleSpot">
               <brandItem :item="item" />
               <div v-if="index < caterList.length-1">
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
      caterList: [
        {id: '30', name: '深夜BBQ', category: 4, type: "烤串", avgPrice: '60.00', score: '4.5', headIcon: '/static/images/cater1.jpg'},
        {id: '10', name: '特色酸辣粉之家', category: 4, type: "小吃", avgPrice: '18.00', score: '3.5', headIcon: '/static/images/cater2.jpg'},
        {id: '07', name: '海鲜小笼包店', category: 4, type: "主食", avgPrice: '26.00', score: '4.5', headIcon: '/static/images/cater3.jpg'},
        {id: '11', name: '鸭血粉丝铺', category: 4, type: "小吃", avgPrice: '20.00', score: '3', headIcon: '/static/images/cater4.jpg'},
        {id: '12', name: '花甲粉丝老店', category: 4, type: "小吃", avgPrice: '30.00', score: '4.5', headIcon: '/static/images/cater5.jpg'},
        {id: '20', name: '麻辣串一串', category: 4, type: "小吃", avgPrice: '15.00', score: '2.5', headIcon: '/static/images/cater6.jpg'},
        {id: '20', name: '东夷臭豆腐', category: 4, type: "小吃", avgPrice: '10.00', score: '2.5', headIcon: '/static/images/cater7.jpg'},
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