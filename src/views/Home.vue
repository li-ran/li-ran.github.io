<template>
  <div class="home">
    <HelloWorld msg="Welcome to Liran`s blog "/>
    <div class="container">
      <el-row :gutter="10">
        <el-col  :span="24" :xs="24" :sm="0" :md="0" :lg="0">
          <div class="grid-content">
             <div class="all-derectories list-container">
               <ul>
                <router-link :to="{name:'Main',params:{id:'1'}}"><li>我的文章</li></router-link>
                <router-link :to="{name:'Main',params:{id:'2'}}"><li>学习笔记</li></router-link>
                <router-link :to="{name:'Main',params:{id:'3'}}"> <li>摄影作品</li></router-link>
                <router-link :to="{name:'Main',params:{id:'4'}}"><li>电影推荐</li></router-link>
               </ul>
              <img alt="all-derectories-img" src="../assets/10.jpg">
            </div>
          </div>
        </el-col>
        <el-col  :span="24" :xs="0" :sm="12" :md="12" :lg="6" :xl="6">
          <router-link :to="{name:'Main',params:{id:'1'}}">
              <div class="grid-content">
                <div class="my-articles list-container">
                  <span>我的文章</span>
                  <img alt="articles" src="../assets/5.jpg">
                </div>
              </div>
          </router-link>
        </el-col>
        <el-col  :span="24" :xs="0" :sm="12" :md="12" :lg="6" :xl="6">
          <router-link :to="{name:'Main',params:{id:'2'}}">
              <div class="grid-content">
                <div class="learning-notes list-container">
                  <span>学习笔记</span>
                  <img alt="learning notes" src="../assets/10.jpg">
                </div>
              </div>
           </router-link>
        </el-col>
        <el-col  :span="24" :xs="0" :sm="12" :md="12" :lg="6" :xl="6">
          <router-link :to="{name:'Main',params:{id:'3'}}">
              <div class="grid-content">
                <div class="photograph-works list-container">
                  <span>摄影作品</span>
                  <img alt="photograph" src="../assets/17.jpg">
                </div>
              </div>
          </router-link>
        </el-col>
         <el-col  :span="24" :xs="0" :sm="12" :md="12" :lg="6" :xl="6">
           <router-link :to="{name:'Main',params:{id:'4'}}">
              <div class="grid-content">
                <div class="movie-recomm list-container">
                  <span>电影推荐</span>
                  <img alt="movie recommendation" src="../assets/18.jpg">
                </div>
              </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>
<style lang="stylus" scoped>
.home
  overflow hidden

.all-derectories
  position relative
  overflow hidden

.all-derectories-img
  width max-width 100% !important

.all-derectories ul
  position absolute
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);

.all-derectories ul li
  list-style none
  font-size 0.5rem
  cursor pointer
  line-height 1.5rem
  background-image -webkit-linear-gradient(left, #2d8cf0, #fff 25%, #2d8cf0 50%, #fff 75%, #2d8cf0)
  -webkit-text-fill-color transparent
  -webkit-background-clip text;
  -webkit-background-size 200% 100%
  -webkit-animation masked-animation 2s infinite linear
  text-decoration:underline

.list-container
  position relative
  cursor pointer
.list-container img
  width 100%

.list-container span
  position absolute
  color white
  top 50%
  left 50%
  transform: translate(-50%, -50%);
  font-size 0.8rem
  background-image -webkit-linear-gradient(left, #2d8cf0, #fff 25%, #F0F8FF 50%, #fff 75%, #2d8cf0)
  -webkit-text-fill-color transparent
  -webkit-background-clip text;
  -webkit-background-size 200% 100%
  -webkit-animation masked-animation 2s infinite linear
  text-decoration:underline
  cursor pointer

@-webkit-keyframes masked-animation
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
  .el-row
    margin 0 !important
</style>
