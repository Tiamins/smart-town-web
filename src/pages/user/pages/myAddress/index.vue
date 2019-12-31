<template>
  <div>
    <div class="list">
      <block v-for="(item, index) in addressList" :key="index">
        <div class="address">
          <div class="select">
            <van-icon name="checked" color="#409EFF"/>
          </div>
          <div class="main">
            <div class="info basic">
              <div class="receiver">{{item.receiverName}} {{item.telephone}}</div>
              <div class="default">默认</div>
            </div>
            <div class="info detail">{{item.province}}{{item.city}}{{item.district}}{{item.detailInfo}}</div>
          </div>
          <div class="edit">
            <van-icon name="edit" color="#fafafa"/>
          </div>
        </div>
      </block>
    </div>
    <div class="add">
      <van-icon name="add-o" color="#409EFF" />
      新增地址
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addressList: [
        {receiverName: 'Tia', telephone: '18822334567', province: '北京', city: '北京市', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 1},
        {receiverName: 'Troye', telephone: '18822334567', province: '浙江省', city: '杭州市', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
        {receiverName: 'Dua', telephone: '18822334567', province: '重庆', city: '沙坪坝', district: '海淀区', detailInfo: '毛纺路58号小米总参', isDefault: 0},
      ]
    }
  },
}
</script>
<style lang="less" scoped>
.list{
  .address{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .main{
      display: flex;
      flex-direction: column;
      .info{
        margin: 10rpx auto;
      }
      .basic{
        display: flex;
        flex-direction: row;
        color: #4f4f4f;
        font-size: 28rpx;
        .default{
          color: #fff;
          background-color: red;
          border-radius: 5rpx;
        }
      }
      .detail{
        font-size: 24rpx;
        color: #6f6f6f;
        flex-wrap: wrap;
      }
    }
  }
}
.add{
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #409EFF;
  font-size: 28rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>