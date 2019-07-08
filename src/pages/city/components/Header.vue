<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-header">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    position: relative
    height: .86rem
    line-height: .86rem
    overflow: hidden
    text-align: center
    color: #ffff
    background: $bgColor
    .back-header
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      color: #ffff
      font-size: .4rem
</style>
