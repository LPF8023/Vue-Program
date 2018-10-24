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
      goTop (acceleration, time) {
        acceleration = acceleration || 0.1;
        time = time || 16;
        let x1,x2,x3,y1,y2,y3;

        if (document.documentElement) {
          x1 = document.documentElement.scrollLeft || 0
          y1 = document.documentElement.scrollTop || 0
        }
        if (document.body) {
          x2 = document.body.scrollLeft || 0
          y2 = document.body.scrollTop || 0
        }
        x3 = window.screenLeft || 0
        y3 = window.screenTop || 0
        // 滚动条到页面顶部的水平距离
        let x = Math.max(x1, Math.max(x2, x3));
        // 滚动条到页面顶部的垂直距离
        let y = Math.max(y1, Math.max(y2, y3));
        // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
        let speed = 1 + acceleration;
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
        // 如果距离不为零, 继续调用迭代本函数
        if (x > 0 || y > 0) {
          let invokeFunction = "goTop(" + acceleration + ", " + time + ")";
          window.setTimeout(this.goTop, time);
        }
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
