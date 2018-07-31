<template>
  <div class="input-outer">
    <div class="input-box border-bottom">
      <span class="input-title">一级负责人</span>
      <input type="text" @click="handerClick" class="input-text" :value="this.val" />
    </div>
    <div class="textarea-box">
      <span class="input-title">一级负责人</span>
      <textarea class="input-textarea" :value="this.val"></textarea>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
export default {
  name: 'Home',
  data () {
    return {
      val: '上海大学1',
      service: '',
      serviceUrl: '/static/mock/'
    }
  },
  methods: {
    getInfo () {
      this.$fetch(this.serviceUrl + 'index.json', {}, api.listData)
        .then((response) => {
          // console.log(response)
          console.log(response)
        })
    },
    handerClick () {
      console.log(this.val)
    }
  },
  created () {
    // console.log(api.listData('1'))
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-bottom
  &:before
    border-color:rgba(255,255,255,.3)
  &:after
    border-color:rgba(255,255,255,.3)
.input-outer
  width 94%
  margin 0px auto
  background $bgColor
  border-radius .1rem
  padding 10px 0px
  margin-top .1rem 
  .input-box
    width 90%;
    margin 0px auto;
    display flex
    overflow hidden
    .input-title
      display inline-block
      height .8rem
      line-height .8rem
      color #fff
    .input-text
      height .8rem
      line-height .8rem
      flex 1
      text-align right
      background transparent
      color $textColor
  .textarea-box
    width 90%
    margin 0px auto;
    .input-title
      display block
      height .8rem
      line-height .8rem
      color #fff
    .input-textarea
      width calc(100% - 10px)
      padding .05rem 5px
      height 1.6rem
      background rgba(255,255,255,.1)
      border-radius .1rem
      resize none
      color $textColor
</style>
