<template>
<!-- 歌单歌曲列表页面 -->
  <div class="playList">
    <div class="playList-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length}}首)</div>
        </div>
      </div>
      <div class="btn">
        + 收藏 ({{ changeValue(playlist.subscribedCount) }})
      </div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item,i) in playlist.tracks" :key="i" @click="setPlayIndex(i)">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="author">
              {{ item.ar[0].name }} - {{ item.al.name }}
              </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang2"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Androidgengduo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['playlist'],
  methods: {
    changeValue: function (num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'
      } else if (num > 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    },
    ...mapMutations(['setPlayIndex'])
  }
}
</script>

<style lang="less" scoped>
.playList {
  width: 7.5rem;
  margin-top: 0.3rem;
  padding: 0 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .playList-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      .title {
        font-size: 0.3rem;
        font-weight: 900;
      }
      .num {
        font-size: 0.3rem;
        color: #ccc;
      }
      .text {
        display: flex;
        margin-left: 0.15rem;
        align-items: center;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      height: 0.75rem;
      padding: 0.1rem;
      font-size: 0.29rem;
      line-height: 0.6rem;
      color: #fff;
      background-color: red;
      border-radius: 0.4rem;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      height: 1.5rem;
      .left {
        display: flex;
        align-items: center;
        .index {
          width: 0.4rem;
        }
        .content {
          margin-left: 0.4rem;
        }
        .title {
          margin-bottom: 0.1rem;
          font-size: 0.3rem;
          font-weight: 900;
          color: #000;
        }
        .author {
          color: #666;
        }
      }

      .right {
        display: flex;
        align-items: center;
        .icon {
          margin: 0 0.2rem;
        }
      }
    }
  }
}
</style>
