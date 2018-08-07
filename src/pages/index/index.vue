<template>
  <div class="container">
      <!-- 图片引用的两种方式 -->
      <img class="girl" :src="imgsrc" alt="">
      <!-- <img class="logo" src="../../../static/img/logo.png" alt=""> -->
    <card :text="motto"></card>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!-- 路由跳转 -->
    <a @click="gotoGame('pages/counter/main')" class="counter">去往Vuex示例页面</a>
    <a @click="gotoGame('pages/logs/main')" class="counter">去往logs页面</a>
  </div>
</template>

<script>
// 组件引用
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      imgsrc: 'https://img.alicdn.com/tps/i4/TB19zIodxUaBuNjt_iGSutlkFXa.jpg_q90_.webp'
    }
  },
  components: {
    card
  },
  methods: {
    gotoGame (path) {
      this.reLaunchPageTo(this.router + path)
    },
    getinfo () {
      this.service.httpRequest({
        url: this.serviceUrl + 'index.json',
        methods: 'get'
      }).then(function (e) {
        console.log(e)
      })
    }
  },
  created () {
    this.getinfo()
  }
}
</script>

<style lang="stylus" scoped>
.girl
  width: 275px;
  height: 400px;
.form-control
  display: block
  padding: 0 12px
  margin-bottom: 5px
  border: 1px solid #ccc
  height:25px
  text-overflow:clip
  overflow:hidden
  white-space:nowrap
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
  -webkit-user-select: none
  -moz-user-focus: none
  -moz-user-select: none
  -webkit-appearance:none
  outline: none
.counter
  display: inline-block
  margin: 10px auto
  padding: 5px 10px
  color: blue
  border: 1px solid blue
</style>
