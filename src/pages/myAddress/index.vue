  <!-- <div> -->
      <!-- <form @submit="handleSubmit">
      <div class="main">
        <van-divider />
        <div class="comment avg">
          <van-cell-group>
            <van-field
              name="userName"
              :value="avgPrice"
              clearable
              label="姓名"
              placeholder="请输入姓名"
              error
            />
          </van-cell-group>
        </div>
        <div class="comment avg">
          <van-cell-group>
            <van-field
              name="userName"
              :value="avgPrice"
              clearable
              label="电话"
              placeholder="请输入电话"
              error-message="手机号格式错误"
            />
          </van-cell-group>
        </div>
        <div class="comment avg">
          <van-cell-group>
            <van-field
              name="userName"
              :value="avgPrice"
              clearable
              label="地区"
              placeholder="请输入电话"
              error-message="手机号格式错误"
            />
          </van-cell-group>
        </div>
        <div class="comment review">
          <textarea class="detail" placeholder="请输入具体评价内容" name="comment"></textarea>
        </div>
      </div>
      <div class="divider"></div>
      <div class="main">
        <div class="comment upload">
          <uploadImg width="120rpx" height="120rpx" max="6" @choosed="choosed"></uploadImg> 
        </div>
      </div>
      <div class="divider"></div>
      <div class="main">
        <div class="comment anonymous">
          <van-radio checked-color="#409EFF" name="anonymous" :value="value" @change="handleAnonymous" >匿名评价</van-radio>
        </div>
      </div>
      <div class="divider"></div>
      <div class="submit">
        <button class="btn" formType='submit'>提交</button>
      </div>
    </form>
  </div>
</template> -->
<style lang="less" scoped>
@import '../../style/base.less';
.comment{
  margin: 10rpx 0;
}
.star{
  display: flex;
  flex-direction: row;
  .desc{
    margin-left: 30rpx;
    margin-right: 20rpx;
    font-size: 28rpx;
    color: #333;
  }
}
.review{
  width: 100%;
  .detail{
    font-size: 28rpx;
    padding-left: 30rpx;
    width: 100%;
  }
}
.upload{
  margin: 20rpx 10rpx;
}
.anonymous{
  margin-left: 20rpx;
  height: 60rpx;
  line-height: 60rpx;
  color: #333;
}
.submit{
  margin-top: 20rpx;
  .btn{
    margin: 0 auto;
    width: 320rpx;
    height: 80rpx;
    font-size: 28rpx;
    background-color: #409EFF;
    text-align: center;
    line-height: 80rpx;
    color: #fff;
    border-radius: 120rpx;
  }
}
</style>