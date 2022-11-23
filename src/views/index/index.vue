<template>
  <div class="index">
    <top-nav></top-nav>
    <div class="page">
      <div><send-panel></send-panel></div>
      <div><user-panel></user-panel></div>
    </div>
  </div>
</template>

<script setup>
  import topNav from '../../components/topNav.vue'
  import sendPanel from './components/sendPanel.vue'
  import userPanel from './components/userPanel.vue'
</script>

<style lang="scss" scoped>
  .index {
    background-color: #ededef;
    .page {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
