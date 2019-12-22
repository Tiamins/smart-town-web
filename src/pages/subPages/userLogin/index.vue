<template>
  <div>
    <div class="logo-info">
      <div class="logo">
        <image mode="aspectFill" :src="logoUrl" />
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="user-login">
      <van-button class="log-in" @getuserinfo="handleLogin" open-type="getUserInfo" color="#409EFF">微信</van-button>
    </div>
  </div>
</template>