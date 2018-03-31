<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>请登录ヾ(✿ﾟ▽ﾟ)ノ</span>
      </div>
      <div class="text item">
        <el-form status-icon>
          <el-form-item label="用户名">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
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
  // 组件内 导航守卫
  beforeRouteEnter: (to, from, next) => {
    // 每次刷新，清空user
    next(vm => vm.$store.dispatch('setUser', null))
  },
  methods: {
    loginButton () {
      this.$axios.get('/users.json')
        .then(res => {
          // 格式化
          const data = res.data // 获取已经有的用户信息
          let users = []
          for (let key in data) {
            // console.log(data[key])
            const user = data[key] // 获得一个用户
            users.push(user)
          }
          // console.log(users)

          // 过滤
          let result = users.filter((user) => {
            return user.name === this.name && user.password === this.password
          })
          // console.log(result)

          // 在上面如果是未注册的用户直接登录，result返回为空，所以我们判断一下
          if (result.length > 0 && result != null) {
            // action(异步)通过store.dispatch方法触发
            // 更改登录状态
            this.$store.dispatch('setUser', result[0].name)

            this.$router.push('/home')
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
