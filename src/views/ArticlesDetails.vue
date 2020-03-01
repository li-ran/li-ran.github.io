<template>
   <div class="content">
      <div class="title">{{title}}</div>
      <hr/>
      <div class="container" v-html="content"></div>
      <hr/>
      <MsgBoard :parentData="msgFlag" :detailsId="detailsId"></MsgBoard>
   </div>
</template>
<script>
// @ is an alias to /src
import MsgBoard from '@/components/MsgBoard.vue'
export default {
  name: 'ArticleDetails',
  components: {
    MsgBoard
  },
  props: ['showDetails'], // 显示哪个文章
  data () {
    return {
      title: '',
      content: '',
      msgFlag: 1, // 文章留言
      detailsId: this.showDetails
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      var vm = this
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:99/articles/details?id=' + this.showDetails,
        dataType: 'JSON',
        success: function (res) {
          vm.title = res.data.title
          vm.content = res.data.content.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp')
        }
      })
    }
  }

}
</script>
<style lang="stylus" scoped>
.content
  color white
.content .title
  font-size 0.36rem

.content .container
  font-size 0.16rem
  text-align left

</style>
