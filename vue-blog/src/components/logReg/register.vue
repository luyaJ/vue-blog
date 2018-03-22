<template>
  <div class="register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎您的注册ヾ(◍°∇°◍)ﾉﾞ~</span>
      </div>
      <div class="text item">
        <el-form status-icon>
          <el-form-item label="请输入您的用户名" prop="name">
            <el-input v-model="name" type="text"></el-input>
          </el-form-item>
          <el-form-item label="请输入您的密码" prop="password">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码" prop="confirmPassword">
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
        const formData = {
          name: this.name,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        this.$axios.post('/users.json', formData)
          .then(res => this.$router.push({name: 'Login'}))
      } else {
        alert('两次密码不一致')
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
