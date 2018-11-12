<template>
   <div class="">
       <!-- 导航 -->
        <el-menu  class="el-menu-vertical-demo" :router="isRouter" :collapse="isCollapse">
            <el-menu-item index="/homePage">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="/organizaTion">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="/member">
                <i class="el-icon-menu"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">导航五</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">导航六</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-menu"></i>
                <span slot="title">导航七</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-menu"></i>
                <span slot="title">导航八</span>
            </el-menu-item>
        </el-menu>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
           //菜单显示规则
           isCollapse: false,
           //是否以router方式跳转
           isRouter:true
       }
   },
  components: {}
}
</script>

<style scoped>
</style>
