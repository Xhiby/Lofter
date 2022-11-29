<template>
  <div class="index">
    <top-nav></top-nav>
    <div class="page">
      <div>
        <send-panel></send-panel>
        <all-works
          v-for="(item, index) in allWorksData"
          :key="index"
          :allWorksData="item"></all-works>
      </div>
      <div>
        <user-panel></user-panel>
        <works-manage></works-manage>
        <wx-visit></wx-visit>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import * as apis from '@/apis/index'

  import topNav from '../../components/topNav.vue'
  import sendPanel from './components/sendPanel.vue'
  import userPanel from './components/userPanel.vue'
  import allWorks from './components/allWorks.vue'
  import worksManage from './components/worksManage.vue'
  import wxVisit from './components/wxVisit.vue'

  // 传给allWorks组件的数据
  const allWorksData = ref(null)

  onMounted(() => {
    getArtList()
  })

  const getArtList = () => {
    apis
      .getArtList()
      .then((res) => {
        if (res.data.status === 'OK') {
          allWorksData.value = res.data.data
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {})
  }

  const userLogin = () => {}
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
