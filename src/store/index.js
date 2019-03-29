import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        data:{
            token:'',
            permission:[],
            isLogin:false,
        },
    },
    getters: {
        // 获取全部state中全部data值
        Getters_GetData: (state)=>{
            return state.data
        },
    },
    mutations: {
        Mu_SetData: (state,data) => {   // 通过actions直接设置完整的data
            console.log(data,'Mu_SetData,data');
            state.data = data;
        },
        Mu_SetToken:(state,token)=>{      // 通过actions设置token
            console.log(token,'Mu_SetToken,token');
            state.data.token = token;
        },
        Mu_Permission:(state,permission)=>{    // 通过actions设置permission,权限
            console.log(permission,'Mu_Permission,permission');
            state.data.permission = permission;
        },
        Mu_IsLogin:(state,isLogin)=>{       // 通过actions设置isLogin
            console.log(isLogin,'Mu_IsLogin,isLogin');
            state.data.isLogin = isLogin;
        },
    },
    actions: {  //context默认相当于子组件中的this.$store
        Ac_SetData: (context,data) => {	            // 控制mutations设置完整的 data值
            context.commit('Mu_SetData',data)
        },
        Ac_SetToken: (context,token) =>{    // 控制mutations设置完整的 token值
            context.commit('Mu_SetToken',token)
        },
        Ac_Permission: (context,permission) => {    // 控制mutations设置完整的 permission值
            context.commit('Mu_Permission',permission)
        },
        Ac_IsLogin: (context,isLogin) => {      // 控制mutations设置完整的 isLogin值
            context.commit('Mu_IsLogin',isLogin)
        },
    },

});
export default store
