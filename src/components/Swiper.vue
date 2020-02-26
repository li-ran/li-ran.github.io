<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/swiper01.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/swiper02.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/swiper03.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/swiper04.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/swiper05.jpg" alt=""></div>
    </div>
    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>
<script>
import Swiper from 'swiper'
import '../../node_modules/swiper/css/swiper.min.css'
export default {
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
    /* eslint-disable no-new */
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        speed: 600,
        direction: 'horizontal',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 'auto'
      })
    }
  }
}
</script>
<style lang="stylus">
@import "../../node_modules/swiper/css/swiper.css"
.swiper-container,.swiper-wrapper,.swiper-slide
  height 4rem
  color #fff
.swiper-container,.swiper-wrapper,.swiper-slide
  width 100% !important
.swiper-container::-webkit-scrollbar
  width 0
  height 0
  color transparent
  display none

.swiper-container img
  width 100%
  height 4rem

.swiper-pagination-bullet-active {
        background-color: white
}
</style>
