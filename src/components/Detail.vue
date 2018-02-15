<template>
<div class="g-content">
    <div class="g-main">
        <div class="g-forms">
        <div class="g-listCont">
                    <div class="g-tabCont cf">
                        <div class="g-formHead">
                            <dl class="u-ftit">
                                <dt class="u-ls">标题:</dt>
                                <dd class="u-tm">盖章申请流程</dd>
                            </dl>
                            <dl class="u-ftit">
                                <dt class="u-ls">发起人:</dt>
                                <dd class="u-author">马侯霞</dd>
                            </dl>
                            <div class="cf" style="position:relative;">
                                <ButtonGroup style="background-color:#fff;float:left;">
                                    <Button type="ghost" :class="n==1?'active':''" @click="toggleNum(1)">正文</Button>
                                    <Button type="ghost" :class="n==2?'active':''" @click="toggleNum(2)">流程</Button>
                                    <Button type="ghost" :class="n==3?'active':''" @click="toggleNum(3)">建议</Button>
                                    <Button type="ghost" :class="n==4?'active':''" @click="toggleNum(4)">收费</Button>
                                </ButtonGroup>
                                <ButtonGroup style="background-color:#fff;float:right;">
                                    <Button type="ghost" icon="ios-search" @click="show=!show"></Button>
                                    <Button type="ghost" icon="printer" @click="printFn"></Button>
                                    <Button type="ghost" icon="ios-paper-outline" @click="modal4=true"></Button>
                                    <Button type="ghost" icon="ios-list-outline"></Button>
                                </ButtonGroup>
                                <div class="searchBox" v-show="show">
                                    <Input v-model="searchVal" size="small" style="width:140px;"  placeholder="输入处理人姓名"></Input>
                                    <Icon type="ios-arrow-down" size="20" @click.native="searchFn('down')"></Icon>
                                    <Icon type="ios-arrow-up" size="20" @click.native="searchFn('up')"></Icon>
                                    <Icon type="ios-close" size="20" @click.native="show=!show"></Icon>
                                </div>
                            </div>
                            
                        </div>
                        <div class="g-tbl" v-show="n==1">
                            <div class="g-word">
                                <div id="print">
                                    <table class="tbl">
                                        <tr>
                                            <th colspan="6">项目登记表</th>
                                        </tr>
                                        <tr>
                                            <td>经办人</td>
                                            <td><span class="u-int">张三</span></td>
                                            <td>项目登记号</td>
                                            <td>123456789</td>
                                            <td>日期</td>
                                            <td>2017-10-10</td>
                                        </tr>
                                        <tr>
                                            <td>部门负责人</td>
                                            <td colspan="2"><span class="u-int">张三</span></td>
                                            <td>项目人</td>
                                            <td colspan="2"><span class="u-int">张三</span></td>
                                        </tr>
                                        <tr>
                                            <td>预估单价</td>
                                            <td colspan="2"> <span class="u-int">10000</span></td>
                                            <td>预估总价</td>
                                            <td colspan="2"><span class="u-int">1000000</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="6">
                                                “预评估单”需部门负责人签字后3天内填写，比表单发布之日起6个月内为转为正式项目，表单作废
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>委托方联系人</td>
                                            <td colspan="2"><span class="u-int">李四</span></td>
                                            <td>联系电话</td>
                                            <td colspan="2"><span class="u-int">12234556678765</span></td>
                                        </tr>
                                        <tr>
                                            <td>项目名称</td>
                                            <td colspan="5"><span class="u-int">文字信息</span></td>
                                        </tr>
                                        <tr>
                                            <td>项目位置</td>
                                            <td colspan="5"><span class="u-int">文字信息</span></td>
                                        </tr>
                                        
                                    </table>
                                </div>
                                <h3 class="u-spTit">发起人附言</h3>
                                <div class="u-allOpn">处理人意见(共4条)</div>
                                <div class="m-yj" id="searchMan">
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>

                                    <Form :model="formItem1" :label-width="80">
                                        <FormItem label="回复内容">
                                            <Input v-model="formItem1.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="限500字"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary">提交</Button>
                                            <Button type="ghost" style="margin-left: 8px">取消</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                           </div>
                        </div>
                        
                        <div class="g-lc" v-show="n==2">
                            <ul class="g-progressBox">
                                <li class="single">
                                    <span class="node-name">张丹丹</span>
                                    
                                    <span class="node-approval">[发起人]</span>
                                </li>
                                <li class="more">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                    <span class="ok"></span>
                                </li>
                                <li class="more">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                    <span class="no"></span>
                                </li>
                                <li class="single">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                    <span class="read"></span>
                                </li>
                                <li class="more">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                </li>
                                <li class="more">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                </li>
                                <li class="more">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                </li>
                                <li class="single">
                                    <span class="node-name">张丹丹</span>
                                    <span class="node-approval">[发起人]</span>
                                </li>
                            </ul>
                        </div>

                         <div class="g-tbl" v-show="n==3">
                            <div class="g-word">
                                <div class="m-yj">
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>
                                    <div class="opnList">
                                        <ul class="g-ul1">
                                            <li class="l-name">王某某</li>
                                            <li class="l-result">同意</li>
                                            <li class="l-time">2017-10-10</li>
                                            <li class="l-apply">回复</li>
                                        </ul>
                                        <p>
                                            如果您的安全组出站规则或服务器内部防火墙（如linux iptables，windows高级安全防火墙等）限制了出站访问，我们强烈建议您在1月22日之前添加允许访问100.64.0.0/10 网段的出站规则，以避免此次调整对您的业务造成影响。

    如果有任何问题请您及时通过工单向我们反馈。
                                        </p>
                                    </div>

                                    <Form :model="formItem1" :label-width="80">
                                        <FormItem label="回复内容">
                                            <Input v-model="formItem1.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="限500字"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary">提交</Button>
                                            <Button type="ghost" style="margin-left: 8px">取消</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </div>
                         </div>

                         <div class="g-tbl" v-show="n==4">
                            <div class="g-word">
                                <table class="tbl" cellpadding="0" cellspacing="0" border="0"> 
                                    <tr>
                                        <td>日期</td>
                                        <td>金额</td>
                                        <td>备注</td>
                                        <td>登记人</td>
                                        <td>操作</td>
                                    </tr>
                                    <tr>
                                        <td>2017-12-12</td>
                                        <td>￥100</td>
                                        <td>备注</td>
                                        <td>朱伟</td>
                                        <td>
                                            <span class="iconfont">&#xe639;</span>
                                            <span class="iconfont">&#xe990;</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                         </div>

                    </div>
        </div>

        <div class="g-sp">
            <h3>审批</h3> 
            <ButtonGroup style="margin-bottom:20px;">
                <Button @click="modal1=true">加签</Button>
                <Button @click="modal3=true">转发</Button>
                <Button>回退</Button>
                <Button>终止</Button>
            </ButtonGroup>
            <Form :model="formItem">
                <FormItem>
                    <RadioGroup v-model="formItem.radio">
                        <Radio label="male">同意</Radio>
                        <Radio label="female">不同意</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem>
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 9}" placeholder="请输入意见"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">提交</Button>
                    <Button type="ghost" style="margin-left: 8px">存为草稿</Button>
                    <Button type="ghost" style="margin-left: 8px">暂存待办</Button>
                </FormItem>
            </Form>

        </div>
    </div>
    </div>

    <Modal
        v-model="modal1"
        title="加签"
    >
        <Form :model="formItem2" :label-width="86">
            <FormItem label="设置节点权限">
                <Select v-model="formItem2.select">
                    <Option value="协同">协同</Option>
                    <Option value="协同">协同</Option>
                    <Option value="协同">协同</Option>
                </Select>
            </FormItem>
            <FormItem label="表单操作权限">
                <RadioGroup v-model="formItem2.radio1">
                    <Radio label="current">同当前节点</Radio>
                    <Radio label="read">只读</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="请选择人员">
                <Input v-model="formItem2.input" placeholder="单击选择人员" @click.native="modal2=true"></Input>
            </FormItem>
            <FormItem label="流程模式">
                <RadioGroup v-model="formItem2.radio2">
                    <Radio label="cascade">串发</Radio>
                    <Radio label="multiple">并发</Radio>
                    <Radio label="next">与下一节点并发</Radio>
                </RadioGroup>
            </FormItem>
        </Form>
    </Modal>
    <Modal
        v-model="modal3"
        title="协同转发"
    >
        <Form :model="formItem2" label-position="top">
            <FormItem label="请选择要转发的人员">
                <Input v-model="formItem2.input" placeholder="单击选择人员" @click.native="modal2=true"></Input>
            </FormItem>
            <FormItem label="附言">
                <Input v-model="formItem2.ps" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="选项">
                <CheckboxGroup v-model="formItem2.select">
                    <Checkbox label="转发原附言"></Checkbox>
                    <Checkbox label="转发原意见"></Checkbox>
                    <Checkbox label="跟踪"></Checkbox>
                </CheckboxGroup>
            </FormItem>  
        </Form>
        <ul class="m-append" style="margin-top:-20px;">
            <li><span><i class="iconfont">&#xe631;</i>插入附件</span></li>
            <li><span><i class="iconfont">&#xe631;</i>关联文档</span></li>
        </ul>
    </Modal>
    <Modal
        width="460"
        v-model="modal2"
        title="选择人员"
    >
        
        <Menu mode="horizontal" :theme="theme1" active-name="1" style="height:40px;line-height:40px;">
            <MenuItem name="1">
                部门
            </MenuItem>
            <MenuItem name="2">
                组
            </MenuItem>
            <MenuItem name="3">
                岗位
            </MenuItem>
            <MenuItem name="4">
                外部人员
            </MenuItem>
            <MenuItem name="5">
                关联人员
            </MenuItem>
        </Menu>
        <div style="overflow:hidden;padding-top:6px;width:410px;">
            <Input v-model="search" icon="ios-search" style="width:120px;float:left;"></Input>
            <a href="javascript:;" style="float:right;margin-top:5px;">保存为组</a>
        </div>
        <div class="g-sections">

        </div>
        <RadioGroup v-model="formItem2.radio4" style="padding-bottom:6px;">
            <Radio label="department">部门</Radio>
            <Radio label="employee">人员</Radio>
        </RadioGroup>
        <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>
        <RadioGroup v-model="formItem2.radio3" style="padding-top:6px;">
            <Radio label="cascade">串发</Radio>
            <Radio label="multiple">并发</Radio>
        </RadioGroup>
    </Modal>
    <Modal
        width="660"
        v-model="modal4"
        title="查看"
    >
        <Menu mode="horizontal" :theme="theme1" active-name="1" style="height:40px;line-height:40px;">
            <MenuItem name="1">
                处理明细
            </MenuItem>
            <MenuItem name="2">
                流程日志
            </MenuItem>
            <MenuItem name="3">
                催办日志
            </MenuItem>
        </Menu>
        <div class="tbl-tit">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <th width="10%">处理人</th>
                    <th width="10%">节点权限</th>
                    <th width="15%">处理状态</th>
                    <th width="20%">发起/收到时间</th>
                    <th width="15%">处理时间</th>
                    <th width="10%">处理时长</th>
                    <th width="10%">处理期限</th>
                    <th width="10%">超长时长</th> 
                </tr>
            </table>
        </div>
        <div style="height:200px;overflow-y:auto;">
                <table cellpadding="0" cellspacing="0" border="0" class="tbl-cont" width="100%">
                    <tr v-for="(item,index) in 30" v-bind:key="index">
                       <td width="10%">魏超</td>
                       <td width="10%">审批</td>
                       <td width="15%">已办</td>
                       <td width="20%">2018-01-23 16:51</td>
                       <td width="15%">181天1小时</td>
                       <td width="10%">无</td>
                       <td width="10%">无</td>
                       <td width="10%">无</td>
                    </tr>
                </table>
            </div>
            <div style="text-align:right;margin-top:10px;">
                <Page :total="100" show-elevator size="small" ></Page>
            </div>
            
    </Modal>
</div>
</template>
<script>
export default {
   data() {
      return {
        attitude:'yes',
        formItem: {
            radio: 'attitude',
            textarea: ''
        },
        formItem1: {
            textarea: ''
        },
        formItem2: {
            select: '',
            radio1: 'current',
            input: '',
            input: '',
            radio2: 'cascade',
            radio3: 'cascade',
            radio4: 'department',
            ps:'',
            select:[]
        },
        n:1,
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false,
        theme1: 'light',
        searchVal:'',
        show:false,
        num:0,
        search:'',
        data1: this.getMockData(),
        targetKeys1: this.getTargetKeys()
      };
    },
    methods:{
        toggleNum:function(num){
            this.n=num;
        },
        ik:function(){
            console.log(11);
        },
        getMockData () {
            let mockData = [];
            for (let i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: 'Content ' + i,
                    description: 'The desc of content  ' + i,
                    disabled: Math.random() * 3 < 1
                });
            }
            return mockData;
        },
        getTargetKeys () {
            return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
        },
        render1 (item) {
            return item.label;
        },
        handleChange1 (newTargetKeys, direction, moveKeys) {
            console.log(newTargetKeys);
            console.log(direction);
            console.log(moveKeys);
            this.targetKeys1 = newTargetKeys;
        },
        printFn:function(){
            var bdhtml = window.document.body.innerHTML;
            var printHtml = document.getElementById('print').innerHTML
            window.document.body.innerHTML = printHtml
            window.print()
            window.document.body.innerHTML = bdhtml
            window.location.reload()
        },
        searchFn:function(flag){
            var obj=document.getElementById('searchMan'),
                aLi=obj.querySelectorAll('.l-name'),
                arr=[],
                key=this.num;
            for(var i=0,l=aLi.length;i<l;i++){
                if(aLi[i].innerHTML==this.searchVal){
                    arr.push(aLi[i]);
                }
            }
            if(arr.length){
                if(flag==='down' && key<aLi.length){
                    aLi.forEach(element=>element.innerHTML=this.searchVal)
                    aLi[key].innerHTML='<span style="background-color:red">'+this.searchVal+'</span>' ;
                    key++;
                }else if(flag==='up' && key>0){
                    key--;
                    aLi.forEach(element=>element.innerHTML=this.searchVal)
                    aLi[key].innerHTML='<span style="background-color:red">'+this.searchVal+'</span>' ;
                    
                }
                this.num=key;
                
            }
            
        
        }
    }
}
</script>

