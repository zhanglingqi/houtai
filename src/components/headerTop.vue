<template>
   <div class="heder">
       <img src="../assets/images/touxiang.gif" class="img-lg">
       <span class="backstage">光合物管</span>
       <ul>
           <li>
               <span class="name-lg">黄继光</span>
           </li>
           <li>
               <span class="el-icon-location img-sm"></span> 
           </li>
           <li>
               <span class="el-icon-bell img-sm"></span> 
           </li>
           <li>
               <span class="el-icon-mobile-phone img-sm"></span> 
           </li>
       </ul>
       <el-input class="ipt" placeholder="请输入内容"  size="small" clearable prefix-icon='el-icon-search'>
</el-input>
   </div>
</template>

<script>
export default {
   data() {
       return {
       }
   },
  components: {}
}
</script>

<style scoped >
 .heder {
     width: 100%;
     height: 3.125rem;
     /* margin-top: .625rem; */
     /* background-color: aqua; */
     position: relative;
 }
 .img-lg {
     border-radius: 50%;
     width: 2.1875rem;
     height: 2.1875rem;
     line-height: 2.1875rem;
     position: absolute;
     left: 1%;
     top: 10%;
 }
 .backstage {
     position: absolute;
     left: 4%;
     top: 24%;
 }
 .ipt {
     width: 8.75rem;
     position: absolute;
     top: 5%;
     right: 10%;
 }
 ul li {
     float: right;
     margin-right: .625rem;
     margin-top: .75rem;
 }
</style>
