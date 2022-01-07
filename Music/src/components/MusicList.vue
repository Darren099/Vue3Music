<template>
<!-- 首页歌单区域页面 -->
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicImgsList">
      <router-link :to="{path:'/ListView',query:{id:item.id}}" class="imgbox" v-for="(item,i) in state.list" :key="i">
        <img :src="item.picUrl" alt="item.name">
        <div class="name">{{ item.name }}</div>
        <div class="count">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
          </svg>
          <span>{{ changeValue(item.playCount) }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/api/index.js'
import { reactive, onMounted } from 'vue'

export default {
  setup () {
    const state = reactive({ MusicList: [] })
    function changeValue (num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'
      } else if (num > 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    }
    onMounted(async () => {
      const { data: res } = await getMusicList(10)
      // console.log(res)
      state.list = res.result
    })
    return {
      state, changeValue
    }
  }
}

/*
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    const { data: res } = await getMusicList(10)
    console.log(res)
    this.list = res.result
  },
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
    }
  }
}
*/
</script>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0 0.4rem;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      width: 1.2rem;
      height: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      text-align: center;
      line-height: 0.5rem;
    }
  }
  .musicImgsList {
    display: flex;
    width: 100%;
    height: 3rem;
    overflow-x: auto;
    .imgbox {
      position: relative;
      margin-right: 0.2rem;
        img {
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 0.15rem;
        background-color: skyblue;
      }
      .name {
        height: 0.8rem;
        width: 100%;
        font-size: 0.24rem;
        line-height: 0.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .count {
        position:absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: #ccc;
        display: flex;
        align-items: center;
        .icon {
          fill: #ccc;
        }
      }
    }
  }
}

// 隐藏滚动条
.musicImgsList::-webkit-scrollbar {
  display: none;
}
</style>
