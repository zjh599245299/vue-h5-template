<template>
  <div>
    <van-tabbar fixed route>
      <van-tabbar-item to="/" icon="shop-o">
        商城
      </van-tabbar-item>
      <van-tabbar-item to="/categories" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item to="/vip" icon="vip-card-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      active: 0
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
