<template>
  <div class="panel">
    <div
      @click="show('change_user_img')"
      class="user_img">
      <div v-if="userImg">
        <img
          :src="userImg"
          class="new-img" />
      </div>
    </div>
    <div
      @click="show('upload_txt')"
      class="send_text"></div>
    <div
      @click="show('upload_img')"
      class="send_img"></div>
    <div
      @click="show('changeimg')"
      class="send_music"></div>
    <div
      @click="show('changeimg')"
      class="send_video"></div>
    <div
      @click="show('changeimg')"
      class="send_article"></div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/user'
  import { ref, onMounted } from 'vue'

  const UserStore = useUserStore()

  const userImg = ref()

  onMounted(() => {
    userImg.value = UserStore.getUserImg
  })
</script>

<style lang="scss" scoped>
  .panel {
    background: url('../../../assets/img/PostBar.png') no-repeat;
    cursor: pointer;
    display: flex;
    margin-right: 25px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 30%);
    div {
      width: 110px;
      height: 110px;
    }
  }

  .user_img:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat 0 -132px;
  }

  .user_img {
    &:hover .new-img {
      display: none;
    }

    .new-img {
      width: 110px;
      height: 110px;
    }
  }

  .send_text:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat -110px -132px;
  }

  .send_img:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat -220px -132px;
  }

  .send_music:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat -330px -132px;
  }

  .send_video:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat -440px -132px;
  }

  .send_article:hover {
    background: url('../../../assets/img/PostBar.png') no-repeat -550px -132px;
  }
</style>
