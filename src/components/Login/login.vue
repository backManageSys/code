
<template>
    <div id="login">
        <div class="loginBox">
            <h1>用户管理系统</h1>
            <a-form @submit="handleSubmit">
                <!--用户名-->
                <p class="inputParent">
                    <a-input
                        class="input"
                        size="large"
                        placeholder="user name"
                        v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] }]"
                        v-model="userName"
                        ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmptyUser" />
                    </a-input>
                    <span class="userErr mark" v-show="userNameValidMark">用户名不合法</span>
                </p>
                <!--密码框-->
                <p class="inputParent">
                    <a-input
                        class="input"
                        size="large"
                        placeholder="password"
                        v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }]"
                        type="password"
                        v-model="password"
                        ref="passwordInput">
                        <a-icon slot="prefix" type="code" />
                        <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitEmptyPsw" />
                    </a-input>
                    <span class="passwordErr mark" v-show="userNameValidMark">密码有误</span>
                </p>
                <a-button size="large" html-type="submit"  class="submit" block type="primary">登陆</a-button>
            </a-form>
        </div>

    </div>
</template>
<script>
    import { isvalidUsername,isvalidPassword } from '@/tools/validate'
    import {cookieSetToken} from '@/tools/Cookie'
    export default {
        name:'login',
        data(){
            return {
                userName:'',//输入框的值
                password:'',//输入框的值
                userNameValidMark:false,//控制提示语是否显示
                passwordValidMark:false,//控制提示语是否显示
            }
        },
        methods :{
            handleSubmit (e){
                e.preventDefault();
                this.userNameValidMark = isvalidUsername(this.userName) ? false : true;
                this.passwordValidMark = isvalidPassword(this.password) ? false : true;
                const flagLogin = isvalidUsername(this.userName) && isvalidPassword(this.password);
                if (flagLogin){
                    this.$axios.get('http://jsonplaceholder.typicode.com/users').then((response)=>{
                        console.log(response);
                        this.$store.state.data.token = response.data[0].name;
                        window.sessionStorage.setItem('role',response.data[0].name);
                        this.$message.success('登陆成功');
                        this.$router.push('/company');
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
                return false;
            },
            // 点击x清空用户名输入框
            emitEmptyUser () {
                this.$refs.userNameInput.focus();
                this.userName = ''
            },
            // 点击x清空密码输入框
            emitEmptyPsw (){
                this.$refs.passwordInput.focus();
                this.password = ''
            },
        },
        beforeCreate () {

        },
        computed:{
        },
        created (){

        },
        mounted (){

        },
    }
</script>
<style scoped>
#login {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #001529;
}
.loginBox   {
    width: 350px;
    position: fixed;
    top:36%;
    left:50%;
    transform: translate(-50%);
}
.loginBox h1  {
        text-align: center;
    color:#fff;

    }
.inputParent  {
    width: 100%;
    position: relative;
}
.mark  {
    color:#fff;
    position: absolute;
    top: 20%;
    right: -3%;
    transform: translateX(100%);
}
.input  {
    min-height: 40px;
    line-height: 40px;
    margin: 0 0 15px;
}
input  {
    display: block;
    height: 100px;
}

    .submit  {
        display: block;
        width: 100%;
        margin: 0 auto ;
    }
</style>
