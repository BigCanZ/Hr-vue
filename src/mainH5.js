// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import httpService from './api/httpService'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.mixin({
  data () {
    return {
      service: '',
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
  },
  created () {
    console.log('chrome')
    this.service = httpService
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
