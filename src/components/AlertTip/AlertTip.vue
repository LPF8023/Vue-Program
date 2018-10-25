<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      alertText: String
    },

    methods: {
      closeTip () {
        this.$emit('closeTip')
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  @keyframes tipMove
    0%
      transform: scale(1)
    35%
      transform: scale(.8)
    70%
      transform: scale(1.1)
    100%
      transform: scale(1)
  .alert_container
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgba(0, 0, 0, .5)
    .tip_text_container
      position: absolute;
      top: 38%;
      left: 20%;
      transform translate3d(-50% -50%)
      width: 60%
      height 20%
      animation: tipMove .4s;
      background-color: rgba(255, 255, 255, 1);
      border: 1px;
      padding-top: 20px
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px
      .tip_icon
        position absolute
        top (20/$rem)
        width: (100/$rem)
        height: (100/$rem)
        border: (4/$rem) solid #f8cb86;
        border-radius: 50%;
        font-size (20/$rem)
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span:nth-of-type(1)
          width: (4/$rem)
          height: (30/$rem)
          background-color: #f8cb86;
        span:nth-of-type(2)
          width: (4/$rem)
          height: (4/$rem)
          border: (2/$rem)
          border-radius: 50%;
          margin-top: (4/$rem)
          background-color #f8cb86
      .tip_text
        font-size .4rem
        color #333
        line-height 20px
        text-align center
        margin-top 10px
        padding 0 5px
      .confrim
        position absolute
        bottom 0
        font-size .4rem
        font-weight bold
        background-color #b4282d
        width 100%
        height 28%
        text-align center
        line-height .9rem
        border 1px
        color #fff
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
</style>
