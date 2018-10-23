<template>
  <div class="m-subCateList">
    <div class="cateList">
      <div class="hd">
        <div class="text">
          <span>123</span>
          <span>分类</span>
        </div>
      </div>
      <div class="list">
        <div class="cateItem" v-for="(itemCate,indexCate) in categoryL1List" :key="indexCate">
          <div class="cateImgWrapper" >
            <div class="name">{{itemCate}}</div>
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
        categoryL1List: ['推荐专区','秋季专区','新品专区','爆品专区','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体'],
      }
    },

    props: {
      index: Number
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .m-subCateList
    height: 89%;
    background: #ffffff;
    position: absolute;
    top: 88px;
    right: 0;
    margin-left: (2.16*75/$rem)
    padding: (.4*75/$rem) (.4*75/$rem) (.28*75/$rem)
    .cateList
      .hd
        height: (1.44*75/$rem)
        line-height: (1.44*75/$rem)
        text-align: center;
        font-size: (.32*75/$rem)
        color: #333;
        .text
          height: (1.44*75/$rem)
          line-height: (1.44*75/$rem)
          text-align: center;
          font-size: (.32*75/$rem)
          color: #333;
          span
            height: (1.44*75/$rem)
            line-height: (1.44*75/$rem)
            text-align: center;
            font-size: (.32*75/$rem)
            color: #333;
      .list
        .cateItem
          float: left;
          margin-bottom: 50px;
          width: (1.92*75/$rem)
          height: (1.92*75/$rem)
          margin-right: (.42*75/$rem)
          .cateImgWrapper
            img
              display: block;
              width: 100%;
              background: #fff;
          .name
            height: (75/$rem)
            font-size: (.32*75/$rem)
            color: #333;
            text-align: center;
            line-height: (-.54667*75/$rem)

</style>
