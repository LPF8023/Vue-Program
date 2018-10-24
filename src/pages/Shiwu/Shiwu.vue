<template>
  <div class="wrap">
    <ShiwuHeader/>
    <div class="swiper">
      <div class="swiper-container" v-if="shiwu.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in shiwu.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--左右滑动区-->
    <DetailScroll :scroll="shiwu.column"/>
    <!--严选推荐-->
    <DetailItem :detail="shiwu"/>
    <!--十点一刻-->
    <QuarterPastTen :detail="shiwu"/>
    <!--严选look-->
    <DetailLoolk :detail="shiwu"/>
    <!--更多精彩-->
    <DetailFindMore :detail="shiwu"/>
    <!--回到顶部-->
    <goTop/>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'
  import DetailScroll from '../../components/DetailScroll/DetailScroll'
  import DetailItem from '../../components/DetailItem/DetailItem'
  import QuarterPastTen from '../../components/QuarterPastTen/QuarterPastTen'
  import DetailLoolk from '../../components/DetailLoolk/DetailLoolk'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore'
  import goTop from '../../components/goTop/goTop'

  import {mapState} from 'vuex'


  export default {


    mounted () {
      this.$store.dispatch('getShiwu')
      this._initSwiper ()
    },

    methods: {
      _initSwiper () {
        new Swiper('.swiper-container', {
          loop: true,
          spaceBetween: 30,
          slidesPerView: 1.15,  //网格格栅 --> 设置slider容器能够同时显示的slides数量，设置数字，可为小数
          centeredSlides: true,   //设定为true时，active slide会居中，而不是默认状态下的居左。
          autoplay: {
            autoplay:true,
            delay: 3000
          },
        })
      }
    },

    computed: {
      ...mapState(['shiwu'])
    },

    watch: {
      shiwu (val) {
        this.$nextTick(() => {
          this._initSwiper ()
        })
      }
    },

    components: {
      ShiwuHeader,
      DetailScroll,
      DetailItem,
      QuarterPastTen,
      DetailLoolk,
      DetailFindMore,
      goTop,
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"

  .wrap
    background: #F4F4F4;
    padding-bottom: 0.5rem
  .swiper-container
    .swiper-wrapper
      margin-top: 1.4rem
      .swiper-slide
        img
          width: 100%;
          position: relative;
        .content
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 6.21333rem;
          height: 2.64rem;
          background-color: rgba(255,255,255,.9);
          .subTitle
            position: relative;
            font-size: .26667rem;
            color: #7f7f7f;
            line-height: .4rem;
            padding: 0 .10667rem;
          .title
            font-size: .42667rem;
            line-height: .64rem;
            color: #333;
            margin-top: .21333rem;
            font-weight: 700;
        .desc
          font-size: .32rem;
          color: #333;
          line-height: .48rem;
          margin-top: .05333@rem;


</style>
