import fetch from '../utils/fetch'
import store from '../utils/store'
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
// const auth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uS2V5IjoiSDVIeXFYUW5wRk9rcjBGSTZ0NEswdz09Iiwiand0LWlkIjoiMmM3N2U0ODYtZmM3NC00NTNiLWIyNDAtMjkzNWE3YzAxZWFmIiwid3hPcGVuSWQiOiJvZkwzVTVPTnZiUklNS2tORzJJR2d2Qk00c3c0IiwiZXhwIjoxNTkyNDAwODUyfQ.R5Cjjf4wp5UOXuBeH-1Vp7sCSAAZtKkwOFQnL6Na_24';
export const userLogin = async (params) => {
  return fetch({
    url: '/demo/user/login',
    type: 'POST',
    data: params,
    token: false,
  })
}

export const sayHello = async () => {
  return fetch({
    url: '/demo/user/sayHello',
    type: 'POST',
  })
}

export const updateUserInfo = async (params) => {
  return fetch({
    url: '/demo/user/userInfo',
    type: 'POST',
    data: params,
  })
}

export const getSpotList = async () => {
  return fetch({
    url: '/demo/spot/select/all',
    type: 'GET',
  })
}

export const getSpotDetail = async (spotId) => {
  return fetch({
    url: '/demo/spot/select/One',
    type: 'GET',
    data: { spotId },
  })
}

export const getSpotTicket = async (spotId) => {
  return fetch({
    url: '/demo/ticket/select/all',
    type: 'GET',
    data: { spotId },
  })
}
// 查询一个门票的信息
export const getTicket = async (id) => {
  return fetch({
    url: '/demo/ticket/select/one',
    type: 'GET',
    data: { id },
  })
}

export const getAddressList = async () => {
  return fetch({
    url: '/demo/receiver-address/select/all',
    type: 'GET',
  })
}

export const addAddress = async (params) => {
  return fetch({
    url: '/demo/receiver-address/create',
    type: 'POST',
    data: params,
  })
}

export const getAddressDetail = async (id) => {
  return fetch({
    url: '/demo/receiver-address/select/One',
    type: 'GET',
    data: { id },
  })
}

export const submitOrder = async (params) => {
  return fetch({
    url: '/demo/product-order/create',
    type: 'POST',
    data: params,
  })
}

export const getOrderList = async () => {
  return fetch({
    url: '/demo/product-order/select/user',
    type: 'GET',
  })
}

export const getMerchants = async () => {
  return fetch({
    url: '/demo/merchant/select/all',
    type: 'GET',
  })
}

export const getMerchantDetail = async (merchantId) => {
  return fetch({
    url: '/demo/merchant/select/one',
    type: 'GET',
    data: {
      merchantId,
    }
  })
}