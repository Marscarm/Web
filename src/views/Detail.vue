<template>
    <div class="detail">
        <el-container class="wrapContainer">

        <el-header class="outHeader">
            <el-row class="headerRow">
            <el-col :span="2">
                <el-image :src="require('../assets/home/book.png')"  class="mainImg"></el-image>
            </el-col>
            <el-col :span="8">
                <div @keyup.enter="doSearch">
                    <el-input placeholder="搜寻你想要的书名" suffix-icon="el-icon-search" v-model="input"  class="searchText"></el-input>
                </div>
            </el-col>
            </el-row>
        </el-header>

        <el-main class="outMain">
            <el-card class="box-card">
                <div class="cardDiv">
                    <div class="infoDiv">
                        <div class="info1">
                            <div class="firstDividerDiv">
                                <el-divider content-position="left"><i class="el-icon-document"></i> BookInfo</el-divider>
                            </div>
                            <el-container class="infoContainer">
                                <el-aside width="200px"> 
                                <el-image :src="require('@/assets/logo.png')"  class="listImg"></el-image>
                                </el-aside>

                                <el-container >
                                <el-header class="innerHeader"> 
                                    <!-- <el-row class="innerHeaderRow" type="flex" justify="start">
                                        <el-col :span="8">
                                        </el-col>
                                    </el-row> -->
                                            书名{{book.name}}
                                    <el-divider></el-divider>
                                </el-header>

                                <el-main class="innerMain"> 
                                    <div>      
                                        <span>作者:{{book.author}}</span>
                                        <br>
                                        <span>出版时间:{{book.publishTime}}</span>
                                        <br>
                                        <span>出版商:{{book.publisher}}</span>
                                        <br>
                                        <span>数量:{{book.quantity}}</span>
                                        <br>
                                        <span>价格:{{book.price}}</span>
                                        <br>
                                        <span>ISBN:{{book.isbn}}</span>

        
                                    </div>
                                
                                </el-main>
                                </el-container>
                            </el-container>
                        </div>

                        <div class="info2">
                            <el-container>
                                <el-header>
                                    <el-divider content-position="left"><i class="el-icon-edit-outline"></i> BriefIntro</el-divider>
                                    
                                </el-header>
                                <el-main>
                                    书籍简介:{{book.description}}
                                </el-main>
                            </el-container>
                        </div>
                        <div class="info3">
                            <el-container>
                                <el-header>
                                    <el-divider content-position="left" ><i class="el-icon-chat-dot-square"></i> Comments</el-divider>
                                </el-header>
                                <el-main>
                                    <ul>
                                        <li v-for="comment in comments">
                                            ......
                                        </li>
                                    </ul>
                                </el-main>
                            </el-container>
                        </div>

                    </div>
                </div>
            </el-card>




        </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    props:{
        "id":String
    },
    name:'detailInfo',
    data () {
        return {
           input:"请搜索",
           comments:['a','b','c','d','e'],
           book:{

           },
    };
  },
  methods: {
      doSearch:function(){           
         // this.$router.push({path:'/about'});
        this.$router.push({
            name :"About",
            path : '/about',
            params:{ 
            inputTR: this.input,
            }});
        }
  },
  mounted() {
      this.input=this.$route.params.inputTR;
      this.book = this.$route.params.bookInfo;
  },
}
</script>

<style scoped>
    .detail{
        height: 100%;
    }
    .wrapContainer{
        height: 100%;
        background-color: #e2dfd7;
    }
    .outHeader{
        margin-bottom: 10px;
        
    }
    .infoContainer /deep/ .el-header{
        margin-top: 10px;
        max-height: 20px;

    }
    .mainImg{
        height: 50px;
        width: 50px;
    }
    .searchText{
        margin-top: 5px;
    }
    .headerRow{
        margin-top: 10px;
    }
    .outMain{
    background-color: #f3ebe1;
    text-align: left;
    padding-left: 60px;
    padding-right: 60px;
    line-height: 1.5;
    }
    .box-card{
        max-width: 65%;
    }
    .infoDiv{
        margin-top: 20px;
        background-color: white;
        min-height: 95%;
        width: 600px;
    }
    .info1{
        min-height: 250px;
    }
    .info2{
        height: 150px;
        
    }
    .info3{
        min-height: 150px;
        max-height: 230px;
        
    }

    .firstDividerDiv{
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .infoContainer /deep/ .el-divider{
        margin-top: 10px;
        border-top: 1px dotted grey;
        background-color: white;
    }
    /* .wrapContainer /deep/ .el-header{
        border-radius: 10%;
    } */

</style>