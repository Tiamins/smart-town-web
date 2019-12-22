<template>
  <div class="warp">
    <div v-if="isLogin" class="user-info">
      <div class="head-icon">
        <image mode="aspectFill" :src="userInfo.avatarUrl" />
      </div>
      <div class="user-name">{{userInfo.nickName}}</div>
    </div>
    <div v-else class="user-login">
      <van-button class="log-in" @getuserinfo="handleLogin" open-type="getUserInfo" color="#409EFF">登录/注册</van-button>
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
export default {
  data () {
    return {
      isLogin: false,
      servicePhone: "18811319395",
      userInfo: {},
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    handleContact(e){
      console.log('e:', e);
      wx.makePhoneCall({
        phoneNumber: this.servicePhone,
      })
    },
    handleLogin(e){
      console.log('e:', e);
      this.userInfo = e.mp.detail.userInfo;
      this.isLogin = true;
    },
    handleLogout(e){
      Dialog.confirm({
        title: '确认退出登录',
        message: '退出登录后，您将无法体验更多功能'
      }).then(() => {
        this.userInfo = null;
        this.isLogin = false;
      }).catch(() => {
        // on cancel
      });
    },
    getUserInfo(){
      wx.request({
        url: '39.107.58.68:8088/demo/user/sayHello',
        data:{},
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          console.log("res:",res);
          this.userInfo = res.list.userInfo;
        }
      })
    }
  },

  created () {
    // let app = getApp()
    const token = mpvue.getStorageSync("token");
    
    if(token){
      this.isLogin = true;
      this.getUserInfo(token);
    }else{
       Dialog.confirm({
        title: '提示',
        message: '当前'
      }).then(() => {
        this.userInfo = null;
        this.isLogin = false;
      }).catch(() => {
        // on cancel
      });

      wx.login({
        success: (res) => {
          if(res.code){
            const code = res.code;
            wx.request({
              url: '39.107.58.68:8081/demo/user/login',
              data: {
                code,
              },
              method: 'POST',
              header: {
                'content-type': 'application/json',
              },
              success: (res) => {
                console.log('res:',res);
                mpvue.setSorageSync("token", res.list.token);
              }
            })
          }
        }
      })
    }
  }
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
