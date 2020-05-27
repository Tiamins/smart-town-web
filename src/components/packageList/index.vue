 <template>
  <div class="package">
    <div class="package-head">
      <van-icon :name="categoryType[detail.category][1]" size="20" :color="categoryType[detail.category][2]"></van-icon>
      <div class="head-title">{{categoryType[detail.category][0]}}</div>
    </div> 
    <van-divider />
    <block v-for="(item, index) in packageInfo" :key="index">
      <div class="package-main">
        <div class="brand-item" @click="getPackageDetail(item.category, item.id)">
          <div v-if="detail.category !== 0" class="head-icon">
            <image :src="item.headIcon" alt="头像" mode="aspectFill" />
          </div>
          <div class="brand-info">
            <div class="info-detail info-name">{{item.name}}</div>
            <div class="info-detail info-sub">
            {{item.subInfo}}
            </div>
            <div class="info-detail info-sold">已售{{item.soldNum}} | 购买须知 ></div>
          </div>
        </div>
        <div class="brand-sell">
          <div class="price-info">
            <div class="price sell"><b class="price-unit">￥</b>{{item.price}}</div>
            <s class="price value">￥{{item.value}}</s>
          </div>
          <div v-if="detail.category == 0" class="buy-info" @click="gotoMakeOrder(item.id)">
            立即预订
          </div>
           <div v-if="detail.category == 4" class="buy-info" @click="gotoMakeOrder(item.id)">
            点餐
          </div>
          <div v-if="detail.category !== 0 && detail.category !== 4" class="buy-info" @click="gotoMakeOrder(item.id)">
            加入购物车
          </div>
        </div>
      </div>
      <div v-if="index < packageInfo.length-1">
        <van-divider />
      </div>
    </block>
  </div>
</template>  
<script>
import { categoryType } from '../constants/index'
export default {
  props: ['packageInfo', 'detail'],
  data() {
    return {
      categoryType,
    }
  },
  methods: {
    getPackageDetail(category, id) {
      wx.navigateTo({
        url: `/pages/brandAlbum/main?category=${category}&id=${id}`,
      })
    },
    gotoMakeOrder(id){
      wx.navigateTo({
        url: `/pages/makeTicketOrder/main?id=${id}`
      })
    }
  },
}
</script>

<style lang="less" scoped>
.package{
  margin: 0rpx;
  padding: 20rpx;
  .package-head{
    display: flex;
    flex-direction: row;
    .head-title{
      margin-left: 20rpx;
      font-size: 28rpx;
      font-weight: 600;
      letter-spacing: 2rpx;
    }
  }
  .package-main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .brand-item{
      display: flex;
      flex-direction: row;
      .head-icon{
        width: 200rpx;
        height: 200rpx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .brand-info{
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
          max-width: 300rpx;
        }
        .info-sub{
          color: #409eff;
        }
        .info-sold{
          color: #afafaf;
        }
      }
    }
    .brand-sell{
      .price-info{
        display: flex;
        flex-direction: row;
        margin-bottom: 20rpx;
        .price{
          display: flex;
          flex-direction: row;
        }
        .sell{
          font-size: 30rpx;
          color: #f60;
          font-weight: 700;
          .price-unit{
            font-size: 20rpx;
            margin-top: 10rpx;
          }
        }
        .value{
          color: #afafaf;
          font-size: 20rpx;
          margin-left: 10rpx;
          text-decoration: line-through;
          padding-top: 10rpx;
        }
      }
      .buy-info{
        width: 180rpx;
        height: 60rpx;
        font-size: 28rpx;
        background-color: #f90;
        text-align: center;
        line-height: 60rpx;
        color: #fff;
        border-radius: 180rpx;
      }
    }
  }
}
</style>

