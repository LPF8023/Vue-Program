<template>
  <!-- 居家好物 -->
  <div>
    <div class="m-indexFloor" v-for="(item, index) in cateList" :key="index">
      <div class="m-titleGoodGrid">
        <h3 class="title">{{item.name}}好物</h3>
        <div class="m-goodGrid">
          <div class="wrapper" v-for="(itemGoodGrid, indexGoodGrid) in item.itemList" :key="indexGoodGrid">
            <img :src="itemGoodGrid.listPicUrl" alt="">
            <div class="desc">{{itemGoodGrid.simpleDesc}}</div>
            <div class="name">{{itemGoodGrid.name}}</div>
            <span class="price">{{itemGoodGrid.couponPrice}}￥</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    props: {
      cateList: Array,
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .m-indexFloor
    margin-bottom .26667rem
    background-color #fff
    .m-titleGoodGrid
      background-color #ffffff
      .title
        position relative
        line-height 1.6rem
        text-align center
        font-size .37333rem
        color #333
        background-color #ffffff
        margin-top 4px
      .m-goodGrid
        width 100%
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        .wrapper
          background-color #ffffff
          width 46%
          margin-bottom .2rem
          padding-bottom .2rem
          &:nth-of-type(odd)
            margin-right .3rem
            margin-left .2rem
          &:nth-of-type(even)
            margin-right .2rem
          img
            display block
            width 100%
            height 4.6rem
            border-radius .05333rem .05333rem 0 0
            background-color #f4f4f4
          .desc
            bottom: 0;
            width: 95%;
            background: #F1ECE2;
            border-radius: 0 0 .05333rem .05333rem
            font-size: .32rem;
            color: #9F8A60;
            letter-spacing: 0;
            line-height: .38667rem;
            padding: .26667rem .13333rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          .name
            margin-top: .13333rem;
            padding: 0 .13333rem;
            line-height: .64rem;
            text-align: left;
            font-size: .37333rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
          .price
            line-height: 1;
            font-size: .42667rem;
            text-align: left;
            color: #b4282d;
            padding: 0 .13333rem;

</style>
