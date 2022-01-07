<template>
<!-- 首页头部页面 -->
  <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn" @click="$router.push('/personalCenter')">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topRigt" @click="$router.push('/search')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
</template>

<script>
export default {
  name: 'topNav'
}
</script>

<style lang="less" scoped>
  .topNav {
    display: flex;
    width: 7.5rem;
    height:1rem;
    padding: 0.3rem;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .topCenter {
      display: flex;
      width: 4.5rem;
      justify-content: space-around;
      .active {
        font-weight: 900;
      }
    }
  }
</style>
