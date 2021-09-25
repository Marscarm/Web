<template>
    <div class="outDiv">
        <el-container class="outContainer">
            <el-header class="outHeader">
                <el-row type="flex" justify="start">
                    <div class="titleDiv">
                        <el-col :span="24">
                            <i class="el-icon-monitor"></i>
                            后台管理界面
                        </el-col>
                    </div>
                </el-row>
                
            </el-header>
            <el-container>
                <el-aside width="200px" class="outAside">
                    <div>
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                background-color="#d0d0d4"
                                text-color="#000"
                                active-text-color="#7a6a0d">
                                <el-submenu index="1">
                                    <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                    </template>
                                    <el-menu-item index="1-1" >选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                    </el-submenu>
                                </el-submenu>

                                <el-menu-item index="2">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">导航二</span>
                                </el-menu-item>
                                <el-menu-item index="3">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">导航三</span>
                                </el-menu-item>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </div>
                
                </el-aside>

                <el-main class="outMain">
                    <div class="contentDiv">
                        <el-container class="contentContainer">
                            <el-header class="contentHeader">
                                <el-row type="flex" justify="start">
                                    <el-col :span="2"> 
                                        <h3 class="contentH3">
                                            书籍信息
                                        </h3>
                                    </el-col>
                                </el-row>
                                <el-row class="headerRow">
                                    <el-col :span="8">
                                        <div @keyup.enter="doSearch">
                                            <el-input placeholder="搜寻你想要的书名" suffix-icon="el-icon-search" v-model="input"  class="searchText"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="1" :offset="0"> 
                                        <el-button type="info" plain @click="doSearch">查询</el-button>
                                    </el-col>
                                    <el-col :span="2" :offset="13"> 
                                        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
                                            <el-dialog title="新增书籍信息" :visible.sync="dialogFormVisible" >
                                                <el-form :model="formMess" :label-position="labelPosition">
                                                <el-form-item label="书名" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.name" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="作者" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.author" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="出版时间" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.publishTime" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="出版商" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.publisher" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="质量" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.quantity" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="价格" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.price" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="ISBN" :label-width="formLabelWidth">
                                                    <el-input v-model="formMess.isbn" autocomplete="off"></el-input>
                                                </el-form-item>

                                                <!-- <el-form-item label="上传图片" ref="uploadElement" prop="imageUrl">
                                                    <el-input v-model="ruleForm.imageUrl" v-if="false"></el-input>
                                                    <el-upload
                                                        class="avatar-uploader"
                                                        ref="upload"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :data = "formMess"
                                                        :before-upload="beforeAvatarUpload">
                                                        <img v-if="formMess.imageUrl" :src="formMess.imageUrl" class="avatar">
                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                    </el-upload>
                                                </el-form-item> -->

                                                </el-form>
                                                <div slot="footer" class="dialog-footer">
                                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                                    <el-button type="primary" @click="onSubmit" >确 定</el-button>
                                                </div>
                                            </el-dialog>
                                    </el-col>

                                </el-row>

                            </el-header>
                            <el-main>
                                <div class="tableDiv">
                                    <template>
                                        <el-table :data="books" style="width: 100%" height="550px" border>
                                            <el-table-column prop="name" label="书名" width="120"></el-table-column>
                                            <el-table-column prop="isbn" label="ISBN" width="150"></el-table-column>
                                            <el-table-column fixed prop="id" label="ID" width="60"></el-table-column>
                                            <el-table-column prop="author" label="作者" width="120"></el-table-column>
                                            <el-table-column prop="publishTime" label="出版时间" width="120"></el-table-column>
                                            <el-table-column prop="publisher" label="出版商" width="110"></el-table-column>
                                            <el-table-column prop="price" label="价格" width="100"></el-table-column>
                                            <el-table-column prop="quantity" label="数量" width="100"></el-table-column>
                                            <el-table-column label="修改" width="110">
                                                <template slot-scope="scope">
                                                    <el-button type="primary" @click="numberC(scope.row)" size="small">修改数量</el-button>
                                                </template>
                                            </el-table-column>

                                            <el-table-column fixed="right"  label="删除" width="90">
                                                <template slot-scope="scope">
                                                    <el-button type="danger" size="small" @click="deleteBook(scope.row)">删除</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </template>
                                </div>
                            </el-main>
                        </el-container>
                    </div>

                    <div>
                        <el-dialog title="数量修改" :visible.sync="dialogForm">
                        <el-form :model="changeNum" :label-position="labelPosition">
                            <el-form-item label="增/减" :label-width="formLabelWidth">
                                <el-select v-model="changeNum.add" placeholder="请选择修改类型">
                                    <el-option label="增加" value="1"></el-option>
                                    <el-option label="减少" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="修改数量" :label-width="formLabelWidth">
                                <el-input v-model="changeNum.number" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogForm = false">取 消</el-button>
                            <el-button type="primary" @click="numberChange">确 定</el-button>
                        </div>
                        </el-dialog>
                    </div>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios';
import $http from 'axios';


export default {
    name:'',
    inject:["reload"],
    created:function(){
        this.input = this.$store.state.manageSearch;
        this.getData();
    },
    data () {
        return {
            input:"", 
            dialogFormVisible: false,
            dialogForm: false,
            formMess: {
                name: '微积分',
                author: '孙文强',
                publishTime: '2000-11-01',
                publisher: '1',
                quantity: '2',
                price: '3',
                isbn: '4',
                pictureUrl: '5'
            },
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            changeNum: {
                add:1,
                number:1,
                id:0,
            },
            formLabelWidth: '70px',
            labelPosition:"left",
            books:[],
    };
  },
    
  methods: {
    handleChange(value) {
        console.log(value);
    },
    doSearch(){
        this.$store.commit('changeMS',this.input);
        this.reload();
    },
    getData(){
        let that = this
        $http.get('https://bk.claws.top/search?keywords='+that.input).then(response => {
    // $http.get('/data.json').then(response => {
        that.books = response.data.content
        console.log(that.books)
    }, response => {
        console.log("failed")
    })
    },
    onSubmit() {
        this.dialogFormVisible = false; 
        let that = this;
      /* formData格式提交： */
        axios({
            method:"post",
            url:"https://bk.claws.top/addbook",
            headers: {
                "Content-Type": "application/json"
            },
            // withCredentials:true,
            data:JSON.stringify(that.formMess),
            }).then((res)=>{console.log(res)});

        this.reload();
    },
    numberC(row){
        this.dialogForm = true;
        this.changeNum.id = row.id;
    },
    numberChange(){
        this.dialogForm = false;
        let that = this;
        $http.get('https://bk.claws.top/stock?'+'add='+that.changeNum.add+'&number='+that.changeNum.number+'&id='+that.changeNum.id).then(response => {
        }, response => {
            console.log("failed")
        })
        this.reload();
    },
    deleteBook(row) { 
        let that = this;
        let id = row.id;
        $http.get('https://bk.claws.top/deletebook?id='+id).then(response => {
        // that.books = response.data.content
        // console.log(that.books)
        }, response => {
            console.log("failed")
        })
        this.reload();
    },
    handleAvatarSuccess(res, file) {
        this.formMess.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
    }

  }
}
</script>

<style scoped>

.outDiv{
    height: 100%;
}
.outContainer{
    height: 100%;
}
.outHeader{
    min-height: 5%;
    background-color: #b6b3ab;
}
.titleDiv{
    font-family: SimHei;
    font-size: 30px;
    margin-top: 15px;
}
.outAside{
    min-height: 80%;
    background-color: #d0d0d4;

}
.outMain{
    min-height: 80%;
    background-color: #f3ebe1;

}
.contentDiv{
    min-height: 100%;
    background-color: white;
    border-radius: 1%;
}
.contentCotainer{
    /* background-color: white; */
    min-height: 100%;
}
.tableDiv{
    min-height: 100%;
}
.contentHeader{
    min-height: 80px;
}
.contentH3{
    margin-bottom: 0px;
}
.headerRow{
    margin-top: 10px;
}
body{
    color: #7a6a0d;
}

.avatar-uploader /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    left:-30%;
    overflow: hidden;
}
.avatar-uploader /deep/ .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>