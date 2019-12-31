import Vue from 'vue'
import App from './App'
import { openWin, redirectTo, backBeforeWin, message } from './utils/index'
import store from './utils/store'
import fetch from './utils/fetch'

Vue.config.productionTip = false
App.mpType = 'app'
// 把通用方法挂载到Vue原型上
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeforeWin = backBeforeWin
Vue.prototype.$fetch = fetch
Vue.prototype.$message = message
// 把store挂载到Vue原型上
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()