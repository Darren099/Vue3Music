<template>
<!-- 播放歌曲的页面 -->
  <div class="playMusic">
    <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiangzuojiantou"></use>
          </svg>
      </div>
      <div class="center">
        <div class="title">{{ playDetail.al.name }}</div>
        <div class="author"></div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
          </svg>
      </div>
    </div>
    <div class="playContent" v-if="isLyric" @click="isLyric = !isLyric">
      <img class="needle" :class="{active:!paused}" src="@/assets/images/needle-ip6.png" alt="">
      <img class="disc" src="@/assets/images/disc-ip6.png" alt="">
      <img class="playImg" :src="playDetail.al.picUrl">
    </div>
    <div class="playLyric" v-else @click="isLyric = !isLyric" ref="playLyric">
      <p :class="{active:(currentTime * 1000 >= item.pre&&currentTime * 1000 < item.time)}" v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p>
    </div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gl-repeat2"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goplay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-24gl-pause"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goplay(1)" >
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlistMusic"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['playDetail', 'paused', 'play'],
  data () {
    return {
      // 判断是否显示歌词
      isLyric: true
    }
  },
  computed: {
    ...mapState(['lyric', 'currentTime', 'playlist', 'playCurrentIndex'])
  },
  watch: {
    currentTime: function (newValue) {
      console.log(newValue)
      console.log([this.$refs.playLyric])
      const p = document.querySelector('p.active')
      if (p) {
        this.$refs.playLyric.scrollTop = p.offsetTop
        console.log([p])
      }
    }
  },
  methods: {
    goplay: function (val) {
      const i = this.playCurrentIndex + val
      if (i < 0) {
        this.i = this.playlist.length - 1
      } else if (i === this.playlist.length) {
        this.i = 0
      }
      this.$store.commit('setPlayIndex', i)
    }
  }
}
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .playTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    padding: 0 0.4rem;
    z-index: 999;
    .center {
      .title {
        width: 5rem;
      }
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5em;
    .needle {
      width:2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      top: 1rem;
      transform-origin: 0.3rem 0;
      transform: rotate(-10deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle.active{
      width:2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(15deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc {
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem) ;
      top: 3.5rem;
    }
    .playImg {
      width: 3.45rem;
      height: 3.45rem;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 1.75rem);
      top: 4.54rem;
    }
  }
  .playFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 7.5rem;
    height: 1.5rem;
    padding: 0 0.4rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #ccc;
    }
    .icon.play {
      width: 0.85rem;
      height: 0.85rem;
      fill: #ccc;
    }
  }
  .playLyric {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    padding: 0.2rem 0;
    left: 0;
    top: calc(50% - 4rem);
    overflow: scroll;
    text-align: center;
    color: #fff;
    .active {
      color: red;
    }
  }
}
</style>
