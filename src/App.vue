<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import { sesSetState,sesGetState } from "@/tools/session";

    export default {
        name: 'App',
        created() {//缓存store.state的状态,防止刷新消失
            this.saveState();
        },
        methods : {
            saveState(){
                // 页面刷新前将state存储在session中
                window.addEventListener("beforeunload",(ev)=>{
                    let stateDate = this.$store.state.data;
                    sesSetState(stateDate);
                });
                // 把session中刷新前存储的state取出来还原
                document.addEventListener('DOMContentLoaded',()=> {
                    let stateData = sesGetState();
                    if (stateData!=null) {
                        this.$store.state.data = stateData
                    }
                },false);
            }
        }
    }
</script>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>
