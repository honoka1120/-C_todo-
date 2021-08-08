import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: null,
    todoList: [],
    todo: {},
  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user
    },
    deleteLoginUser(state) {
      state.loginUser = null
    },

    deleteTodo(state, {id}) {
      const index=state.todoList.findIndex(todo=>todo.id===id)
      state.todoList.splice(index,1)
    },

    addTodo(state, { id, addtodo }) {
      addtodo.id = id;
      state.todoList.push(addtodo),
      state.todo = {}
    },
    editTodo(state,todo1){
      const index =state.todoList.findIndex((ele) => ele.id = todo1.id)
      state.todoList[index] = todo1
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    // ログアウト
    logout() {
      firebase.auth().signOut()
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser')
    },

    deleteTodo({ getters,commit }, {id}) {
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/todoList`).doc(id).delete().then(()=>{
          commit('deleteTodo',{id})
        })
      }
    },
    editTodo({getters,commit},todo1){
      if(getters.uid){
        firebase
        .firestore()
        .collection(`users/${getters.uid}/todoList`)
        .doc(todo1.id)
        .update(todo1)
        .then(() => {
          commit("editTodo",todo1)
        })
      }
    },

    addTodo({ getters, commit }) {
      const date1 = new Date();
      const date2 =
        date1.getFullYear() +
        "年" +
        (date1.getMonth() + 1) +
        "月" +
        date1.getDate() +
        "日";
      if (Object.keys(this.state.todo).length === 0) {
        alert('情報を入力してください')
      } else {
        this.state.todo.date = date2
        if (getters.uid) {
          firebase
            .firestore()
            .collection(`users/${getters.uid}/todoList`)
            .add(this.state.todo)
            .then((doc) => {
              commit("addTodo", { id: doc.id, addtodo: this.state.todo })
            })
        }
      }
    },
    // firebaseデータ取得
    fetchTodoList({ getters, commit }) {
      firebase.firestore().collection(`users/${getters.uid}/todoList`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addTodo', { id: doc.id, addtodo: doc.data() }))
      })
    },
  },
  getters:{
    userName:state => state.loginUser? state.loginUser.displayName:"",
    photoURL:state => state.loginUser? state.loginUser.photoURL:"",
    uid:(state) => (state.loginUser?state.loginUser.uid : null),
    getTodoById:(state) => (id) =>
    state.todoList.find((todo)=>todo.id === id),
  },
  modules: {
  }
})
