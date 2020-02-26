<template>
  <div class="content">
      <ul>
          <li>沼内种莲，藕白花红叶绿</li>
          <li>田中插稻，秧青苗翠谷黄</li>
      </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .content
      height 100%
      width 2rem
      border 1px solid green
      background-color #000

    .content ul
      display flex
      flex-direction row
      padding 0.1rem

    .content ul li
       font-size 0.3rem
       color white
       writing-mode vertical-lr
       writing-mode tb-
       width 50%
       word-spacing 1.5em
       letter-spacing 0.3em
       word-break break-all
       display flex
       flex-direction column
       justify-content center
</style>
