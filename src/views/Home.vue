<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="6"><div>
            <el-button @click="toLogin">登录后台</el-button>  
          </div></el-col>
        </el-row>
        <el-image :src="require('../assets/home/book.png')"  class="mainImg"></el-image>

        <!--输入框和按钮-->
        <div class="input">
          <el-row type="flex" justify="center">
            <el-col :span="12">
              <div class="searchText"  @keyup.enter="doSearch">
                  <el-input placeholder="搜寻你想要的书名"
                    suffix-icon="el-icon-search"
                    v-model="input">
                  </el-input>
              </div>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center">
            <el-col :span="3">
              <div class="searchButtonDiv">
                <el-button type="info" size="small" @click="doSearch">
                  <router-link :to="{name: 'About'}" class="searchLink">search</router-link>
                  
                </el-button>
              </div>
            </el-col>
          </el-row>


        </div>
      </el-main>
      <el-footer>
        <el-image :src="require('../assets/home/codeerwei.png')"  class="footerImg"></el-image>

        <p class="download">即刻加入学友书店微信群</p>
        <p class="slogan">学友书店 应有尽友</p>

        <div class="about">
          <el-row type="flex" justify="center">
            <el-col :span="2">
                <el-link type="info" href="">学友书店</el-link>
            </el-col>
            <el-col :span="2">
                <el-link type="info" href="">关于开发者</el-link>
            </el-col>
            <el-col :span="2">
                <el-link type="info" href="">About NJU</el-link>
            </el-col>
            <el-col :span="2">
                <el-link type="info" href="">联系我们</el-link>
            </el-col>
            
          </el-row>

        </div>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>



export default {
  name: 'Home',
  data() {
    return {
      input:"",
    }
  },
  components: {
    
  },
  methods: {
    doSearch:function(){
      // this.$router.push({path:'/about'});
      this.$store.commit('changeSearch',this.input);
      this.$router.push({
        name :"About",
        path : '/about',
        params:{ 
          // inputTR: this.input,
          }});
    },
    toLogin(){
      this.$router.push({
      name :"Login",
      path : '/login',
      params:{ 
        }});
    }
  },

}
</script>

<style scoped>

  .home{
    height: 100%;
  }
  .el-container{
    height: 100%;
    background-color: #f3ebe1;
  }
  .el-main{
    /* background-color: aquamarine; */
    min-height: 60%;
  }

  .mainImg{
    width: 180px; height: auto;
    margin-top: 8%;
    /* 图片上方距离 */
  }
  .input{
    margin-top: 1%;
    /* 输入框上方距离 */
  }
  .el-input{
    border-radius: 10px;
  }
  .searchText{
    background-color: #f3ebe1;
  }
  .searchButtonDiv{
    margin-top: 15%;
    /* 按钮上方距离 */
  }


  .el-footer{
    background-color: #f3ebe1;
    min-height: 40%;
  }

  .footerImg{
    margin-top: 4.5%;
    height: auto;
    width: 70px;
  }
  .about{
    margin-top: 3%;
  }
  .download{
    margin-bottom: 0%;
  }
  .slogan{
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
  }
  .searchLink{
    
    text-decoration: none;
    color: white;
  }

</style>