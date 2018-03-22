<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content left">
          <el-breadcrumb separator="★">
            <el-breadcrumb-item :to="{ path: '/' }">豆瓣Douban</el-breadcrumb-item>
            <el-breadcrumb-item>读书</el-breadcrumb-item>
            <el-breadcrumb-item>电影</el-breadcrumb-item>
            <el-breadcrumb-item>音乐</el-breadcrumb-item>
            <el-breadcrumb-item>广播</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content right">
          <el-breadcrumb separator="★">
            <el-breadcrumb-item v-show="!isLogin">
              <router-link to="/login">登录</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-show="!isLogin">
              <router-link to="/register">注册</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-show="isLogin">
              {{name}}
            </el-breadcrumb-item>
            <el-breadcrumb-item v-show="isLogin">
              <router-link :to="{name:'Login'}">退出</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.getters.name
    },
    isLogin () {
      return this.$store.getters.isLogin
    }
  }
}
</script>
