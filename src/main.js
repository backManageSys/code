// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'//引入全部antd组件
import 'ant-design-vue/dist/antd.css'//引入antd的css样式
import axios from 'axios'
Vue.prototype.$axios = axios; // 特殊情况下可以使用this.$axios，一般使用自定义的

Vue.config.productionTip = false;

Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    beforeCreate(){
        // 提示信息的全局配置
        this.$message.config({
            top: `100px`,
            duration: 2,
            maxCount: 3,
        })
    },
    components: {App},
    template: '<App/>'
});

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//         //     next();
//         // }
//         // else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         // }
//     }
//     else {
//         next();
//     }
// });

