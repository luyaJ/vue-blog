# vue-blog

installing:
```
npm install
npm run dev
```

## 做一个todoList

首先写一个录入页，就是一个表单，用于数据的录入：
```html
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
```

处理事件，这里我们使用了野狗云（不过现在好像不能注册了）存储数据：
```js
export default {
  data () {
    return {
      title: '',
      link: ''
    }
  },
  methods: {
    addCollection () {
      let collectionData = {
        title: this.title,
        link: this.link
      }
      this.$axios.post('/collections.json', collectionData)
        .then(res => this.$router.push('/collection'))
        .catch(error => console.log(error))
    }
  }
}
```
上面的操作，会将你输入的数据添加到野狗云中。

那么我们怎么把野狗云中的数据展示在我们的页面中呢？

我们使用v-for循环来展示我们的数据：
```html
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
```

```js
export default {
  data () {
    return {
      collections: [
        {
          title: '',
          link: '',
          linecross: false
        }
      ]
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
  },
  methods: {
    deleteCollection (collection) {
      this.$axios.delete('/collections/'+ collection.id + '/.json')
        .then(res => this.$router.push('/collection'))
    }
  }
}
```