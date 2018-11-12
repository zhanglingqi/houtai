<template>
   <div class="">
       <!-- 头部 -->
       <el-row class="tabtop">
           <el-col :span="8">
                <el-row>
                    <el-col :span="6">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                    </el-col>
                    <el-col class="flexed" :span="6">
                        <span>在职：</span>
                        <span>16</span>
                        <span>人</span>
                    </el-col>
                    <el-col class="flexed" :span="6">
                        <span>离职：</span>
                        <span>16</span>
                        <span>人</span>
                    </el-col>
                    <el-col class="flexed" :span="6">
                        <span>入职：</span>
                        <span>16</span>
                        <span>人</span>
                    </el-col>
                </el-row>
           </el-col>
           <el-col  :span="4">
                <el-row>
                    <el-col>
                        <el-button  size="small" type="primary" icon="el-icon-plus" @click="addUserDialogFormVisible = true" >添加员工</el-button>
                    </el-col>
                </el-row>
           </el-col>
       </el-row>
       <!-- 表格部分 -->
       <el-row>
                    <el-table
                        :data="tableData"
                        stripe
                        border
                        style="width: 100%">
                        <el-table-column
                        label="序号"
                        sortable
                        width="75%">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 10px">{{ scope.row.id }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="姓名"
                        width="75%">
                        <template slot-scope="scope">
                           <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="手机"
                        width="130">
                        <template slot-scope="scope">
                           <span style="margin-left: 10px">{{ scope.row.phone }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="部门"
                        width="75%">
                        <template slot-scope="scope">
                           <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="职务"
                        width="100">
                        <template slot-scope="scope">
                           <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="入职日期"
                        sortable
                        width="135">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="现合同到期时间"
                        width="135">
                        <template slot-scope="scope">
                           <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="openEditDialog(scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row.id)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
       </el-row>
       <!-- 弹出对话框 -->
        <!-- 添加用户的对话框 -->
                    <el-dialog
                        title="添加用户"
                        :visible="addUserDialogFormVisible">
                        <el-form
                            :rules="rules"
                            label-width="80px"
                            :model="form">
                            <el-form-item label="用户名">
                            <el-input v-model="form.username" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="手机">
                            <el-input  v-model="form.mobile" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="部门">
                            <el-input v-model="form.email" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="职位">
                            <el-input  auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="入职日期">
                            <!-- <el-input  auto-complete="off"></el-input> -->
                                <el-date-picker
                                style="width:100%"
                                v-model="workTime"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions1">
                                </el-date-picker>
 
                            </el-form-item>
                            <el-form-item label="合同时间">
                            <!-- <el-input  auto-complete="off"></el-input> -->
                             <el-date-picker
                                style="width:100%"
                                v-model="contractTime"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                              </el-date-picker>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="addUserDialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="addUserDialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                    <!-- 编辑用户的对话框 -->
                    <el-dialog
                    title="修改用户"
                    :visible.sync="editUserDialogFormVisible">
                    <el-form
                        ref="editForm"
                        label-width="80px"
                        :model="form">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="手机">
                            <el-input  v-model="form.mobile" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="部门">
                            <el-input v-model="form.email" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="职位">
                            <el-input  auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="入职日期">
                            <!-- <el-input  auto-complete="off"></el-input> -->
                                <el-date-picker
                                style="width:100%"
                                v-model="workTime"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions1">
                                </el-date-picker>
 
                            </el-form-item>
                            <el-form-item label="合同时间">
                            <!-- <el-input  auto-complete="off"></el-input> -->
                             <el-date-picker
                                style="width:100%"
                                v-model="contractTime"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                              </el-date-picker>
                            </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="editUserDialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="handleEdit">确 定</el-button>
                    </div>
                    </el-dialog>
       <!-- 分页部分 -->
        <!--
      current-page 当前页码
      page-size 每页显示多少条数据
      pager-count 最多产生的数字按钮个数,大于等于 5 且小于等于 21 的奇数
      total   总共多少条数据，发送请求获取
      @size-change  每页显示多少条改变的时候
      @current-change 当前页码改变的时候
         -->
       <el-row style="margin-top: 10px">
           <el-col :span="11">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
           </el-col>
       </el-row>
   </div>
</template>

<script>
export default {
   data() {
       return {
            options: [{
            value: '1',
            label: '在职'
            }, {
            value: '2',
            label: '离职'
            }, {
            value: '3',
            label: '休假'
            }, {
            value: '4',
            label: '入职'
            }],
            value:'在职',
            tableData: [{
            date: '2016-05-02',
            name: '王',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'1',
            phone:'18888888888'
            }, {
            date: '2016-05-04',
            name: '王小',
            address: '上海市普陀区金沙江路 1517 弄',
             id:'2',
            phone:'18888888888'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
             id:'3',
            phone:'18888888888'
            }, {
            date: '2016-05-03',
            name: '小虎',
            address: '上海市普陀区金沙江路 1516 弄',
             id:'4',
            phone:'18888888888'
            }],
             currentPage1: 5,
             currentPage2: 5,
             currentPage3: 5,
             currentPage4: 4,
            // 控制添加用户的对话框的显示隐藏
            addUserDialogFormVisible: false,
             // 表单数据
                form: {
                    username: '',
                    password: '',
                    email: '',
                    mobile: ''
                },
            //获取时间的快捷键
               pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                text: '今天',
                onClick(picker) {
                picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                }]
                },
             //入职日期
             workTime: '',
             //合同日期
             contractTime: '',
             // 表单验证规则
             rules: {
                username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
                ]
             },
             // 控制编辑用户的对话框的显示隐藏
             editUserDialogFormVisible: false
       }
   },
    methods: {
        //表格方法
        handleEdit(index, row) {
                console.log(index, row);
            },
        handleDelete(index, row) {
                console.log(index, row);
            },
        //分页方法
         handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        //添加人员弹出框
         openEditDialog(user) {
        // 显示对话框
        this.editUserDialogFormVisible = true;
        // console.log(user);
        this.form.username = user.username;
        this.form.mobile = user.mobile;
        this.form.email = user.email;
        },
        // 点击删除按钮
            handleDelete(id) {
            // 删除提示
            this.$confirm('是否删除该用户?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                // 点击确定按钮执行
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                }).catch(() => {
                // 点击取消按钮执行
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        },
  components: {}
}
</script>

<style scoped >
.tabtop {
    margin-left: 10px;
    margin-top: 1.25rem;
}
.flexed {
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
