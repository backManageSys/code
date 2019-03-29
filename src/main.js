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


/*
let rou = router.options.routes.filter(function (val,index) {
    return index < 3;
});
console.log(rou,'rourourou');
router.options.routes = rou;
console.log(router,'最终routerrouter');
*/


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


