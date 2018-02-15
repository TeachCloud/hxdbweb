<template>
  <div>
      <div class="hd-header">
		    <div class="hd-inside cf">
		      <a href="#" class="l">
		         <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzA3MDI0MzM0NTgxRTQxMUEwMkNDRTE0ODI4MDIxM0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ExNjM3RjVGQTE2MTFFN0I3MjVGRjk3RjI0NkYzOUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ExNjM3RjRGQTE2MTFFN0I3MjVGRjk3RjI0NkYzOUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkJENEFCQzQ4RjM2MTFFNEE5NTZGMTUwREY3NDEwQkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkJENEFCQzU4RjM2MTFFNEE5NTZGMTUwREY3NDEwQkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht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" alt="" />
		      </a>
		    
		    </div>
		</div>
		<div class="hd-lbg">
            <div class="hd-wrap">
                <div class="hd-lgbg">
                    <div class="log-main">
                        <div class="log-mbg"></div>
                        <div class="rel">
                            <h2 class="log-tit">欢迎登录</h2>
                            <div class="log-error">
                                <div class="log-errortip" v-show="err">
                                    <i class="iconfont" style="font-size:18px;">&#xe641;</i>密码输入有误。
                                </div>
                            </div>
                            <div class="log-wbg">
                                    <ul class="log-form">
                                        <li class="log-li log-line">
                                            <strong>账号</strong>
                                            <label for="user">
                                                <input placeholder="请输入手机号/邮箱" v-model="name" id="user" class="text" name="j_username" type="text" size="20">
                                            </label>
                                        </li>
                                        <li class="log-li log-line">
                                            <strong>密码</strong>
                                            <label for="pass">
                                                <input placeholder="请输入密码" v-model="psw" name="j_password" id="pass" class="text" type="password" size="20">
                                            </label>
                                        </li>
                                    </ul>
                            </div>
                            <div class="log-fw tr">
                                <a href="#">忘记密码</a>
                            </div>
                            <button class="log-btn" type="submit" @click="setLogin">登&nbsp;&nbsp;录</button>
                            
                        </div>
                    </div>
                </div>
            </div>
		</div>
  </div>
</template>
<script>
import {mapActions } from 'vuex'
export default {
  data(){
      return{
          name:'',
          psw:'',
          err:false
      }
  },
  methods:{
     setLogin:function(){
         if(this.name=='123' && this.psw==='123')
         {
             this.$store.dispatch('setLogin',100);
             this.$router.push({name:'Index'});
         }else{
             this.err=true;
             this.name=this.psw='';
         }
     }
  }
}
</script>

