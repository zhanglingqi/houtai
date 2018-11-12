<template>
   <div class="">
       <el-row>
           <el-col :span="24" class="organ">
                <i class="el-icon-upload"></i>
                <span class="organ-title" >北京德兴久科技有限公司</span>
                <span class="organ-people">(17人)</span>
           </el-col>
       </el-row>
       <el-row>
           <el-col :span="24">
                    <div class="custom-tree-container">
                            <el-input placeholder="输入关键字进行过滤" v-model="filterText" clearable prefix-icon="el-icon-search"> </el-input>
                            <el-tree
                            :filter-node-method="filterNode"
                            :data="data"
                            show-checkbox
                            node-key="id"
                            :default-expand-all='false' 
                            :expand-on-click-node="false"
                            ref="tree2"
                            >
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                                <span>{{ node.label }}</span>
                                <span>
                                <el-button
                                    type="text"
                                    size="mini"
                                    @click="() => append(data)">
                                    添加
                                </el-button>
                                <el-button
                                    type="text"
                                    size="mini"
                                    @click="() => remove(node, data)">
                                    删除
                                </el-button>
                                </span>
                            </span>
                            </el-tree>
                </div>
           </el-col>
       </el-row>
   </div>
</template>

<script>
let id = 1000;
export default {
   name: '',
   data() {
       return {
        //    组织架构数据
        data: [{
                id:1,
                label: '产品部',
                children: [{
                    id:7,
                    label: '杨耀宗',
                },{
                    id:8,
                    label: '陈佩',
                }]
                }, {
                id:2,
                label: '运营部',
                children: [{
                    id:9,
                    label: '耿凯天',
                }, {
                    id:10,
                    label: '干佩雯',
                },{
                    id:11,
                    label:'卢嘉琳'
                },{
                    id:12,
                    label:'朱昕铭'
                }]
                }, {
                id:3,
                label: '行政部',
                children: [{
                    id:13,
                    label: '庞晓宇',
                }, {
                    id:14,
                    label: '郭思江',
                }]
                },{
                id:4,
                label:'技术部',
                children:[{
                    id:15,
                    label:'季鹏坤',
                },{
                    id:16,
                    label:'吴敬丰'
                },{
                    id:17,
                    label:'陶永洋'
                },{
                    id:18,
                    label:'王明申'
                },{
                    id:19,
                    label:'郭海南'
                },{
                    id:20,
                    label:'王彬'
                },{
                    id:21,
                    label:'张凌旗'
                }]
                },{
                    id:5,
                    label:'管理部门',
                    children:[{
                        id:22,
                        label:'郭明非'
                    },{
                        id:23,
                        label:'耿凯天'
                    }]
                },{
                    id:6,
                    label:'物管部',
                    children:[{
                        id:24,
                        label:'徐珊'
                    }]
                }],
                //查询的数据
                filterText: ''
        }
        
        },
        methods:{
            //查询
             filterNode(value, data) {
                    if (!value) return true;
                    return data.label.indexOf(value) !== -1;
                },
            // 添加
             append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            //删除
            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
                },
          watch: {
                filterText(val) {
                    this.$refs.tree2.filter(val);
                }
            },
        components: {}
}
</script>

<style scoped >
.organ {
    height: 47px;
    background: rgb(246, 246, 246);
    display: flex;
    align-items: center;
    font-size: 22px;
    padding-left: 20px;
}
.organ > i {

}
.organ-title {
    margin-left: 17px;
}
.organ-people {
    color: #ccc;
    margin-left: 17px;
}
.ogan-lg {
    margin-top: 10px;
    margin-left: 10px
}
.el-tree-node__label {
    font-size: 17px;
}
.el-tree-node__content:hover {
    background: none !important;
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
