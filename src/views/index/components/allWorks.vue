<template>
  <div class="all-works">
    <img
      class="user-img"
      :src="allWorksData.userImg" />
    <div>
      <works-item
        v-for="(item, index) in allWorksData.works"
        :key="index"
        :works="item"
        :isOne="index === 0"></works-item>
    </div>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'

  import worksItem from './worksItem.vue'

  const props = defineProps({
    allWorksData: {
      type: Object,
      default: () => ({})
    }
  })

  const { allWorksData } = toRefs(props)
</script>

<style lang="scss" scoped>
  span {
    font-size: 0.6em;
    color: #888;
  }

  .all-works {
    display: flex;
    .user-img {
      width: 65px;
      height: 65px;
      margin-top: 25px;
      margin-right: 45px;
    }
  }
</style>
