<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="1" class="el-menu-vertical-demo" active-text-color="#8ACFA9">
          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <router-link to="/collection">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
          </router-link>
          <router-link to="/admin">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">后台录入</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-menu{
  width: 299px;
}
</style>
