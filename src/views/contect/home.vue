<template>
   <div class="">
       <!-- 引入头部 -->
       <el-row>
           <el-col :span='24'>
               <!-- 头部 -->
                <header-top></header-top>
           </el-col>
       </el-row>
        <el-row>
            <el-col :span="2">
                <!-- 菜单 -->
                <menu-bar></menu-bar>
            </el-col>
            <el-col :span="22" style="margin-top: -20px;">
                <!-- 首页展示 -->
                <router-view></router-view>
            </el-col>
       </el-row> 
   </div>
</template>

<script>
import headerTop from '@/components/headerTop'
import homePage from '@/views/home/homePage'
import menuBar from '@/components/menuBar'
export default {
   name: '',
   data() {
       return {
           
       }
   },
     //引入公共的部分
  components: {
    headerTop,
    homePage,
    menuBar
  },
}
</script>

<style scoped>

</style>
