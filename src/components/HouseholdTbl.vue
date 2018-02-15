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
                                    <th colspan="6">拆迁分户报告盖章审批单</th>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>申请分户报告盖章时，《调查表底表》《照片》《权属文件》《测算表》《报告电子版》，需提前上交业务管理部进行审核</p>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td width="25%">报告号</td>
                                    <td><input type="text" class="int3"></td>
                                    <td width="25%">分户报告号</td>
                                    <td><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>报告号填写需要与正式评估单生成报告号相同，例：字第00707号；分户报告号可以填写区间号码，例：1-100号。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>申请人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>部门</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>申请日期</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>项目人</td>
                                    <td><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td>项目名称</td>
                                    <td><input type="text" class="int3"></td>
                                    <td>报告类型</td>
                                    <td><input type="text" class="int3"></td>
                                </tr>
                                <tr>
                                    <td>一审签字</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                    <td>二审签字</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>三审签字</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                    <td>四审签字</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>盖章人员</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                    <td>盖章份数</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>经办人</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
                                    <td>日期</td>
                                    <td><input type="text" class="int2" disabled="true"></td>
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

