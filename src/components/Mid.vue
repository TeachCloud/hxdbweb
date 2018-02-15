<template>
<div class="g-content z-state1">
    <div class="g-sideMenu">
        <div class="g-sub">
            <ul class="m-sideMenu">
                <router-link :to="{name:'todo',params:{id:1}}" tag="li">
                    <i class="iconfont">&#xe64a;</i><span>待办协同</span>
                </router-link>
                <router-link :to="{name:'outgoing'}" tag="li">
                    <i class="iconfont">&#xe68d;</i><span>待发协同</span>
                </router-link>
                <router-link :to="{name:'done'}" tag="li">
                    <i class="iconfont">&#xe64b;</i><span>已办协同</span>
                </router-link>
                <router-link :to="{name:'sent'}" tag="li">
                    <i class="iconfont">&#xe67a;</i><span>已发协同</span>
                </router-link>
            </ul>
        </div>
    </div>
    <div class="g-main">       
            <router-view>

            </router-view>    
    </div>
</div>
</template>
<script>
export default {};
</script>

