<template>
<div class="about">
    <el-container class="wrapContainer">

      <el-header class="outHeader">
        <el-row class="headerRow">
          <el-col :span="2">
            <el-image :src="require('../assets/home/book.png')"  class="mainImg"></el-image>
          </el-col>
          <el-col :span="8">
            <div @keyup.enter="doSearch">
              <el-input placeholder="搜寻你想要的书名" suffix-icon="el-icon-search" v-model="input" class="searchText"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      

      <el-main class="outMain">
        <div class="listDiv">

        <el-card class="box-card">
          <div v-for="(book,index) in books" :key="index" class="text item">
            <div>
              <el-card class="box-card" shadow="never"> 
                <el-container class="listContainer">
                  <el-aside width="200px"> 
                    <!-- <el-image :src="books[index].pictureUrl"  class="listImg" ></el-image> -->
                    <!-- <el-image src="http://api.dujin.org/bing/1366.php" class="listImg" ></el-image> -->
                    <el-image :src="require('@/assets/logo.png')" class="listImg" ></el-image>
                  </el-aside>
                  <el-container>
                    <el-header class="innerHeader"> 
                      <el-row class="innerHeaderRow" type="flex" justify="start">
                        <el-link type="primary" :underline="false" class="nameLink" @click="toDetail(book,book.id)">{{book.name}}</el-link>
                      </el-row>
                      <el-divider content-position="left"></el-divider>

                    </el-header>

                    <el-main class="innerMain"> 
                      
                      <span>作者:{{book.author}}</span>
                      <el-divider direction="vertical"></el-divider>  
                      <span>出版时间:{{book.publishTime}}</span>
                      <el-divider direction="vertical"></el-divider>  
                      <span>出版商:{{book.publisher}}</span>


                      <br>
                      <span>数量:{{book.quantity}}</span>
                      <el-divider direction="vertical"></el-divider>  
                      <span>价格:{{book.price}}</span>
                      <br>
                      <span>ISBN:{{book.isbn}}</span>
                      <br>
                      <span>书籍简介:{{book.description}}</span>
                          

                    </el-main>
                  </el-container>
                </el-container>
              </el-card>
            </div>
          </div>
        </el-card>


      </div>
      </el-main>
    </el-container>
    
</div>
</template>

<script>
import $http from 'axios'
export default {
    name:'about',
    inject:['reload'], 
    data () {
        return {
          // src:require(`http://api.dujin.org/bing/1366.php`),
          books:[],
          input:"",
        };
      },
    created:function(){
        // this.input = this.$route.params.inputTR;
        this.input = this.$store.state.searchContent;
        this.getData(); 
    },
    methods: {
      doSearch:function(){
        this.$store.commit('changeSearch',this.input);
        this.reload();
        // console.log("okkk");
      },
      // 获取符合条件的id
      getData(){
        let that = this;
        $http.get('https://bk.claws.top/search?keywords='+that.input).then(response => {
        // $http.get('data.json').then(response => {
          if(response.data.success==true){
            that.books = response.data.content
            console.log(that.books)
          }else{
            alert("没找到！")
          }
        }, response => {
          console.log("failed")
        })
      },

      toDetail(book,bookID){
        this.$router.push({
          name :"Detail",
          path : '/detail/:bookID', 
          params:{ 
              bookID:bookID,
              inputTR: this.input,
              bookInfo: book,
            }});
      },
      
    }
}
</script>

<style scoped>
  /* 导航部分 */
  .about{
    height: 100%;
  }
  .wrapContainer{
    height: 100%;
    background-color: #e2dfd7;
  }
  .outHeader{
    margin-bottom: 10px;
  }
  .headerRow{
    margin-top: 10px;
  }
  .mainImg{
    height: 50px;
    width: 50px;
  }
  .searchText{
    margin-top: 5px;
  }

  /* 内容部分 */
  .outMain{
    background-color: #f3ebe1;
    text-align: left;
    padding-left: 60px;
    padding-right: 60px;
    line-height:1.7 
  }
  .listDiv{
    width: 800px;
  }
  ul{
    padding: 0px;
  }
  li{
    list-style-type:none
  }
  .listContainer{
    background-color: white;
  }

  .innerHeader{
    max-height: 40px;
    padding-left: 0px;
    margin-bottom: 10px;
  }
  .innerMain{
    padding-top: 0px;
    padding-left: 0px;
  }
  .listImg{
    height: 170px;
    width: 170px;
  }
  .innerHeaderRow{
    padding-top: 10px;
    font-size: 18px;
  }
  .bookInfoOne{
    font-size: 15px;
  }
  .innerHeaderRow /deep/ .el-link {
      font-size: 20px;
  }
  .innerHeader /deep/ .el-divider{
    margin: 0px;
    border-top: 1px dotted grey;
    background-color: white;
  }
</style>
