<template>
  <div class="guider-container">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/home'}" @click="goTo('/home')">
      <i class="iconfont icon-shouye-xianxing"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/shiwu'}" @click="goTo('/shiwu')">
      <i class="iconfont icon-detail"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/types'}" @click="goTo('/types')">
      <i class="iconfont icon-appstore"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/cart'}" @click="goTo('/cart')">
      <i class="iconfont icon-caigou-xianxing"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/personal'}" @click="goTo('/personal')">
      <i class="iconfont icon-yonghu-xianxing"></i>
      <span>个人</span>
    </a>
  </div>
</template>

<script>
  export default {

    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .guider-container
    width 100%
    height 1.3rem
    display flex
    align-items center
    position fixed
    left 0
    bottom 0
    z-index 100
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      &.on
        color red
      span
        font-size (24/$rem)
        margin-top 4px
      .iconfont
        font-size 0.6rem
</style>
