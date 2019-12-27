<template>
  <div class="warp">
    <div v-if="isLogin" class="user-info">
      <div class="head-icon">
        <image mode="aspectFill" :src="userInfo.avatarUrl" />
      </div>
      <div class="user-name">{{userInfo.nickName}}</div>
    </div>
    <div v-else class="user-login">
      <van-button class="log-in" @click="handleLogin"  color="#409EFF">登录/注册</van-button>
    </div>
    <div class="divider"></div>
    <div class="list-info">
      <van-cell class="item-title" title="我的订单" is-link  link-type="switchTab" url="/pages/order/main">
        <van-icon  slot="icon" name="orders-o" color="#409EFF" size="30rpx"/>
      </van-cell>
      <van-cell class="item-title" title="我的收藏" is-link  link-type="navigateTo" url="/pages/myStar/main">
        <van-icon  slot="icon" name="star" color="#409EFF" size="30rpx"/>
      </van-cell>
      <van-cell class="item-title" title="收货地址" is-link  link-type="navigateTo" url="/pages/myAddress/main">
        <van-icon  slot="icon" name="map-marked" color="#409EFF" size="30rpx"/>
      </van-cell>
      <van-cell class="item-title" title="联系客服"  @click="handleContact">
        <van-icon  slot="icon" name="phone" color="#409EFF" size="30rpx"/>
      </van-cell>
    </div>
    <div class="divider" style="height: 30rpx;"></div>
    <div v-if="isLogin" class="log-out">
      <van-button type="danger" size="normal" round @click="handleLogout">退出登录</van-button>
      <van-dialog id="van-dialog" />
    </div>  
  </div>
</template>

<script>
import card from '@/components/card'
import Dialog from '../../../static/vant/dialog/dialog';
import { openWin } from '@/utils/index';
import store from '@/utils/store';
import { loginUrl } from '@/components/constants/index'
export default {
  data () {
    return {
      servicePhone: "18811319395",
      loginUrl,
    }
  },

  computed: {
    userInfo () {
      return store.state.userInfo
    },
    isLogin () {
      return store.state.isLogin
    }
  },

  components: {
    card
  },

  methods: {
    handleContact(e){
      wx.makePhoneCall({
        phoneNumber: this.servicePhone,
      })
    },
    handleLogout(e){
      Dialog.confirm({
        title: '确认退出登录',
        message: '退出登录后，您将无法体验更多功能'
      }).then(() => {
        store.commit("cleanUserInfo");
        store.commit("updateIsLogin", false);
        store.commit("updateToken", '');
      }).catch(() => {
        // on cancel
      });
    },
    handleLogin(){
      openWin(loginUrl);
    }
  },
}
</script>

<style lang="less" scoped>
@import '../../style/base.less';
.user-info{
  display: flex;
  flex-direction: row;
  background-color: #409EFF;
  color: #fff;
  height: 200rpx;
  padding: 40rpx 20rpx 0rpx;

  .head-icon{
    width: 120rpx;
    height: 120rpx;
    image{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .user-name{
    font-size: 32rpx;
    font-weight: 500;
    flex: 5;
    margin-left: 30rpx;
    margin-top: 35rpx;
  }
}
.user-login{
  background-color: #409EFF;
  color: #fff;
  height: 100rpx;
  padding: 40rpx 50rpx 0rpx;
  font-size: 32rpx;
  font-weight: 500;
}
.list-info{
  .item-title{
    font-size: 28rpx;
    color: #4f4f4f;
    letter-spacing: 2rpx;
    /deep/ .van-cell__title{
      margin-left: 10rpx;
      margin-top: -4rpx;
    }
  }
}
.log-out{
  margin-top: 50rpx;
  text-align: center;
}
</style>
