<script setup>

</script>

<template>
  <div>
    <!--    搜索栏-->
    <el-card class="box-card" id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.username" placeholder="用户名"></el-input>
          <el-input v-model="searchModel.phone" placeholder="电话"></el-input>
          <el-button type="primary" plain icon="el-icon-search" @click="getUserList">查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-plus" circle></el-button>
        </el-col>
      </el-row>
    </el-card>

    <!--    结果列表-->
    <el-card>
      <el-table
        :data="userList"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          type="index"
          label="#"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="用户ID"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="电子邮件"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="180"
        >
        </el-table-column>
      </el-table>
    </el-card>
    <!--    分页组件-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchModel.pageNo"
      :page-sizes="[5,10,20,50]"
      :page-size="searchModel.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import userApi from '@/api/userManage'

export default {
  data() {
    return {
      total: 0,
      searchModel: {
        pageNo: 1,
        pageSize: 10
      },
      userList: []
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    getUserList() {
      userApi.getUserList(this.searchModel).then(response => {
        this.userList = response.data.rows
        this.total = response.data.total
      })
    }
  },
  created() {
    this.getUserList()
  }
}
</script>
<style scoped lang="scss">

</style>
