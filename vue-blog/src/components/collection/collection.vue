<template>
  <div class="collection">
    <ul>
      <li v-for="(collection, index) in collections" class="list" :key="collection.title">
        <el-checkbox v-model="collection.linecross"></el-checkbox>
        <span :class="{linecross: collection.linecross}">
          <a :href="collection.link" target="_blank">☀ {{index+1}}. {{collection.title}}</a>
          <i @click="deleteCollection(collection)" class="el-icon-delete"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // getCollectionItems: [],
      collections: [
        {
          title: 'Vuex使用引入',
          link: 'https://segmentfault.com/a/1190000009404727',
          linecross: false
        },
        {
          title: '中文技术文档的写作规范',
          link: 'https://github.com/ruanyf/document-style-guide',
          linecross: false
        }
      ]
    }
  },
  methods: {
    deleteCollection (collection) {
      this.collections.splice(this.collections.indexOf(collection), 1)
    }
  },
  created () {
    this.$axios.get('/collections.json')
      .then(res => {
        let collections = res.data
        let collectionArray = []
        for (let key in collections) {
          collections[key].id = key // 获得这样的唯一标志-L8uFir156R3vd95
          collectionArray.push(collections[key])
        }
        this.collections = collectionArray
      })
  }
}
</script>

<style>
.list {
  line-height: 28px;
}
.list i {
  margin-left: 15px;
  background: #409EFF;
  padding: 5px;
  border-radius: 50%;
}
.linecross{
  text-decoration: line-through;
}
</style>
