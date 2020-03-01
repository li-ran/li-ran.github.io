<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="homeToTab"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1" @click="tabChange">
          <i class="el-icon-edit"></i>
          <span slot="title">我的文章</span>
        </el-menu-item>
        <el-menu-item index="2" @click="tabChange">
          <i class="el-icon-document"></i>
          <span slot="title">学习笔记</span>
        </el-menu-item>
        <el-menu-item index="3" @click="tabChange">
          <i class="el-icon-camera-solid"></i>
          <span slot="title">摄影作品</span>
        </el-menu-item>
        <el-menu-item index="4" @click="tabChange">
          <i class="el-icon-video-camera-solid"></i>
          <span slot="title">电影推荐</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ['homeToTab'],
  methods: {
    tabChange (item) {
      this.$emit('childen-msg', item.index)
    }
  }
}
</script>
<style lang="stylus" scoped>
    .tac
      width 2rem
      background-color #000
      border-right 1px solid green

    ul
      border-right 1px solid green
      background-color #000
    .el-menu-item
      color #999

    .el-menu-item.is-active
      color: #409eff !important
</style>
