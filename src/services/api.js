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
const auth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uS2V5IjoiQzJpTTZiQ0pnamQ4L1IvY3RoS2ZlUT09Iiwiand0LWlkIjoiNjU1YzgyNDEtNDRmOC00NjkxLWIwZGQtZDhjZTgzN2EzYWJjIiwid3hPcGVuSWQiOiJvZkwzVTVPTnZiUklNS2tORzJJR2d2Qk00c3c0IiwiZXhwIjoxNTkxMTk5MDk3fQ.LOtUPx6WS6wHKDGjaD7G4yt7c9pIAkZ-2NhJUSaEk7M';
export const userLogin = async (params) => {
  return fetch({
    url: '/demo/user/login',
    type: 'POST',
    data: params,
  })
}

export const sayHello = async () => {
  return fetch({
    url: '/demo/user/sayHello',
    type: 'POST',
    header: {
      "Authorization": store.state.token,
    },
  })
}

export const updateUserInfo = async (params) => {
  return fetch({
    url: '/demo/user/userInfo',
    type: 'POST',
    data: params,
    header: {
      "Authorization": store.state.token,
    },
  })
}

export const getSpotList = async () => {
  return fetch({
    url: '/demo/spot/select/all',
    type: 'GET',
    header: {
      "Authorization": auth,
    }
  })
}

export const getSpotDetail = async (spotId) => {
  return fetch({
    url: '/demo/spot/select/One',
    type: 'GET',
    data: { spotId },
    header: {
      "Authorization": auth,
    }
  })
}

export const getSpotTicket = async (spotId) => {
  return fetch({
    url: '/demo/ticket/select/all',
    type: 'GET',
    data: { spotId },
    header: {
      "Authorization": auth,
    }
  })
}
// 查询一个门票的信息
export const getTicket = async (id) => {
  return fetch({
    url: '/demo/ticket/select/one',
    type: 'GET',
    data: { id },
    header: {
      "Authorization": auth,
    }
  })
}

export const getAddressList = async () => {
  return fetch({
    url: '/demo/receiver-address/select/all',
    type: 'GET',
    header: { 
      "Authorization": auth,
    }
  })
}

export const addAddress = async (params) => {
  return fetch({
    url: '/demo/receiver-address/create',
    type: 'POST',
    data: params,
    header: {
      "Authorization": auth,
    }
  })
}

export const getAddressDetail = async (id) => {
  return fetch({
    url: '/demo/receiver-address/select/one',
    type: 'GET',
    data: id,
    header: {
      'Authorization': auth,
    }
  })
}

export const submitOrder = async (params) => {
  return fetch({
    url: '/demo/product-order/create',
    type: 'POST',
    data: params,
    header: {
      "Authorization": auth,
    }
  })
}