<template>
    <div class="g-forms">
        <div class="g-tplCont">
            <div class="g-tplBtns">
                <div class="g-topBtns">
                    <Button type="ghost" size="small"><i class="iconfont">&#xe63a;</i>保存待发</Button>
                    <Button type="ghost" size="small"><i class="iconfont">&#xe6b6;</i>存为草稿</Button>
                    <Dropdown>
                        <Button type="ghost" size="small"><i class="iconfont">&#xe631;</i>插入</Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>本地文件</DropdownItem>
                            <DropdownItem>关联文件</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button type="ghost" size="small"><i class="iconfont">&#xe66e;</i>打印</Button>
                </div>
                <div class="g-botBtns cf">
                    <Button type="ghost" style="height:58px;height:58px;float:left;margin-right:5px;" @click="setModal1"><i class="iconfont">&#xe6d3;</i>发送</Button>
                    <ul>
                        <li>标题：<Input  size="small" style="width:300px"></Input></li>
                        <li>流程：<Input  disabled size="small" style="width:300px"></Input> <Button type="ghost" size="small">查看流程</Button></li>
                    </ul>
                </div>
            </div>
            <div class="g-tpl">
                <div class="g-word">
                    <table class="tbl" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                                    <th colspan="4">二次报告盖章申请表</th>
                                </tr>
                                <tr>
                                    <td>项目名称</td>
                                    <td colspan="3"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td width="25%">报告编号</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                    <td width="25%">项目人</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td width="25%">委托方</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                    <td width="25%">上次盖章时间</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td width="25%">盖章份数</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                    <td width="25%">二次盖章理由</td>
                                    <td width="25%"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td>修改内容</td>
                                    <td colspan="3"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td width="25%">原报告风险等级</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">部门经理签字</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="25%">盖章时间</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">行政部门签字</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                    </table>                                
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import {mapActions } from 'vuex'

export default {
   data() {
      return {
        
      };
    },
    methods:{
        toggleNum:function(num){
            this.n=num;
        },
        ...mapActions(['setModal1'])
    }
}
</script>

