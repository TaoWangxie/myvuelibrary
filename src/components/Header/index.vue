<template>
  <div class="Header">
      <div class="loginBtn" @click="goToLogin">
          登录
      </div>
      <div class="loginBtn" @click="goOut">
          退出
      </div>
      <div class="loginBtn" >
          <!-- {{this.$store.state.user.token}} -->
          {{token}}
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations } from "vuex";

export default {
  name: 'Header',
  components: {

  },
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState({
      "token":state=>state.user.token
    }),
  },
  methods: {
    goToLogin(){
      this.$router.push('/Login')
    },
    goOut(){
      localStorage.clear('token');
      this.$store.commit('user/TOKEN', '未登录');
      this.$router.push({ name: 'Home'})
    }
  }
}
</script>
<style lang="scss" scoped>
  .Header{
    width: 100%;
    height: 60px;
    position: relative;
    .loginBtn{
        float: right;
        padding: 0 10px;
        margin: 15px 20px 0 0;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: #fff;
    }
    .loginBtn:hover{
        cursor: pointer;
    }
  }
 
</style>