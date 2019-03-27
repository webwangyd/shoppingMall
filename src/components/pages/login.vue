<template>
    <div>
       <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
        <div class="register-panel">
          <van-field
              v-model="username"
              label="用户名"
              icon="clear"
              placeholder="请输入用户名"
              required
              @click-icon="username = ''"
              :error-message = 'usernameMsgerror'
          />
          <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              :error-message = 'passwordMsgerror'
          />
          <div class="register-button">
              <van-button type="primary" size="large" @click="loginAction" :loading='openLoading'>登录</van-button>
          </div>
       </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                username: '',
                password: '',
                openLoading: false,
                isOk: true,
                passwordMsgerror: '',
                usernameMsgerror: ''
            }
        },  
        created(){
            if(localStorage.userInfo){
                    Toast.success('您已经登录')
                    this.$router.push('/')
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)   
            },
            loginAction(){
                this.checkForm() && this.axiosLoginUser() 
            },
            axiosLoginUser(){
                this.openLoading = true
                axios({
                    url:url.loginUser,
                    method: 'post',
                    data:{
                        userName:this.username,
                        password:this.password
                    }
                })
                .then(response=>{
                    console.log(response)
                    if(response.data.code == 200){
                        this.openLoading = false
                        new Promise((resolve,reject)=>{
                            localStorage.userInfo={userName:this.username}
                            setTimeout(()=>{
                                resolve()
                            },500)
                        }).then(()=>{
                            Toast.success('登录成功')
                            this.$router.push('/')
                        }).catch(err=>{
                            Toast.fail('登录状态保存失败')
                            console.log(err)
                        })
                    }else{
                        console.log(response.data.message)
                        this.openLoading = false
                    }
                })
                .catch(error=>{
                    this.openLoading = false 
                })
            },
            checkForm(){
                if(this.username.length < 5){
                    this.usernameMsgerror = '用户名不能少于5位',
                    this.isOk = false
                }else{
                    this.usernameMsgerror = ''
                }
                if(this.password.length < 6){
                    this.passwordMsgerror = '密码不能少于5位',
                    this.isOk = false
                }else{
                    this.passwordMsgerror = ''
                }
                return this.isOk
            }
        },
    }
</script>
<style scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>