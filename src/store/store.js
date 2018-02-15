import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
    modal1:false,
    isLogin:0
}

const mutations={
    setModal1:function(state){
        state.modal1=!state.modal1
    },
    setLogin:function(state,data){
        state.isLogin=data;
    }
}

const actions={
    setModal1:({commit})=>commit('setModal1'),
    setLogin:({commit},data)=>commit('setLogin',data)
}

const getters={
    booleanVal:state=>state.modal1
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})