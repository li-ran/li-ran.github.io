<template>
  <div class="container">
    <div class="msg-title">留言区</div>
    <ul class="msg-list" id="msgList">
        <!-- <li>
            <div class="name">liran</div>
            <textarea  disabled>我是中国人，我深情地爱着我的祖国！</textarea>
        </li>
        <li>
            <div class="name">liran</div>
            <textarea  disabled>我是中国人，我深情地爱着我的祖国！</textarea>
        </li> -->
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
            <li><button @click="commitMsg">提交</button></li>
        </ul>
    </div>
  </div>
</template>
<script>
import { timeFormat } from '../../public/timeFormat'
export default {
  data: function () {
    return {
      name: '',
      time: '',
      contactWay: '',
      messageInfo: ''

    }
  },
  methods: {
    commitMsg: function () {
      var currentTime = timeFormat()
      var html = `<div class="name" style="font-size:0.16rem;text-align:left;color:yellow">${this.name} ${' ( ' + currentTime + ' ) '}</div>
            <textarea style="width:100%;height:0.2rem;line-height:0.2rem;resize:none;border-radius:0.05rem;margin-bottom:0.14rem" disabled>${this.messageInfo}</textarea>`
      var li = document.createElement('li')
      li.style.textAlign = 'left'
      li.innerHTML = html
      var msgUl = document.querySelector('#msgList')
      var lis = document.querySelector('#msgList').children
      if (lis) {
        msgUl.insertBefore(li, lis[0])
      } else {
        msgUl.append(li)
      }
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
