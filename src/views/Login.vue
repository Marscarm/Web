<template>
     <div class="login-container">
        <el-form :model="ruleForm" :rules="rules"
         status-icon
         ref="ruleForm" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" 
                    v-model="ruleForm.username" 
                    auto-complete="off" 
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" 
                        v-model="ruleForm.password" 
                        auto-complete="off" 
                        placeholder="密码"
                    ></el-input>
                </el-form-item>

            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">
                    登录
                    
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
 
<script>
import axios from 'axios';
// import { mapMutations } from 'vuex';

export default {
     data(){
        return {
            logining: false,
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{required: true, message: '请输入账号', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        // ...mapMutations(['changeLogin']),
        handleSubmit(){
            let that = this;
            axios({
                method: 'post',
                url: 'https://bk.claws.top/login',
                headers: {
                    "Content-Type": "application/json"
                },
                data:JSON.stringify(that.ruleForm),
                })
                .then(function (response) {
                    // that.userToken = 'Bearer ' + response.data;
                    // that.changeLogin({ Authorization: that.userToken });
                    // console.log(response.data);

                    if(response.data.success==true){
                        that.$store.commit("changeTK",true)
                        // that.$store.commit("SET_TOKEN",response.data.success)
                        that.$router.push({
                        name :"ManageBook",
                        path : '/manageBook',
                        params:{}});
                    }
                    else{
                        alert("账户不存在或者密码输入错误")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>
 
<style scoped>
 
.login-container {
    width: 100%;
    height: 100%;
    background: #f3ebe1;
 
    /* 登录框上下对齐 */
    display: flex;
    align-items: center;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin:0px auto;
    width: 350px;
    padding: 20px 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}

</style>