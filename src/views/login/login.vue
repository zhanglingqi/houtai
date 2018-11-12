<template>
    <div>
        <vue-particles class="log-bg" color="#ccc"></vue-particles>
        <div class="login-wrap">
        <el-form
        class="login-form"
        label-position="top"
        label-width="80px"
        :model="formData">
        <h1>用户登录</h1>
        <el-form-item  label="用户名">
            <el-input  class="ipt" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item  label="密码">
            <el-input class="ipt" type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="btn" type="primary">登录</el-button>
        </el-form-item>
        </el-form>
  </div>

    </div>
    
</template>

<script>
export default {
   data() {
       return {
            formData: {
                username: '',
                password: ''
            }
       }
   },
  components: {}
}
</script>

<style scoped >
    #particles-js {
        background: url('../../assets/images/darksky.jpg');
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    h1{
        color: #00eaff;
    }
 
   
    .login-wrap {
    position: absolute;
    right: 16%;
    top: 31%;
    }
    .login-wrap .login-form {
    width: 400px;
    border-radius: 5px;
    padding: 30px;
    }
    .login-wrap .login-form .btn {
    width: 100%;
    background-color: #32c5d2;
    }
</style>
