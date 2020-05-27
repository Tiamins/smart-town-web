<template>
  <div>
    <form @submit="handleSubmit">
      <div class="main">
        <div class="comment avg">
            <van-field
              name="receiverName"
              :value="receiverName"
              clearable
              label="姓名"
              placeholder="请输入姓名"
              required
            />
            <van-field
              name="telephone"
              :value="telephone"
              clearable
              label="电话"
              placeholder="请输入电话"
              required
            />
            <van-field
              name="area"
              :value="area"
              clearable
              label="地区"
              placeholder="选择省/市/区"
              @click="showPopup"
              required
              is-link
            />
            <van-popup
              :show="show"
              position="bottom"
              @close="closePopup"
            >
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="show=false"
                @confirm="handleConfirm"
                @change="areaChange" />
            </van-popup>
             <van-field
              name="detailInfo"
              :value="detailInfo"
              clearable
              label="详细地址"
              placeholder="街道门牌、楼层房间号等信息"
              required
            />
            <van-field
              name="adCode"
              :value="adCode"
              clearable
              label="邮政编码"
              placeholder="邮政编码"
              required
            />
        </div>
      </div>
      <div class="divider"></div>
      <van-switch :checked="checked" name="defaultAddress" @change="handleDefaultChange" />
      <div class="divider"></div>
      <div class="submit">
        <button class="btn" formType='submit'>保存</button>
        <button v-if="edit===true" class="del btn" @click="handleDelete">删除</button>
      </div>
    </form>
  </div>
</template>
<script>
import { addAddress, getAddressDetail } from '@/services/api.js'
import { citys } from '@/components/constants/index'
export default {
  data() {
    return {
      edit: false,
      detail: {},
      receiverName: 'Tia',
      telephone: '13345667899',
      area: '',
      detailInfo: '科技园A栋34号4509',
      adCode: '100890',
      checked: false,
      show: false,
      citys,
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1',
        },
        {
          values: citys['浙江'],
          className: 'column2',
        }
      ]
    }
  },
  methods: {
    showPopup(){
      this.show = true;
    },
    closePopup(){
      this.show = false;
    },
    areaChange(event){
      const {picker, value, index} = event.mp.detail;
      picker.setColumnValues(1, citys[value[0]]);
    },
    handleConfirm(e){
      this.area = e.mp.detail.value.join('/');
      this.show = false;
    },
    handleDefaultChange(e) {
      this.checked = this.checked ? '' : e.mp.detail;
    },
    async handleSubmit(e) {
      const {receiverName, telephone, area, detailInfo, adCode, defaultAddress} = e.mp.detail.value;
      const areaInfo = area.split('/');
      const params = {
        receiverName,
        telephone,
        province: areaInfo[0],
        city: areaInfo[1],
        district: '静安区',
        detailInfo,
        adCode,
        isDefault: defaultAddress === true ? 1 : 0,
      };
      await addAddress(params);
      const tip = this.edit ? "保存成功" : "新增成功";
      this.$message('success', tip);
    },
    handleDelete(){
    }
  },
  async mounted(){
    console.log(this.$root.$mp.query);
    if (this.$root.$mp.query.id !== undefined){
      this.edit = true;
      const { id } = this.$root.$mp.query;
      this.detail = await getAddressDetail(id);
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../../style/base.less';
.comment{
  margin: 10rpx 0;
}
.submit{
  margin-top: 20rpx;
  .btn{
    margin: 10rpx auto;
    width: 700rpx;
    height: 80rpx;
    font-size: 28rpx;
    background-color: #409EFF;
    text-align: center;
    line-height: 80rpx;
    color: #fff;
    border-radius: 120rpx;
  }
  .del{
    margin-top: 40rpx;
    background-color: red;
  }
}
</style>