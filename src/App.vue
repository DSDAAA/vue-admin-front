<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AppMain from '@/layout/components/AppMain.vue'

export default {
  name: 'App'
}
</script>
<style>
.app-main {
  padding: 10px;
}

#search .el-input{
    width: 200px;
    margin-right: 10px;
}
.el-card{
  margin-bottom: 10px;
}
</style>
