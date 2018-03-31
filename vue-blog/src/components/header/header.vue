<template>
  <div class="header">
    <router-link to="/">
      <span>luya J</span>
    </router-link>
    <ul>
      <router-link to="/login">
        <li v-show="!isLogin">登录</li>
      </router-link>
      <router-link to="/register">
        <li v-show="!isLogin">注册</li>
      </router-link>

      <li v-show="isLogin">{{ currentName }}</li>
      <router-link to="/login">
        <li v-show="isLogin"> [退出]</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    // 拿到这两个数据
    currentName () {
      return this.$store.getters.currentName
    },
    isLogin () {
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style scoped>
span{
  line-height: 60px;
  font-size: 24px;
}
ul{
  display: inline-block;
  float: right;
}
li{
  display: inline-block;
  line-height: 60px;
}
</style>
