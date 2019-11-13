<template>
  <div class="wrap">
    <div class="main">
      <div class="info basic">
        <div class="title">{{item.fullName}}</div>
        <van-divider />
        <div class="valid">
          <div class="title">使用有效期</div>
          <div class="detail">
            <div class="valid-time">{{item.validTime}}前可使用</div>
            <div class="price"><b class="price-unit">￥</b>{{item.price}}</div>
          </div>
        </div>
        <van-divider />
        <div class="count">
          <div class="title">购买数量</div>
          <div class="counter">
            <button :class="decreValid ? btnClass[0] : btnClass[1]" :disabled="decreValid" @click="decrement">-</button>
            <div class="count-val">{{count}}</div>
            <button :class="increValid ? btnClass[0] : btnClass[1]" :disabled="increValid" @click="increment">+</button>
          </div>
        </div>   
      </div>
      <div class="info phone">
        <div class="title">联系方式</div>
        <van-divider />
        <div class="detail">
          <van-field
            :value="telephone"
            required
            clearable
            label="手机号"
            icon="question-o"
            placeholder="请输入"
            @clickIcon="onClickIcon"
          />
        </div>
      </div>
      <div class="info submit"></div>
    </div>    
  </div>
</template>
<script>
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
      detail: {},
      item: {
        fullName: '东夷海洋馆成人票',
        validTime: '2020-01-30',
        price: 120,
      },
      increValid: false,
      decreValid: true,
      btnClass: ['counter-btn disabled', 'counter-btn active'],
      count: 1,
      orderType,
      orderList: [
        {oid: '0', name: '东夷海洋馆成人票', headIcon: '/static/images/sea4.jpg', totalPrice: '200.00', num: '2', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '悦湾大酒店大床房', headIcon: '/static/images/hotel3.jpeg', totalPrice: '500.00', num: '1', status: 2, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '金沙滩学生票', headIcon: '/static/images/beach1.jpeg', totalPrice: '100.00', num: '4', status: 3, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '宽板凳火锅四人套餐', headIcon: '/static/images/hotpot.jpg', totalPrice: '360.00', num: '1', status: 4, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '胖哥俩肉蟹煲双人餐', headIcon: '/static/images/pangfood.jpg', totalPrice: '160.00', num: '1', status: 4, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: 'Toma酒店套房', headIcon: '/static/images/hotel6.jpeg', totalPrice: '700.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: 'Tomacado花厨双人晚餐', headIcon: '/static/images/westfood.jpeg', totalPrice: '640.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
      ],
    }
  },
  methods: {
    decrement(){
      this.count--;
      if (this.count === 1) {
        this.decreValid = true;
      }
    },
    increment(){
      this.count++;
      if (this.count > 1) {
        this.decreValid = false;
      }
      if (this.count === 10) {
        this.increValid = true;
      }
    },
    onClickIcon(){
      console.log('hell')
    }
  },
  async mounted() {
    console.log('params:', this.$root.$mp.query);
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.wrap{
  background-image: linear-gradient(#409EFF,#cddef0);
  height: 100%;
  letter-spacing: 2rpx;
  color: #4f4f4f;
}
.main{
  padding: 20rpx;
}
.info{
  background-color: #fff;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  padding: 20rpx 40rpx;
  .title{
    font-size: 32rpx;
    font-weight: 700;
    height: 60rpx;
    line-height: 60rpx;
    letter-spacing: 4rpx;
  }
}
.detail{
  font-size: 28rpx;
  font-weight: 500;
}
.valid{
  .detail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .valid-time{
      margin-top: 10rpx;
    }
    .price{
      display: flex;
      flex-direction: row;
      font-size: 30rpx;
      color: #f60;
      font-weight: 700;
      .price-unit{
        font-size: 20rpx;
        margin-top: 10rpx;
      }
    }
  }
}
.count{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .counter{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .counter-btn{
        width: 120rpx;
        height: 60rpx;
        font-size: 28rpx;
        background-color: #409EFF;
        text-align: center;
        line-height: 60rpx;
        color: #fff;
        border-radius: 120rpx;
      }
      .active{
        background-color: #409EFF;
        color: #fff;
      }
      .disabled{
        background-color: rgb(190, 193, 196);
        color: rgb(79, 81, 83);
      }
      .count-val{
        margin: 0 20rpx;
        height: 60rpx;
        line-height: 60rpx;
        width: 60rpx;
        text-align: center;
      }
    }
}


</style>