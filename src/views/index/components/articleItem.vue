<template>
  <div class="artitem">
    <img
      class="userimg"
      v-bind:src="userimg" />
    <div class="itemcont">
      <span class="itemname">{{ username }}</span>

      <div
        v-if="imgsrc ? imgsrc : null"
        class="itemdraw">
        <img v-bind:src="imgsrc ? imgsrc : null" />
        <p class="itemdes">{{ content }}</p>
      </div>
      <div
        v-if="title"
        class="itemtit">
        <p>{{ title }}</p>
        <span>{{ content }}</span>
      </div>

      <div class="iitembot">
        <div>
          <span>热度(39)</span>
          <span>评论</span>
          <span>分享</span>
          <span>推荐</span>
          <div class="iitemlike"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    artInfo: {
      type: Object,
      default: () => ({})
    }
  })

  const { artInfo } = toRefs(props)
</script>

<style lang="scss" scoped>
  span {
    font-size: 0.6em;
    color: #888;
  }

  .artitem {
    display: flex;
    margin-top: 25px;
    .userimg {
      width: 50px;
      height: 50px;
      margin-right: 30px;
    }
    .itemcont {
      width: 545px;
      float: right;
      background-color: white;
      padding: 20px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
      img {
        width: 150px;
        float: left;
      }
      .itemdraw {
        margin-top: 20px;
        .itemdes {
          display: inline;
          margin-left: 20px;
          font-size: 0.8em;
        }
      }
      .itemtit {
        margin-top: 20px;
        p {
          margin-bottom: 10px;
          font-size: 0.8em;
        }
      }
      .iitembot {
        width: 100%;
        float: right;
        margin-top: 20px;
        span {
          margin-right: 10px;
          &:hover {
            color: black;
          }
        }
        div:first-child {
          float: right;
          margin-right: 20px;
        }
        .iitemlike {
          background: url('../../../assets/img/Sprite3.png') no-repeat -83px -2761px;
          width: 16px;
          height: 15px;
          float: right;
          margin-top: 5px;
          &:hover {
            background: url('../../../assets/img/Sprite3.png') no-repeat -83px -2724px;
          }
        }
      }
    }
  }
</style>
