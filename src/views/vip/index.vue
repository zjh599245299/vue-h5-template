<template>
  <div class="vip-page app-container">
    <div class="vip__card">
      <div class="head-img">
        <img
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=383506330,3213595831&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="nickname">
        <div>逍遥一生 <van-tag mark type="warning">VIP</van-tag></div>
      </div>
      <div class="qr">
        <van-icon name="qr" size="30" color="rgb(242, 242, 242)" />
      </div>
    </div>
    <div class="vip__options">
      <van-grid icon-size="22px">
        <van-grid-item icon="idcard" text="待付款" />
        <van-grid-item icon="logistics" text="待收货" :badge="2" />
        <van-grid-item icon="comment-o" text="待评价" :badge="3" />
        <van-grid-item icon="phone-circle-o" text="退换/售后" />
      </van-grid>
    </div>
    <div class="vip__cells">
      <van-cell-group title="">
        <van-cell icon="star-o" title="关注店铺" is-link />
        <van-cell icon="gift-o" title="收藏夹" is-link />
        <van-cell icon="brush-o" title="我的足迹" is-link />
        <van-cell icon="paid" title="历史订单" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {}
  }
}
</script>
<style lang="scss" scoped>
.vip {
  &__card {
    position: relative;
    width: 100%;
    height: 90px;
    padding-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 100;
    &:after {
      background-color: #9c27b0;
      content: '';
      width: 160%;
      height: 130px;
      position: absolute;
      left: -30%;
      top: 0;
      z-index: -1;
      border-radius: 0 0 50% 50%;
    }
    .head-img {
      padding: 10px 20px;
      img {
        width: 60px;
        height: 60px;
        border: 2px solid #fff;
        border-radius: 30px;
      }
    }
    .nickname {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      height: 40px;
    }
    .qr {
      margin-right: 10px;
    }
  }

  &__options {
    margin-bottom: 10px;
  }
}
</style>
