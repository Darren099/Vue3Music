<template>
<!-- 首页轮播图页面 -->
     <van-swipe
      class="my-swipe"
      :autoplay="1500"
      indicator-color="pink"
      lazy-render>
  <van-swipe-item v-for="(item, i) in images" :key="i">
    <img :src="item.pic">
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { getSwipe } from '@/api/index.js'

export default {
  name: 'Swipe',
  data () {
    return {
      images: [
        { pic: require('@/assets/images/discuss_goods_1.jpg') },
        { pic: require('@/assets/images/discuss_goods_2.jpg') }
      ]
    }
  },
  async mounted () {
    const { data: res } = await getSwipe(1)
    this.images = res.banners
  }
}
</script>

<style lang="less" scoped>
img {
  width: 7.5rem;
  height: 2.6rem;
}
</style>
