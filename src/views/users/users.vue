<template>
  <div class="users">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 15px 0;">
      <el-input
        placeholder="请输入内容"
        v-model="index"
        class="input-with-select"
        style="width:300px;margin-right:10px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success" plain>添加用户</el-button>
    </div>
    <el-table :data="userList" style="width: 100%" border>
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态" width="80">
        <template slot-scope="scope">
          <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="bottom-end">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分配角色" placement="bottom-end">
            <el-button type="primary" icon="el-icon-share"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="bottom-end">
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {getAllUserList} from '@/api/user_index.js'
export default {
  data() {
    return {
      value1: true,
      // 用户搜索关键字
      userobj: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      //   表格数据源,它是一个数组,里面的每个元素都是一个对象
      userList: []
    }
  },
  methods: {},
  mounted(){
      getAllUserList(this.userobj)
      .then(res=>{
          console.log(res)
          if(res.data.meta.status===200){
              this.userList = res.data.data.users
          }
      })
      .catch(res=> {
          console.log(err)
      })
  }
    
};
</script>
<style lang="less" scoped>
</style>
