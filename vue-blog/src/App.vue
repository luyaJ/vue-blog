<template>
  <div id="app">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-container>
        <el-aside>
          <my-aside></my-aside>
        </el-aside>

        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import myHeader from '../src/components/header/header'
import myAside from '../src/components/aside/aside'

export default {
  components: {
    myHeader,
    myAside
  }
}
</script>

<style>
@import './assets/style/reset.css';
.el-header{
  background: #8ACFA9;
}
.el-main{
  /* background: rgb(210, 241, 223); */
  border: 1px solid #ccc;
  margin: 15px;
  border-radius: 3px;
}
</style>
