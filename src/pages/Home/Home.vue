<template>
  <div class="home_container">
    <!--头部搜索导航区-->
    <div class="head_container">
      <div class="top">
        <a href="javascript:;" class="logo">网易严选</a>
        <div class="m-topSearchIpt">
          <i class="iconfont search icon-sousuo-xianxing"></i>
          <span>搜索商品, 共16685款好物</span>
        </div>
      </div>
      <div class="hdScorllX">
        <ul class="hdScorllItem" ref="hdScorllItem">
            <li :class="{active:index === activeIndex}" ref="hdScorll" v-for="(item,index) in data" :key="index" @click="active(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <!--轮播区-->
    <div class="swiper-container" v-if="banner.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.picUrl"/>
        </div>
      </div>
    </div>
    <div class="g-grow">
      <div class="item">
        <span>网易自营品牌</span>
      </div>
      <div class="item">
        <span>30天无忧退款</span>
      </div>
      <div class="item">
        <span>48小时快速退款</span>
      </div>
    </div>
    <!--品牌制造直供区-->
    <div class="m-indexFloor">
      <div class="hd">
        <div class="hd-Wrap">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-right-circle"></i>
        </div>
      </div>
      <div class="hd-itemWrap">
        <div class="hd-item">
          <h4>CK制造商</h4>
          <div class="title">
            25元起
          </div>
        </div>
        <div class="hd-item">
          <h4>Nine West制造商</h4>
          <div class="title">
            199元起
          </div>
        </div>
        <div class="hd-item">
          <h4>新秀丽制造商</h4>
          <div class="title">
            49元起
          </div>
        </div>
        <div class="hd-item">
          <h4>Birkenstock集团制造商</h4>
          <div class="title">
            89.9元起
          </div>
        </div>
      </div>
    </div>
    <!--新品首发区-->
    <div class="m-newItems">
      <header class="newItemsWrap">
        <span>新品首发</span>
        <div id="all">
          <span>查看全部 ></span>
        </div>
      </header>
      <div class="m-goodGrid">
        <div class="list">
          <div class="goodGrid-item">
            <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330" class="title"></img>
            <div class="name">网易智造低压海盐热敷腰带</div>
            <div class="newItemDesc">古法热敷，研磨艾绒，专业的身体调理</div>
            <div class="price">￥199</div>
          </div>
          <div class="goodGrid-item">
            <img src="http://yanxuan.nosdn.127.net/cbbdd7c5622a0eaab31e42247909c959.png?imageView&quality=65&thumbnail=330x330" class="title"></img>
            <div class="name">海盐</div>
            <div class="newItemDesc">介绍</div>
            <div class="price">￥199</div>
          </div>
          <div class="goodGrid-item">
            <img class="title" src="http://yanxuan.nosdn.127.net/5325d6170b0fb885c8f5f1b3528811e2.png?imageView&quality=65&thumbnail=330x330"></img>
            <div class="name">海盐</div>
            <div class="newItemDesc">介绍</div>
            <div class="price">￥199</div>
          </div>
        </div>
      </div>
    </div>
    <!--人气推荐区-->
    <div class="m-popularItemList">
      人气推荐区
    </div>
    <!--严选限时区-->
    <div class="data_reactid">
      严选限时区
    </div>
    <!--福利社-->
    <div class="m-sale">
      福利社
    </div>
    <!--专题精选-->
    <div class="m-indexFloor">
      专题精选
    </div>
    <!--底部-->
    <div class="m-ftWrap">
      底部
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {

    data () {
      return {
        activeIndex: 0,
      }
    },

    mounted () {

      this.$store.dispatch('getData',()=> {
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
        })
      })

      this.$store.dispatch('getBanner')


      new Swiper('.swiper-container', {
        loop: true,
        autoplay:{
          autoplay: true,
          delay: 3000
        },
        scrollbar: {
          el: '.swiper-container',
        },
      })
    },

    computed: {
      ...mapState(['data','banner', 'home'])
    },

    methods: {
      active (indexActive) {
        this.activeIndex = indexActive
      },
      // 初始化滚动
      _initScroll() {
        new BScroll('.hdScorllX', {
          click: true,
          scrollX: true,
          scrollY: false,
        })

      }



    },

    components: {

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .home_container
    width 100%
    overflow hidden
    .head_container
      width 100%
      height 148px
      position fixed
      top 0
      z-index 100
      background #ffffff
      .top
        display flex
        padding 0.21333rem 0.4rem
        align-items center
        height 75px/@rem
        padding 6.5px
        .logo
          display flex
          width 1.84rem
          height 0.53333rem
          display inline-block
          font-size 0.43rem
          font-weight bold
          margin .26667rem
          color black
        .m-topSearchIpt
          display flex
          background-color #ededed
          align-items center
          justify-content center
          width 532px/@rem
          height 56px/@rem
          border-radius 0.10667rem
          .search
            display inline-block
            vertical-align middle
            font-size .37333rem
            border-radius .10667rem
            margin-right 34px
          span
            width 70%
            font-size 24px/@rem
            color #666666
      .hdScorllX
        width: 100%;
        background: #ffffff;
        display: flex
        align-items center
        .hdScorllItem
          display: flex;
          align-items: center;
          text-align center
          height (60/$rem)
          li
            width (70/$rem)
            text-align: center
            margin 0 0.5rem
            padding-bottom (12/$rem)
            font-size: (.37333*75/$rem)
            white-space nowrap
            &.active
              padding-bottom (12/$rem)
              border-bottom: 3px solid #b4282d
              color: #b4282d
    .swiper-container
      margin-top 146px
      background #7e8c8d
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            vertical-align middle
    .g-grow
      margin-bottom 12px
      background #fff
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 72px
      .item
        width 33%
        height 72px
        margin-left 8px
        text-align center
        span
          font-size 24px
          color #333
          line-height 30px
          vertical-align middle
          margin-left -15px


    .m-indexFloor
      width 100%
      height 586px
      margin-bottom 22px
      background #ffffff
      .hd
        display flex
        flex-flow nowrap
        align-items center
        justify-content center
        height 110px
        font-size .42667rem
        .icon-right-circle
          font-size .42667rem
      .hd-itemWrap
        margin 0 15px
        height 476px
        .hd-item
          display inline-block
          margin-bottom 10px
          width 45%
          height 206px
          overflow hidden
          background-color #f4f4f4
          border 1px solid #999
          padding .26667rem 0 0 .26667rem
          &:nth-child(1) &:nth-child(3)
            margin-left 8px
          &:nth-child(1)
            background url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png")
            background-size 100%
          &:nth-child(2)
            background: url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png")
            background-size: 100%
          &:nth-child(3)
            background: url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png")
            background-size: 100%
          &:nth-child(4)
            background: url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png")
            background-size: 100%
          h4
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-size .37333rem
            line-height .45333rem
            margin-bottom .08@rem
          .title
            color #333
            font-size .37333rem
            line-height .45333rem



    .m-newItems
      margin-bottom 20px
      background-color #eee
      width 100%
      height 772px
      .newItemsWrap
        width 100%
        height 260px
        margin-bottom 32px
        display flex
        flex-direction column
        align-items center
        justify-content center
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
        span
          font-size .48rem
          color #8BA0B6
        #all
          width 240px
          height 56px
          margin-top 16px
          background-color #D8E5F1
          display flex
          justify-content center
          align-items center
          span
            font-size .37333rem
            line-height .74667rem
      .m-goodGrid
        width 100%
        height 6.4rem
        background-color #eee
        .list
          height 414px
          overflow hidden
          display flex
          .goodGrid-item
            width 3.73333rem
            margin-left .4rem
            .title
              width 3.73333rem
              height 3.73333rem
              background-color #f4f4f4
            .name
              margin-bottom .13333rem
              padding 0 .13333rem
              font-size .37333rem
              line-height .45333rem
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            .newItemDesc
              display: block;
              margin-bottom: .18667rem;
              font-size: .32rem;
              color: #7f7f7f;
              line-height: .4rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0 .13333rem;
            .price
              padding 0 .13333rem
              font-size .37333rem

</style>
