<template>
   <div class="center">
      <div class="catalog" v-if='details==1'>
          <Swiper :data="data" @fromArticlesChildre="fromChildrenData"></Swiper>
          <el-card class="box-card">
            <div @click="toDetails($event)" v-for="(item, index) in data" :key="item.id" ref="toDetails" :id="item._id" class="text item">{{(index+1) +"、 "}} {{item.title}}</div>
          </el-card>
      </div>
      <ArticlesDetails v-if='details==0' :showDetails="currId"></ArticlesDetails>
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
  inject: ['reload'],
  props: ['toArticleChildren'],
  data: function () {
    return {
      data: [],
      details: 1,
      tabFlag: this.toArticleChildren,
      currId: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    toDetails (e) {
      this.currId = e.target.getAttribute('id')
      this.details = 0
      this.$emit('changeNavBoolean', false)
    },
    getData () {
      var vm = this
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:99/articles/outline',
        data: '',
        dataType: 'JSON',
        success: function (data) {
          vm.data = data.data
          console.log(vm.data)
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    fromChildrenData (id) {
      this.currId = id
      this.details = 0
      this.$emit('changeNavBoolean', false)
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
