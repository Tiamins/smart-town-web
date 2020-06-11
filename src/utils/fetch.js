// 封装网络请求
// import { apiUrl } from '../utils/index'
const apiUrl = "http://39.107.58.68:8088";
// const apiUrl = "http://127.0.0.1:8088";

const fetch = (conf, cb = function(){}) => {
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
        if (res.statusCode === 200){
          resolve(res.data)
        }
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