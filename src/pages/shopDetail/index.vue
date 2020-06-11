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
      detail: {id: '30', phone: 13457786283, address: '东夷小镇C岛2号院', name: '牛肉堂', category: 5, type: "食物特产", avgPrice: '60.00', score: '4.5', headIcon: '/static/images/shop1.jpg'},
      // detail: {id: '30', phone: 13457786283, address: '东夷小镇C岛2号院', name: '深夜BBQ', category: 4, type: "烤串", avgPrice: '60.00', score: '4.5', headIcon: '/static/images/cater1.jpg'},
      ticketList: [],
      packageInfo: [
        { id: '1', 
          name: '原味牛肉棒', 
          soldNum: 100, 
          subInfo: '包邮', 
          category: 4, 
          price: 69,
          value: 90, 
          headIcon: '/static/images/shop11.jpg', 
          validTime: '',
          type: '',
          },
          { id: '2', 
          name: '手撕牛肉', 
          soldNum: 120, 
          subInfo: '包邮', 
          category: 4, 
          price: 119,
          value: 140, 
          headIcon: '/static/images/shop12.jpg', 
          validTime: '',
          type: '',
          },
          { id: '1', 
          name: '麻辣灯影牛肉', 
          soldNum: 57, 
          subInfo: '包邮', 
          category: 4, 
          price: 49,
          value: 8, 
          headIcon: '/static/images/shop13.jpg', 
          validTime: '',
          type: '',
          }
      ],
      commentList: [
        {
          cid: 'c0', 
          userName: 'Tiamin', 
          avatarUrl: '/static/images/head1.jpg', 
          commentTime: '2019-04-20', 
          score: '4.5',
          comment: '海洋馆里分几个部分，有不同的动物主题，大大小小的生物不少，环境还不错，一进门就像雨林似的，有代入感，每天定时有海洋动物表演，不过总体看下来内容不是很丰富，主要是海豚的表现会让人兴奋一下下，一些很小的生物在玻璃缸里游动，在灯光下仔细观察还是挺有意思的，中间看鲸鱼，被它的声音吸引。海洋馆里还有餐饮区和购物区，价格也是不便宜，总体来说，还是值得一逛，就是小贵', 
          picUrls: [
            {
              pid: 'p0', 
              url: '/static/images/sea1.jpg'},
            // {
            //   pid: 'p1', 
            //   url: '/static/images/sea4.jpg'},
            // {
            //   pid: 'p2', 
            //   url: '/static/images/sea2.jpg'},
            {
              pid: 'p3', 
              url: '/static/images/sea5.jpg'},
            // {
            //   pid: 'p4', 
            //   url: '/static/images/sea6.jpg'},
            // {
            // pid: 'p4', 
            // url: '/static/images/sea7.jpg'},
          ]
        },
        { 
          cid: 'c1', 
          userName: 'Adam', 
          avatarUrl: '/static/images/head3.jpg', 
          commentTime: '2019-01-20', 
          score: '3.5',
          comment: '去的时候人非常多，爆满，有白鲸、海狮，海豚等表演，里面还有各种海底世界的鱼类，最值得一提的就是里面的发光水母，真的好美好美', 
          picUrls: [
            {
              pid: 'p8', 
              url: '/static/images/sea3.jpg'},
          ]
        },
        {
          cid: 'c2', 
          userName: 'Joe', 
          avatarUrl: '/static/images/sea3.jpg', 
          commentTime: '2019-05-18', 
          score: '3.5',
          comment: '总体来说还是不错的！但是不知道为什么取消了“触摸池”，不能真正实际感受海洋生物了……', 
          picUrls: [],
        },
        // {
        //   cid: 'c3', 
        //   userName: 'Tom', 
        //   avatarUrl: '/static/images/head4.jpg', 
        //   commentTime: '2019-06-20', 
        //   score: '3.5',
        //   comment: '海底隧道也有点太短了吧 而且买了和动物园的通票还必须要从海洋馆那个门进入 导致从动物园正门绕过去心情已经down了一大半 但是水母照出来依旧是好看的～', 
        //   picUrls: [],
        // },
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