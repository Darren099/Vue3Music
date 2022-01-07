<template>
<!-- 歌单页面 -->
  <div class="listview">
    <ListViewTop :playlist="state.playlist"></ListViewTop>
    <PlayList :playlist="state.playlist"></PlayList>
  </div>
</template>

<script>
import ListViewTop from '@/components/ListViewTop.vue'
import PlayList from '@/components/PlayList.vue'
import { getPlayListDetail } from '@/api/index.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store/index.js'

export default {
  setup () {
    const route = useRoute()
    const state = reactive({
      list: [],
      playlist: {
        creator: [],
        tracks: []
      }
    })
    onMounted(async () => {
      const id = route.query.id
      const res = await getPlayListDetail(id)
      state.playlist = res.data.playlist
      store.commit('setPlaylist', state.playlist.tracks)
      console.log(res)
    })
    return {
      state
    }
  },
  components: {
    ListViewTop,
    PlayList
  }
}
</script>

<style>

</style>
