<template>
  <div class="nav_w">
    <div class="page nav">
      <router-link to="/index">LOFTER</router-link>
      <router-link to="/index">首页</router-link>
      <router-link to="/more">发现</router-link>
      <router-link to="/index">APP</router-link>
      <input
        type="text"
        placeholder="搜索文章" />
      <router-link to="/setting">设置</router-link>
      <router-link to="/exit">登出</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .nav_w {
    width: 100%;
    height: 64px;
    margin-bottom: 30px;
    background-color: black;
    .nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: #999999;
        font-weight: bold;
        font-size: 16px;
      }

      a:hover {
        color: white;
      }

      input {
        height: 32px;
        width: 210px;
        padding-left: 20px;
        border: 0;
        border-radius: 25px;
      }
    }
  }
</style>
