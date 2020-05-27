<template>
  <div>
    <div class="list">
      <block v-for="(item, index) in addressList" :key="index">
        <div class="address">
          <!-- <div v-if="item.select === true" class="select">
            <van-icon name="checked" color="#409EFF"/>
          </div> -->
          <div class="main">
            <div class="info basic">
              <div class="receiver">{{item.receiverName}} {{item.telephone}}</div>
              <!-- <div :class="defaultClass[item.isDefault]">默认</div> -->
            </div>
            <div class="info detail">{{item.province}}{{item.city}}{{item.district}}{{item.detailInfo}}</div>
          </div>
          <div class="edit" @click="handleNav('edit', item.addressId)">
            <van-icon name="star-o" color="#409eff"/>
          </div>
        </div>
        <van-divider />
      </block>
    </div>
    <div class="add" @click="handleNav('add')">
      <div class="icon">
        <van-icon name="add-o" color="#409EFF" />
      </div>
      <div class="desc">发表攻略</div>
    </div>
  </div>
</template>
<script>
import { getAddressList } from '@/services/api.js'
export default {
  data() {
    return {
      addressListInfo: {},
      addressList: [
        {addressId: 0, select: true, receiverName: '亲子五日游', telephone: '', province: '', city: '', district: '', detailInfo: '东夷客栈+水上亲子乐园', isDefault: 1},
        {addressId: 0, select: true, receiverName: '单人六日游', telephone: '', province: '', city: '', district: '', detailInfo: '悦湾酒店+东夷公园', isDefault: 1},
        {addressId: 3, select: false, receiverName: '蜜月七日游', telephone: '', province: '', city: '', district: '', detailInfo: 'Toma酒店+金沙滩', isDefault: 0},
        {addressId: 3, select: false, receiverName: '家庭三日游', telephone: '', province: '', city: '', district: '', detailInfo: '东夷客栈+宽板凳火锅+金沙滩', isDefault: 0},
        {addressId: 1, select: false, receiverName: '环镇游', telephone: '', province: '', city: '', district: '', detailInfo: '景观酒店+孔子学院', isDefault: 0},
        // {addressId: 4, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 5, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 6, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 7, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 8, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 9, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 10, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        // {addressId: 11, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
      ],
      defaultClass: {
        0: "not-default",
        1: "is-default",
      }
    }
  },
  methods: {
    handleNav(type, ...param){
      const url = '/pages/user/pages/editAddress/main'
      if (type === 'add'){
        this.$openWin(`${url}`)
      } else {
        this.$openWin(`${url}?id=${param[0]}`)
      }
    }
  },
  async mounted (){
    // console.log(this.$root.$mp.query);
    // this.select = this.$root.$mp.query;
    // const userId = 'o4lvx5G9BtxZtIZPk2GPIMd7AhXY';
    this.addressListInfo = await getAddressList();
  }
}
</script>
<style lang="less" scoped>
.list{
  margin-top: 10rpx;
  padding-bottom: 100rpx;
  .address{
    display: flex;
    flex-direction: row;
    align-items: center;
    .select{
      margin-left: 30rpx;
      flex: 0.5;
    }
    .main{
      flex: 6;
      margin-left: 30rpx;
      .info{
        margin: 10rpx auto;
      }
      .basic{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #4f4f4f;
        font-size: 28rpx;
        .receiver{
          margin-right: 20rpx;
        }
        .is-default{
          color: #fff;
          background-color: red;
          border-radius: 20rpx;
          padding: 5rpx 20rpx;
        }
        .not-default{
          display: none;
        }
      }
      .detail{
        font-size: 24rpx;
        color: #6f6f6f;
        flex-wrap: wrap;
      }
    }
    .edit{
      flex: 0.8;
      margin-left: 30rpx;
    }
  }
}
.add{
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  height: 100rpx;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fafafa;
  .icon{
    margin-right: 20rpx;
    margin-top: 10rpx;
  }
  .desc{
    color: #409EFF;
    font-size: 28rpx;
  }
}
</style>