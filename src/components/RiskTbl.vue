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
                                    <th colspan="4">风险项目审批表</th>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <table class="tbl">
                                            <tr>
                                                <td width="16.66%">发起人</td>
                                                <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                                <td width="16.66%">部门</td>
                                                <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                                <td width="16.66%">日期</td>
                                                <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>项目名称</td>
                                    <td colspan="3"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td>风险原因</td>
                                    <td colspan="3">
                                        <select name="" id="">
                                            <option value="">原因</option>
                                            <option value="">原因</option>
                                            <option value="">原因</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>风险原因说明</td>
                                    <td colspan="3"><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td width="25%">部门负责人</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">日期</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>部门意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="25%">项目人</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">日期</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>项目人意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                 <tr>
                                    <td width="25%">业务管理部</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">日期</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>业务管理部意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="25%">审批</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">日期</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>专家组意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="25%">风险组织委员会成员</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="25%">日期</td>
                                    <td width="25%"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>风险组织委员会成员意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <div style="text-align:left;padding-left:10px;font-size:16px;">项目人承诺：</div>
                                        <div style="text-align:center;font-size:16px;">本人同意履行风险控制委员会意见</div>
                                        <div style="text-align:right;padding-right:10px;font-size:16px;">项目人签字</div>
                                    </td>
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

