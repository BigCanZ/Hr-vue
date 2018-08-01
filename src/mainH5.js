// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import {post, fetch, patch, put} from './api/httpService'
import store from './store'
import fastClick from 'fastclick'

import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Vuex)
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.mixin({
  data () {
    return {
      service: '',
      serviceUrl: '/static/mock/',
      router: '/',
      imgSrc: ''
    }
  },
  methods: {
    newroot () {
      return this.$route
    },
    navigatePageTo (url) {
      this.$router.push(url)
    },
    reLaunchPageTo (url) {
      this.$router.replace(url)
    },
    setStorageSync (name, data) {
      window.sessionStorage.setItem(name, JSON.stringify(data))
    },
    getStorageSync (name) {
      return JSON.parse(window.sessionStorage.getItem(name))
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
