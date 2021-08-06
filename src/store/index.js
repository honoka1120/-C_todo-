import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser : null,
    todoList: [],
    todo:{},
  },
  mutations: {
    setLoginUser(state,user){
      state.loginUser = user
    },
    deleteLoginUser(state){
      state.loginUser = null
    },

    deleteTodo(state,index){
      state.todoList.splice(index,1)
    },

    addTodo(state) {
        const date1 = new Date();
        const date2 =
          date1.getFullYear() +
          "年" +
          (date1.getMonth() + 1) +
          "月" +
          date1.getDate() +
          "日";
      if(Object.keys(state.todo).length===0){
        alert('情報を入力してください')
      }else{
        state.todo.date=date2,
        state.todoList.push(state.todo),
        state.todo={}
      }
    },
    editTodo(state,todo){
      const index =state.todoList.findIndex((ele) => ele.todo = todo)
      state.todoList[index] = todo
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
    },
    addTodo({commit}){
      commit('addTodo')
    },
    editTodo({commit},todo){
      commit('editTodo',todo)
    }
  },
  getters:{
    userName:state => state.loginUser? state.loginUser.displayName:"",
    photoURL:state => state.loginUser? state.loginUser.photoURL:""
  },
  modules: {
  }
})
