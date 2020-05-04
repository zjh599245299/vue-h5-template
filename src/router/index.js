import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**自动识别路由 */
let moduleRoutes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(_route => {
  // 如果是根目录的 index.js 则不处理
  if (_route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(_route)
  moduleRoutes = [...moduleRoutes, ...(routerModule.default || routerModule)]
})

let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'), // 路由懒加载
    meta: {
      title: '首页', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  },
  ...moduleRoutes,
  {
    path: '*',
    redirect: '/'
  }
]

/**创建路由对象 */
const ROUTER = new Router({
  // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
  // base: '/app/',
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

ROUTER.beforeEach((to, from, next) => {
  document.title = to.meta.title || '默认标题'
  next()
})

export default ROUTER
