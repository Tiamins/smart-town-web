<template>
  <div class="wrap">
    <div class="bg"></div>
    <div class="card">
      <form @submit="handleSubmit">
        <div class="select town-select">
          <picker mode="selector" name="townIdx" :value="townIdx" :range="townMap" range-key="name" @change="townChange">
            <div class="picker">
              <div class="value">{{townMap[townIdx].name}}</div>
              <div class="icon">></div>
            </div>
          </picker>
        </div>
        <van-divider />
        <div class="select date-select">
          <div class="item check-in">
            <div class="tip">入住日期</div>
            <picker mode="date" name="startDate" :value="startDate" :start="startDate" @change="checkinChange">
              <div class="picker">{{startDate}}</div>
            </picker>
          </div>
          <div class="item check-out">
            <div class="tip">离店日期</div>
            <picker mode="date" name="endDate" :value="endDate" :start="startDate" @change="checkoutChange">
              <div class="picker">{{endDate}}</div>
            </picker>
          </div>
        </div>
        <van-divider />
        <div class="select star-price-select">
          <div class="item star">
            <div class="tip">星级</div>
            <picker mode="selector" name="starIdx" :value="starIdx" :range="hotelStar" range-key="star" @change="starChange">
              <div class="picker">{{hotelStar[starIdx].star}}</div>
            </picker>
          </div>
          <div class="item price">
            <div class="tip">价格</div>
            <picker mode="selector" name="priceIdx" :value="priceIdx" :range="hotelPrice" range-key="price" @change="priceChange">
              <div class="picker">{{hotelPrice[priceIdx].price}}</div>
            </picker>
          </div>
        </div>
        <van-divider />
        <button class='form-submit' formType='submit'>查找酒店</button>
      </form>
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
import { formatDate, formatDateAdd } from '../../utils/index'
import { townMap, hotelStar, hotelPrice } from '../../components/constants/index'
export default {
  data() {
    return {
      townMap,
      hotelStar,
      hotelPrice,
      townIdx: 0,
      starIdx: 0,
      priceIdx: 0,
      startDate: '',
      endDate: '',
      recommendInfo: [
        {id: '30', name: '东夷客栈', category: 2, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/kezhan.jpg'},
        {id: '10', name: 'Toma酒店', category: 2, type: 2, avgPrice: '120.00', score: '5', headIcon: '/static/images/hotel6.jpeg'},
        {id: '07', name: '景观酒店', category: 2, type: 3, avgPrice: '100.00', score: '3.5', headIcon: '/static/images/hotel5.jpeg'},
        {id: '11', name: '假日酒店', category: 1, type: 3, avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel1.jpeg'},
        {id: '12', name: '如家快捷酒店', category: 1, type: 3, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/hotel4.jpeg'},
        {id: '20', name: '悦湾大酒店', category: 1, type: 2, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/hotel3.jpeg'},
      ]
    }
  },

  components: {
    brandItem,
  },

  methods: {
    townChange(e){
      console.log('e:', e)
      this.townIdx = e.mp.detail.value;
    },
    checkinChange(e){
      console.log('date:', e.mp.detail)
      this.startDate = e.mp.detail.value;
    },
    checkoutChange(e){
      console.log('e:', e)
      this.endDate = e.mp.detail.value;
    },
    starChange(e){
      this.starIdx = e.mp.detail.value;
    },
    priceChange(e){
      this.priceIdx = e.mp.detail.value;
    },
    handleSubmit(e){
      const values = e.mp.detail.value;
      console.log('values:', values);
    }
  },

  async mounted(){
    const now = new Date();
    this.startDate = formatDate(now)
    this.endDate = formatDateAdd(now, 1)
    console.log('now:', now);
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.bg{
  background: #E76262;
  width: 100%;
  height: 250rpx;
}
.card{
  padding: 20rpx;
  margin: -200rpx 0 50rpx 20rpx;
  margin-top: -200rpx;
  margin-left: 20rpx;
  background: #fff;
  width: 90%;
  height: 450rpx;
  color: #4f4f4f;
  box-shadow:2px 2px 5px #efefef;
  border-radius: 3rpx;
  font-size: 32rpx;
  font-weight: 600;
}
.town-select{
  .picker{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icon{
      color: #afafaf;
    }
  }
}
.date-select, .star-price-select{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .item{
    .tip{
      font-size: 24rpx;
      font-weight: 400;
      color: #afafaf;
    }
    .picker{
      font-size: 32rpx;
      font-weight: 600;
      margin-top: 20rpx;
    }
  }
  .star{
    width: 200rpx;
  }
  .check-out, .price{
    margin-left: 100rpx;
  }
 
}
.form-submit{
  margin-top: 60rpx;
  width: 600rpx;
  height: 80rpx;
  font-size: 28rpx;
  background-color: #E76262;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  border-radius: 10rpx;
  letter-spacing: 4rpx;
}
</style>