<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>请登录ヾ(✿ﾟ▽ﾟ)ノ</span>
      </div>
      <div class="text item">
        <el-form status-icon>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="loginButton" type="primary">登录</el-button>
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
      password: ''
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => vm.$store.dispatch('setUser', null))
  },
  methods: {
    loginButton () {
      this.$axios.get('/users.json')
        .then(res => {
          const data = res.data
          const users = []
          for (let i in data) {
            const user = data[i]
            users.push(user)
          }
          // 过滤
          let result = users.filter((user) => {
            return user.name === this.name && user.password === this.password
          })
          // 若是未注册的账户，直接登录的话，result会为空
          if (result != null && result.length > 0) {
            this.$store.dispatch('setUser', result[0].name)
            this.$router.push({name: 'Index'})
          } else {
            alert('账号或密码错误')
            this.$store.dispatch('setUser', null)
          }
        })
    }
  }
}
</script>

<style>
.box-card{
  background: rgba(157, 159, 243, 0.2);
}
</style>
