<template>
  <div class="work-item">
    <!-- 文章左上小三角 -->
    <div
      v-if="isOne"
      class="triangle-left"></div>

    <!-- 文章右上小三角 -->
    <div class="triangle-right"></div>

    <span>{{ username }}</span>

    <!-- 纯文本形式文章 -->
    <div
      class="works-title"
      v-if="!imgSrc">
      <p>{{ title }}</p>
      <span>{{ content }}</span>
    </div>

    <!-- 图片加文本形式文章 -->
    <div
      class="works-img"
      v-else>
      <img v-bind:src="imgSrc" />
      <div class="item-des">{{ content }}</div>
    </div>

    <div class="works-bot">
      <div>
        <div
          class="tags"
          v-if="tags"
          ><div class="tag"></div>
          <div
            v-for="(item, index) in tagArr"
            :key="index"
            >{{ item }}</div
          ></div
        >
      </div>
      <div class="operation"
        ><div>热度(39)</div>
        <div>评论</div>
        <div>分享</div>
        <div class="like"></div
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { toRefs, ref, computed } from 'vue'

  const props = defineProps({
    works: {
      type: Object,
      default: () => ({})
    },
    isOne: {
      type: Boolean,
      default: false
    }
  })

  const { username, imgSrc, title, content, tags } = toRefs(props.works)

  const isOne = ref(props.isOne)

  const tagArr = computed(() => {
    if (tags.value) {
      console.log(tags.value)
      return tags.value.split('&')
    } else {
      return null
    }
  })
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
    width: 510px;
    background-color: white;
    padding: 20px;
    margin-top: 25px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    &:hover .triangle-right {
      display: block;
    }
    .triangle-left {
      width: 0;
      height: 0;
      border-top: 25px solid white;
      border-left: 25px solid transparent;
      position: absolute;
      top: 0px;
      left: -25px;
      filter: drop-shadow(-1px 1px 1px #bebebe);
    }
    .triangle-right {
      display: none;
      width: 0;
      height: 0;
      border-top: 10px solid #ededef;
      border-right: 10px solid #ededef;
      border-bottom: 10px solid rgb(193, 193, 193);
      border-left: 10px solid rgb(193, 193, 193);
      position: absolute;
      top: 0px;
      right: 0px;
      &::before {
        content: '';
        width: 30px;
        height: 20px;
        position: absolute;
        top: -17px;
        right: -22px;
        transform: rotate(45deg);
        background-color: #ededef;
      }
    }

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
      justify-content: space-between;
      font-size: 12px;
      color: #888;
      cursor: pointer;
      .tags {
        display: flex;
        div {
          margin-right: 12px;
          &:hover {
            color: black;
          }
        }
        .tag {
          margin-top: 4px;
          background: url('../../../assets/img/icon24.png') no-repeat -1px -107px;
          width: 11px;
          height: 11px;
        }
      }
      .operation {
        display: flex;
        div {
          margin-left: 12px;
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
  }
</style>
