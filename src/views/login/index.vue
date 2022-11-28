<template>
  <div class="login">
    <p>登录</p>
    <p>
      <button @click="userLogin">Login</button>
    </p>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/user'
  import { useRouter } from 'vue-router'

  const UserStore = useUserStore()
  const router = useRouter()

  const userLogin = () => {
    UserStore.setUserInfo()
    router.push('/index')
  }
</script>

<style lang="scss" scoped>
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
