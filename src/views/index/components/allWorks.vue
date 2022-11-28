<template>
  <div class="all-works">
    <img
      class="user-img"
      :src="allWorksData.userImg" />
    <div>
      <works-item
        v-for="item in allWorksData.works"
        :works="item"></works-item>
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
      width: 50px;
      height: 50px;
      margin-top: 25px;
      margin-right: 25px;
    }
  }
</style>
