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
                                    <td width="16.66%">估价报告</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">技术报告</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">土地证</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="16.66%">房产证</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">现状照片</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">区域位置图</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="16.66%">企业营业执照</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">委托书</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">出让合同</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="16.66%">测绘报告</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">委托方身份证</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">抵押合同</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="16.66%">他项权利证书</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">工作日志</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">备注</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td width="16.66%">存档时间</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">存档编号</td>
                                    <td width="16.66%"><input type="text" class="int1" disabled="true"></td>
                                    <td width="16.66%">存档人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
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

