import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    curTown: '东夷小镇',
    isLogin: false,
    userInfo: {
    	avatarUrl: '',
    	city: '',
    	gender: '',
    	nickName: '',
    	province: ''
    },
    token: '',
  },
  mutations: {
    updateCity: (state, change) => {
      state.curCity = change
    },
    updateIsLogin: (state, change) => {
  		state.isLogin = change
  	},
  	cleanUserInfo: (state) => {
  		state.userInfo = {
  			avatarUrl: '',
	    	city: '',
	    	gender: '',
	    	nickName: '',
	    	province: '',
  		}
  	},
    updateUser: (state, change) => {
      state.userInfo = change
    },
    updateToken: (state, change) => {
      state.token = change;
    }
  }
})
export default store
