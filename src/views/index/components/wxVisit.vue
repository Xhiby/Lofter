<template>
  <div class="visit">
    <p class="title">使用手机访问 LOFTER</p>
    <div class="dlcontwrap">
      <div class="dlcont">
        <img src="../../../assets/img/download/app_android.jpg" />
        <div>
          <p>安卓APP下载</p>
          <span>扫码下载安卓LOFTER APP</span>
        </div>
      </div>
      <div class="dlcont">
        <img src="../../../assets/img/download/mp_weixin.jpg" />
        <div>
          <p>微信小程序</p>
          <span>使用微信扫码打开LOFTER微信小程序</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  span {
    display: block;
    color: #999999;
    transform: scale(0.8);
  }

  p {
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
  .visit {
    background-color: #f3f3f3;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-size: 12px;
    .title {
      margin: 10px;
    }
    .dlcontwrap {
      display: grid;
      gap: 10px;
    }

    .dlcont {
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 10px;
      background-color: white;
      img {
        width: 100%;
        height: 100%;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
    }
  }
</style>
