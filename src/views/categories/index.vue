<template>
  <div class="categories-page app-container">
    <div class="categories__sidebar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="推荐" />
        <van-sidebar-item title="安心蔬菜" />
        <van-sidebar-item title="豆制品" />
        <van-sidebar-item title="新鲜水果" />
        <van-sidebar-item title="肉禽蛋" />
        <van-sidebar-item title="海鲜水产" />
        <van-sidebar-item title="乳品烘焙" />
        <van-sidebar-item title="营养早餐" />
        <van-sidebar-item title="叮咚心选" />
        <van-sidebar-item title="米面粮油" />
        <van-sidebar-item title="调味品" />
        <van-sidebar-item title="方便速食" />
        <van-sidebar-item title="酒水饮料" />
        <van-sidebar-item title="休闲零食" />
        <van-sidebar-item title="快手菜" />
        <van-sidebar-item title="南北干货" />
        <van-sidebar-item title="宝宝餐" />
        <van-sidebar-item title="厨房用品" />
      </van-sidebar>
    </div>
    <div class="categories__view">
      <van-tabs v-model="active" class="categories__view--tabs">
        <van-tab title="猜你喜欢"></van-tab>
        <van-tab title="会员特价"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
      active: 0
    }
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
.categories-page {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
}
.categories {
  &__sidebar {
  }
  &__view {
    flex: 1;
    display: flex;
    &--tabs {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
