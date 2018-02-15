<template>
    <div class="g-listing">
        <div class="m-bread">当前位置：协同工作-待办事项</div>
        <div class="g-siftBox">
            <Select v-model="model2" size="small" style="width:100px;text-align:left;">
                <Option v-for="item in conditions" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Input v-model="value4" size="small" icon="ios-search" placeholder="请输入" style="width: 100px"></Input>
        </div>
        <div class="g-tblBox">
            <div class="tbl-tit">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <th width="5%"><input type="checkbox"></th>
                        <th width="30%">标题</th>
                        <th width="9%">发起人</th>
                        <th width="14%">发起时间</th>
                        <th width="14%">接收时间</th>
                        <th width="6%">催办次数</th>
                        <th width="10%">处理期限</th>
                        <th width="6%">处理状态</th>
                        <th width="6%">流程日志</th> 
                    </tr>
                </table>
            </div>
            
            <div class="scl">
                <table cellpadding="0" cellspacing="0" border="0" class="tbl-cont" width="100%">
                    <tr v-for="(item,index) in 30" v-bind:key="index">
                       <td width="5%"><input type="checkbox"></td>
                       <td width="30%"><a href="javascript:;" @click="enterFn">盖章申请流程(金东方 2018-01-23 16:50)</a></td>
                       <td width="9%">金东方</td>
                       <td width="14%">2018-01-23 16:51</td>
                       <td width="14%">2018-01-23 16:51</td>
                       <td width="6%">0</td>
                       <td width="10%">无</td>
                       <td width="6%">无</td>
                       <td width="6%">无</td>
                    </tr>
                </table>
            </div>
        </div>
        <Page :total="100" show-elevator style="position:absolute;right:16px;bottom:5px;"></Page>
    </div>
</template>
<script>
export default {
    data(){
        return {
            conditions: [
                    {
                        value: '标题',
                        label: '标题'
                    },
                    {
                        value: '发起人',
                        label: '发起人'
                    },
                    {
                        value: '发起时间',
                        label: '发起时间'
                    }
                ],
            model2:'',
            value4:''
        }
    },
    methods:{
        enterFn:function(){
            this.$router.push({name:'Detail'})
        }
    }
}
</script>
