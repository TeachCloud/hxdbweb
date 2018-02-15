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
                    <table class="tbl"  cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <th colspan="4">正式评估单</th>
                                </tr>
                                <tr>
                                    <td width="25%">报告号</td>
                                    <td width="25%">年份</td>
                                    <td width="25%">报告类型</td>
                                    <td width="25%">编号</td>
                                </tr>
                                 <tr>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>
                                            报告类型分类：⑴鉴证类报告使用“估”；⑵非鉴证类报告可使用“咨”或其他字样。
例：（北京）华信（2015）（估）字第00001号；（北京）华信（2015）（咨）字第00001号；
（北京）华信（2015）（研）字第00001号；其他自拟。
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>承接部门</td>
                                    <td>制表人</td>
                                    <td>业务来源</td>
                                    <td>项目人</td>
                                </tr>
                                 <tr>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="2">承接业务公司</td>
                                    <td colspan="2">业务类型</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <select name="" id="">
                                            <option value="">公司名称</option>
                                        </select>
                                    </td>
                                    <td colspan="2">
                                        <select name="" id="">
                                            <option value="">公司名称</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>项目名称</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>项目位置</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>项目名称与项目位置需填写清楚，与报告上的一致</p>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>委托方名称</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>委托方联系人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>联系电话</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>合作公司</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>贷款银行</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>银行联系人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>联系电话</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>贷款银行名称明确到支行或分行，无贷款银行请填“无”</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>基本要求</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>项目登记号（必填，由表单《项目登记表》产生）</td>
                                    <td colspan="3">
                                       <input type="text" class="int1" disabled="true">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">项目交接记录（第一次）</td>
                                    <td>是否有交接</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>交出人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>接收人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>交接内容</td>
                                    <td colspan="3">
                                       <input type="text" class="int1" disabled="true">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">项目交接记录（第二次）</td>
                                    <td>是否有交接</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>交出人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>接收人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>交接内容</td>
                                    <td colspan="3">
                                       <input type="text" class="int1" disabled="true">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>同一项目只允许交接2次，交接2次以上需从新占号，如项目无交接，只需在“是否有交接”处选择“否”进入下一节</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>上传报告电子版</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>一审签字</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>一审评分</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>一审意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>二审签字</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>二审评分</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                 <tr>
                                    <td>二审意见</td>
                                    <td colspan="3"><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>最终评分</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>项目风险等级</td>
                                    <td>
                                        <select name="" id="">
                                            <option value="">A</option>
                                            <option value="">A</option>
                                            <option value="">A</option>
                                            <option value="">A</option>
                                        </select>
                                    </td>
                                </tr>
                                 <tr>
                                    <td colspan="4">
                                        <p>如果风险项目启动风险项目表单</p>
                                    </td>
                                </tr>
                                 <tr>
                                    <td colspan="4">
                                        <p>上传二审报告电子版</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>三审签字</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>上传最终报告电子版</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>签字估价师确认</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>四审确认</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>盖章人员</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>盖章份数</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>盖章时间</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>经办人</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>以下存档前估价人员填写部分</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>签字估价师</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>辅助人员</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>估价作业日期</td>
                                    <td colspan="3">
                                       <input type="text" class="int1" disabled="true">
                                    </td>
                                </tr>
                                <tr>
                                    <td>估价时点</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>完成时间</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>建筑面积</td>
                                    <td><input type="text" class="int1" disabled="true" style="width:100px">平方米</td>
                                    <td>土地面积</td>
                                    <td><input type="text" class="int1" disabled="true" style="width:100px">平方米</td>
                                </tr>
                                <tr>
                                    <td>容积率</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>开发程度</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td>估价单价</td>
                                    <td><input type="text" class="int1" disabled="true" style="width:80px;display:inline-block;">元/平方米</td>
                                    <td>估价总值</td>
                                    <td><input type="text" class="int1" disabled="true" style="width:80px;display:inline-block;">万元</td>
                                </tr>
                                <tr>
                                    <td>标的用途</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                    <td>估价方法</td>
                                    <td><input type="text" class="int1" disabled="true"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>以下为档案管理人员填写</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <table class="tbl" >
                                            <tr>
                                                <td width="16.66%">估价报告</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td width="16.66%">技术报告</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td width="16.66%">土地证</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                            <tr>
                                                <td>房产证</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>现状照片</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>区域位置图</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                            <tr>
                                                <td>企业营业执照</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>委托书</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>出让合同</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    测绘报告
                                                </td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>委托方身份证</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>抵押合同</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                            <tr>
                                                <td>他项权利证书</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>工作日志</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>备注</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                            <tr>
                                                <td>存档时间</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>存档编号</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                                <td>存档人</td>
                                                <td><input type="text" class="int1" disabled="true"></td>
                                            </tr>
                                        </table>
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