<template>
  <div class="container">
    <div class="msg-title">留言区</div>
    <ul class="msg-list" id="msgList">
        <li v-for="item in data" :key="item._id">
            <div class="name">{{item.user}}{{" (" +item.time+")"}}</div>
            <input type="text" disabled :value="item.msg">
        </li>
    </ul>
    <div class="message">
        <ul>
            <li>
                <div>请输入您的名字</div>
                <input type="text" v-model="name"/>
                <div>请输入您的联系方式</div>
                <input type="text" v-model="contactWay"/>
                <div>请输入您的留言</div>
                <textarea name="" id="" cols="30" rows="10" v-model="messageInfo"></textarea>
            </li>
            <li><button @click="commitMsg()">提交</button></li>
        </ul>
    </div>
  </div>
</template>
<script>
import { timeFormat } from '../../public/timeFormat'
export default {
  props: ['parentData', 'detailsId'],
  data: function () {
    return {
      articlesId: this.detailsId,
      name: '',
      time: '',
      contactWay: '',
      messageInfo: '',
      propValue: this.parentData,
      data: []

    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    commitMsg: function () {
      var currentTime = timeFormat()
      var url = ''
      if (this.propValue === 1) {
        url = 'http://127.0.0.1:99/articles/message'
      }
      var vm = this
      $.ajax({
        type: 'POST',
        url: url,
        data: {
          articlesId: this.detailsId,
          user: this.name,
          time: currentTime,
          contactWay: this.contactWay,
          msg: this.messageInfo
        },
        dataType: 'JSON',
        success: function (res) {
          if (res.code === 0) {
            alert('留言成功！')
            vm.name = ''
            vm.contactWay = ''
            vm.messageInfo = ''
            vm.getData()
          }
        }
      })
    },
    getData () {
      var vm = this
      var url = ''
      console.log(vm.articlesId)
      if (this.propValue === 1) {
        url = 'http://127.0.0.1:99/articles/message?articlesId=' + vm.detailsId
      }
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'JSON',
        success: function (res) {
          console.log(res)
          if (res.code === 0) {
            vm.data = res.msg
            console.log(vm.data)
          }
        }
      })
    }

  }
}
</script>
<style lang="stylus" scoped>
.msg-title
  color white
  font-size 0.18rem
  text-align left
  margin-bottom 0.14rem
  background-image -webkit-linear-gradient(left, #2d8cf0, #fff 25%, #2d8cf0 50%, #fff 75%, #2d8cf0)
  -webkit-text-fill-color transparent
  -webkit-background-clip text;
  -webkit-background-size 200% 100%
  -webkit-animation masked-animation 2s infinite linear

@-webkit-keyframes masked-animation
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
.msg-list li
  text-align left
.msg-list li input{
  width 100%
  height 0.2rem
  padding 0.05rem 0.1rem
  border none
  border-radius 0.03rem
  margin 0.05rem 0 0.1rem 0
}
.msg-list li .name
  color yellow

.message
  margin-top 0.2rem

.message ul li
  text-align left
  font-size 0.14rem

.message ul li input
  width 1.6rem
  border-radius 0.03rem
  padding 0.05rem 0.1rem
  border:none
  margin 0.05rem 0 0.1rem 0

.message ul li textarea
  width 1.6rem
  border-radius 0.03rem
  padding 0.05rem 0.1rem
  border:none
  margin 0.05rem 0 0.1rem 0
  height 0.3rem

.message ul li button
  width 0.56rem
  height 0.28rem
  background-color #000;
  color white
  border-radius 0.03rem
  border 1px solid white
</style>
