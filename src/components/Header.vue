<template>
  <div class="header">
    <div class="left">
        <div class="demo-basic--circle">
            <div class="block"><el-avatar :src="circleUrl" :key="circleUrl"></el-avatar></div>
            <span class="name">LIRAN</span>
        </div>
    </div>
    <div class="right">
        <span class="eamil">联系方式：liran1992@vip.163.com</span>
        <router-link :to="{name:'Home'}"><span class="return">Home</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      circleUrl: '../assets/logo.jpg'
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
    background-color #000
    font-size 0.3rem
    border-bottom 1px solid green
    height 0.6rem
    line-height 0.6rem
.el-avatar
    width 0.5rem
    height 0.5rem

.demo-basic--circle
    text-align left
    margin-top 0.04rem
    display flex
.left
  float left
  height 0.6rem

.right
  float right
  height 0.6rem

.name
  font-size 0.3rem
  color yellow
  margin-left 0.2rem

.eamil
  font-size 0.1rem
  color green
  margin-right 0.2rem

.return
  color yellow
  font-size 0.2rem
  text-decoration underline
  margin-right 0.1rem
  cursor pointer
</style>
