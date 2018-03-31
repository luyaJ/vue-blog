<template>
  <div class="register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎您的注册ヾ(◍°∇°◍)ﾉﾞ~</span>
      </div>
      <div class="text item">
        <el-form status-icon>
          <el-form-item label="请输入您的用户名">
            <el-input v-model="name" type="text"></el-input>
          </el-form-item>
          <el-form-item label="请输入您的密码">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码">
            <el-input v-model="confirmPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="registerButton" type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    registerButton () {
      if (this.password === this.confirmPassword) {
        const userData = {
          name: this.name,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        this.$axios.post('/users.json', userData)
          .then(res => this.$router.push('/login'))
      } else {
        alert('两次输入密码不一致')
      }
    }
  }
}
</script>

<style>
.box-card{
  background: rgba(157, 159, 243, 0.1);
}
</style>
