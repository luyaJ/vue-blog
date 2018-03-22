<template>
  <div id="app">
    <el-container>
      <el-header><my-header></my-header></el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import header from '../src/components/header/header'
export default {
  components: {
    myHeader: header
  }
}
</script>
