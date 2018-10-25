<template>
  <div>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll" :key="index">
          <div class="imgContainer">
            <img v-lazy="item.picUrl" alt="">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {

    props: {
      scroll: Array,
    },

    mounted () {
      this.$nextTick(() => {
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true,
          scrollY: false,
        })
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .m-exploreChannels
    overflow: hidden;
    padding: .42667rem .4rem .37333rem;
    height: 2.81333rem;
    background-color: #fff;
    margin-bottom: .26667rem;
    display: flex;
    .scroll-wrap
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
      transform: translate3d(0px, 0px, 0px);
      transition-duration: 0ms;
      display: flex;
      flex-wrap: nowrap;
      .scroll-item
        position: relative;
        width: 2.18667rem;
        height: 2.8rem;
        margin-right: .32rem;
        .imgContainer
          img
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 2.18667rem;
            height: 2.18667rem;
            margin-bottom: .29333rem;
            border-radius: .05333rem;
        .title
          color: #333;
          font-size: .32rem;
          line-height: 1;
          text-align: center;
          width: 2.45333rem;
          margin-left: -.13333rem;
          margin-top: -.2rem;
        .rbGradient
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: 1.54667rem;
          height: .42667rem;
          border-radius: 0 .05333rem 0 0;
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat;
          background-size: 100%;
          display: inline-block;
          vertical-align: middle;
        .topNum
          font-size: .32rem;
          position: absolute;
          top: 0;
          right: .10667rem;
          width: 2rem;
          height: .42667rem;
          line-height: .42667rem;
          text-align: right;


</style>
