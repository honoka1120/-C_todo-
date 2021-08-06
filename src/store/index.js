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
      state.todolist.splice(index,1)
      state.todoList.splice(index,1)
    },

    addTodo(state,{id,todo}){
      todo.id =id;
      state.todoList.push(todo);
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
    getDate({commit}){
      commit('getDate')
    },
    addTodo({getters,commit}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/todoList`)
        .add(this.state.todo).then((doc) => {
          commit('addTodo',{id:doc.id,todo:this.state.todo})
        })
      }
    },
    // firebaseデータ取得
    fetchTodoList ({getters,commit}){
      firebase.firestore().collection(`users/${getters.uid}/todoList`).get().then(snapshot =>{
        snapshot.forEach(doc => commit('addTodo',{id:doc.id,todoList: doc.data()}))
      })
    }
  },
  getters:{
    userName:state => state.loginUser? state.loginUser.displayName:"",
    photoURL:state => state.loginUser? state.loginUser.photoURL:"",
    uid:(state) => (state.loginUser?state.loginUser.uid : null),
    getAddressById:(state) => (id) =>
    state.todoList.find((todo)=>todo.id === id),
  },
  modules: {
  }
})
