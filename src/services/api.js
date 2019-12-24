import fetch from '../utils/fetch'
// 上传
// export const upload = async (params, url) => {
//   return this.$ajax({
//     url: url || '/api/v2/user/drafts',
//     type: 'POST',
//     params
//   })
// }
//  获取消息通知数量
// // 授信资料提交
// export const creditSubmit = async (params) => {
//   return fetch({
//     url: '/api/v2/merchant/pending_crediting/status',
//     type: 'PUT',
//     params
//   })
// }
const token = mpvue.getStorageSync("token");
console.log("token:", token);

export const userLogin = async (params) => {
  return fetch({
    url: '/demo/user/login',
    type: 'POST',
    data: params,
  })
}

export const updateUserInfo = async (params) => {
  return fetch({
    url: '/demo/user/userInfo',
    type: 'POST',
    data: params,
    header: {
      "Authorization": "Bearer " + token,
    },
  })
}