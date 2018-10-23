<template>
  <div>
    Login
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //loginWay: false, // true代表短信登陆, false代表密码
        computeTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        code:'', // 短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  //清除Chrome浏览器记住密码下 user agent stylesheet 给input设置的屎黄色背景
  input:-webkit-autofill
    -webkit-box-shadow:0 0 0 100px white inset;
    -webkit-text-fill-color: #666;
  input:-webkit-autofill:focus
    -webkit-box-shadow:0 0 0 100px white inset;
    -webkit-text-fill-color: #666;
  .logoWrap
    text-align: center;
    padding-top: 1.13333rem;
    padding-bottom: .13333rem;
    img
      width: 3.57333rem;
      height: 1.2rem;
  .loginContainer
    width 100%
    height 100%
    background #FFFFFF
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #333
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          > a
            height: .53333rem;
            color: #7F7F7F;
            margin-left: .06667rem;
            font-size .4rem
            &:first-child
              margin-right 40px
            &.on
              color #b4282d
              font-weight 700
      //border-bottom 2px solid #b4282d
      .login_content
        margin-top 30px
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #999
              border-radius 4px
              outline 0
              font-size: 0.4rem;
              &:focus
                border 1px solid #b4282d
            .login_message
              margin-bottom: .42667rem;
              border-radius: 2px;
              display: block;
              width: 100%;
              height: 1.25333rem;
              line-height: 1.25333rem;
              overflow: hidden;
              font-size: .37333rem;
              color: #fff;
              vertical-align: middle;
              text-align: center;
              margin-top 27px
              .get_verification
                position absolute
                top 51%
                right 60px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size .4rem
                &img
                  width 100px
                &>input
                  margin-top 50px
                  background #ffffff!important
                &.right_phone
                  color: black
            .login_verification
              position relative
              margin-top 16px
              height: 1.25333rem;
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 70px
                height 31px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #b4282d
                > .switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 30px
                  height 30px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
                  &.right
                    transform translateX(55px)
                > .switch_text
                  font-size: 0.34rem;
            .login_hint
              margin-top 12px
              color #999
              font-size .3rem
              line-height .55rem
              > a
                color #b4282d
          .login_submit
            display block
            width 100%
            margin-top 30px
            border-radius 4px
            background #b4282d
            color #fff
            text-align center
            font-size: 0.4rem;
            line-height 42px
            border 0
            height: 1.25333rem;
        .about_us
          display block
          margin-top 20px
          text-align center
          color #999
          font-size: 0.4rem;
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        > .iconfont
          font-size 20px
          color #999
</style>
