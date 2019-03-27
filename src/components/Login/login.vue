
<template>
    <div id="login">
        <div class="loginBox">
            <h1>用户管理系统</h1>
            <a-form v-on:submit="submit">
                <!--用户名-->
                <p class="inputParent">
                    <a-input class="input" size="large" placeholder="user name" required v-model="userName" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                        <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmptyUser" />
                    </a-input>
                    <span class="userErr mark">用户名不合法</span>
                </p>
                <!--密码框-->
                <p class="inputParent">
                    <a-input class="input" size="large" placeholder="password" required type="password" v-model="password" ref="passwordInput">
                        <a-icon slot="prefix" type="code" />
                        <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitEmptyPsw" />
                    </a-input>
                    <span class="passwordErr mark">密码有误</span>
                </p>
                <a-button size="large" loading="loading" class="submit" block type="primary">登陆</a-button>
            </a-form>
        </div>

    </div>
</template>
<script>
    export default {
        name:'login',
        data(){
            return {
                userName:'',
                password:'',
            }
        },
        methods :{
            emitEmptyUser () {
                this.$refs.userNameInput.focus();
                this.userName = ''
            },
            emitEmptyPsw (){
                this.$refs.passwordInput.focus();
                this.password = ''
            },
        },
        computed:{

        },
        created() {

        },
        mounted() {

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
