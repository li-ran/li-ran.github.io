<template>
   <div class="center">
      <div class="catalog" v-show='details==1'>
          <Swiper></Swiper>
          <el-card class="box-card">
            <div @click="toDetails" v-for="o in 10" :key="o" class="text item">{{o + '、 '+'我的文章 ' + o }}</div>
          </el-card>
      </div>
      <ArticlesDetails v-show='details==0'></ArticlesDetails>
    </div>
</template>
<script>
import Swiper from '@/components/Swiper.vue'
import ArticlesDetails from './ArticlesDetails.vue'
export default {
  name: 'Main',
  components: {
    Swiper,
    ArticlesDetails
  },
  props: ['toArticleChildren'],
  data: function () {
    return {
      details: 1,
      tabFlag: this.toArticleChildren
    }
  },
  methods: {
    toDetails () {
      this.details = 0
      this.$emit('fromArtilesChildren', false)
    }
  },
  watch: {
    tabFlag (newVal) {
      this.details = newVal === true ? 1 : 0
      console.log(newVal, '这里是监听')// 这个参数就是传来的所有值
    },
    toArticleChildren (newVal) {
      this.tabFlag = newVal
      console.log(newVal, '这里是监听')// 这个参数就是传来的所有值
    }
  }
}
</script>>
<style lang="stylus" scoped>
  .center
    width calc(100% - 2rem)
    min-width 3rem
    margin 0.1rem
    margin-bottom 0

  .el-card
    background-color #303133
    color green
    font-size 0.2rem

  .el-card .text
    text-align left
    line-height 0.3rem
    text-decoration underline
    cursor pointer
</style>
