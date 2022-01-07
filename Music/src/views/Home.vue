<template>
<!-- 首页 -->
  <div class="home">
    <TopNav></TopNav>
    <Swipe></Swipe>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Swipe from '@/components/Swipe.vue'
import IconList from '@/components/IconList.vue'
import MusicList from '@/components/MusicList.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    Swipe,
    IconList,
    MusicList
  }
}
</script>

<style lang="less" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: skyblue;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
