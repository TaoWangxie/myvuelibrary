<template>
  <div class="Login">
      <div class="loginBox">
         <el-button class="login" type="primary" @click="login" round>登录</el-button>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    login(){
      this.$store.commit('user/TOKEN', 'token');
      localStorage.setItem('token','token');
      this.$router.push({ name: 'Home'})
    }
    
  }
}
</script>
<style lang="scss" scoped>
  .Login{
    width: 100%;
    height: 100vh;
    position: relative;
    background: #303133;
    .loginBox{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 400px;
      height: 500px;
      box-shadow: 0 10px 10px #000;
      border-radius: 15px;
      background-color: #EBEEF5;
      .login{
        margin: 0 auto;
      }
    }
  }
 
</style>