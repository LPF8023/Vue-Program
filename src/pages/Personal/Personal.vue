<template>
  <div>
    <ShiwuHeader/>
    <div class="loginTypesWrap">
      <!--手机邮箱登录-->
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block" @click="phoneLogoin(true)">
            <i class="loginPhone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed" @click="phoneLogoin(false)">
            <i class="loginMail"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="right3"></i>
          </div>
        </div>
      </div>
      <!--第三方登录-->
      <div class="thirdWrap">
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-wechat-fill"></i>
            <span class="name">微信</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-QQ"></i>
            <span class="name">QQ</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weibo-circle-fill"></i>
            <span class="name">微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'

  export default {
   data () {
     return {

     }
   },

    methods: {
      phoneLogoin (phoneLogoin) {
        //Vue.set(this.loginWay, 'phoneLogoin')
        this.$router.replace('/login');
        this.$store.dispatch('setLoginWay',phoneLogoin)
      }
    },

    components: {
      ShiwuHeader,
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html
    height: 100%;
    overflow: hidden
  .loginTypesWrap
    padding-top: 88px;
    .cont
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .logoWrap
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        img
          width: 268px
          height: 90px
      .btnWrap
        padding: 0 .53333rem;
        margin-bottom: 0.42667rem;
        .button-block
          margin-bottom: .42667rem;
          border-radius: 0.5rem;
          display: block;
          width: 100%;
          height: 1.25333rem;
          line-height: 1.25333rem;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          overflow: hidden;
          .loginPhone
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-size: .53333rem 3.86667rem;
            width: .53333rem;
            height: .53333rem;
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            color: #fff;
            font-size: .37333rem
          span
            line-height: 1.25333rem;
            text-align: center;
            font-size: .37333rem;
            color: #fff;
        .button-ghostRed
          margin-bottom: .42667rem;
          border-radius: 0.5rem;
          display: block;
          width: 100%;
          height: 1.25333rem;
          line-height: 1.25333rem;
          color: #b4282d;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          border: 1px solid #b4282d;
          overflow: hidden;
          .loginMail
            margin-right: .21333rem;
            position: relative;
            top: -.02667rem;
            background-position: 0 0;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-size: .53333rem 3.86667rem;
            width: .53333rem;
            height: .53333rem;
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            span
              line-height: 1.25333rem;
              color: #b4282d;
              text-align: center;
              font-size: .37333rem;
        .btn
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
          line-height: 1.5;
          span
            color: #333;
            font-size: .37333rem;
            text-align: center;
            line-height: 1.5;
          .right3
            margin-right: .21333rem;
            position: relative;
            top: -.02667rem;
            margin-left: .05333rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .37333rem;
            height: .37333rem;
            color: #333;
            font-size: .37333rem;
            text-align: center;


    .thirdWrap
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 1.06667rem;
      text-align: center;
      .itemWrap
        height: .53333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem;
        &:nth-child(3)
          border-right: 0px solid #979797;
        .item
          height: .53333rem;
          display flex
          align-items center
          top: -.13333rem;
          .iconfont
            position: relative;
            display: inline-block;
            width: .53333rem;
            height: .53333rem;
            font-size .5333rem
          .name
            font-size: .37333rem;
            line-height: .53333rem;
            height: .53333rem;
            color: #7F7F7F;
            margin-left: .06667rem;






</style>
