<template>
  <div class="PlayController">
    <div class="left" @click="show = !show">
      <img :src="playlist[playCurrentIndex].al.picUrl">
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
        <div class="tips">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
          <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
              <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg v-else class="icon" aria-hidden="true" @click="play">
              <use xlink:href="#icon-24gl-pause"></use>
          </svg>
           <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gf-playlistMusic"></use>
          </svg>
    </div>
    <PlayMusic :play="play" :paused="paused" @back="show = !show" v-if="show" :playDetail="playlist[playCurrentIndex]"></PlayMusic>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import PlayMusic from '@/components/PlayMusic.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // 判断是否正在播放
      paused: true,
      show: false
    }
  },
  components: {
    PlayMusic
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex'])
  },
  updated () {
    this.$store.dispatch('reqLyric', { id: this.playlist[this.playCurrentIndex].id })
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
        this.UpdateTime()
      } else {
        this.$refs.audio.pause()
        this.paused = true
        clearInterval(this.$store.state.id)
      }
    },
    UpdateTime () {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.PlayController {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 7.5rem;
  height: 1.2rem;
  background-color: #fff;
  border-top: 1px solid #ccc;
  .left {
    display: flex;
    padding: 0 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .content {
      padding: 0 0.2rem;
      .tips {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .right {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
