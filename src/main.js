import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import {post, fetch, patch, put} from './api/httpService'
import store from './store'
import fastClick from 'fastclick'

import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(Vuex)
fastClick.attach(document.body)
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$store = store

Vue.mixin({
  data () {
    return {
      service: '',
      serviceUrl: '/static/mock/',
      router: '/',
      imgSrc: '/'
    }
  },
  methods: {
    newroot () {
      return this.$root.$mp
    },
    navigatePageTo (url) {
      wx.navigateTo({url: url})
    },
    reLaunchPageTo (url) {
      wx.reLaunch({url: url})
    },
    setStorageSync (name, data) {
      wx.setStorageSync(name, data)
    },
    getStorageSync (name) {
      return wx.getStorageSync(name)
    }
  },
  created () {
    // console.log('wx')
    this.service = wxService
  }
})

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black'
    }
  }
}
