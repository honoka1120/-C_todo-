import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser : null,

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
    setLoginUser(state,user){
      state.loginUser = user
    },
    deleteLoginUser(state){
      state.loginUser = null
    },

    deleteTodo(state,index){
      state.todolist.splice(index,1)
    }
  },
  actions: {
    setLoginUser({commit},user){
      commit('setLoginUser',user)
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    // ログアウト
    logout(){
      firebase.auth().signOut()
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },

    deleteTodo({commit},index){
      //引数にv-forで回して入れたやつをとる
      commit('deleteTodo',index)
    }
  },
  modules: {
  }
})
