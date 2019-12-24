// 封装网络请求
// import { apiUrl } from '../utils/index'
const apiUrl = "http://localhost:8088";

const fetch = (conf, cb = function(){}) => {
  wx.showLoading({title: '请求中', mask: true})
  const {url, type = 'GET', data = {}, header} = conf;
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl + url,
      data,
      method: type,
      header: {
        "content-type": "application/json",
        ...header,
      },
      success(res){
        // if (res.code === 200){
        //   resolve(res)
        // } else {
        //   reject(res)
        // }
        resolve(res)
      },
      fail(err){
        reject(err)
      },
      complete(res){
        setTimeout(() => {
          wx.hideLoading();
          cb && cb(res)
        }, 1000)
      }
    })
  })
}
export default fetch;