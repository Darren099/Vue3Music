<template>
<!-- 歌单详情的头部区域页面 -->
  <div class="listviewtop">
    <img class="bg" :src="playlist.coverImgUrl">
    <div class="listviewtopnav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangzuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon serach" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Androidgengduo"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl">
        <div class="count">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
          </svg>
          <span>{{ changeValue(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header">
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playlist.description}}
        </div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-duoxuankuang"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="less" scoped>
.listviewtop {
  width: 7.5rem;
  padding: 0 0.4rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .listviewtopnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    font-size: 0.35rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .title {
      margin-left: 0.4rem;
    }
    .serach {
      margin-right: 0.5rem;
    }
  }
  .back,.right {
    display: flex;
    color: #fff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    .contentLeft {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }
      .count {
        position:absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        font-weight: 900;
        color: #aaa;
        display: flex;
        align-items: center;
        .icon {
          fill: #ccc;
        }
      }
    }
    .contentRight {
      width: 3.5rem;
      h3 {
        font-size: 0.335rem;
        color: #fff;
      }
      .author {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        img.header{
          width: 0.6rem;
          height: 0.6rem;
          margin-right: 0.2rem;
          border-radius: 50%;
        }
        span {
        color: #fff;
        font-size: 0.26rem;
      }
      }
      .description {
        font-size: 0.24rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-around;
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width:0.6rem;
        height: 0.6rem;
        fill:#fff;
      }
      span {
        font-size: 0.28rem;
        padding-top: 0.1rem;
      }
    }
  }
}
</style>
