<template>
  <div class="wrap">
    <brandHeadDetail :detail="detail" />
    <div class="divider"></div>
    <packageList :packageInfo="packageInfo" :detail="detail"/>
    <div class="divider"></div>
    <CommentList :commentList="commentList" :type="0" :category="detail.category" :id="detail.id" />
    <div class="divider"></div>
     <div class="main">
       <div class="recommend">推荐</div>
      <van-divider />
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
// import { getComments } from '../../services/api.js'
import brandHeadDetail from '@/components/brandHeadDetail/index.vue'
import packageList from '@/components/packageList/index.vue'
import CommentList from '@/components/CommentList.vue'
import brandItem from '@/components/brandItem.vue'
export default {
  data() {
    return {
      category: '',
      id: '',
      detail: {id: '30', phone: 13457786283, address: '东夷小镇A岛4号院', name: '东夷客栈', category: 2, type: "民宿", avgPrice: '100.00', score: '4', headIcon: '/static/images/kezhan.jpg'},
      ticketList: [],
      packageInfo: [
        { id: '1', 
          name: '标间', 
          soldNum: 500, 
          subInfo: '热卖', 
          category: 2, 
          price: 80,
          value: 100, 
          headIcon: '/static/images/hotel1.jpeg', 
          validTime: '',
          type: '',
          },
          { id: '2', 
          name: '大床房', 
          soldNum: 349, 
          subInfo: '特色', 
          category: 2, 
          price: 150,
          value: 180, 
          headIcon: '/static/images/hotel1.jpeg', 
          validTime: '',
          type: '',
          },
      ],
      commentList: [
        {
          cid: 'c0', 
          userName: 'Tiamin', 
          avatarUrl: '/static/images/head1.jpg', 
          commentTime: '2019-04-20', 
          score: '4',
          comment: '居住环境安静，店员态度好。', 
          picUrls: [
            {
              pid: 'p0', 
              url: '/static/images/hotel1.jpeg'},
            {
              pid: 'p3', 
              url: '/static/images/kezhan.jpg'},
          ]
        },
        { 
          cid: 'c1', 
          userName: 'Adam', 
          avatarUrl: '/static/images/head3.jpg', 
          commentTime: '2019-01-20', 
          score: '4.5',
          comment: '总体来说非常不错！', 
          picUrls: [
            {
              pid: 'p8', 
              url: '/static/images/kezhan.jpg'},
          ]
        },
        {
          cid: 'c0', 
          userName: 'Troye', 
          avatarUrl: '/static/images/head1.jpg', 
          commentTime: '2019-04-08', 
          score: '3.5',
          comment: '配置条件一般。', 
          picUrls: [
            {
              pid: 'p0', 
              url: '/static/images/hotel1.jpeg'},
            {
              pid: 'p3', 
              url: '/static/images/kezhan.jpg'},
          ]
        },
      ],
      recommendInfo: [
        {id: '10', name: '空中花园西餐厅', category: 4, type: 2, avgPrice: '120.00', score: '5', headIcon: '/static/images/food1.jpeg'},
        {id: '07', name: '古北海洋馆', category: 0, type: 1, avgPrice: '100.00', score: '3.5', headIcon: '/static/images/sea8.jpg'},
        {id: '11', name: '胖哥俩蟹肉煲', category: 4, type: 0, avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel1.jpeg'},
        {id: '12', name: '金沙滩', category: 0, type: 3, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/beach1.jpeg'},
        {id: '20', name: 'season hotel', category: 1, type: 1, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/hotel2.jpeg'},
      ]
    }
  },

  computed: {
    cellTitle(){
      return `用户评价(${this.commentList.length})`
    },
    cellValue(){
      return `共${this.commentList.length}条`
    }
  },

  components: {
    brandHeadDetail,
    packageList,
    CommentList,
    brandItem,
  },

  methods: {

  },

  async mounted() {
    console.log('params:', this.$root.$mp.query);
    const { category, id } = this.$root.$mp.query;
    this.category = category;
    this.id = id;
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.recommend{
  font-size: 28rpx;
  color: #afafaf;
  margin-top: 20rpx;
}
</style>