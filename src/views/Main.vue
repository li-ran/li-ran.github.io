<template>
    <div class="box">
      <Header></Header>
      <div class="container">
        <Nav @childen-msg="childernMsg" :homeToTab="this.$route.params.id"></Nav>
        <Articles v-if="message==1" :toArticleChildren="articleBool" @fromArtilesChildren="fromArtilesChildren"></Articles>
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
      articleBool: false
    }
  },
  created: function () {
    this.getRouteParams()
  },
  methods: {
    childernMsg (msg) {
      this.message = msg
      this.articleBool = true
      console.log(this.articleBool)
      this.$emit('toArticleChildren')
    },
    fromArtilesChildren (msgBool) {
      this.articleBool = false
      this.$emit('toArticleChildren')
    },
    getRouteParams () {
      this.message = Number(this.$route.params.id)
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
