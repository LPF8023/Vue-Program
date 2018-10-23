<template>
  <div>

    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block" @click="goLogoin(true)">
            <i class="loginPhone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed" @click="goLogoin(false)">
            <i class="loginMail"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="right3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
   data () {
     return {
       longinWay: null
     }
   },

    methods: {
      goLogoin (loginWay1) {
        this.longinWay = loginWay1;
        this.$router.replace('/login');

      }
    }


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
        margin-bottom: .42667em;
        padding: 0 .53333rem;
        .loginPhone
          background-position: 0 -58px;
          margin-right: .21333rem;
          position: relative;
          top: -.02667rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          .name
            line-height: 1.25333rem;
            font-size: .37333rem;
            color: #fff;
      .ghostRed
        margin-bottom: .42667rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333rem;
        line-height: 1.25333rem;
        color: #b4282d;
        vertical-align: middle;
        text-align: center;
        border: 1px solid #b4282d;
        overflow: hidden;
        .loginMail
          margin-right: .21333rem;
          position: relative;
          top: -.02667rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          line-height: 1.25333rem;
          color: #b4282d;
          text-align: center;
          font-size: .37333rem;
          .name
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
        .right3
          color: #333;
          font-size: .37333rem;
          text-align: center;
          line-height: 1.5;
          .name
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
            line-height: 1.5;
    .btnWrap
      padding: 0 .53333rem;
      margin-bottom: 2.73333rem;
      .button-block
        margin-bottom: .42667rem;
        border-radius: 2px;
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
        border-radius: 2px;
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

</style>
