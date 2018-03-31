<template>
  <div class="collections">
    <el-form label-width="120px" label-position="left">
      <el-form-item label="文章标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="文章链接">
        <el-input v-model="link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addCollection">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      link: ''
    }
  },
  methods: {
    addCollection (e) {
      let collectionData = {
        title: this.title,
        link: this.link
      }

      this.$axios.post('/collections.json', collectionData)
        .then(res => this.$router.push('/collection'))
        .catch(error => console.log(error))

      e.preventDefault() // 取消默认事件
    }
  }
}
</script>

<style scoped>
.collections{
  margin-top: 30px;
}
</style>
