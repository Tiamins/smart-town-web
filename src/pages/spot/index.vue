<template>
  <div class="wrap">
    <div class="spot-type">
      <van-tabs swipe-threshold="4" color="#409EFF" @click="onClick" swipeable="true">
        <van-tab name="0" title="全部"></van-tab>
        <van-tab name="1" title="团队游"></van-tab>
        <van-tab name="2" title="亲子游"></van-tab>
        <van-tab name="3" title="情侣游"></van-tab>
        <van-tab name="4" title="朋友游"></van-tab>
      </van-tabs>
    </div>
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
        {id: '01', name: '孔子学院', category: 0, type: "文化建筑", avgPrice: '120.00', score: '5', headIcon: '/static/images/kong.jpg'},
        {id: '02', name: '金沙滩', category: 0, type: "自然风光", avgPrice: '100.00', score: '3.5', headIcon: '/static/images/beach1.jpeg'},
        {id: '03', name: '东夷公园', category: 0, type: "自然风光", avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel2.jpeg'},
        {id: '04', name: '东夷海洋馆', category: 0, type: "展览馆", avgPrice: '100.00', score: '4.5', headIcon: '/static/images/sea1.jpg'},
        {id: '05', name: '水上亲子乐园', category: 0, type: "游玩户外", avgPrice: '120.00', score: '2.5', headIcon: '/static/images/sea3.jpg'},
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
    this.spotList = spot.list.map((item, index) => {
      const temp = {
        id: item.spotId,
        // score: (Math.floor(Math.random() * 10)) / 2,
        score: index == 0 ? 4.5 : index + 1.5,
        name: item.spotName,
        headIcon: item.spotPic,
        category: 0,
        type: item.spotType,
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