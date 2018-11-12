<template>
   <div class="lg-page">
       <el-col :span="24">
           <div class="title">
                <span class="time">下午好，黄继光</span>
                <span class="trem">早上叫醒我的不是闹钟是梦想</span>
            </div>
       </el-col>
       <el-col :span="24" style="margin-bottom: 20px">
           <div >
                <ul class="peo">
                    <router-link to="" tag="li">
                        <span>本月（10.01-10.31）：</span>
                    </router-link>
                    <router-link to="/Home" tag="li">
                        <span>在职</span>
                        <span>79</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>待入职</span>
                        <span>0</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>入职</span>
                        <span>3</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>转正</span>
                        <span>0</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>合同</span>
                        <span>0</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>离职</span>
                        <span>0</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>周年</span>
                        <span>1</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>生日</span>
                        <span>0</span>
                    </router-link>
                        <router-link to="/Home" tag="li">
                        <span>调岗</span>
                        <span>79</span>
                    </router-link>
                </ul>
            </div>
       </el-col>
        <el-row  :gutter="10">
            <el-col :span="6" >
                <!-- 日历 -->
                <date-page></date-page>
            </el-col>
            <el-col :span="14">
                <div class="con">
                            <div class="memo">
                                <div class="memosm">
                                    <el-tag
                                    :key="tag"
                                    v-for="tag in dynamicTags"
                                    closable
                                    :disable-transitions="false"
                                    @close="handleClose(tag)">
                                    {{tag}}
                                    </el-tag>
                                    <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="medium "
                                    @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm"
                                    >
                                    </el-input>
                                    <el-button v-else class="button-new-tag" size="medium " @click="showInput">+ 添加备忘录</el-button>
                                </div>
                            </div>
                            <div class="memo"></div>
                            <div class="memo"></div>
                    </div>
            </el-col>
            <el-col :span="4">
                    <div class="way">
                        <div class="bor">快捷工具</div>
                        <div>
                            <ul class=" tool">
                                <li>
                                    <div class="el-icon-setting "></div>
                                    <div>添加员工</div>
                                </li>
                                <li>
                                     <div class="el-icon-setting "></div>
                                     <div>添加员工</div>
                                </li>
                                <li>
                                    <div class="el-icon-setting "></div>
                                    <div>添加员工</div>
                                </li>
                                <li>
                                    <div class="el-icon-setting "></div>
                                    <div>添加员工</div>
                                </li>
                                <li>
                                    <div class="el-icon-setting "></div>
                                    <div>添加员工</div>
                                </li>
                                <li>
                                    <div class="el-icon-setting "></div>
                                    <div>添加员工</div>
                                </li>
                            </ul>
                        </div>
                        <div class="bor"> 系统公告</div>
                        <div class="el-icon-star-on">

                        </div>
                    </div>
            </el-col>
        </el-row>
   </div>
</template>

<script>
import datePage from '@/page/datePage'
export default {
   data() {
       return {
           //备忘录
        dynamicTags: ['备忘录1', '备忘录2',],
        inputVisible: false,
        inputValue: ''
       }
   },
  components: {
      //引入日历
      datePage
  },
  methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped >
.lg-page {
    position: relative;
}
.con {
    background: #cccccc;
    height: 430px;
    padding: 1.25rem;

}
.title {
    margin-top: 1.875rem;
    margin-left: 1.25rem;
}
.trem {
    font-size: .875rem;
    color: #cccccc;
}
.peo > li {
    float: left;
    margin-left: 1.25rem;
    cursor:pointer
}
.calendar {
    width: 20%;
    margin-left: 1.25rem;
    margin-top: 1.875rem;
}
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .memo {
    width: 95%;
    background: white;
    margin-left: 2%;
    margin-bottom: 15px;
    height: 120px;
    border-radius: 10px;
  }
  .memosm {
      padding: 1.25rem;
  }
  .way {
    /* background: #dae6cf; */
    border-left: 1px solid black;
    height: 470px;
    overflow: hidden;
  }
  .bor {
    margin-top: 10px;
    margin-left: 10px;
    border-left: 4px solid red;
    padding-left: 8px;
  }
  .tool {
      overflow: hidden;
  }
  .tool > li {
      float: left;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 1.25rem;
  }
  .el-icon-setting {
        display: flex;
       justify-content: center;
       margin-bottom: 10px;
  }
  .el-icon-star-on {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    margin-top: 30%;
  }
</style>
