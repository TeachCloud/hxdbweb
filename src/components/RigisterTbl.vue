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
                            <th colspan="6">项目登记表</th>
                        </tr>
                        <tr>
                            <td width="16%">登记人</td>
                            <td>
                                <input type="text" class="int1" disabled="true">
                            </td>
                            <td width="16%">日期</td>
                            <td><input type="text" class="int1" disabled="true"></td>
                            <td width="16%">登记号</td>
                            <td><input type="text" class="int1" disabled="true"></td>
                        </tr>
                        <tr>
                            <td>项目名称</td>
                            <td colspan="5"><input type="text" class="int3"></td>
                        </tr>
                        <tr>
                            <td>项目位置</td>
                            <td colspan="5"><input type="text" class="int3"></td>
                        </tr>
                        <tr>
                            <td>其它说明</td>
                            <td colspan="5"><input type="text" class="int3"></td>
                        </tr>
                        <tr>
                            <td>预估单价</td>
                            <td colspan="2"><input type="text" class="int2" disabled="true"></td>
                            <td>预估总价</td>
                            <td colspan="2"><input type="text" class="int2" disabled="true"></td>
                        </tr>
                        <tr>
                            <tr>
                            <td>是否为公摊项目</td>
                            <td colspan="2"><input type="text" class="int2" disabled="true"></td>
                            <td>&nbsp;</td>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>指定分配项目人员</td>
                            <td colspan="5">
                                <table class="tbl" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td>分配人员</td>
                                        <td>人员确认</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="int2" disabled="true"></td>
                                        <td><input type="text" class="int2" disabled="true"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>分配估价师</td>
                            <td colspan="5">
                                <table class="tbl" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td>分配估价师</td>
                                        <td>估价师确认</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="int2" disabled="true"></td>
                                        <td><input type="text" class="int2" disabled="true"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>项目人确认</td>
                            <td colspan="2"><input type="text" class="int3"></td>
                            <td>日期</td>
                            <td colspan="2"><input type="text" class="int1"></td>
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

