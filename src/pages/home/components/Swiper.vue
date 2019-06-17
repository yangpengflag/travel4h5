<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
       <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/1c12f6d69c9d14354f56e79af4407d58.jpg_750x200_77e70a3f.jpg"></img>
	  </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/e3d7a8aa438749416ea616c172e8b844.jpg_750x200_0844b3a6.jpg"></img>
      </swiper-slide>

    
    
    <!-- Optional controls -->
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
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
