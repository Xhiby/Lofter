<template>
  <div class="work-item">
    <span>{{ username }}</span>

    <div
      class="works-title"
      v-if="!imgSrc">
      <p>{{ title }}</p>
      <span>{{ content }}</span>
    </div>

    <div
      class="works-img"
      v-else>
      <img v-bind:src="imgSrc" />
      <div class="item-des">{{ content }}</div>
    </div>

    <div class="works-bot">
      <div>热度(39)</div>
      <div>评论</div>
      <div>分享</div>
      <div>推荐</div>
      <div class="like"></div>
    </div>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    works: {
      type: Object,
      default: () => ({})
    }
  })

  const { username, imgSrc, title, content } = toRefs(props.works)
</script>

<style lang="scss" scoped>
  span {
    font-size: 12px;
    color: #888;
  }

  img {
    width: 150px;
    margin-right: 20px;
  }

  .work-item {
    width: 545px;
    background-color: white;
    padding: 20px;
    margin-top: 25px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    .works-title {
      p {
        font-size: 18px;
      }
      span {
        font-size: 14px;
        color: black;
      }
    }

    .works-img {
      margin-top: 20px;
      display: flex;
      div {
        font-size: 14px;
      }
    }

    .works-bot {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      div {
        margin-left: 12px;
        font-size: 12px;
        color: #888;
        cursor: pointer;
        &:hover {
          color: black;
        }
      }
      .like {
        background: url('../../../assets/img/Sprite3.png') no-repeat -83px -2761px;
        width: 16px;
        height: 15px;
        margin-top: 2px;
        &:hover {
          background: url('../../../assets/img/Sprite3.png') no-repeat -83px -2724px;
        }
      }
    }
  }
</style>
