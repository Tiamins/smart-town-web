<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div>
      <div class="spot-list">
        <block v-for="(item, index) in spotList" :key="index">
             <div class="spot" @click="handleSpot">
               <brandItem :item="item" />
               <div v-if="index < spotList.length-1">
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
import { getSpotList } from '@/services/api.js'
export default {
  data() {
    return {
      spotList: [],
      spotInfo: [
        {id: '01', name: '孔子学院', category: 0, type: 2, avgPrice: '120.00', score: '5', headIcon: '/static/images/kong.jpg'},
        {id: '02', name: '金沙滩', category: 0, type: 0, avgPrice: '100.00', score: '3.5', headIcon: '/static/images/beach1.jpeg'},
        {id: '03', name: '东夷公园', category: 0, type: 5, avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel2.jpeg'},
        {id: '04', name: '东夷海洋馆', category: 0, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/sea1.jpg'},
        {id: '05', name: '水上亲子乐园', category: 0, type: 3, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/sea3.jpg'},
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
    const spot = await getSpotList();
    this.spotList = spot.list.map((item) => {
      const temp = {
        id: item.spotId,
        score: (Math.floor(Math.random() * 10)) / 2,
        name: item.spotName,
        headIcon: item.spotPic,
        category: 0,
        type: 1,
        avgPrice: item.spotAvgPrice,

      };
      return temp;
    });
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
</style>