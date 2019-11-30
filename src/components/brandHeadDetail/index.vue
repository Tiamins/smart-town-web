<template>
   <div class="detail-head">
      <div class="brand-img" @click="goBrandAlbum(detail.category, detail.id)">
        <image :src="detail.headIcon" class="slide-image" mode="aspectFill"/>
      </div>
      <div class="brand-main">
        <div class="basic-info">
          <div class="info-name">{{detail.name}}</div>
          <div class="info-score">
            <van-rate
              :value="detail.score"
              size="15"
              allow-half
              color="#F90"
              void-color="#eee"
              void-icon="star"
              :change="onScoreChange"
            />
            <p class="score-value">{{detail.score}}分</p>
            <div v-if="detail.category === 0 || detail.category === 1" class="price">人均:<b>￥</b>{{detail.avgPrice}}</div>
          </div>  
        </div>
        <div class="option">
          <button open-type="share"  class="option-item share">
            <van-icon name="share" size="20"/>
          </button>
          <div class="option-item star" @click="handleStar">
            <van-icon :name="starName[collected]" :color="starColor[collected]" size="20"/>
          </div>
        </div>
      </div>
      <van-divider />
      <div class="address-contact">
        <div class="address" @click="getMap">
          <van-icon name="map-marked" size="20px" color="#afafaf"/>
          <div class="address-detail">{{detail.address}}</div>
        </div>
        <div class="contact" @click="handlePhone">
          <van-icon name="phone" size="20px" color="#F90"/>
        </div>
      </div>
    </div>
</template>

<script>
// import { brandType } from '../constants/index'
import { qqmapsdk } from '../../components/constants/index'

export default {
  props: ['detail'],
  data() {
    return {
      starColor: ['#4f4f4f', '#F90'],
      starName: ["star-o", "star"],
      collected: 0,
    }
  },
  methods: {
    goBrandAlbum(category, id) {
      wx.navigateTo({
        url: `/pages/brandAlbum/main?category=${category}&id=${id}`,
      })
    },
    handleStar(){
      this.collected = (this.collected === 0) ? 1 : 0;
    },
    handlePhone(){
      wx.makePhoneCall({
        phoneNumber: this.detail.phone,
      })
    },
    getMap(){
      qqmapsdk.geocoder({
        address: this.detail.address,
        success: function(res){
          wx.navigateTo({
            url: `/pages/addressMap/main?location=${res.result.location}`
          })
        },
        fail: function(error){
          console.log(error)
        }
      })
    }
  },
  onShareAppMessage(res) {
    if (res.from !== 'button') { 
      return false
    };
    return {
      title: this.detail.title,
      path: `/pages/brandDetail/main?category=${this.detail.category}&id=${this.detail.id}`,
      imageUrl: this.detail.headIcon,
    }
  },
}
</script>

<style lang="less" scoped>
.detail-head{
  display: flex;
  flex-direction: column;
  margin: 0rpx;
  padding: 0rpx;
  color: #4f4f4f;
  letter-spacing: 2rpx;
}
.brand-img{
  width: 100%;
  height: 300rpx;
  image{
    width: 100%;
    height: 100%;
  }
}
.brand-main{
  padding: 20rpx 30rpx 0rpx 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .basic-info{
    .info-name{
      font-size: 32rpx;
      font-weight: 500;
      line-height: 50rpx;
      margin-bottom: 15rpx;
    }
    .info-score{
      display: flex;
      flex-direction: row;
      font-size: 24rpx;
      .score-value{
        margin-left: 10rpx;
      }
      .price{
        display: flex;
        flex-direction: row;
        font-size: 24rpx;
        margin-left: 20rpx;
        color: #afafaf;
      }
    }
  }
  .option{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 10rpx;
    .option-item{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10rpx;
      width: 80rpx;
    }
    .share{
      background:#fff;
      line-height:60rpx;
      color: #4f4f4f;
      font-size: 20rpx;
      padding: 0;
    }
    .share:after{
      border:none;
    }
  }
}
.address-contact{
  padding: 10rpx 40rpx 20rpx 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .address{
    display: flex;
    flex-direction: row;
    font-size: 28rpx;
    .address-detail{
      margin-left: 20rpx;
    }
  }
}
</style>

