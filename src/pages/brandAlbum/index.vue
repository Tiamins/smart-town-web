<template>
  <div class="wrap">
      <van-grid :border="false" gutter="5" column-num="3">
        <van-grid-item use-slot v-for="(item, idx) in picUrls" :key="idx" >
          <image style="width: 230rpx; height: 230rpx;" mode="aspectFill" :src='item.url'  @click='imgPreview(idx)'/>
        </van-grid-item>  
      </van-grid>
  </div>
</template>

<script>
// import { getComments } from '../../services/api.js'
export default {
  data() {
    return {
      picUrls: [
        {id: '0', url: '/static/images/sea1.jpg'},
        // {id: '1', url: '/static/images/sea2.jpg'},
        {id: '2', url: '/static/images/sea3.jpg'},
        // {id: '3', url: '/static/images/sea4.jpg'},
        {id: '4', url: '/static/images/sea5.jpg'},
        // {id: '5', url: '/static/images/sea6.jpg'},
        // {id: '6', url: '/static/images/sea7.jpg'},
        // {id: '7', url: '/static/images/sea8.jpg'},
      ],
      category: '',
      id: '',
    }
  },

  components: {
  },

  methods: {
      // 预览图片
    imgPreview: function (idx) {
      console.log('idx:', idx);
      const preUrls = this.picUrls.map((value, index) => 
        value.url
      )
      console.log('preUrls:', preUrls)
      wx.previewImage({
        current: preUrls[idx],
        urls: preUrls,
      })
    },
  },

  // async mounted() {
    // console.log('params:', this.$root.$mp.query);
  //   const params = {
  //     category: this.category,
  //     id: this.id,
  //   }
  //   this.picUrls = await getBrandAlbum(params);
  // }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.container{
  padding-right: 20rpx;
}
</style>