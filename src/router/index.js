import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Mid from '@/components/Mid'
import MenuBtn from '@/components/Menu'
import RigisterTbl from '@/components/RigisterTbl'
import InvestigationTbl from '@/components/InvestigationTbl'
import EvaluationTbl from '@/components/EvaluationTbl'
import FormalTbl from '@/components/FormalTbl'
import HouseholdTbl from '@/components/HouseholdTbl'
import RiskTbl from '@/components/RiskTbl'
import SecondaryTbl from '@/components/SecondaryTbl'
import ArchiveTbl from '@/components/ArchiveTbl'
import Tpl from '@/components/Tpl'
import Listing from '@/components/Listing'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/',
      redirect:'/main',
      name: 'Index',
      component: Index,
      children:[
        {
          name:'Mid',
          path:'main',
          meta:{auth:true},
          redirect:'/main/menu',
          component:Mid,
          children:[
            {name:'Menu',path:'/main/menu',component:MenuBtn},
            {name:'todo',path:'/main/todo',component:Listing},
            {name:'outgoing',path:'/main/outgoing',component:Listing},
            {name:'done',path:'/main/done',component:Listing},
            {name:'sent',path:'/main/sent',component:Listing}
          ]
        },
        {
          path:'/tpl',
          name:'Tpl',
          component:Tpl,
          redirect:'/tpl/RigisterTbl',
          children:[
            {name:'RigisterTbl',path:'/tpl/RigisterTbl',component:RigisterTbl},
            {name:'InvestigationTbl',path:'/tpl/InvestigationTbl',component:InvestigationTbl},
            {name:'EvaluationTbl',path:'/tpl/EvaluationTbl',component:EvaluationTbl},
            {name:'FormalTbl',path:'/tpl/FormalTbl',component:FormalTbl},
            {name:'HouseholdTbl',path:'/tpl/HouseholdTbl',component:HouseholdTbl},
            {name:'RiskTbl',path:'/tpl/RiskTbl',component:RiskTbl},
            {name:'SecondaryTbl',path:'/tpl/SecondaryTbl',component:SecondaryTbl},
            {name:'ArchiveTbl',path:'/tpl/ArchiveTbl',component:ArchiveTbl}
          ]
        },
        {
          path:'/detail',
          name:'Detail',
          component:Detail
        }
      ]
    }  
  ]
})

