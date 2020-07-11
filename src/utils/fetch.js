// 封装网络请求
// import { apiUrl } from '../utils/index'
import Toast from '../../static/vant/toast/toast';
import store from './store';
// const apiUrl = "http://39.107.58.68:8088";
const apiUrl = "http://127.0.0.1:8088";

const fetch = (conf, cb = function () { }) => {
  const { url, type = 'GET', data = {}, token = true } = conf;
  const tokenVal = wx.getStorageSync("token");
  const param = {
    url: apiUrl + url,
    data,
    method: type,
  }
  if (token) {
    param.header = {
      "content-type": "application/json",
      "Authorization": tokenVal,
    };
  } else {
    param.header = {
      "content-type": "application/json",
    };
  }
  return new Promise((resolve, reject) => {
    wx.request({
      ...param,
      success(res) {
        if (res.statusCode === 200) {
          if (res.data.code === 0){
            resolve(res.data.list)
          } else {
            Toast.fail(res.data.error)
          }
        }
      },
      fail(err) {
        Toast.fail(err)
        reject(err)
      },
      complete(res) {
        setTimeout(() => {
          wx.hideLoading();
          cb && cb(res)
        }, 1000)
      }
    })
  })
}
export default fetch;