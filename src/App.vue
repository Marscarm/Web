<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/detail">Detail</router-link>
      <router-link to="/login">Login</router-link>
    </div>  -->
    <!-- router-link是组件导航，会被渲染成超链接标签 -->


  <router-view v-if="isRouterAlive"/>
    
  </div>
</template>


<script>
export default {
    name: 'app',
    provide(){
      return{
        reload:this.reload
      }
    },
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },
    
    data(){
      return{
        isRouterAlive:true
      }
    },

    methods:{
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        });
      }
    },
}
</script>

<style>
*{
  font-family: "微软雅黑";
}

html,body,#app{
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>




