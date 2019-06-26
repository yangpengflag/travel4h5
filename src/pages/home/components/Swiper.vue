<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
       <!-- slides滚动效果 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
    <!-- Optional controls可选控件-显示分页的小点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/1c12f6d69c9d14354f56e79af4407d58.jpg_750x200_77e70a3f.jpg'
      }, {
        id: '002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/e3d7a8aa438749416ea616c172e8b844.jpg_750x200_0844b3a6.jpg'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 27%
    background: #eee
    .swiper-img
      width: 100%
</style>
