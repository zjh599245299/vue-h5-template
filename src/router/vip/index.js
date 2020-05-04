export default [
  {
    path: '/vip',
    name: 'vip',
    component: () => import('@/views/vip/index'), // 路由懒加载
    meta: {
      title: '会员中心', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  }
]
