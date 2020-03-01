<template>
    <div class="box">
      <Header></Header>
      <div class="container">
        <Nav @childen-msg="childernMsg" :homeToTab="message"></Nav>
        <Articles v-if="message==1 && isRouterAlive" :toArticleChildren="articleBool" @changeNavBoolean="fromArtilesChildren"></Articles>
        <Notes v-if="message==2" :toChildren="message"></Notes>
        <Camera v-if="message==3" :toChildren="message"></Camera>
        <Movies v-if="message==4" :toChildren="message"></Movies>
        <!-- <Right></Right> -->
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Articles from './Articles.vue'
import Notes from './Notes.vue'
import Camera from './Camera.vue'
import Movies from './Movies.vue'
export default {
  name: 'Main',
  provide () {
    return {
      reload: this.reload
    }
  },
  components: {
    Header,
    Nav,
    Articles,
    Notes,
    Camera,
    Movies
  },
  data () {
    return {
      message: 1,
      articleBool: false,
      isRouterAlive: true
    }
  },
  created: function () {
    this.getRouteParams()
  },
  methods: {
    childernMsg (msg) {
      this.message = msg
      this.articleBool = true
      this.$emit('toArticleChildren')
    },
    fromArtilesChildren (msgBool) {
      this.articleBool = false
      this.$emit('toArticleChildren')
    },
    getRouteParams () {
      this.message = this.$route.params.id || '1'
    },
    reload: function () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box
    height 100%

  .container
    display flex
    flex-direction row
    justify-content space-between
</style>
