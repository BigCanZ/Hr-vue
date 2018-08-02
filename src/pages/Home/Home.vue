<template>
  <div class="input-outer">
    <!-- 文本框 -->
    <div v-for="item in this.fromData" :key="item.fieldId">
      <div class="input-box border-bottom" v-if="showInput(item.fieldForm)">
        <span class="input-title">{{item.fieldName}}</span>
        <input type="text" class="input-text"
        :id="item.propertyId"
        :value="item.propertyValue"
        v-if="showRead(item.ifReadonly)"/>
        <!-- 只读状态下的文本框用div代替 -->
        <div class="input-text"
        v-if="showReadOnly(item.ifReadonly)"
        :id="item.propertyId">{{item.propertyValue}}</div>
      </div>
      <div class="textarea-box" v-if="showTextarea(item.fieldForm)">
        <span class="input-title">{{item.fieldName}}</span>
        <textarea class="input-textarea"
        :id="item.propertyId"
        :value="item.propertyValue"
        v-if="showRead(item.ifReadonly)"></textarea>
        <!-- 只读状态下的文本域用div代替 -->
        <div class="input-textarea"
        :id="item.propertyId"
        :value="item.propertyValue"
        v-if="showReadOnly(item.ifReadonly)">{{item.propertyValue}}</div>
      </div>
      <!-- <div class="choose-box" v-if="showInput(item.fieldForm)">
        <span class="input-title">事件阅知人员</span>
        <div class="choose-inner-box">
          <input type="radio" name="c" class="input-choose" id="radio_01">
          <label for="radio_01">哈哈哈</label>
          <input type="radio" name="c" class="input-choose" id="radio_02">
          <label for="radio_02">哈哈哈</label>
          <input type="radio" name="c" class="input-choose" id="radio_03">
          <label for="radio_03">哈哈哈</label>
          <input type="radio" name="c" class="input-choose" id="radio_04">
          <label for="radio_04">哈哈哈</label>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
export default {
  name: 'Home',
  data () {
    return {
      fromData: {}
    }
  },
  methods: {
    getInfo () {
      this.$fetch(this.serviceUrl + 'index.json', {}, api.listData).then(
        response => {
          this.fromData = response.blocks.result.rows
        }
      )
    },
    showRead (read) {
      // 显示可编辑
      if (read === '0') {
        return true
      } else {
        return false
      }
    },
    showReadOnly (read) {
      // 显示只读
      if (read === '1') {
        return true
      } else {
        return false
      }
    },
    showInput (form) {
      // 显示输入框
      if (form === '0' || form === '1' || form === '2') {
        return true
      } else {
        return false
      }
    },
    showTextarea (form) {
      // 显示文本域
      if (form === '4' || form === '10') {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    // console.log(api.listData('1'))
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-bottom
  &:before
    border-color rgba(255, 255, 255, 0.7);
  &:after
    border-color rgba(255, 255, 255, 0.7);
.input-outer
  width 94%
  margin 0px auto
  background $bgColor
  border-radiu: 0.1rem
  padding 10px 0px
  margin-top: 0.1rem
  .input-box
    width 90%
    margin 0px auto
    display flex
    overflow hidden
    .input-title
      display inline-block
      height 0.8rem
      line-height 0.8rem
      color: #fff
    .input-text
      height 0.8rem
      line-height 0.8rem
      flex 1
      text-align right
      background transparent
      color $textColor
  .textarea-box 
    width 90%
    margin 0px auto
    .input-title
      display block
      height 0.8rem
      line-height 0.8rem
      color #fff
    .input-textarea
      width calc(100% - 10px)
      padding 0.05rem 5px
      height 1.6rem
      background rgba(255, 255, 255, 0.1)
      border-radius 0.1rem
      resize none
      color $textColor
  .choose-box 
    width 90%
    margin 0px auto
    .input-title
      display block
      height 0.8rem
      line-height 0.8rem
      color #fff
    .choose-inner-box 
      overflow hidden
      .input-choose
        display none
      .input-choose + label
        display inline-block
        line-height 0.48rem
        padding 0 0.3rem
        color $textColor
        border 1px solid #ffffff
        border-radius 0.3rem
        float left
        margin 0 0.1rem 0.1rem 0
      .input-choose:checked + label 
        color $HoverTextColor
        background $textColor
</style>
