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
      detail: {
        category: 0,
        name: '东夷海洋馆',
        headIcon: '/static/images/sea1.jpg',
        type: 1,
        id: '00',
        avgPrice: '120.00', 
        score: '4.5',
        address: '日照市东港区绿舟路东夷小镇B岛北街',
        phone: '17810272102',
      },
      packageInfo: [
        {id: 'p30', name: '成人票', fullName: '东夷海洋馆成人票', soldNum: 300, subInfo: '随买随用', category: 3, type: 1, price: '120', value: '150', score: '4.5', headIcon: '/static/images/sea4.jpg', validTime: '2019-12-31'},
        {id: 'p10', name: '学生票', fullName: '东夷海洋馆学生票', soldNum: 600, subInfo: '随买随用', category: 1, type: 2, price: '80', value: '100', score: '5', headIcon: '/static/images/sea3.jpg', validTime: '2019-12-31'},
        {id: 'p07', name: '优惠票', fullName: '东夷海洋馆优惠票', soldNum: 370, subInfo: '随买随用', category: 0, type: 1, price: '60', value: '80', score: '3.5', headIcon: '/static/images/sea6.jpg', validTime: '2019-12-31'},
        {id: 'p11', name: '团体票10人', fullName: '东夷海洋馆团体票', soldNum: 547, subInfo: '随买随用', category: 1, type: 0, price: '899', value: '1000', score: '3', headIcon: '/static/images/sea8.jpg', validTime: '2019-12-31'},
        {id: 'p12', name: '情侣票', fullName: '东夷海洋馆情侣票', soldNum: 1200, subInfo: '随买随用', category: 1, type: 3, price: '200', value: '250', score: '4.5', headIcon: '/static/images/sea7.jpg', validTime: '2019-12-31'},
        {id: 'p20', name: '家庭票', fullName: '东夷海洋馆家庭票', soldNum: 400, subInfo: '随买随用', category: 2, type: 1, price: '499', value: '600', score: '2.5', headIcon: '/static/images/sea2.jpg', validTime: '2019-12-31'},
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
            {
              pid: 'p1', 
              url: '/static/images/sea4.jpg'},
            {
              pid: 'p2', 
              url: '/static/images/sea2.jpg'},
            {
              pid: 'p3', 
              url: '/static/images/sea5.jpg'},
            {
              pid: 'p4', 
              url: '/static/images/sea6.jpg'},
            {
            pid: 'p4', 
            url: '/static/images/sea7.jpg'},
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
          avatarUrl: '/static/images/sea8.jpg', 
          commentTime: '2019-05-18', 
          score: '3.5',
          comment: '总体来说还是不错的！但是不知道为什么取消了“触摸池”，不能真正实际感受海洋生物了……', 
          picUrls: [],
        },
        {
          cid: 'c3', 
          userName: 'Tom', 
          avatarUrl: '/static/images/head4.jpg', 
          commentTime: '2019-06-20', 
          score: '3.5',
          comment: '海底隧道也有点太短了吧 而且买了和动物园的通票还必须要从海洋馆那个门进入 导致从动物园正门绕过去心情已经down了一大半 但是水母照出来依旧是好看的～', 
          picUrls: [],
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