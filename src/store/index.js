import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state : {
    age : 2
  },
  mutations : {
    mutaFun : (state)=>{
      return state.age - 1;
    }
  },
  actions : {
    actFun : (context)=>{	//context默认相当于子组件中的this.$store
      context.commit('mutations中某个方法名称','传递的参数')
    }
  },
  getters : {
    fun0 : (state)=>{
      return state.age + 1;
    }
  },
});
export default store