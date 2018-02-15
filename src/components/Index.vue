<template>
  <div class="g-wrap">
    <!-- 头部 -->
    <div class="g-header">
      <div class="u-logoBg">
        <img src="../assets/hxlogo.png" alt="">
        <div class="u-name">
          <p class="u-ch">北京华信房地产评估有限公司</p>
          <p class="u-eng">BEIJING HUAXIN REAL ESTATE APPRAISAL CO., LTD.</p>
        </div>
      </div>
      <div class="f-logout" @click="logout">
            <i class="iconfont">&#xe838;</i>
        </div>
    </div>
    <div class="f-home" @click="goHome"><i class="iconfont"> &#xe60b;</i></div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    goHome:function(){
      this.$router.push({name:'Index'})
    },
    logout:function(){
      this.$store.dispatch('setLogin',0);
      this.$router.push({name:'Login'})
    }
  }
}
</script>

