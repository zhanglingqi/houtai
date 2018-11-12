<template>
   <div class="">
       <el-row>
           <el-col :span="8">
               <el-menu :default-active="activeIndex" :router="isRouter" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="/orGan">组织架构</el-menu-item>
                    <el-menu-item index="2">岗位词典</el-menu-item>
                    <el-menu-item index="3">编制管理</el-menu-item>
                    <el-menu-item index="4">成本中心</el-menu-item>
                </el-menu>
           </el-col>
           <el-col :offset="8" :span="8">
               <el-row :gutter="20">
                   <el-col :span="4" class="lead">
                       <i class="el-icon-menu lead-icon"></i>
                        <span class="leaf-title" >导入</span>
                   </el-col>
                   <el-col :span="4" class="derive">
                        <i class="el-icon-menu derive-icon"></i>
                        <span class="derive-title">导出</span>
                   </el-col>
                    <el-col :span="6" class="history">
                         <i class="el-icon-menu lead-icon history-icon"></i>
                        <span class="history-title">历史归档</span>
                    </el-col>
                   <el-col :span="10" class="find">
                        <el-input placeholder="请输入内容" size="small"  suffix-icon="el-icon-search" clearable> </el-input>
                   </el-col>
               </el-row>
           </el-col>
       </el-row>
       <router-view></router-view>
   </div>
</template>

<script>
export default {
   data() {
       return {
           //开启路由跳转
           isRouter:true,
           //默认展示项
           activeIndex: '1',
       }
   },
  components: {}
}
</script>

<style scoped >
    .el-menu.el-menu--horizontal {
    border-bottom: none;
    }
    .lead, .derive, .history, .find {
        display: flex;
        justify-content: center;
        height: 60px;
        align-items: center;
    }
    .el-input {
        width: 85%;
    }
</style>
