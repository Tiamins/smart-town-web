<template>
  <div class="wrap">
      <div class="order-type">
        <van-tabs swipe-threshold="4" color="#409EFF" @click="onClick" swipeable="true">
          <van-tab name="0" title="全部"></van-tab>
          <van-tab name="1" title="待付款"></van-tab>
          <van-tab name="2" title="待使用"></van-tab>
          <van-tab name="3" title="待发货"></van-tab>
          <van-tab name="4" title="待收货"></van-tab>
          <van-tab name="5" title="待评价"></van-tab>
          <van-tab name="6" title="已退款"></van-tab>
        </van-tabs>
      </div>
      <div class="main order-list">
        <block v-for="(item, index) in orders" :key="index">
          <div class="order-item">
            <div class="order-main" @click="getPackageDetail(item.oid)">
              <div v-if="category !== 6" class="head-icon">
                <image :src="item.headIcon" alt="头像" mode="aspectFill" />
              </div>
              <div class="order-info">
                <div class="info-detail info-name">{{item.name}}</div>
                <div class="info-detail info-num">数量：{{item.num}}</div>
                <div class="info-detail info-total">总价：{{item.payAmount}}元</div>
              </div>
            </div>
            <div class="order-tip">
              <div class="tip-info">{{orderType[item.status]}}</div>
              <div v-if="item.status===1" class="tip-action" @click="goMakeComment">去付款</div>
              <div v-if="item.status===2" class="tip-action" @click="goMakeComment">去退款</div>
              <div v-if="item.status===3" class="tip-action" @click="goMakeComment">去退款</div>
              <div v-if="item.status===4" class="tip-action" @click="goMakeComment">确认收货</div>
              <div v-if="item.status===5" class="tip-action" @click="goMakeComment">评价</div>
            </div>
          </div>
          <van-divider />
        </block>
      </div>
  </div>
</template>
<script>
import { getOrderList } from '@/services/api.js'
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
      orderInfo: {},
      orders: [],
      orderType,
      orderList: [
        {oid: '0', name: '东夷海洋馆成人票', headIcon: '/static/images/sea4.jpg', totalPrice: '200.00', num: '2', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '悦湾大酒店大床房', headIcon: '/static/images/hotel3.jpeg', totalPrice: '500.00', num: '1', status: 5, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '金沙滩学生票', headIcon: '/static/images/beach1.jpeg', totalPrice: '100.00', num: '4', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '宽板凳火锅四人套餐', headIcon: '/static/images/hotpot.jpg', totalPrice: '360.00', num: '1', status: 4, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '胖哥俩肉蟹煲双人餐', headIcon: '/static/images/pangfood.jpg', totalPrice: '160.00', num: '1', status: 2, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: 'Toma酒店套房', headIcon: '/static/images/hotel6.jpeg', totalPrice: '700.00', num: '1', status: 6, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        // {oid: '0', name: 'Tomacado花厨双人晚餐', headIcon: '/static/images/westfood.jpeg', totalPrice: '640.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
      ],
    }
  },
  methods: {
    goMakeComment(){
      const url = '/pages/makeComment/main';
      wx.navigateTo({url})
    },
    onClick(e){
      console.log(e)
    }
  },
  async mounted(){
     this.orderInfo = await getOrderList();
     this.orders = this.orderInfo.list.map((item) => {
       item.headIcon = 'http://img4.imgtn.bdimg.com/it/u=2546253083,3820155243&fm=26&gp=0.jpg';
       item.payAmount = (parseInt(item.payAmount)) / 100;
       item.name = item.bill;
       item.num = 1;
       item.status = 5;
       item.payId = item.outTradeNo; 
       return item;
     })
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.order-type{
  margin: 0;
  padding: 0;
}
.order-list{
  margin-top: 20rpx;
}
.order-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .order-main{
    display: flex;
      flex-direction: row;
      .head-icon{
        width: 100rpx;
        height: 100rpx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .order-info{
        margin-left: 20rpx;
        overflow: hidden;
        .info-detail{
          margin-bottom: 10rpx;
          font-size: 24rpx;
        }
        .info-name{
          color: #4f4f4f;
          font-size: 30rpx;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 400rpx;
        }
        .info-num, .info-total{
          color: #afafaf;
        }
      }
    }
   .order-tip{
    .tip-info{
      margin-bottom: 20rpx;
      color: #afafaf;
      font-size: 28rpx;
      text-align: center;
    }
    .tip-action{
      width: 120rpx;
      height: 60rpx;
      font-size: 28rpx;
      background-color: #409EFF;
      text-align: center;
      line-height: 60rpx;
      color: #fff;
      border-radius: 120rpx;
    }
  }
}
</style>