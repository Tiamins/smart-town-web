<template>
  <div class="wrap">
    <div class="main">
      <div class="info basic">
        <div class="title">{{ticket.name}}</div>
        <van-divider />
        <div class="valid">
          <div class="title">使用有效期</div>
          <div class="detail">
            <div class="valid-time">{{ticket.validTime}}前可使用</div>
            <div class="price"><b class="price-unit">￥</b>{{ticket.price}}</div>
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
            name="telephone"
            clearable
            type="tel"
            label="手机号"
            placeholder="请输入"
          />
        </div>
      </div>
    </div>
    <div class="submit">
      <div class="total-price">
        <b class="price-unit">总价￥</b>{{ticket.price * count}}
      </div>
      <div class="submit-order" @click="submitOrderInfo">
        提交订单
      </div>
    </div>    
  </div>
</template>
<script>
import { getTicket, submitOrder } from '@/services/api.js'
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
      detail: {},
      ticket: {},
      ticketId: '',
      params: {},
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
        // {oid: '0', name: 'Tomacado花厨双人晚餐', headIcon: '/static/images/westfood.jpeg', totalPrice: '640.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
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
      if (this.count === 100) {
        this.increValid = true;
      }
    },
    async getTicketInfo(id){
      const info = await getTicket(id);
      const item = info.list[0];
      this.ticket = {
        id: item.id,
        ticketId: item.ticketId,
        spotId: item.spotId,
        name: item.ticketName, 
        soldNum: item.ticketSoldCount, 
        subInfo: '免费取消', 
        category: 0, 
        price: item.ticketPrice,
        value: item.ticketOriginPrice, 
        headIcon: '', 
        validTime: item.ticketAdmissionTime,
        type: item.ticketType,
      }
    },
    async submitOrderInfo(){
      const {price, ticketId, spotId} = this.ticket;
      const payAmount = this.count * price / 100;
      this.params = {
        merchantId: spotId,
        productId: ticketId,
        payAmount: 1,
        telephone: '18811319395',
        bill: '景点门票',
        addressId: '1',
        expressType: '',
        expressNumber: '',
      }
      const res = await submitOrder(this.params);
      console.log(res.list, typeof res.list);
      const obj = JSON.parse(res.list);
      console.log("obj:", obj);
      this.getPayment(obj);
    },
    getPayment(obj){
      console.log('obj:', obj);
      wx.requestPayment({
        'timeStamp': obj.timeStamp,
        'nonceStr': obj.nonceStr,
        'package': obj.package,
        'signType': obj.signType,
        'paySign': obj.paySign,
        success (res) {
          console.log("res:", res);
          wx.switchTab({
            url: '/pages/order/main'
          })
        },
        fail(res){
          console.log("fail:", res)
          }
      })
    }
  },
  async mounted() {
    console.log('params:', this.$root.$mp.query);
    this.ticketId = this.$root.$mp.query.id;
    this.getTicketInfo(this.ticketId);
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.wrap{
  position: fixed;
  background-image: linear-gradient(#409EFF,#cddef0);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        width: 100rpx;
        height: 60rpx;
        font-size: 34rpx;
        background-color: #409EFF;
        text-align: center;
        line-height: 55rpx;
        color: #fff;
        border-radius: 50rpx;
        padding: 0rpx;
      }
      .active{
        background-color: #409EFF;
        color: #fff;
      }
      .disabled{
        background-color: rgb(171, 206, 241);
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
.submit{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100rpx;
  align-items: center;
  align-items: center;
  padding: 20rpx;
  background: #fff;
  .total-price{
    display: flex;
    flex-direction: row;
    font-size: 34rpx;
    color: #f60;
    font-weight: 700;
    .price-unit{
      font-size: 28rpx;
      margin-top: 6rpx;
    }
  }
  .submit-order{
    width: 280rpx;
    height: 80rpx;
    font-size: 34rpx;
    background-color: #f90;
    text-align: center;
    line-height: 80rpx;
    color: #fff;
    border-radius: 120rpx;
  }
}


</style>