<template>
  <div id="pad">
    <div class="m-exploreTenFifteen">
      <div class="module-title">十点一刻</div>
      <div class="innerWrap">
        <div class="scrollWrap">
          <div class="scroll-item" v-for="(item,index) in detail.tenfifteen" :key="index">
            <div class="line-title">
              <span class="inner1">- 今日话题 -</span>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">
              <div class="inner">
                <div class="avatars">
                  <div class="avatar" v-for="(avatarItem,index) in item.participantAvatar" :key="index">
                    <img v-lazy="avatarItem" alt="">
                  </div>
                  <div class="avatar1">
                    <div class="doc"></div>
                    <div class="doc"></div>
                    <div class="doc"></div>
                  </div>
                </div>
                <div class="join">
                  <span>{{item.participantNum}}</span>
                  <span>人参与话题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      detail: Object
    },

    mounted () {
      this.$nextTick(() => {
        new BScroll('.innerWrap', {
          click: true,
          scrollX: true,
          scrollY: false
        })
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';

  .m-exploreTenFifteen
    overflow: hidden;
    padding: 0 .4rem .53333rem;
    height: 7.61333rem;
    background-color: #fff;
    margin-bottom: .26667rem;
    .module-title
      background-color: #fff;
      text-align: center;
      font-size: 0.42667rem;
      height: 1.6rem;
      line-height: 1.6rem;
    .innerWrap
      display: flex;
      .scrollWrap
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translate3d(0px, 0px, 0px);
        transition-duration: 0ms;
        .scroll-item
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 90%;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
          position: relative;
          width: 7.73333rem;
          height: 5.48rem;
          padding: .50667rem .53333rem 1.05333rem;
          margin-right: .4rem;
          text-align: center;
          color: #333;
          .line-title
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: .53333rem;
            .inner1
              margin: 0 .10667rem;
              font-size: .32rem;
              color: #7f7f7f;
          .title
            font-size: .48rem;
            font-weight: 700;
            margin-bottom: .18667rem;
          .desc
            font-size: .37333rem;
            line-height: 1.5;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
          .joinInfo
            position: absolute;
            bottom: 3.05333rem;
            width: 6.66667rem;
            text-align: center;
            .inner
              display: inline-block;
              overflow: hidden;
              .avatars
                float: left;
                margin-right: .21333rem;
                .avatar
                  float: left;
                  img
                    position: relative;
                    float: left;
                    height: .64rem;
                    width: .64rem;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    z-index: 4;
                .avatar1
                  background-color: #d9d9d9;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 50%;
                  position: relative;
                  float: left;
                  height: .64rem;
                  width: .64rem;
                  overflow: hidden;
                  border: 1px solid #fff;
                  .doc
                    width: .08rem;
                    height: .08rem;
                    border-radius: 50%;
                    margin-right: .05333rem;
                    background-color: #fff;
              .join
                float: left;
                text-align: left;
                line-height: .64rem;
                font-size: .32rem;
                color: #7f7f7f;
                span
                  text-align: left;
                  line-height: .64rem;
                  font-size: .32rem;
                  color: #7f7f7f;

</style>
