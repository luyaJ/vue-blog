<template>
  <div class="admin">
    <div class="admin_content">
      <router-link to="/admin/collections">收藏录入</router-link>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style scoped>
.admin_content{
  padding-bottom: 15px;
  border-bottom: 1px dotted #8ACFA9;
}
a{
  margin-right: 25px;
  color: #8ACFA9;
}
.router-link-active{
  color: rgb(90, 195, 226);
}
</style>
