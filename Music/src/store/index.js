import { createStore } from 'vuex'
import api from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      name: "It Ain't Easy",
      id: 436016380,
      al: {
        id: 34886934,
        name: 'Broken People',
        pic: 109951163279695630,
        picUrl: 'http://p4.music.126.net/-SiL9ICq9f4GaeFEQ4zG-Q==/109951163279695638.jpg',
        pic_str: '109951163279695638',
        tns: []
      }
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account: {},
      userDetail: {}
    }
  },
  getters: {
    lyricList: function (state) {
      const arr = state.lyric.split(/\n/igs).map((item, i, arr) => {
        const min = parseInt(item.slice(1, 3))
        const sec = parseInt(item.slice(4, 6))
        const mill = parseInt(item.slice(7, 10))
        return {
          min,
          sec,
          mill,
          lyric: item.slice(12, item.length),
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000
        }
      })
      arr.forEach((item, i) => {
        if (i === 0) {
          item.pre = 0
        } else {
          item.pre = arr[i - 1].time
        }
      })
      return arr
    }
  },
  mutations: {
    setPlaylist: function (state, value) {
      state.playlist = value
    },
    pushPlaylist: function (state, value) {
      state.playlist.push(value)
    },
    setPlayIndex: function (state, value) {
      state.playCurrentIndex = value
    },
    setLyric: function (state, value) {
      state.lyric = value
    },
    setCurrentTime (state, value) {
      state.currentTime = value
    },
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric (content, payload) {
      const res = await api.getLyric(payload.id)
      content.commit('setLyric', res.data.lrc.lyric)
    },
    async login (content, payload) {
      const res = await api.phoneLogin(payload.phone, payload.password)
      if (res.data.code === 200) {
        content.state.user.isLogin = true
        content.state.user.account = res.data.account
        const userDetail = await api.userDetail(res.data.account.id)
        content.state.user.userDetail = userDetail.data
        // 将数据存放，可以一直保存
        localStorage.userData = JSON.stringify(content.state.user)
        console.log(userDetail)
        content.commit('setUser', content.state.user)
      }
      console.log(res)
      return res
    }
  },
  modules: {
  }
})
