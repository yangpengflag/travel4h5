<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.4375%
    .item-img
      width: 100%
  .item-info
    min-width: 0
    flex: 1
    padding:  .14rem .2rem .2rem .2rem
    .item-title
      ellipsis()
      padding-right: 1.4rem
      color: #212121
      font-size: .28rem
      line-height: .48rem
    .item-desc
      ellipsis()
      line-height: .42rem
      font-size: .24rem
      color: #616161
</style>
