<template>
  <div class="home_container">
    <Masker/>
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
          <img v-lazy="item.picUrl"/>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>

    <!--三个保证-->
    <div class="g-grow">
      <div class="item" v-for="(item, index) in home.policyDescList" :key="index">
        <span>{{item.desc}}</span>
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
          <div class="goodGrid-item" v-for="(item, index) in home.newItemList" :key="index">
            <img v-lazy="item.listPicUrl" class="title"></img>
            <div class="name">{{item.name}}</div>
            <div class="newItemDesc">{{item.simpleDesc}}</div>
            <div class="price">￥{{item.retailPrice}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--福利社-->
    <div class="m-sale">
      <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
    </div>
    <!--专题精选-->
    <div class="m-indexFloor">
      <div class="hd">
        <div class="hd-Wrap">
          <span>专题精选</span>
          <i class="iconfont icon-right-circle"></i>
        </div>
      </div>
    </div>

    <div class="imgWrap">
      <div class="img-scroll">
        <div class="imgItem" v-for="(item, index) in home.topicList" :key="index">
          <img v-lazy="item.itemPicUrl" alt="">
          <div class="line1">
            <h4>{{item.title}}</h4>
            <span>{{item.priceInfo}}元起</span>
          </div>
          <div class="desc">{{item.subtitle}}</div>
        </div>
      </div>
    </div>

    <!-- 返回顶部 -->
    <goTop/>

    <!-- 居家好物 -->
    <GoodThing :cateList="home.cateList"/>

    <!--底部-->
    <HomeFooter/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import GoodThing from '../../components/GoodThing/GoodThing'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  import goTop from '../../components/goTop/goTop'
  import Masker from '../../components/Masker/Masker'

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

      this.$store.dispatch('getBanner',() => {
          this._initSwiper ()
      })


      this.$store.dispatch('getHome')
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
        new BScroll('.m-goodGrid', {
          click: true,
          scrollX: true,
          scrollY: false,
        })
        new BScroll('.imgWrap', {
          click: true,
          scrollX: true,
          scrollY: false,
        })
      },

      // 初始化滑动
      _initSwiper () {
        new Swiper('.swiper-container', {
          loop: true,
          observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,   // 修改swiper父元素时，自动初始化swiper
          autoplay: {
            autoplay:true,
            delay: 3000
          },
          /*scrollbar: {    //滚动条
            el: '.swiper-scrollbar',
            hide: true, //会自动隐藏
            dragSize: 50, // 滚动条尺寸
          },*/
        })
      }

    },

    watch: {
      banner (val) {
        this.$nextTick(() => {
          this._initSwiper ();
        })
      }
    },

    components: {
      GoodThing,
      HomeFooter,
      goTop,
      Masker,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
body
  background-color #f4f4f4
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
          width (532/$rem)
          height (56/$rem)
          border-radius 0.10667rem
          .search
            display inline-block
            vertical-align middle
            font-size .37333rem
            border-radius .10667rem
            margin-right (34/$rem)
          span
            width 70%
            font-size (24/$rem)
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
          padding 0 .4rem
          li
            height (60/$rem)
            width (70/$rem)
            text-align: center
            line-height .8rem
            padding 0 .21333rem
            font-size: (.37333*75/$rem)
            white-space nowrap
            &.active
              border-bottom: 3px solid #b4282d
              color: #b4282d
    .swiper-container
      margin-top (148/$rem)
      background #7e8c8d
      height (400/$rem)
      overflow visible
      .swiper-wrapper
        height (400/$rem)
        .swiper-slide
          height (400/$rem)
          img
            width 100%
            height 100%
      .swiper-scrollbar
        left 0
        bottom .4rem
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
      margin-bottom .26667rem
      background #ffffff
      .hd
        display flex
        flex-flow nowrap
        align-items center
        justify-content center
        height 110px
        font-size .42667rem
        .iconfont
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
        display flex
        .list
          display flex
          flex-flow nowrap
          align-items center
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
              overflow: hidden
            .price
              color red
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

    .m-sale
      margin-top .2*75/@rem
      img
        width 100%
    .imgWrap
      display flex
      .img-scroll
        margin-left .3rem
        display flex
        justify-content space-between
        align-items center
        .imgItem
          margin-right (20.8444/$rem)
          width 7.66667rem
          margin-bottom .21333rem
          border-radius (8/$rem)
          overflow hidden
          float left
          img
            width 100%
            margin-bottom .1rem
          .line1
            margin-bottom .1rem
            overflow hidden
            height 1.473rem
            line-height 1.473rem
            h4
              float left
              font-size .37333rem
              width 5.46667rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-weight bold
            span
              float right
              font-size .37333rem
              color #b4282d
          .desc
            width 7.66667rem
            font-size .32rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #7F7F7F

</style>
