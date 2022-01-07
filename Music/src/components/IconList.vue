<template>
<!-- 首页中间小图标页面 -->
<div class="iconList">
  <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weinituijian"></use>
            </svg>
    <span>每日推荐</span>
    </div>
  <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sharpicons_radio"></use>
            </svg>
    <span>私人FM</span>
    </div>
  <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gedan"></use>
            </svg>
    <span>歌单</span>
    </div>
  <div class="iconItem">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihangbang1"></use>
          </svg>
    <span>排行榜</span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.iconList {
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    padding: 0.4rem;
    .iconItem  {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 1rem;
        height: 1rem;
    }
    span {
      font-size: 0.26rem;
    }
  }
}
</style>
