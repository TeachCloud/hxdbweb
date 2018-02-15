<template>
<div class="g-content z-state1">
    <div class="g-sideMenu">
        <div class="g-sub">
            <ul class="m-sideMenu">
                <router-link :to="{name:'RigisterTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe601;</i><span>项目登记</span>
                </router-link> 
                <router-link :to="{name:'InvestigationTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe637;</i><span>现场勘查</span>
                </router-link> 
                <router-link :to="{name:'EvaluationTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe60c;</i><span>预评估单</span>
                </router-link> 
                <router-link :to="{name:'FormalTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe607;</i><span>正式评估单</span>
                </router-link> 
                <router-link :to="{name:'HouseholdTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe65c;</i><span>分户报告</span>
                </router-link> 
                <router-link :to="{name:'RiskTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe636;</i><span>风险表</span>
                </router-link> 
                <router-link :to="{name:'SecondaryTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe623;</i><span>报告二次盖章</span>
                </router-link> 
                <router-link :to="{name:'ArchiveTbl'}" tag="li" exact>
                    <i class="iconfont">&#xe6bf;</i><span>归档</span>
                </router-link> 
            </ul>
        </div>
    </div>
    <div class="g-main">
        <div class="g-cont">
            <Modal
            v-model="val"
            title="说明"
            @on-ok="modal2=true"
            >
                <p> 北京华信房地产评估有限公司（以下简称公司）股东和员工在以公司名义承揽、承接实施及参与项目工作过程中，应严格遵循《中华人民共和国资产评估法》及行业主管部要求（规章、制度、技术规范）和公司规定，不得发生以下行为：</p>

                <p>（一）私自接受委托从事业务、收取费用；</p>

                <p>（二）同时在两个以上评估机构从事业务；</p>

                <p>（三）采用欺骗、利诱、胁迫，或者贬损、诋毁其他评估专业人员等不正当手段招揽业务；</p>

                <p>（四）允许他人以本人名义从事业务，或者冒用他人名义从事业务；</p>

                <p>（五）签署本人未承办业务的评估报告；</p>

                <p>（六）索要、收受或者变相索要、收受合同约定以外的酬金、财务，或者谋取其他不正当利益；</p>

                <p>（七）签署虚假评估报告或者有重大遗漏的评估报告；</p>

                <p>（八）利用开展业务之便，谋取不正当利益;</p>

                <p>（九）以恶性压价、支付回扣、虚假宣传，或者贬损、诋毁其他评估机构等不正当手段招揽业务;</p>

                <p>（十）受理与自身有利害关系的业务;</p>

                <p>（十一）分别接受利益冲突双方的委托，对同一评估对象进行评估;</p>

                <p>（十二）未按规定保存评估档案;</p>

                <p>（十三）未按照《资产评估法》及公司《评估业务流程及风险控制规范》规定进行评估工作；</p>

                <p>（十四）违反法律、行政法规的其他行为。</p>

                <p>股东除上述责任外，还应对下述条款特别遵守：</p>

                <p>（一）允许其他机构以本机构名义开展业务，或者冒用其他机构名义开展业务;</p>

                <p>（二）聘用或者指定不符合规定的人员从事评估业务；</p>

                <p>（三）对员工疏于管理，造成不良后果的；</p>

                <p>当发生上述行为，无论是否受到行政或刑事处罚，同意按照公司（北京华信房地产评估有限公司《关于公司员工责任区分及赔偿的规定》）承担处罚责任。</p>

                <p>公司设立的分公司、办事处或分部等遵照上述规定执行。</p>
            </Modal>
            <router-view>

            </router-view>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters} from 'vuex'
export default {
    data(){
        return{
            modal2:false
        }
    },
    computed:{
        val:{
            get:function(){
                return this.$store.getters.booleanVal
            },
            set:function(){
                this.$store.dispatch('setModal1')
            }
        }
    }
};
</script>

