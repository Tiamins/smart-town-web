<template>
  <div>
    <div class="list">
      <block v-for="(item, index) in addressListInfo.list" :key="index">
        <div class="address">
          <div v-if="item.select === true" class="select">
            <van-icon name="checked" color="#409EFF"/>
          </div>
          <div class="main">
            <div class="info basic">
              <div class="receiver">{{item.receiverName}} {{item.telephone}}</div>
              <div :class="defaultClass[item.isDefault]">默认</div>
            </div>
            <div class="info detail">{{item.province}}{{item.city}}{{item.district}}{{item.detailInfo}}</div>
          </div>
          <div class="edit" @click="handleNav('edit', item.addressId)">
            <van-icon name="edit" color="#409eff"/>
          </div>
        </div>
        <van-divider />
      </block>
    </div>
    <div class="add" @click="handleNav('add')">
      <div class="icon">
        <van-icon name="add-o" color="#409EFF" />
      </div>
      <div class="desc">新增地址</div>
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
        {addressId: 0, select: true, receiverName: 'Tia', telephone: '13345667899', province: '浙江省', city: '杭州市', district: '西湖区', detailInfo: '龙井路1号', isDefault: 1},
        {addressId: 1, select: false, receiverName: 'Troye', telephone: '18822334567', province: '北京', city: '北京市', district: '海淀区', detailInfo: '西土城路10号', isDefault: 0},
        {addressId: 3, select: false, receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '重庆市', district: '沙坪坝', detailInfo: '重庆市第八中学', isDefault: 0},
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