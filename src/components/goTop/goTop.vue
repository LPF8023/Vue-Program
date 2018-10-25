<template>
  <span class="goTop"  @click="goTop()">
    <i class="iconfont icon-up-circle" id="goTop"></i>
  </span>
</template>

<script>
  export default {

    data () {
      return {
        isShow: false
      }
    },

    methods: {
      goTop () {

        const timer = setInterval(() => {
          let top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
          console.log("top***" + top)

          let speed = Math.floor(-top/5);
          console.log("speed***" + speed)

          // 滚动条到页面顶部的垂直距离
          document.documentElement.scrollTop  = document.body.scrollTop = top + speed

          if (top <= 0) {
            clearInterval(timer)
          }
        },16.7)

      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .goTop
    position: fixed;
    z-index: 99;
    bottom: (120/$rem)
    right: (34/$rem)
    #goTop
      font-size: (84/$rem)
      color: #ff0000;


</style>
