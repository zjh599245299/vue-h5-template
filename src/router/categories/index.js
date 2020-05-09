export default [
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/categories/index'),
    meta: {
      title: '商品分类', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  }
]
