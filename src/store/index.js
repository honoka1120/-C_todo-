import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: [{
      date:"dateメソッド",
      title:"todoリスト作成",
      content:"aaaaaaa",
      limit:"tomorrow",
      progress:"5%",
      memo:"頑張る",
    },
  ],
  },
  mutations: {
    deleteTodo(state,index){
      state.todolist.splice(index,1)
    }
  },
  actions: {
    deleteTodo({commit},index){
      //引数にv-forで回して入れたやつをとる
      commit('deleteTodo',index)
    }
  },
  modules: {
  }
})
