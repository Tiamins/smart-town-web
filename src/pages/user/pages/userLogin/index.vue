<template>
  <div class="wrap">
    <div class="logo-info">
      <div class="logo">
        <image mode="aspectFill" :src="logoUrl" />
      </div>
    </div>
    <div class="title">{{title}}</div>
    <div class="user-login">
      <van-button class="log-in" @getuserinfo="handleLogin" open-type="getUserInfo" color="#409EFF">微信一键授权登录</van-button>
    </div>
    <van-toast id="van-toast"/>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import { userLogin, updateUserInfo } from '@/services/api.js'
import Toast from '../../../../../static/vant/toast/toast'
import Dialog from '../../../../../static/vant/dialog/dialog';

export default {
  data () {
    return {
      userInfo: {},
      logoUrl: '/static/images/beach1.jpeg',
      title: "智慧小镇", 
    }
  },

  components: {
  },

  methods: {
    handleLogin(e){
      console.log("e:", e);
      this.checkAndLogin();
    },
    checkAndLogin () {
      let code = "";
      wx.login({
        success: (res) => {
          if (res.code){
            code = res.code;
            // console.log("code:", res.code);
            // 判断用户是否授权
            wx.getSetting({
              success: (res1) => {
                // 用户已授权
                if (res1.authSetting['scope.userInfo']) {
                  Toast.success("授权中...");
                  // 获取用户信息
                  wx.getUserInfo({
                    withCredentials: true,
                    success: async (res2) => {
                      // 用户信息
                      console.log("res2:", res2);   
                      const response = await userLogin({code});
                      console.log('response:', response.list);
                      mpvue.setStorageSync("token", response.list);
                      // 上传/更新用户信息  
                      const { nickName, avatarUrl, country, province, city, gender } = res2.userInfo;
                      await updateUserInfo({nickName, avatarUrl, country, province, city, gender});
                    }
                  })
                } 
                // 用户未授权
                else {
                  Dialog.confirm({
                    title: '提示',
                    message: '如未授权用户信息，您将无法体验更多功能。可以点击右上角进入设置页，进行用户信息授权。'
                  }).then(() => {
                  }).catch(() => {
                  });
                }
              }
            })
            
            wx.switchTab({
              url: 'pages/home/main'
            })
          }
        },
        fail: () => {
        },
      })
    },
  },

  created () {
  }
}
</script>
<style lang="less" scoped>
.wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-info{
  .logo{
    width: 120rpx;
    height: 120rpx;
    image{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.title{
    margin: 40rpx 0 100rpx; 
    font-size: 32rpx;
    font-weight: 500;
    flex: 5;
    margin-left: 30rpx;
    margin-top: 35rpx;
  }    
</style>