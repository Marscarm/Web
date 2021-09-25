import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'//初始页面组件
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import ManageBook from '../views/ManageBook.vue'
import store from '../store'


Vue.use(VueRouter)//初始化一个插件，以供使用

const routes = [
  {
    path: '/',
    name: 'Home',//别名
    component: Home,
    meta:{
      title: '搜索页',
    }

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title: '书籍列表',
    }
  },
  {
    path: '/detail/:bookID',
    name: 'Detail',
    component: Detail,
    props: true,
    meta:{
      title: '详情页',
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: '登录页',
    }
  },
  {
    path: '/manageBook',
    name: 'ManageBook',
    component: ManageBook,
    meta:{
      title: '管理页面',
      requireAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base:'/bookApp',
  routes,

})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.state.token==true){
      next()
    }else{
      alert("您还没有登录");
      next('/login');
    }
  }else {
    next();
    
  }
})

router.beforeEach((to, from, next) => {

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
